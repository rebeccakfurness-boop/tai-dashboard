"use client";

import { useState } from "react";
import { CheckCircle2, Download, Mail, RotateCcw } from "lucide-react";
import { Card } from "@/components/ui/card";
import { CopyButton } from "@/components/copy-button";
import { InstructionsPanel } from "./instructions-panel";
import { AttachmentReminder } from "./attachment-reminder";
import { RowTable } from "./row-table";
import type { RowState, MatchStatus } from "./types";
import { parseBrokerList } from "@/lib/broker-registration/parser";
import { buildConfirmationEmail, buildMailtoUrl } from "@/lib/broker-registration/email-template";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type SaveResult = {
  batchId: number | null;
  insertedBrokers: { id: number; firstName: string; lastName: string; email: string; phone: string | null }[];
  skipped: string[];
};

function isRowValid(row: RowState) {
  return row.firstName.trim().length > 0 && EMAIL_RE.test(row.email.trim());
}

export function NewRegistrationForm() {
  const [brokingCompany, setBrokingCompany] = useState("");
  const [requesterName, setRequesterName] = useState("");
  const [requesterEmail, setRequesterEmail] = useState("");
  const [pastedText, setPastedText] = useState("");

  const [stage, setStage] = useState<"input" | "review" | "done">("input");
  const [rows, setRows] = useState<RowState[]>([]);
  const [dupCheckError, setDupCheckError] = useState<string | null>(null);

  const [saving, setSaving] = useState(false);
  const [saveError, setSaveError] = useState<string | null>(null);
  const [saveResult, setSaveResult] = useState<SaveResult | null>(null);
  const [emailSubject, setEmailSubject] = useState("");
  const [emailBody, setEmailBody] = useState("");

  async function runDuplicateCheck(rowsToCheck: RowState[]) {
    const emails = rowsToCheck.map((r) => r.email.trim()).filter(Boolean);
    if (emails.length === 0) return;

    setRows((prev) =>
      prev.map((r) => (r.email.trim() ? { ...r, matchStatus: "checking" as MatchStatus } : r)),
    );

    try {
      const res = await fetch("/api/broker-registration/check-duplicates", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ emails }),
      });
      const data = await res.json();
      if (!res.ok) {
        setDupCheckError(data.error || "Couldn't check for duplicates.");
        setRows((prev) =>
          prev.map((r) => (r.email.trim() ? { ...r, matchStatus: "unchecked" as MatchStatus } : r)),
        );
        return;
      }
      setDupCheckError(null);
      const resultMap = new Map<string, { status: MatchStatus; existingStatus?: string }>(
        data.results.map((r: { email: string; status: MatchStatus; existingStatus?: string }) => [
          r.email,
          r,
        ]),
      );
      setRows((prev) =>
        prev.map((r) => {
          const email = r.email.trim().toLowerCase();
          if (!email) return r;
          const match = resultMap.get(email);
          if (!match) return { ...r, matchStatus: "unchecked" as MatchStatus };
          return { ...r, matchStatus: match.status, existingStatus: match.existingStatus };
        }),
      );
    } catch {
      setDupCheckError(
        "Couldn't reach the server to check for duplicates — check your connection and try again.",
      );
      setRows((prev) =>
        prev.map((r) => (r.email.trim() ? { ...r, matchStatus: "unchecked" as MatchStatus } : r)),
      );
    }
  }

  function handleReadList() {
    const parsed = parseBrokerList(pastedText);
    const newRows: RowState[] = parsed.map((p) => ({
      ...p,
      section: p.needsCheck ? "check" : "ok",
      matchStatus: "unchecked",
    }));
    setRows(newRows);
    setSaveError(null);
    setStage("review");
    void runDuplicateCheck(newRows);
  }

  function updateRow(id: string, patch: Partial<RowState>) {
    setRows((prev) => prev.map((r) => (r.id === id ? { ...r, ...patch } : r)));
  }

  function removeRow(id: string) {
    setRows((prev) => prev.filter((r) => r.id !== id));
  }

  function handleBlurEmail(id: string) {
    const row = rows.find((r) => r.id === id);
    if (!row || !row.email.trim()) return;
    void runDuplicateCheck([row]);
  }

  function resetAll() {
    setBrokingCompany("");
    setRequesterName("");
    setRequesterEmail("");
    setPastedText("");
    setRows([]);
    setStage("input");
    setSaveError(null);
    setSaveResult(null);
    setDupCheckError(null);
  }

  const okRows = rows.filter((r) => r.section === "ok");
  const checkRows = rows.filter((r) => r.section === "check");
  const readyCount = rows.filter((r) => isRowValid(r) && r.matchStatus === "new").length;

  async function handleConfirm() {
    if (!brokingCompany.trim() || !requesterName.trim() || !requesterEmail.trim()) {
      setSaveError("Fill in the broking company, requester name and requester email first.");
      return;
    }
    const candidates = rows.filter((r) => isRowValid(r) && r.matchStatus === "new");
    if (candidates.length === 0) {
      setSaveError("Nothing new to add — every row is either incomplete or already registered.");
      return;
    }

    setSaving(true);
    setSaveError(null);
    try {
      const res = await fetch("/api/broker-registration/save", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          brokingCompany: brokingCompany.trim(),
          requesterName: requesterName.trim(),
          requesterEmail: requesterEmail.trim(),
          newBrokers: candidates.map((r) => ({
            firstName: r.firstName.trim(),
            lastName: r.lastName.trim(),
            email: r.email.trim(),
            phone: r.phone.trim(),
          })),
        }),
      });
      const data = await res.json();
      if (!res.ok) {
        setSaveError(data.error || "Something went wrong saving this batch — try again.");
        setSaving(false);
        return;
      }
      setSaveResult(data);
      const { subject, body } = buildConfirmationEmail({
        brokingCompany: brokingCompany.trim(),
        requesterName: requesterName.trim(),
        newBrokers: data.insertedBrokers.map(
          (b: { firstName: string; lastName: string; email: string; phone: string | null }) => ({
            firstName: b.firstName,
            lastName: b.lastName,
            email: b.email,
            phone: b.phone ?? "",
          }),
        ),
      });
      setEmailSubject(subject);
      setEmailBody(body);
      setStage("done");
    } catch {
      setSaveError("Couldn't reach the server — check your connection and try again.");
    } finally {
      setSaving(false);
    }
  }

  if (stage === "done" && saveResult) {
    const mailtoHref = buildMailtoUrl({
      to: requesterEmail,
      subject: emailSubject,
      body: emailBody,
    });
    const exportHref = `/api/broker-registration/export${
      saveResult.batchId ? `?batchId=${saveResult.batchId}` : ""
    }`;

    return (
      <div className="space-y-6">
        <Card className="border-emerald-300 bg-emerald-500/5 p-5">
          <div className="flex items-start gap-3">
            <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-emerald-600 dark:text-emerald-400" />
            <div>
              <h2 className="font-bold text-foreground">
                Added {saveResult.insertedBrokers.length} new broker
                {saveResult.insertedBrokers.length === 1 ? "" : "s"} for {brokingCompany}
              </h2>
              {saveResult.skipped.length > 0 && (
                <p className="mt-1 text-sm text-muted">
                  Skipped {saveResult.skipped.length} — already registered by someone else in the
                  meantime: {saveResult.skipped.join(", ")}
                </p>
              )}
            </div>
          </div>
        </Card>

        <Card className="p-5">
          <h3 className="mb-3 font-bold text-foreground">Confirmation email</h3>
          <div className="space-y-3">
            <input
              value={emailSubject}
              onChange={(e) => setEmailSubject(e.target.value)}
              className="w-full rounded-lg border border-border-strong bg-background px-3 py-2 text-sm font-medium text-foreground outline-none focus:border-brand-400"
            />
            <textarea
              value={emailBody}
              onChange={(e) => setEmailBody(e.target.value)}
              rows={14}
              className="w-full rounded-lg border border-border-strong bg-background px-3 py-2 font-mono text-[13px] leading-relaxed text-foreground outline-none focus:border-brand-400"
            />
          </div>

          <div className="mt-4">
            <AttachmentReminder />
          </div>

          <div className="mt-4 flex flex-wrap items-center gap-2">
            <a
              href={mailtoHref}
              className="focus-ring inline-flex items-center gap-1.5 rounded-lg bg-brand-500 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-brand-600"
            >
              <Mail className="size-4" />
              Open email
            </a>
            <CopyButton value={`Subject: ${emailSubject}\n\n${emailBody}`} label="the email" />
            <span className="text-xs text-muted">
              If &ldquo;Open email&rdquo; doesn&apos;t work in your browser, use Copy and paste it
              into a new email yourself.
            </span>
          </div>
        </Card>

        <div className="flex flex-wrap items-center gap-3">
          <a
            href={exportHref}
            className="focus-ring inline-flex items-center gap-1.5 rounded-lg border border-border-strong px-4 py-2 text-sm font-semibold text-foreground transition-colors hover:border-brand-400 hover:text-brand-600"
          >
            <Download className="size-4" />
            Download updated spreadsheet
          </a>
          <button
            onClick={resetAll}
            className="focus-ring inline-flex items-center gap-1.5 rounded-lg px-4 py-2 text-sm font-semibold text-muted transition-colors hover:text-brand-600"
          >
            <RotateCcw className="size-4" />
            Start another registration
          </button>
        </div>
      </div>
    );
  }

  return (
    <div>
      <InstructionsPanel />

      <Card className="p-5">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          <div>
            <label className="mb-1 block text-xs font-semibold text-muted">
              Broking company name
            </label>
            <input
              value={brokingCompany}
              onChange={(e) => setBrokingCompany(e.target.value)}
              placeholder="e.g. Wealthpoint Brokers"
              className="w-full rounded-lg border border-border-strong bg-background px-3 py-2 text-sm text-foreground outline-none focus:border-brand-400"
            />
          </div>
          <div>
            <label className="mb-1 block text-xs font-semibold text-muted">Requester name</label>
            <input
              value={requesterName}
              onChange={(e) => setRequesterName(e.target.value)}
              placeholder="Who emailed this request"
              className="w-full rounded-lg border border-border-strong bg-background px-3 py-2 text-sm text-foreground outline-none focus:border-brand-400"
            />
          </div>
          <div>
            <label className="mb-1 block text-xs font-semibold text-muted">Requester email</label>
            <input
              type="email"
              value={requesterEmail}
              onChange={(e) => setRequesterEmail(e.target.value)}
              placeholder="Where the confirmation goes"
              className="w-full rounded-lg border border-border-strong bg-background px-3 py-2 text-sm text-foreground outline-none focus:border-brand-400"
            />
          </div>
        </div>

        <div className="mt-4">
          <label className="mb-1 block text-xs font-semibold text-muted">
            Paste the broker&apos;s request
          </label>
          <textarea
            value={pastedText}
            onChange={(e) => setPastedText(e.target.value)}
            rows={8}
            placeholder={"e.g.\nJane Smith  jane@wealthpoint.co.nz  0800 123 480\n[John Doe](mailto:john@wealthpoint.co.nz) – 09 555 1234"}
            className="w-full rounded-lg border border-border-strong bg-background px-3 py-2 font-mono text-[13px] leading-relaxed text-foreground outline-none focus:border-brand-400"
          />
        </div>

        <button
          onClick={handleReadList}
          disabled={!pastedText.trim()}
          className="focus-ring mt-4 rounded-lg bg-brand-500 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-brand-600 disabled:cursor-not-allowed disabled:opacity-40"
        >
          Read the list
        </button>
      </Card>

      {stage === "review" && (
        <div className="mt-6 space-y-6">
          {dupCheckError && (
            <p className="rounded-lg border border-accent-coral/40 bg-accent-coral/10 px-4 py-2.5 text-sm text-accent-coral-strong">
              {dupCheckError}
            </p>
          )}

          <div>
            <h3 className="mb-3 font-bold text-foreground">
              Ready to review <span className="text-sm font-normal text-muted">({okRows.length})</span>
            </h3>
            <RowTable
              rows={okRows}
              onChange={updateRow}
              onRemove={removeRow}
              onBlurEmail={handleBlurEmail}
              emptyLabel="Nothing here yet — paste a list above and click Read the list."
            />
          </div>

          {checkRows.length > 0 && (
            <div>
              <h3 className="mb-3 font-bold text-accent-coral-strong">
                Needs a quick check{" "}
                <span className="text-sm font-normal text-muted">({checkRows.length})</span>
              </h3>
              <p className="mb-3 text-sm text-muted">
                These lines didn&apos;t come through cleanly — fix the details inline, or remove
                the row if it isn&apos;t actually a person.
              </p>
              <RowTable
                rows={checkRows}
                onChange={updateRow}
                onRemove={removeRow}
                onBlurEmail={handleBlurEmail}
                emptyLabel=""
              />
            </div>
          )}

          {saveError && (
            <p className="rounded-lg border border-red-300/50 bg-red-500/5 px-4 py-2.5 text-sm text-red-600 dark:text-red-400">
              {saveError}
            </p>
          )}

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={handleConfirm}
              disabled={saving || readyCount === 0}
              className="focus-ring rounded-lg bg-brand-500 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-600 disabled:cursor-not-allowed disabled:opacity-40"
            >
              {saving
                ? "Saving…"
                : `Confirm & save${readyCount > 0 ? ` (${readyCount} new)` : ""}`}
            </button>
            <button
              onClick={resetAll}
              className="focus-ring text-sm font-semibold text-muted hover:text-brand-600"
            >
              Start over
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
