import jeju from "@/assets/dest-jeju.jpg";
import busan from "@/assets/dest-busan.jpg";
import gangneung from "@/assets/dest-gangneung.jpg";
import gyeongju from "@/assets/dest-gyeongju.jpg";

const destinations = [
  { name: "제주", count: "12,480", image: jeju },
  { name: "부산", count: "8,210", image: busan },
  { name: "강릉", count: "4,930", image: gangneung },
  { name: "경주", count: "3,712", image: gyeongju },
];

export function Destinations() {
  return (
    <section className="bg-secondary/40 py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-6">
          <h2 className="text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl">
            지금 인기 여행지
          </h2>
          <p className="mt-1 text-sm text-muted-foreground">
            여행객들이 가장 많이 찾는 도시
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
                alt={`${d.name} 여행지`}
                loading="lazy"
                width={800}
                height={800}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-4 text-left">
                <h3 className="text-xl font-extrabold text-white">{d.name}</h3>
                <p className="text-xs text-white/85">숙소 {d.count}개</p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
