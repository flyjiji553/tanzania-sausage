import Image from "next/image";
import Link from "next/link";
import { products } from "@/lib/products";
import { company, consultWhatsApps } from "@/lib/contacts";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Products() {
  return (
    <section id="products" className="scroll-mt-20 bg-cream-dark/40 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="section-eyebrow text-xs font-semibold uppercase text-brand-green">
            Bidhaa · Products
          </p>
          <h2 className="mt-2 font-display text-3xl font-bold text-charcoal sm:text-4xl">
            Our products
          </h2>
          <div className="gold-rule mx-auto mt-4" />
          <p className="mt-4 text-base text-muted sm:text-lg">
            Our factory currently produces chicken sausage. Pet sausage and beef sausage are
            launching soon.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <article
              key={product.id}
              className={`card-lift group flex flex-col overflow-hidden rounded-2xl bg-ivory shadow-md ring-1 ring-charcoal/5 ${
                product.status === "coming_soon" ? "opacity-90" : ""
              }`}
            >
              <Link href={`/products/${product.id}`} className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className={`object-cover transition duration-700 group-hover:scale-105 ${
                    product.status === "coming_soon" ? "grayscale-[20%]" : ""
                  }`}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 via-transparent to-transparent opacity-60" />
                {product.status === "coming_soon" && (
                  <div className="absolute inset-0 flex items-center justify-center bg-charcoal/20">
                    <span className="rounded-full bg-charcoal/75 px-4 py-2 text-sm font-semibold text-cream backdrop-blur-sm">
                      Coming soon
                    </span>
                  </div>
                )}
                {product.badge && (
                  <span className="absolute left-3 top-3 rounded-full bg-burgundy px-2.5 py-1 text-xs font-semibold text-cream shadow ring-1 ring-gold/30">
                    {product.badge}
                  </span>
                )}
              </Link>
              <div className="flex flex-1 flex-col p-5">
                <Link href={`/products/${product.id}`} className="group/title">
                  <h3 className="font-display text-xl font-semibold text-charcoal transition group-hover/title:text-brand-green">
                    {product.name}
                  </h3>
                </Link>
                {product.nameZh && (
                  <p className="mt-0.5 text-xs font-medium text-muted">{product.nameZh}</p>
                )}
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                  {product.description}
                </p>
                <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-cream-dark pt-4">
                  <p
                    className={`text-base font-bold ${
                      product.status === "coming_soon" ? "text-muted" : "text-brand-green"
                    }`}
                  >
                    {product.price}
                  </p>
                  <Link
                    href={`/products/${product.id}`}
                    className="rounded-full border border-brand-green/30 bg-brand-green/5 px-4 py-2 text-xs font-semibold text-brand-green transition hover:bg-brand-green hover:text-white"
                  >
                    View details
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-14 overflow-hidden rounded-3xl border border-brand-green/20 bg-ivory shadow-lg">
          <div className="border-b border-cream-dark bg-gradient-to-r from-brand-green/8 via-gold/10 to-transparent px-6 py-6 sm:px-8">
            <h3 className="font-display text-2xl font-bold text-charcoal">
              Product consultation
            </h3>
            <p className="mt-1 text-sm text-muted">
              Wasiliana nasi · WhatsApp · {company.brandEn}
            </p>
          </div>
          <div className="grid gap-3 p-6 sm:grid-cols-2 sm:p-8 lg:grid-cols-3">
            {consultWhatsApps.map((c) => (
              <div
                key={c.id}
                className="flex flex-col gap-2.5 rounded-2xl border border-cream-dark bg-cream/60 p-4 transition hover:border-brand-green/35 hover:bg-cream"
              >
                <p className="text-sm font-semibold text-charcoal">{c.label}</p>
                <a href={c.telHref} className="text-sm font-medium text-brand-green hover:underline">
                  {c.phoneDisplay}
                </a>
                <WhatsAppButton contact={c} className="w-full">
                  Open WhatsApp
                </WhatsAppButton>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
