import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { Categories } from "@/components/site/Categories";
import { PromoBanner } from "@/components/site/PromoBanner";
import { RecommendedStays } from "@/components/site/RecommendedStays";
import { Destinations } from "@/components/site/Destinations";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "여기어때 — 지금, 여기 어때? 국내·해외 숙박 최저가 예약" },
      {
        name: "description",
        content:
          "호텔, 모텔, 펜션, 풀빌라까지. 오늘의 특가와 인기 여행지를 한눈에. 여기어때에서 합리적인 가격으로 예약하세요.",
      },
      { property: "og:title", content: "여기어때 — 지금, 여기 어때?" },
      {
        property: "og:description",
        content: "국내 호텔·모텔·펜션·풀빌라 최저가 예약, 오늘의 특가와 인기 여행지.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Categories />
        <PromoBanner />
        <RecommendedStays />
        <Destinations />
      </main>
      <Footer />
    </div>
  );
}
