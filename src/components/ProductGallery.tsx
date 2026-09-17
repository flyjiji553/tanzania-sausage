"use client";

import { useState } from "react";
import Image from "next/image";

type Props = {
  images: string[];
  name: string;
};

export default function ProductGallery({ images, name }: Props) {
  const [active, setActive] = useState(0);
  const current = images[active] ?? images[0];

  return (
    <div>
      <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-cream-dark shadow-md ring-1 ring-charcoal/5">
        <Image
          src={current}
          alt={`${name} — image ${active + 1}`}
          fill
          priority
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
      </div>
      {images.length > 1 && (
        <div className="mt-3 grid grid-cols-3 gap-2 sm:grid-cols-4">
          {images.map((src, i) => (
            <button
              key={src + i}
              type="button"
              onClick={() => setActive(i)}
              aria-label={`View image ${i + 1}`}
              className={`relative aspect-[4/3] overflow-hidden rounded-xl ring-2 transition ${
                i === active
                  ? "ring-brand-green"
                  : "ring-transparent hover:ring-brand-green/40"
              }`}
            >
              <Image
                src={src}
                alt=""
                fill
                className="object-cover"
                sizes="120px"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
