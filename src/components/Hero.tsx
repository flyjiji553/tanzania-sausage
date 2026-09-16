import Image from "next/image";
import { company, consultWhatsApps } from "@/lib/contacts";

const features = [
  {
    title: "严选原料",
    titleEn: "Quality meat",
    description: "精选优质牛肉，批次可追溯，安心上桌。",
  },
  {
    title: "东非风味",
    titleEn: "East African taste",
    description: "传统工艺与现代食品安全标准相结合。",
  },
  {
    title: "多种系列",
    titleEn: "Product range",
    description: "原味、香辣、烟熏等风味，满足日常与礼赠。",
  },
  {
    title: "便捷咨询",
    titleEn: "Easy consult",
    description: "WhatsApp 多线客服，批发零售均可洽谈。",
  },
];

export default function Hero() {
  const primaryWa = consultWhatsApps[0];

  return (
    <section id="home" className="scroll-mt-0">
      <div className="relative min-h-[88vh] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1600&q=80"
          alt="坦桑尼亚塞伦盖蒂草原风光"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/70 via-charcoal/55 to-charcoal/85" />

        <div className="relative mx-auto flex min-h-[88vh] max-w-6xl flex-col justify-end px-4 pb-16 pt-28 sm:justify-center sm:px-6 sm:pb-20 lg:px-8">
          <div className="max-w-2xl">
            <p className="mb-3 inline-flex items-center gap-2 rounded-full bg-cream/15 px-3 py-1 text-xs font-medium tracking-wider text-cream/90 ring-1 ring-cream/25 backdrop-blur-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-ochre" />
              {company.sloganZh}
            </p>
            <h1 className="font-display text-4xl font-bold leading-tight tracking-tight text-cream sm:text-5xl lg:text-6xl">
              {company.brandZh}
              <span className="mt-2 block text-xl font-semibold text-cream/90 sm:text-2xl lg:text-3xl">
                {company.brandEn}
              </span>
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-cream/85 sm:text-lg">
              {company.sloganEn} — 温暖、醇厚、值得分享的每一口香肠。
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href="#products"
                className="inline-flex items-center justify-center rounded-full bg-ochre px-7 py-3.5 text-sm font-semibold text-cream shadow-lg shadow-ochre/30 transition hover:bg-ochre-deep"
              >
                了解产品 Products
              </a>
              <a
                href={primaryWa.waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-cream/40 bg-cream/10 px-7 py-3.5 text-sm font-semibold text-cream backdrop-blur-sm transition hover:bg-cream/20"
              >
                WhatsApp 咨询
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* 产品特点 */}
      <div className="bg-cream py-14 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-ochre">
              Features
            </p>
            <h2 className="mt-2 font-display text-2xl font-bold text-charcoal sm:text-3xl">
              产品特点
            </h2>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((f) => (
              <div
                key={f.title}
                className="rounded-2xl border border-cream-dark bg-white/60 p-5 shadow-sm"
              >
                <h3 className="font-display text-lg font-semibold text-charcoal">
                  {f.title}
                </h3>
                <p className="mt-0.5 text-xs text-ochre">{f.titleEn}</p>
                <p className="mt-2 text-sm leading-relaxed text-muted">{f.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {[
              {
                src: "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=800&q=80",
                alt: "香肠产品展示",
              },
              {
                src: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=800&q=80",
                alt: "东非自然风光",
              },
              {
                src: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&q=80",
                alt: "餐桌分享",
              },
            ].map((img) => (
              <div
                key={img.src}
                className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-md"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover"
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
