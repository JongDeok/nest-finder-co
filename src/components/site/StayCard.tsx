import { Heart, Star } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { useState } from "react";

export interface Stay {
  id?: string;
  image: string;
  badge?: string;
  type: string;
  name: string;
  location: string;
  rating: number;
  reviews: number;
  price: number;
  originalPrice?: number;
}

export function StayCard({ stay }: { stay: Stay }) {
  const [liked, setLiked] = useState(false);
  const discount = stay.originalPrice
    ? Math.round((1 - stay.price / stay.originalPrice) * 100)
    : 0;

  const cardInner = (
    <article className="group cursor-pointer overflow-hidden rounded-2xl bg-card transition hover:-translate-y-1">
      <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-muted">
        <img
          src={stay.image}
          alt={stay.name}
          loading="lazy"
          width={800}
          height={640}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
        {stay.badge && (
          <span className="absolute left-3 top-3 rounded-full bg-primary px-2.5 py-1 text-xs font-bold text-primary-foreground shadow-card">
            {stay.badge}
          </span>
        )}
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            setLiked((v) => !v);
          }}
          className="absolute right-3 top-3 rounded-full bg-background/80 p-2 backdrop-blur transition hover:bg-background"
          aria-label="찜하기"
        >
          <Heart
            className={`h-4 w-4 transition ${
              liked ? "fill-primary text-primary" : "text-foreground"
            }`}
          />
        </button>
      </div>

      <div className="px-1 pt-3">
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <span>{stay.type}</span>
          <span>·</span>
          <span>{stay.location}</span>
        </div>
        <h3 className="mt-1 line-clamp-1 text-base font-bold text-foreground">{stay.name}</h3>
        <div className="mt-1 flex items-center gap-1 text-xs">
          <Star className="h-3.5 w-3.5 fill-warning text-warning" />
          <span className="font-semibold text-foreground">{stay.rating.toFixed(1)}</span>
          <span className="text-muted-foreground">({stay.reviews.toLocaleString()})</span>
        </div>
        <div className="mt-2 flex items-baseline gap-2">
          {discount > 0 && (
            <span className="text-sm font-extrabold text-primary">{discount}%</span>
          )}
          <span className="text-lg font-extrabold text-foreground">
            {stay.price.toLocaleString()}
            <span className="text-xs font-medium text-muted-foreground">원</span>
          </span>
          {stay.originalPrice && (
            <span className="text-xs text-muted-foreground line-through">
              {stay.originalPrice.toLocaleString()}
            </span>
          )}
        </div>
      </div>
    </article>
  );

  if (stay.id) {
    return (
      <Link to="/stay/$stayId" params={{ stayId: stay.id }} className="block">
        {cardInner}
      </Link>
    );
  }
  return cardInner;
}
