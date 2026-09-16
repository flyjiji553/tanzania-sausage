import Image from "next/image";
import { products } from "@/lib/products";
import { consultWhatsApps } from "@/lib/contacts";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Products() {
  return (
    <section id="products" className="scroll-mt-20 bg-cream-dark/50 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-ochre">
            Products
          </p>
          <h2 className="mt-2 font-display text-3xl font-bold text-charcoal sm:text-4xl">
            产品
          </h2>
          <p className="mt-4 text-base text-muted sm:text-lg">
            精选风味系列。价格为展示参考，实际以 WhatsApp 咨询报价为准。
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
                {product.nameEn && (
                  <p className="mt-0.5 text-xs text-ochre">{product.nameEn}</p>
                )}
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                  {product.description}
                </p>
                <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
                  <p className="text-lg font-bold text-ochre">{product.price}</p>
                  <WhatsAppButton
                    contact={consultWhatsApps[0]}
                    variant="dark"
                    className="!px-4 !py-2 text-xs"
                  >
                    WhatsApp 咨询
                  </WhatsAppButton>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Consultation entry — 5 WhatsApp numbers */}
        <div className="mt-14 rounded-3xl border border-ochre/20 bg-cream p-6 shadow-lg sm:p-8">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h3 className="font-display text-2xl font-bold text-charcoal">
                产品咨询入口
              </h3>
              <p className="mt-1 text-sm text-muted">
                Consultation via WhatsApp · 点击下方按钮在新窗口打开对话
              </p>
            </div>
          </div>
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {consultWhatsApps.map((c) => (
              <div
                key={c.id}
                className="flex flex-col gap-2 rounded-2xl border border-cream-dark bg-white/70 p-4"
              >
                <p className="text-sm font-semibold text-charcoal">
                  {c.label}
                  <span className="ml-2 text-xs font-normal text-muted">{c.labelEn}</span>
                </p>
                <a
                  href={c.telHref}
                  className="text-sm text-ochre hover:underline"
                >
                  {c.phoneDisplay}
                </a>
                <WhatsAppButton contact={c} className="w-full">
                  打开 WhatsApp
                </WhatsAppButton>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
