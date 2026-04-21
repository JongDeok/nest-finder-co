import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState } from "react";
import {
  ChevronLeft,
  Heart,
  Share2,
  Star,
  MapPin,
  Wifi,
  Car,
  Coffee,
  Waves,
  Dumbbell,
  Sparkles,
  Check,
  Calendar,
  ChevronRight,
} from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";
import { getStayById, type StayDetail, type Room, type Therapist } from "@/data/stays";
import therapistPlaceholder from "@/assets/therapist-placeholder.png";

export const Route = createFileRoute("/stay/$stayId")({
  loader: ({ params }) => {
    const stay = getStayById(params.stayId);
    if (!stay) throw notFound();
    return stay;
  },
  head: ({ loaderData }) => {
    const s = loaderData as StayDetail | undefined;
    if (!s) {
      return { meta: [{ title: "샵을 찾을 수 없습니다 — 힐링타임" }] };
    }
    const title = `${s.name} — 힐링타임`;
    const desc = `${s.location} · ${s.type} · ${s.price.toLocaleString()}원부터. ${s.description.slice(0, 90)}`;
    return {
      meta: [
        { title },
        { name: "description", content: desc },
        { property: "og:title", content: title },
        { property: "og:description", content: desc },
        { property: "og:image", content: s.image },
        { name: "twitter:image", content: s.image },
      ],
    };
  },
  notFoundComponent: () => (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-background px-4 text-center">
      <h1 className="text-3xl font-bold">샵을 찾을 수 없어요</h1>
      <p className="text-muted-foreground">요청하신 마사지샵이 존재하지 않거나 삭제되었습니다.</p>
      <Link to="/" className="text-sm font-semibold text-primary hover:underline">
        홈으로 돌아가기 →
      </Link>
    </div>
  ),
  component: StayDetailPage,
});

const amenityIcon: Record<string, React.ComponentType<{ className?: string }>> = {
  "무료 Wi-Fi": Wifi,
  "발렛 주차": Car,
  "주차 가능": Car,
  주차장: Car,
  샤워실: Waves,
  "노천 온천": Waves,
  사우나: Waves,
  "적외선 사우나": Waves,
  "야외 샤워실": Waves,
  핫스톤: Sparkles,
  허브볼: Sparkles,
  "웰컴 티": Coffee,
  "허브 티": Coffee,
  "웰컴 샴페인": Coffee,
  "조식 제공": Coffee,
  라운지: Coffee,
  "프리미엄 라운지": Coffee,
  "운동복 대여": Dumbbell,
};

