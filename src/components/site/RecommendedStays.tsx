import { useState } from "react";
import { StayCard, type Stay } from "./StayCard";
import hotel from "@/assets/stay-hotel.jpg";
import motel from "@/assets/stay-motel.jpg";
import pension from "@/assets/stay-pension.jpg";
import pool from "@/assets/stay-pool.jpg";

const tabs = ["전체", "호텔·리조트", "모텔", "펜션", "풀빌라"] as const;

const stays: Stay[] = [
  {
    image: hotel,
    badge: "특가",
    type: "5성급 호텔",
    name: "그랜드 시그니엘 서울",
    location: "서울 송파",
    rating: 4.9,
    reviews: 2841,
    price: 289000,
    originalPrice: 420000,
  },
  {
    image: motel,
    badge: "HOT",
    type: "프리미엄 모텔",
    name: "더 스카이 모텔 강남",
    location: "서울 강남",
    rating: 4.7,
    reviews: 1523,
    price: 79000,
    originalPrice: 120000,
  },
  {
    image: pension,
    type: "독채 펜션",
    name: "가평 별빛정원 풀빌라펜션",
    location: "경기 가평",
    rating: 4.8,
    reviews: 942,
    price: 189000,
    originalPrice: 250000,
  },
  {
    image: pool,
    badge: "신규",
    type: "프라이빗 풀빌라",
    name: "제주 오션뷰 풀빌라",
    location: "제주 서귀포",
    rating: 4.9,
    reviews: 612,
    price: 359000,
    originalPrice: 480000,
  },
  {
    image: hotel,
    type: "비즈니스 호텔",
    name: "롯데시티호텔 명동",
    location: "서울 중구",
    rating: 4.6,
    reviews: 3210,
    price: 159000,
    originalPrice: 210000,
  },
  {
    image: motel,
    badge: "특가",
    type: "디자인 모텔",
    name: "홍대 무드인 호텔",
    location: "서울 마포",
    rating: 4.5,
    reviews: 1820,
    price: 69000,
    originalPrice: 95000,
  },
  {
    image: pool,
    type: "오션뷰 리조트",
    name: "파라다이스 호텔 부산",
    location: "부산 해운대",
    rating: 4.8,
    reviews: 2103,
    price: 245000,
    originalPrice: 320000,
  },
  {
    image: pension,
    badge: "HOT",
    type: "감성 펜션",
    name: "양양 서피비치 하우스",
    location: "강원 양양",
    rating: 4.7,
    reviews: 580,
    price: 145000,
    originalPrice: 195000,
  },
];

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

      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 lg:gap-6">
        {stays.map((s, i) => (
          <StayCard key={`${s.name}-${i}`} stay={s} />
        ))}
      </div>
    </section>
  );
}
