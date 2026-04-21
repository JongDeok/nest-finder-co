import { Calendar, MapPin, Search, Users } from "lucide-react";
import heroImg from "@/assets/hero-spa.jpg";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <img
          src={heroImg}
          alt="아늑한 조명의 프리미엄 마사지샵 룸"
          width={1920}
          height={1024}
          className="h-full w-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{ background: "var(--gradient-hero)" }}
          aria-hidden
        />
      </div>

      <div className="mx-auto flex max-w-7xl flex-col items-center px-4 pb-10 pt-20 sm:px-6 md:pb-20 md:pt-32">
        <div className="text-center">
          <p className="text-sm font-semibold tracking-wide text-white/90 sm:text-base">
            오늘의 피로, 지금 바로 풀자
          </p>
          <h1 className="mt-3 text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl">
            지금, 어디서 받을까?
          </h1>
          <p className="mt-3 text-base text-white/85 sm:text-lg">
            전국 마사지·스웨디시·타이·스포츠 마사지 최저가 예약
          </p>
        </div>

        {/* Search box */}
        <div className="mt-10 w-full max-w-4xl">
          <div className="grid grid-cols-1 gap-2 rounded-2xl bg-background p-2 shadow-pop sm:grid-cols-12 sm:p-3">
            <label className="sm:col-span-5 flex items-center gap-3 rounded-xl px-4 py-3 transition hover:bg-muted">
              <MapPin className="h-5 w-5 text-primary" />
              <div className="flex-1">
                <div className="text-xs font-semibold text-muted-foreground">지역</div>
                <input
                  type="text"
                  placeholder="지역, 지하철역, 샵 이름 검색"
                  className="w-full bg-transparent text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"
                />
              </div>
            </label>
            <label className="sm:col-span-4 flex items-center gap-3 rounded-xl px-4 py-3 transition hover:bg-muted">
              <Calendar className="h-5 w-5 text-primary" />
              <div className="flex-1">
                <div className="text-xs font-semibold text-muted-foreground">방문일</div>
                <div className="text-sm text-foreground">오늘 · 4월 21일</div>
              </div>
            </label>
            <label className="sm:col-span-2 flex items-center gap-3 rounded-xl px-4 py-3 transition hover:bg-muted">
              <Users className="h-5 w-5 text-primary" />
              <div className="flex-1">
                <div className="text-xs font-semibold text-muted-foreground">인원</div>
                <div className="text-sm text-foreground">성인 1명</div>
              </div>
            </label>
            <button
              type="button"
              className="sm:col-span-1 inline-flex items-center justify-center rounded-xl bg-gradient-primary px-4 py-3 text-sm font-bold text-primary-foreground shadow-elevated transition hover:opacity-95 active:scale-[0.98]"
            >
              <Search className="h-5 w-5" />
              <span className="ml-2 sm:hidden">검색</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
