import Image from "next/image";
import { company, consultWhatsApps } from "@/lib/contacts";

const chips = [
  { title: "严选原料", titleEn: "Quality meat" },
  { title: "东非风味", titleEn: "East African" },
  { title: "多风味系列", titleEn: "Product range" },
  { title: "WhatsApp 咨询", titleEn: "Easy consult" },
];

const features = [
  {
    title: "严选原料",
    titleEn: "Quality meat",
    description: "精选优质牛肉，批次可追溯，安心上桌。",
    icon: "🥩",
  },
  {
    title: "东非风味",
    titleEn: "East African taste",
    description: "传统工艺与现代食品安全标准相结合。",
    icon: "🌶️",
  },
  {
    title: "多种系列",
    titleEn: "Product range",
    description: "原味、香辣、烟熏等风味，满足日常与礼赠。",
    icon: "🎁",
  },
  {
    title: "便捷咨询",
    titleEn: "Easy consult",
    description: "WhatsApp 多线客服，批发零售均可洽谈。",
    icon: "💬",
  },
];

export default function Hero() {
  const primaryWa = consultWhatsApps[0];

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
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(196,163,90,0.18),transparent_50%)]" />

        <div className="relative mx-auto flex min-h-[92vh] max-w-6xl flex-col justify-end px-4 pb-14 pt-28 sm:justify-center sm:px-6 sm:pb-20 lg:px-8">
          <div className="max-w-2xl">
            <p className="hero-chip mb-4 inline-flex items-center gap-2 rounded-full bg-cream/10 px-3.5 py-1.5 text-xs font-medium tracking-wide text-cream/95 ring-1 ring-gold/35">
              <span className="h-1.5 w-1.5 rounded-full bg-gold" />
              Karibu · {company.sloganZh}
            </p>
            <h1 className="font-display text-4xl font-bold leading-[1.15] tracking-tight text-cream sm:text-5xl lg:text-6xl">
              {company.brandZh}
              <span className="mt-3 block text-lg font-semibold tracking-[0.08em] text-gold-soft sm:text-xl lg:text-2xl">
                {company.brandEn}
              </span>
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-cream/85 sm:text-lg">
              {company.sloganEn} — 温暖、醇厚、值得分享的每一口香肠。
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {chips.map((c) => (
                <span
                  key={c.title}
                  className="hero-chip inline-flex items-center gap-1.5 rounded-full border border-cream/20 bg-cream/10 px-3 py-1.5 text-xs font-medium text-cream/90"
                >
                  <span className="h-1 w-1 rounded-full bg-gold" />
                  {c.title}
                  <span className="hidden text-cream/50 sm:inline">· {c.titleEn}</span>
                </span>
              ))}
            </div>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href="#products"
                className="inline-flex items-center justify-center rounded-full bg-paprika px-8 py-3.5 text-sm font-semibold text-cream shadow-lg shadow-paprika/35 transition hover:bg-burgundy"
              >
                了解产品 Products
              </a>
              <a
                href={primaryWa.waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-gold/40 bg-cream/10 px-8 py-3.5 text-sm font-semibold text-cream backdrop-blur-sm transition hover:bg-cream/20"
              >
                WhatsApp 咨询
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="relative bg-cream py-16 sm:py-20">
        <div className="absolute inset-x-0 -top-8 mx-auto hidden h-16 max-w-5xl rounded-3xl bg-ivory/80 shadow-xl ring-1 ring-charcoal/5 backdrop-blur sm:block" aria-hidden />
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="section-eyebrow text-xs font-semibold uppercase text-paprika">
              Features
            </p>
            <h2 className="mt-2 font-display text-2xl font-bold text-charcoal sm:text-3xl">
              产品特点
            </h2>
            <div className="gold-rule mx-auto mt-4" />
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
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
                <p className="mt-0.5 text-xs font-medium text-paprika">{f.titleEn}</p>
                <p className="mt-2 text-sm leading-relaxed text-muted">{f.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-3">
            {[
              {
                src: "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=900&q=80",
                alt: "Sausage product display",
              },
              {
                src: "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=900&q=80",
                alt: "East African landscape",
              },
              {
                src: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=900&q=80",
                alt: "Shared table meal",
              },
            ].map((img) => (
              <div
                key={img.src}
                className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-md ring-1 ring-charcoal/5"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition duration-700 hover:scale-105"
                  sizes="(max-width: 640px) 100vw, 33vw"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
