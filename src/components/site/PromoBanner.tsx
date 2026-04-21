import { ArrowRight, Sparkles } from "lucide-react";

const promos = [
  {
    tag: "오늘의 특가",
    title: "오늘만 인기샵 최대 50% 할인",
    desc: "선착순 한정, 매일 자정 오픈",
    bg: "linear-gradient(135deg, oklch(0.66 0.24 5), oklch(0.74 0.21 30))",
    fg: "white",
  },
  {
    tag: "쿠폰팩",
    title: "신규 회원 3만원 쿠폰팩",
    desc: "지금 가입하고 첫 예약에 사용",
    bg: "linear-gradient(135deg, oklch(0.94 0.05 220), oklch(0.92 0.08 250))",
    fg: "oklch(0.2 0.02 320)",
  },
  {
    tag: "커플 할인",
    title: "커플 코스 1+1 이벤트",
    desc: "기념일·데이트 코스 추천",
    bg: "linear-gradient(135deg, oklch(0.93 0.07 80), oklch(0.91 0.09 50))",
    fg: "oklch(0.2 0.02 320)",
  },
];

export function PromoBanner() {
  return (
    <section className="pb-4 md:mx-auto md:max-w-7xl md:px-6">
      <div className="no-scrollbar flex snap-x snap-mandatory gap-3 overflow-x-auto px-4 pb-1 md:grid md:grid-cols-3 md:gap-4 md:overflow-visible md:px-0">
        {promos.map((p) => (
          <button
            key={p.title}
            type="button"
            className="group relative w-[85%] flex-none snap-center overflow-hidden rounded-2xl p-6 text-left shadow-card transition hover:-translate-y-1 hover:shadow-pop md:w-auto"
            style={{ background: p.bg, color: p.fg }}
          >
            <div className="flex items-center gap-1.5 text-xs font-bold opacity-90">
              <Sparkles className="h-3.5 w-3.5" />
              {p.tag}
            </div>
            <h3 className="mt-3 text-lg font-extrabold leading-snug">{p.title}</h3>
            <p className="mt-1 text-sm opacity-80">{p.desc}</p>
            <div className="mt-6 inline-flex items-center gap-1 text-sm font-semibold">
              바로가기
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </div>
          </button>
        ))}
      </div>
    </section>
  );
}
