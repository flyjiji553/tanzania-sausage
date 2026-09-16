import Image from "next/image";
import { products } from "@/lib/products";

export default function Products() {
  return (
    <section id="products" className="scroll-mt-20 bg-cream-dark/50 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-ochre">
            Catalog
          </p>
          <h2 className="mt-2 font-display text-3xl font-bold text-charcoal sm:text-4xl">
            产品系列
          </h2>
          <p className="mt-4 text-base text-muted sm:text-lg">
            从日常餐桌到节日礼赠，精选风味满足不同场景。价格为展示占位，实际以咨询报价为准。
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <article
              key={product.id}
              className="group flex flex-col overflow-hidden rounded-2xl bg-cream shadow-md ring-1 ring-charcoal/5 transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                {product.badge && (
                  <span className="absolute left-3 top-3 rounded-full bg-ochre px-2.5 py-1 text-xs font-semibold text-cream shadow">
                    {product.badge}
                  </span>
                )}
              </div>
              <div className="flex flex-1 flex-col p-5">
                <h3 className="font-display text-xl font-semibold text-charcoal">
                  {product.name}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                  {product.description}
                </p>
                <div className="mt-5 flex items-center justify-between gap-3">
                  <p className="text-lg font-bold text-ochre">{product.price}</p>
                  <a
                    href="#contact"
                    className="shrink-0 rounded-full bg-charcoal px-4 py-2 text-xs font-semibold text-cream transition hover:bg-ochre"
                  >
                    咨询购买
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