function StayDetailPage() {
  const stay = Route.useLoaderData();
  const [activeImage, setActiveImage] = useState(0);
  const [liked, setLiked] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState(0);
  const [selectedTherapist, setSelectedTherapist] = useState<Therapist | null>(null);

  const registeredCount = stay.therapists.filter((t) => !!t.photo).length;

  const handleReserve = (room: Room) => {
    toast.success(`${room.name} 예약 요청이 접수되었습니다`, {
      description: `${stay.name} · ${room.price.toLocaleString()}원 / 1회`,
    });
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: stay.name,
          text: stay.description,
          url: window.location.href,
        });
      } catch {
        /* user cancelled */
      }
    } else {
      navigator.clipboard.writeText(window.location.href);
      toast.success("링크가 복사되었습니다");
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Toaster position="top-center" />

      <main className="mx-auto max-w-7xl px-4 pb-24 pt-4 sm:px-6">
        {/* Breadcrumb / back */}
        <div className="mb-4 flex items-center justify-between">
          <Link
            to="/"
            className="inline-flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-foreground"
          >
            <ChevronLeft className="h-4 w-4" />
            추천 마사지샵으로 돌아가기
          </Link>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handleShare}
              className="rounded-full border border-border bg-background p-2 transition hover:border-primary hover:text-primary"
              aria-label="공유"
            >
              <Share2 className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={() => setLiked((v) => !v)}
              className="rounded-full border border-border bg-background p-2 transition hover:border-primary"
              aria-label="찜하기"
            >
              <Heart
                className={`h-4 w-4 transition ${liked ? "fill-primary text-primary" : "text-foreground"}`}
              />
            </button>
          </div>
        </div>

        {/* Gallery */}
        <section className="grid gap-2 md:grid-cols-4 md:gap-3">
          <div className="relative md:col-span-3">
            <div className="aspect-[16/10] overflow-hidden rounded-2xl bg-muted">
              <img
                src={stay.images[activeImage]}
                alt={`${stay.name} 사진 ${activeImage + 1}`}
                className="h-full w-full object-cover"
              />
            </div>
            {stay.badge && (
              <span className="absolute left-4 top-4 rounded-full bg-primary px-3 py-1 text-xs font-bold text-primary-foreground shadow-card">
                {stay.badge}
              </span>
            )}
          </div>
          <div className="grid grid-cols-4 gap-2 md:grid-cols-1 md:gap-3">
            {stay.images.map((img, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setActiveImage(i)}
                className={`aspect-square overflow-hidden rounded-xl bg-muted transition md:aspect-[4/3] ${
                  i === activeImage
                    ? "ring-2 ring-primary ring-offset-2"
                    : "opacity-80 hover:opacity-100"
                }`}
              >
                <img
                  src={img}
                  alt={`썸네일 ${i + 1}`}
                  className="h-full w-full object-cover"
                />
              </button>
            ))}
          </div>
        </section>

        {/* Title & rating */}
        <section className="mt-6 border-b border-border pb-6">
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <span className="font-semibold text-primary">{stay.type}</span>
            <span>·</span>
            <span>{stay.location}</span>
          </div>
          <h1 className="mt-2 text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl">
            {stay.name}
          </h1>
          <div className="mt-3 flex flex-wrap items-center gap-4 text-sm">
            <div className="flex items-center gap-1">
              <Star className="h-4 w-4 fill-warning text-warning" />
              <span className="font-bold text-foreground">{stay.rating.toFixed(1)}</span>
              <span className="text-muted-foreground">
                · 리뷰 {stay.reviews.toLocaleString()}
              </span>
            </div>
            <div className="flex items-center gap-1 text-muted-foreground">
              <MapPin className="h-4 w-4" />
              {stay.address}
            </div>
          </div>
        </section>

        <div className="grid gap-10 py-8 lg:grid-cols-[1fr_360px]">
          <div>
            <Tabs defaultValue="info" className="w-full">
              <TabsList className="sticky top-16 z-30 grid h-12 w-full grid-cols-3 rounded-xl bg-secondary p-1">
                <TabsTrigger value="info" className="rounded-lg text-sm font-bold">
                  정보
                </TabsTrigger>
                <TabsTrigger value="therapists" className="rounded-lg text-sm font-bold">
                  관리사
                </TabsTrigger>
                <TabsTrigger value="reviews" className="rounded-lg text-sm font-bold">
                  리뷰
                </TabsTrigger>
              </TabsList>

              {/* TAB: 정보 */}
              <TabsContent value="info" className="mt-6 space-y-10">
                <section>
                  <h2 className="text-lg font-bold text-foreground">샵 소개</h2>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {stay.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-4 text-sm">
                    <div className="flex items-center gap-2 rounded-lg bg-secondary px-3 py-2">
                      <Calendar className="h-4 w-4 text-primary" />
                      <span className="font-semibold">영업 시작</span>
                      <span className="text-muted-foreground">{stay.checkIn}</span>
                    </div>
                    <div className="flex items-center gap-2 rounded-lg bg-secondary px-3 py-2">
                      <Calendar className="h-4 w-4 text-primary" />
                      <span className="font-semibold">영업 종료</span>
                      <span className="text-muted-foreground">{stay.checkOut}</span>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="text-lg font-bold text-foreground">편의시설</h2>
                  <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
                    {stay.amenities.map((a) => {
                      const Icon = amenityIcon[a] ?? Sparkles;
                      return (
                        <div
                          key={a}
                          className="flex items-center gap-2 rounded-xl border border-border bg-card px-3 py-2.5 text-sm"
                        >
                          <Icon className="h-4 w-4 text-primary" />
                          <span className="text-foreground">{a}</span>
                        </div>
                      );
                    })}
                  </div>
                </section>

                <section>
                  <h2 className="text-lg font-bold text-foreground">코스 선택</h2>
                  <div className="mt-4 space-y-3">
                    {stay.rooms.map((room, i) => {
                      const discount = room.originalPrice
                        ? Math.round((1 - room.price / room.originalPrice) * 100)
                        : 0;
                      const isSelected = i === selectedRoom;
                      return (
                        <button
                          key={room.name}
                          type="button"
                          onClick={() => setSelectedRoom(i)}
                          className={`block w-full rounded-2xl border-2 p-4 text-left transition ${
                            isSelected
                              ? "border-primary bg-accent/40 shadow-card"
                              : "border-border bg-card hover:border-primary/40"
                          }`}
                        >
                          <div className="flex items-start justify-between gap-4">
                            <div className="min-w-0">
                              <h3 className="text-base font-bold text-foreground">
                                {room.name}
                              </h3>
                              <p className="mt-1 text-xs text-muted-foreground">
                                {room.size} · {room.bed} · {room.capacity}
                              </p>
                              <ul className="mt-2 flex flex-wrap gap-1.5">
                                {room.benefits.map((b) => (
                                  <li
                                    key={b}
                                    className="inline-flex items-center gap-1 rounded-full bg-primary-soft px-2 py-0.5 text-[11px] font-semibold text-primary"
                                  >
                                    <Check className="h-3 w-3" />
                                    {b}
                                  </li>
                                ))}
                              </ul>
                            </div>
                            <div className="text-right">
                              {room.originalPrice && (
                                <div className="text-xs text-muted-foreground line-through">
                                  {room.originalPrice.toLocaleString()}원
                                </div>
                              )}
                              <div className="flex items-baseline gap-1">
                                {discount > 0 && (
                                  <span className="text-sm font-extrabold text-primary">
                                    {discount}%
                                  </span>
                                )}
                                <span className="text-lg font-extrabold text-foreground">
                                  {room.price.toLocaleString()}
                                </span>
                              </div>
                              <div className="text-[11px] text-muted-foreground">/ 1회</div>
                            </div>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </section>

                <section>
                  <h2 className="text-lg font-bold text-foreground">위치</h2>
                  <div className="mt-3 overflow-hidden rounded-2xl border border-border">
                    <div className="relative flex aspect-[16/9] items-center justify-center bg-gradient-to-br from-secondary to-accent">
                      <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(var(--color-border)_1px,transparent_1px),linear-gradient(90deg,var(--color-border)_1px,transparent_1px)] [background-size:32px_32px]" />
                      <div className="relative flex flex-col items-center text-center">
                        <div className="rounded-full bg-primary p-3 shadow-elevated">
                          <MapPin className="h-6 w-6 text-primary-foreground" />
                        </div>
                        <p className="mt-3 text-sm font-bold text-foreground">{stay.name}</p>
                        <p className="text-xs text-muted-foreground">{stay.address}</p>
                      </div>
                    </div>
                  </div>
                </section>
              </TabsContent>

              {/* TAB: 관리사 */}
              <TabsContent value="therapists" className="mt-6">
                <div className="mb-4 flex items-end justify-between gap-3">
                  <div>
                    <h2 className="text-lg font-bold text-foreground">
                      소속 관리사 ({stay.therapists.length})
                    </h2>
                    <p className="mt-1 text-xs text-muted-foreground">
                      프로필 사진 등록 {registeredCount} / {stay.therapists.length}명 · 카드를 누르면 상세 정보를 볼 수 있어요
                    </p>
                  </div>
                  <span className="hidden text-xs text-muted-foreground sm:inline">
                    예약 시 지정 가능
                  </span>
                </div>
                <ul className="grid gap-3 sm:grid-cols-2">
                  {stay.therapists.map((t) => {
                    const hasPhoto = !!t.photo;
                    return (
                      <li key={t.name}>
                        <button
                          type="button"
                          onClick={() => setSelectedTherapist(t)}
                          className="group flex w-full items-start gap-4 rounded-2xl border border-border bg-card p-4 text-left transition hover:border-primary hover:shadow-card"
                        >
                          <div className="relative shrink-0">
                            <Avatar className="h-16 w-16 ring-2 ring-background">
                              {hasPhoto ? (
                                <AvatarImage
                                  src={t.photo}
                                  alt={`${t.nickname} 프로필 사진`}
                                  className="object-cover"
                                />
                              ) : null}
                              <AvatarFallback className="bg-primary-soft text-primary">
                                <User className="h-7 w-7" />
                              </AvatarFallback>
                            </Avatar>
                            <span
                              className={`absolute -bottom-1 -right-1 flex h-6 w-6 items-center justify-center rounded-full border-2 border-background ${
                                hasPhoto
                                  ? "bg-primary text-primary-foreground"
                                  : "bg-muted text-muted-foreground"
                              }`}
                              aria-label={hasPhoto ? "프로필 사진 등록됨" : "프로필 사진 미등록"}
                              title={hasPhoto ? "프로필 사진 등록됨" : "프로필 사진 미등록"}
                            >
                              {hasPhoto ? (
                                <Camera className="h-3 w-3" />
                              ) : (
                                <CameraOff className="h-3 w-3" />
                              )}
                            </span>
                          </div>
                          <div className="min-w-0 flex-1">
                            <div className="flex flex-wrap items-center gap-2">
                              <h3 className="text-base font-bold text-foreground">
                                {t.nickname}
                              </h3>
                              {hasPhoto ? (
                                <span className="inline-flex items-center gap-1 rounded-full bg-primary-soft px-1.5 py-0.5 text-[10px] font-bold text-primary">
                                  <Check className="h-2.5 w-2.5" />
                                  실사 인증
                                </span>
                              ) : (
                                <span className="inline-flex items-center rounded-full bg-muted px-1.5 py-0.5 text-[10px] font-bold text-muted-foreground">
                                  사진 준비중
                                </span>
                              )}
                            </div>
                            <div className="mt-0.5 text-xs text-muted-foreground">
                              {t.experience}
                            </div>
                            <div className="mt-1 flex items-center gap-1 text-xs">
                              <Star className="h-3.5 w-3.5 fill-warning text-warning" />
                              <span className="font-bold text-foreground">
                                {t.rating.toFixed(1)}
                              </span>
                              <span className="text-muted-foreground">
                                · 리뷰 {t.reviews.toLocaleString()}
                              </span>
                            </div>
                            <ul className="mt-2 flex flex-wrap gap-1">
                              {t.specialty.slice(0, 3).map((s) => (
                                <li
                                  key={s}
                                  className="inline-flex items-center rounded-full bg-secondary px-2 py-0.5 text-[11px] font-semibold text-foreground"
                                >
                                  #{s}
                                </li>
                              ))}
                            </ul>
                          </div>
                          <ChevronRight className="mt-1 h-4 w-4 shrink-0 text-muted-foreground transition group-hover:translate-x-0.5 group-hover:text-primary" />
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </TabsContent>

              {/* TAB: 리뷰 */}
              <TabsContent value="reviews" className="mt-6">
                <div className="flex items-end justify-between">
                  <h2 className="text-lg font-bold text-foreground">
                    실제 이용 후기 ({stay.reviews.toLocaleString()})
                  </h2>
                </div>

                <div className="mt-4 grid gap-3 rounded-2xl border border-border bg-card p-4 sm:grid-cols-[160px_1fr] sm:p-5">
                  <div className="flex flex-col items-center justify-center border-b border-border pb-4 sm:border-b-0 sm:border-r sm:pb-0 sm:pr-4">
                    <div className="text-4xl font-extrabold text-primary">
                      {stay.rating.toFixed(1)}
                    </div>
                    <div className="mt-1 flex">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            i < Math.round(stay.rating)
                              ? "fill-warning text-warning"
                              : "text-muted"
                          }`}
                        />
                      ))}
                    </div>
                    <div className="mt-1 text-xs text-muted-foreground">
                      {stay.reviews.toLocaleString()}개 리뷰
                    </div>
                  </div>
                  <div className="grid gap-2 sm:grid-cols-2">
                    {stay.ratingBreakdown.map((b) => (
                      <div key={b.label} className="flex items-center gap-3">
                        <span className="w-16 text-xs text-muted-foreground">
                          {b.label}
                        </span>
                        <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-secondary">
                          <div
                            className="h-full rounded-full bg-primary"
                            style={{ width: `${(b.score / 5) * 100}%` }}
                          />
                        </div>
                        <span className="w-8 text-right text-xs font-bold text-foreground">
                          {b.score.toFixed(1)}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <ul className="mt-4 space-y-3">
                  {stay.reviewList.map((r, i) => (
                    <li
                      key={i}
                      className="rounded-2xl border border-border bg-card p-4"
                    >
                      <div className="flex items-center justify-between text-sm">
                        <span className="font-semibold text-foreground">{r.user}</span>
                        <div className="flex items-center gap-1 text-xs text-muted-foreground">
                          <Star className="h-3.5 w-3.5 fill-warning text-warning" />
                          <span className="font-bold text-foreground">
                            {r.rating.toFixed(1)}
                          </span>
                          <span>·</span>
                          <span>{r.date}</span>
                        </div>
                      </div>
                      <div className="mt-1 text-xs text-muted-foreground">{r.roomType}</div>
                      <p className="mt-2 text-sm leading-relaxed text-foreground">
                        {r.content}
                      </p>
                    </li>
                  ))}
                </ul>
              </TabsContent>
            </Tabs>
          </div>

          {/* Reservation sidebar */}
          <aside className="lg:sticky lg:top-24 lg:self-start">
            <div className="rounded-2xl border border-border bg-card p-5 shadow-card">
              <div className="text-xs text-muted-foreground">선택한 코스</div>
              <div className="mt-1 text-base font-bold text-foreground">
                {stay.rooms[selectedRoom].name}
              </div>
              <div className="mt-4 flex items-baseline justify-between border-t border-border pt-4">
                <span className="text-sm text-muted-foreground">1회 요금</span>
                <div className="text-right">
                  {stay.rooms[selectedRoom].originalPrice && (
                    <div className="text-xs text-muted-foreground line-through">
                      {stay.rooms[selectedRoom].originalPrice!.toLocaleString()}원
                    </div>
                  )}
                  <div className="text-xl font-extrabold text-foreground">
                    {stay.rooms[selectedRoom].price.toLocaleString()}원
                  </div>
                </div>
              </div>
              <Button
                className="mt-4 h-12 w-full rounded-xl text-base font-bold"
                onClick={() => handleReserve(stay.rooms[selectedRoom])}
              >
                예약하기
              </Button>
              <p className="mt-3 text-center text-[11px] text-muted-foreground">
                결제 전 무료 취소 가능 · 즉시 확정
              </p>
            </div>
          </aside>
        </div>
      </main>

      {/* Mobile sticky CTA */}
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background/95 px-4 py-3 backdrop-blur lg:hidden">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3">
          <div>
            <div className="text-[11px] text-muted-foreground">1회부터</div>
            <div className="text-lg font-extrabold text-foreground">
              {stay.rooms[selectedRoom].price.toLocaleString()}
              <span className="text-xs font-medium text-muted-foreground">원</span>
            </div>
          </div>
          <Button
            className="h-12 flex-1 rounded-xl text-base font-bold"
            onClick={() => handleReserve(stay.rooms[selectedRoom])}
          >
            예약하기
          </Button>
        </div>
      </div>

      {/* 관리사 상세 모달 */}
      <Dialog
        open={!!selectedTherapist}
        onOpenChange={(open) => !open && setSelectedTherapist(null)}
      >
        <DialogContent className="max-h-[90vh] overflow-y-auto sm:max-w-md">
          {selectedTherapist && (
            <>
              <DialogHeader className="sr-only">
                <DialogTitle>{selectedTherapist.nickname} 프로필</DialogTitle>
                <DialogDescription>{selectedTherapist.intro}</DialogDescription>
              </DialogHeader>

              <div className="-mx-6 -mt-6">
                <div className="relative h-40 overflow-hidden bg-gradient-to-br from-primary-soft to-accent">
                  {selectedTherapist.photo ? (
                    <img
                      src={selectedTherapist.photo}
                      alt=""
                      className="h-full w-full object-cover opacity-40"
                    />
                  ) : null}
                </div>
                <div className="relative -mt-12 flex flex-col items-center px-6">
                  <Avatar className="h-24 w-24 ring-4 ring-background">
                    {selectedTherapist.photo ? (
                      <AvatarImage
                        src={selectedTherapist.photo}
                        alt={`${selectedTherapist.nickname} 프로필 사진`}
                        className="object-cover"
                      />
                    ) : null}
                    <AvatarFallback className="bg-primary-soft text-primary">
                      <User className="h-10 w-10" />
                    </AvatarFallback>
                  </Avatar>
                  <div className="mt-3 flex items-center gap-2">
                    <h3 className="text-xl font-extrabold text-foreground">
                      {selectedTherapist.nickname}
                    </h3>
                    {selectedTherapist.photo ? (
                      <span className="inline-flex items-center gap-1 rounded-full bg-primary px-2 py-0.5 text-[10px] font-bold text-primary-foreground">
                        <Check className="h-2.5 w-2.5" />
                        실사 인증
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 rounded-full bg-muted px-2 py-0.5 text-[10px] font-bold text-muted-foreground">
                        <CameraOff className="h-2.5 w-2.5" />
                        사진 준비중
                      </span>
                    )}
                  </div>
                  <div className="mt-1 text-xs text-muted-foreground">
                    {selectedTherapist.experience}
                  </div>
                  <div className="mt-1.5 flex items-center gap-1 text-sm">
                    <Star className="h-4 w-4 fill-warning text-warning" />
                    <span className="font-bold text-foreground">
                      {selectedTherapist.rating.toFixed(1)}
                    </span>
                    <span className="text-muted-foreground">
                      · 리뷰 {selectedTherapist.reviews.toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>

              {selectedTherapist.catchphrase && (
                <p className="mt-4 rounded-xl bg-secondary px-4 py-3 text-center text-sm font-semibold text-foreground">
                  “{selectedTherapist.catchphrase}”
                </p>
              )}

              <div className="grid grid-cols-2 gap-2">
                {selectedTherapist.height && (
                  <div className="flex items-center gap-2 rounded-lg border border-border bg-card px-3 py-2 text-xs">
                    <Ruler className="h-3.5 w-3.5 text-primary" />
                    <span className="text-muted-foreground">키</span>
                    <span className="ml-auto font-bold text-foreground">
                      {selectedTherapist.height}
                    </span>
                  </div>
                )}
                {selectedTherapist.personality && (
                  <div className="flex items-center gap-2 rounded-lg border border-border bg-card px-3 py-2 text-xs">
                    <Smile className="h-3.5 w-3.5 text-primary" />
                    <span className="ml-auto font-bold text-foreground">
                      {selectedTherapist.personality}
                    </span>
                  </div>
                )}
                {selectedTherapist.availableHours && (
                  <div className="col-span-2 flex items-center gap-2 rounded-lg border border-border bg-card px-3 py-2 text-xs">
                    <Clock className="h-3.5 w-3.5 text-primary" />
                    <span className="text-muted-foreground">예약 가능 시간</span>
                    <span className="ml-auto font-bold text-foreground">
                      {selectedTherapist.availableHours}
                    </span>
                  </div>
                )}
              </div>

              <div>
                <h4 className="text-sm font-bold text-foreground">소개</h4>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                  {selectedTherapist.intro}
                </p>
              </div>

              <div>
                <h4 className="text-sm font-bold text-foreground">전문 분야</h4>
                <ul className="mt-1.5 flex flex-wrap gap-1.5">
                  {selectedTherapist.specialty.map((s) => (
                    <li
                      key={s}
                      className="inline-flex items-center rounded-full bg-primary-soft px-2.5 py-1 text-xs font-semibold text-primary"
                    >
                      #{s}
                    </li>
                  ))}
                </ul>
              </div>

              {selectedTherapist.certifications && selectedTherapist.certifications.length > 0 && (
                <div>
                  <h4 className="text-sm font-bold text-foreground">자격 / 수료</h4>
                  <ul className="mt-1.5 space-y-1">
                    {selectedTherapist.certifications.map((c) => (
                      <li key={c} className="flex items-center gap-2 text-xs text-foreground">
                        <Award className="h-3.5 w-3.5 text-primary" />
                        {c}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <Button
                className="mt-2 h-12 w-full rounded-xl text-base font-bold"
                onClick={() => {
                  toast.success(
                    `${selectedTherapist.nickname} 지정 예약 요청이 접수되었습니다`,
                    {
                      description: `${stay.name} · ${stay.rooms[selectedRoom].name}`,
                    },
                  );
                  setSelectedTherapist(null);
                }}
              >
                이 관리사로 예약하기
              </Button>
            </>
          )}
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
}
