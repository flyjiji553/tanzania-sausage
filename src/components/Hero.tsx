import Image from "next/image";

export default function Hero() {
  return (
    <section id="top" className="relative min-h-[92vh] overflow-hidden">
      <Image
        src="https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1600&q=80"
        alt="坦桑尼亚塞伦盖蒂草原风光"
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal/70 via-charcoal/55 to-charcoal/80" />

      <div className="relative mx-auto flex min-h-[92vh] max-w-6xl flex-col justify-end px-4 pb-20 pt-28 sm:justify-center sm:px-6 sm:pb-24 lg:px-8">
        <div className="max-w-2xl">
          <p className="mb-3 inline-flex items-center gap-2 rounded-full bg-cream/15 px-3 py-1 text-xs font-medium tracking-wider text-cream/90 ring-1 ring-cream/25 backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-ochre" />
            源自东非 · 匠心美味
          </p>
          <h1 className="font-display text-4xl font-bold leading-tight tracking-tight text-cream sm:text-5xl lg:text-6xl">
            坦桑尼亚香肠
            <span className="mt-2 block text-2xl font-semibold text-cream/90 sm:text-3xl lg:text-4xl">
              Tanzania Sausage Co.
            </span>
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-cream/85 sm:text-lg">
            从塞伦盖蒂的阳光牧场到您的餐桌——我们以东非传统工艺与严选牛肉，
            打造温暖、醇厚、值得分享的每一口香肠。
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="#products"
              className="inline-flex items-center justify-center rounded-full bg-ochre px-7 py-3.5 text-sm font-semibold text-cream shadow-lg shadow-ochre/30 transition hover:bg-ochre-deep"
            >
              了解产品
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full border border-cream/40 bg-cream/10 px-7 py-3.5 text-sm font-semibold text-cream backdrop-blur-sm transition hover:bg-cream/20"
            >
              立即咨询
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
