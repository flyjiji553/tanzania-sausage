import Image from "next/image";
import { products } from "@/lib/products";
import { company, consultWhatsApps } from "@/lib/contacts";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Products() {
  return (
    <section id="products" className="scroll-mt-20 bg-cream-dark/40 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="section-eyebrow text-xs font-semibold uppercase text-paprika">
            Products
          </p>
          <h2 className="mt-2 font-display text-3xl font-bold text-charcoal sm:text-4xl">
            产品
          </h2>
          <div className="gold-rule mx-auto mt-4" />
          <p className="mt-4 text-base text-muted sm:text-lg">
            精选风味系列。价格以 WhatsApp 咨询报价为准。
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <article
              key={product.id}
              className="card-lift group flex flex-col overflow-hidden rounded-2xl bg-ivory shadow-md ring-1 ring-charcoal/5"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 via-transparent to-transparent opacity-60" />
                {product.badge && (
                  <span className="absolute left-3 top-3 rounded-full bg-burgundy px-2.5 py-1 text-xs font-semibold text-cream shadow ring-1 ring-gold/30">
                    {product.badge}
                  </span>
                )}
              </div>
              <div className="flex flex-1 flex-col p-5">
                <h3 className="font-display text-xl font-semibold text-charcoal">
                  {product.name}
                </h3>
                {product.nameEn && (
                  <p className="mt-0.5 text-xs font-medium text-paprika">{product.nameEn}</p>
                )}
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                  {product.description}
                </p>
                <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-cream-dark pt-4">
                  <p className="text-base font-bold text-burgundy">{product.price}</p>
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

        <div className="mt-14 overflow-hidden rounded-3xl border border-burgundy/15 bg-ivory shadow-lg">
          <div className="border-b border-cream-dark bg-gradient-to-r from-burgundy/5 via-gold/10 to-transparent px-6 py-6 sm:px-8">
            <h3 className="font-display text-2xl font-bold text-charcoal">
              产品咨询入口
            </h3>
            <p className="mt-1 text-sm text-muted">
              Wasiliana nasi · Consultation via WhatsApp · {company.brandEn}
            </p>
          </div>
          <div className="grid gap-3 p-6 sm:grid-cols-2 sm:p-8 lg:grid-cols-3">
            {consultWhatsApps.map((c) => (
              <div
                key={c.id}
                className="flex flex-col gap-2.5 rounded-2xl border border-cream-dark bg-cream/60 p-4 transition hover:border-gold/40 hover:bg-cream"
              >
                <p className="text-sm font-semibold text-charcoal">
                  {c.label}
                  <span className="ml-2 text-xs font-normal text-muted">{c.labelEn}</span>
                </p>
                <a href={c.telHref} className="text-sm font-medium text-paprika hover:underline">
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
