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
      { title: "힐링타임 — 지금, 어디서 받을까? 전국 마사지샵 최저가 예약" },
      {
        name: "description",
        content:
          "스웨디시, 타이마사지, 아로마, 스포츠, 1인샵까지. 오늘의 특가와 인기 샵을 한눈에. 힐링타임에서 합리적인 가격으로 예약하세요.",
      },
      { property: "og:title", content: "힐링타임 — 지금, 어디서 받을까?" },
      {
        property: "og:description",
        content: "전국 스웨디시·타이·아로마·스포츠 마사지 최저가 예약, 오늘의 특가와 인기 지역.",
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
