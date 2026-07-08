import Link from "next/link";
import type { Offer } from "@/const/products";

export function OfferCard({ offer }: { offer: Offer }) {
  return (
    <article className="group relative flex flex-col overflow-hidden rounded-[1.5rem] border border-white/70 bg-white/85 shadow-[0_16px_50px_rgba(var(--brand-rgb),0.10)] backdrop-blur transition hover:-translate-y-1 hover:shadow-[0_28px_70px_rgba(var(--brand-rgb),0.20)]">
      <div className="relative h-52 overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={offer.images[0]}
          alt={offer.name}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/45 to-transparent" />
        <span className="absolute right-4 top-4 rounded-full bg-brand/90 px-3 py-1 text-xs font-semibold text-white backdrop-blur">
          {offer.badge}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h4 className="text-xl font-bold text-ink">{offer.name}</h4>
        <p className="mt-2 line-clamp-2 text-sm text-muted">
          {offer.description}
        </p>
        <div className="mt-auto flex items-center justify-end pt-4">
          <Link
            href={`/products/${offer.id}`}
            className="rounded-full bg-brand px-4 py-2 text-sm font-semibold text-white transition hover:bg-brand-dark"
          >
            View Deal
          </Link>
        </div>
      </div>
    </article>
  );
}
