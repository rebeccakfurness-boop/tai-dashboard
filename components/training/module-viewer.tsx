"use client";

import { useState } from "react";
import { ArrowLeft, ArrowRight, Check, Circle, CircleCheck } from "lucide-react";
import { LessonBlocks } from "./lesson-blocks";
import { cn } from "@/lib/utils";
import type { TrainingLesson } from "@/content/types";

export function TrainingModuleViewer({ lessons }: { lessons: TrainingLesson[] }) {
  const [active, setActive] = useState(() => {
    if (typeof window === "undefined") return 0;
    const hash = window.location.hash.replace("#", "");
    const index = lessons.findIndex((l) => l.id === hash);
    return index >= 0 ? index : 0;
  });
  const [completed, setCompleted] = useState<Set<number>>(new Set());

  const lesson = lessons[active];
  const isLast = active === lessons.length - 1;

  function goTo(index: number) {
    setActive(index);
    history.replaceState(null, "", `#${lessons[index].id}`);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function next() {
    setCompleted((prev) => new Set(prev).add(active));
    if (!isLast) goTo(active + 1);
  }

  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-[260px_1fr]">
      <nav className="lg:sticky lg:top-24 lg:self-start">
        <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-muted">
          {completed.size} of {lessons.length} done
        </p>
        <div className="mb-3 h-1.5 w-full overflow-hidden rounded-full bg-border/60">
          <div
            className="h-full rounded-full bg-brand-500 transition-all"
            style={{ width: `${(completed.size / lessons.length) * 100}%` }}
          />
        </div>
        <ol className="space-y-0.5">
          {lessons.map((l, i) => (
            <li key={l.id}>
              <button
                onClick={() => goTo(i)}
                className={cn(
                  "focus-ring flex w-full items-start gap-2.5 rounded-lg px-2.5 py-2 text-left text-sm transition-colors",
                  i === active
                    ? "bg-brand-100 text-brand-700 font-semibold"
                    : "text-foreground/80 hover:bg-border/50",
                )}
              >
                {completed.has(i) ? (
                  <CircleCheck className="mt-0.5 size-4 shrink-0 text-emerald-600" />
                ) : (
                  <Circle className="mt-0.5 size-4 shrink-0 text-muted" />
                )}
                <span>{l.title}</span>
              </button>
            </li>
          ))}
        </ol>
      </nav>

      <div>
        <section id={lesson.id} className="scroll-mt-24 rounded-2xl border border-border bg-surface p-6 shadow-sm sm:p-7">
          <p className="text-xs font-semibold uppercase tracking-wide text-brand-600">
            Lesson {active + 1} of {lessons.length}
          </p>
          <h2 className="mt-1 text-xl font-bold text-foreground sm:text-2xl">{lesson.title}</h2>
          <p className="mt-1.5 text-sm text-muted">{lesson.summary}</p>

          <div className="mt-6">
            <LessonBlocks blocks={lesson.body} />
          </div>
        </section>

        <div className="mt-5 flex items-center justify-between gap-3">
          <button
            onClick={() => goTo(Math.max(0, active - 1))}
            disabled={active === 0}
            className="focus-ring inline-flex items-center gap-1.5 rounded-lg border border-border px-4 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-border/50 disabled:pointer-events-none disabled:opacity-40"
          >
            <ArrowLeft className="size-4" />
            Back
          </button>

          {isLast ? (
            <button
              onClick={() => setCompleted((prev) => new Set(prev).add(active))}
              className="focus-ring inline-flex items-center gap-1.5 rounded-lg bg-brand-500 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-brand-600"
            >
              <Check className="size-4" />
              Mark complete
            </button>
          ) : (
            <button
              onClick={next}
              className="focus-ring inline-flex items-center gap-1.5 rounded-lg bg-brand-500 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-brand-600"
            >
              Next
              <ArrowRight className="size-4" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
