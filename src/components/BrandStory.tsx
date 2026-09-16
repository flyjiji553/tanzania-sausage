import Image from "next/image";

export default function BrandStory() {
  return (
    <section id="story" className="scroll-mt-20 bg-cream py-16 sm:py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-14 lg:px-8">
        <div className="relative aspect-[4/5] overflow-hidden rounded-3xl shadow-xl sm:aspect-[5/6]">
          <Image
            src="https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=1200&q=80"
            alt="东非草原与自然风光"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-charcoal/80 to-transparent p-6">
            <p className="text-sm font-medium text-cream/90">坦桑尼亚 · 阳光牧场</p>
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-ochre">
            Our Story
          </p>
          <h2 className="mt-2 font-display text-3xl font-bold text-charcoal sm:text-4xl">
            品牌故事
          </h2>
          <div className="mt-6 space-y-4 text-base leading-relaxed text-muted sm:text-lg">
            <p>
              坦桑尼亚香肠诞生于东非高原。这里有广袤的草场、充足的阳光，以及世代相传的肉品加工智慧。我们坚持选用优质牛肉，配合当地香料与现代食品安全标准，把「故乡的味道」带到中国家庭的餐桌上。
            </p>
            <p>
              每一根香肠都经过精心选肉、低温腌制与慢火熟成。不追求夸张添加剂，只追求真实的肉香、稳定的品质，以及能让人安心分享的温度。
            </p>
            <p>
              无论是早餐的一盘煎肠、周末的户外烧烤，还是节日的礼盒心意——我们希望，坦桑尼亚香肠成为您生活中温暖而可靠的存在。
            </p>
          </div>

          <dl className="mt-8 grid grid-cols-3 gap-4 border-t border-cream-dark pt-8">
            <div>
              <dt className="text-2xl font-bold text-ochre sm:text-3xl">15+</dt>
              <dd className="mt-1 text-xs text-muted sm:text-sm">年工艺沉淀</dd>
            </div>
            <div>
              <dt className="text-2xl font-bold text-ochre sm:text-3xl">100%</dt>
              <dd className="mt-1 text-xs text-muted sm:text-sm">精选牛肉</dd>
            </div>
            <div>
              <dt className="text-2xl font-bold text-ochre sm:text-3xl">6</dt>
              <dd className="mt-1 text-xs text-muted sm:text-sm">经典风味系列</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}
