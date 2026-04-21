import {
  Flame,
  Flower2,
  HandHeart,
  HeartPulse,
  Leaf,
  MapPinned,
  Sparkles,
  Sprout,
  Users,
  Waves,
} from "lucide-react";

const categories = [
  { label: "스웨디시", Icon: Flower2, color: "oklch(0.96 0.05 5)" },
  { label: "타이마사지", Icon: HandHeart, color: "oklch(0.95 0.05 30)" },
  { label: "아로마", Icon: Leaf, color: "oklch(0.95 0.06 140)" },
  { label: "건식마사지", Icon: Sprout, color: "oklch(0.94 0.05 220)" },
  { label: "1인샵", Icon: Users, color: "oklch(0.95 0.05 280)" },
  { label: "스포츠", Icon: HeartPulse, color: "oklch(0.94 0.06 80)" },
  { label: "핫스톤", Icon: Flame, color: "oklch(0.94 0.06 180)" },
  { label: "왁싱", Icon: Sparkles, color: "oklch(0.95 0.05 240)" },
  { label: "스파·사우나", Icon: Waves, color: "oklch(0.95 0.06 350)" },
  { label: "지역별", Icon: MapPinned, color: "oklch(0.95 0.05 60)" },
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
