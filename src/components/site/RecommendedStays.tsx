import { useState } from "react";
import { StayCard } from "./StayCard";
import { stays } from "@/data/stays";

const tabs = ["전체", "호텔·리조트", "모텔", "펜션", "풀빌라"] as const;

export function RecommendedStays() {
  const [active, setActive] = useState<(typeof tabs)[number]>("전체");

  return (
    <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
      <div className="mb-6 flex items-end justify-between">
        <div>
          <h2 className="text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl">
            오늘의 추천 숙소
          </h2>
          <p className="mt-1 text-sm text-muted-foreground">
            지금 가장 인기 있는 숙소를 만나보세요
          </p>
        </div>
        <button
          type="button"
          className="hidden text-sm font-semibold text-primary hover:underline sm:inline"
        >
          전체보기 →
        </button>
      </div>

      <div className="no-scrollbar mb-6 flex gap-2 overflow-x-auto">
        {tabs.map((t) => (
          <button
            key={t}
            type="button"
            onClick={() => setActive(t)}
            className={`whitespace-nowrap rounded-full border px-4 py-2 text-sm font-semibold transition ${
              active === t
                ? "border-primary bg-primary text-primary-foreground"
                : "border-border bg-background text-foreground hover:border-primary hover:text-primary"
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      {/* Mobile: paged horizontal swipe, 1 large card per page */}
      <div className="md:hidden">
        <div className="no-scrollbar -mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-2">
          {stays.map((s, i) => (
            <div
              key={`${s.name}-${i}`}
              className="w-[78%] flex-none snap-center sm:w-[60%]"
            >
              <StayCard stay={s} />
            </div>
          ))}
        </div>
      </div>

      {/* Tablet & desktop: grid */}
      <div className="hidden gap-4 md:grid md:grid-cols-3 lg:grid-cols-4 lg:gap-6">
        {stays.map((s, i) => (
          <StayCard key={`${s.name}-${i}`} stay={s} />
        ))}
      </div>
    </section>
  );
}
