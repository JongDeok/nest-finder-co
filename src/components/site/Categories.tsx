import {
  BedDouble,
  Building2,
  Hotel,
  MapPinned,
  Palmtree,
  Plane,
  Tent,
  Ticket,
  TreePine,
  Waves,
} from "lucide-react";

const categories = [
  { label: "모텔", Icon: BedDouble, color: "oklch(0.96 0.05 5)" },
  { label: "호텔·리조트", Icon: Hotel, color: "oklch(0.95 0.05 30)" },
  { label: "펜션", Icon: TreePine, color: "oklch(0.95 0.06 140)" },
  { label: "풀빌라", Icon: Waves, color: "oklch(0.94 0.05 220)" },
  { label: "게스트하우스", Icon: Building2, color: "oklch(0.95 0.05 280)" },
  { label: "캠핑·글램핑", Icon: Tent, color: "oklch(0.94 0.06 80)" },
  { label: "해외숙소", Icon: Palmtree, color: "oklch(0.94 0.06 180)" },
  { label: "항공", Icon: Plane, color: "oklch(0.95 0.05 240)" },
  { label: "티켓·투어", Icon: Ticket, color: "oklch(0.95 0.06 350)" },
  { label: "여행지", Icon: MapPinned, color: "oklch(0.95 0.05 60)" },
];

export function Categories() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
      <div className="grid grid-cols-5 gap-3 sm:gap-4 md:grid-cols-10">
        {categories.map(({ label, Icon, color }) => (
          <button
            key={label}
            type="button"
            className="group flex flex-col items-center gap-2 rounded-2xl p-2 transition hover:-translate-y-0.5"
          >
            <div
              className="flex h-14 w-14 items-center justify-center rounded-2xl transition group-hover:shadow-card sm:h-16 sm:w-16"
              style={{ backgroundColor: color }}
            >
              <Icon className="h-7 w-7 text-foreground/80" />
            </div>
            <span className="text-xs font-medium text-foreground sm:text-sm">{label}</span>
          </button>
        ))}
      </div>
    </section>
  );
}
