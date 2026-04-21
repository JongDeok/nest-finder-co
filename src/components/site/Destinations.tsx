import gangnam from "@/assets/region-gangnam.jpg";
import hongdae from "@/assets/region-hongdae.jpg";
import busan from "@/assets/region-busan.jpg";
import bundang from "@/assets/region-bundang.jpg";

const destinations = [
  { name: "강남·역삼", count: "1,820", image: gangnam },
  { name: "홍대·합정", count: "942", image: hongdae },
  { name: "해운대", count: "612", image: busan },
  { name: "분당·판교", count: "541", image: bundang },
];

export function Destinations() {
  return (
    <section className="bg-secondary/40 py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-6">
          <h2 className="text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl">
            지금 인기 지역
          </h2>
          <p className="mt-1 text-sm text-muted-foreground">
            가장 많이 예약되는 마사지 핫플레이스
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {destinations.map((d) => (
            <button
              key={d.name}
              type="button"
              className="group relative aspect-square overflow-hidden rounded-2xl shadow-card"
            >
              <img
                src={d.image}
                alt={`${d.name} 지역 마사지샵`}
                loading="lazy"
                width={800}
                height={800}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-4 text-left">
                <h3 className="text-xl font-extrabold text-white">{d.name}</h3>
                <p className="text-xs text-white/85">샵 {d.count}개</p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
