import Image from "next/image";
import { company } from "@/lib/contacts";

const chips = [
  { title: "No refrigeration required" },
  { title: "Ready to eat" },
  { title: "High protein" },
];

const features = [
  {
    title: "No refrigeration required",
    description:
      "Shelf-stable convenience for shops, homes, and travel — no cold chain needed for everyday use.",
    icon: "🌡️",
  },
  {
    title: "Ready to eat",
    description:
      "Enjoy straight from the pack or lightly heated — ideal for quick meals and foodservice.",
    icon: "🍽️",
  },
  {
    title: "High protein",
    description:
      "High-protein foods meet daily nutritional needs and are better suited to the demands of the African market.",
    icon: "💪",
  },
];

export default function Hero() {
  return (
    <section id="home" className="scroll-mt-0">
      <div className="relative min-h-[92vh] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1558030006-450675393462?w=1800&q=85"
          alt="AFRINOVA sausage grill — appetizing product imagery"
          fill
          priority
          className="object-cover object-center scale-105"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-charcoal/85 via-charcoal/65 to-burgundy-deep/75" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(17,140,62,0.22),transparent_50%)]" />

        <div className="relative mx-auto flex min-h-[92vh] max-w-6xl flex-col justify-end px-4 pb-14 pt-28 sm:justify-center sm:px-6 sm:pb-20 lg:px-8">
          <div className="max-w-2xl">
            <h1 className="font-display text-4xl font-bold leading-[1.15] tracking-tight text-cream sm:text-5xl lg:text-6xl">
              Welcome to AFRINOVA FOOD
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-cream/85 sm:text-lg">
              {company.sloganEn} — warm, rich flavour worth sharing in every bite.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {chips.map((c) => (
                <span
                  key={c.title}
                  className="hero-chip inline-flex items-center gap-1.5 rounded-full border border-cream/20 bg-cream/10 px-3 py-1.5 text-xs font-medium text-cream/90"
                >
                  <span className="h-1 w-1 rounded-full bg-gold" />
                  {c.title}
                </span>
              ))}
            </div>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href="#products"
                className="inline-flex items-center justify-center rounded-full bg-brand-green px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-brand-green/35 transition hover:bg-brand-green-deep"
              >
                View products
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="relative bg-cream py-16 sm:py-20">
        <div className="absolute inset-x-0 -top-8 mx-auto hidden h-16 max-w-5xl rounded-3xl bg-ivory/80 shadow-xl ring-1 ring-charcoal/5 backdrop-blur sm:block" aria-hidden />
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="section-eyebrow text-xs font-semibold uppercase text-brand-green">
              Features
            </p>
            <h2 className="mt-2 font-display text-2xl font-bold text-charcoal sm:text-3xl">
              Why choose AFRINOVA
            </h2>
            <div className="gold-rule mx-auto mt-4" />
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {features.map((f) => (
              <div
                key={f.title}
                className="card-lift rounded-2xl border border-cream-dark bg-ivory p-5 shadow-sm"
              >
                <span className="text-2xl" aria-hidden>
                  {f.icon}
                </span>
                <h3 className="mt-3 font-display text-lg font-semibold text-charcoal">
                  {f.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
