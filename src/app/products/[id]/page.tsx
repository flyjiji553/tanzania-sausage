import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  getAllProductIds,
  getProductById,
  products,
} from "@/lib/products";
import { consultWhatsApps } from "@/lib/contacts";
import ProductGallery from "@/components/ProductGallery";
import WhatsAppButton from "@/components/WhatsAppButton";

type Props = {
  params: Promise<{ id: string }>;
};

export function generateStaticParams() {
  return getAllProductIds().map((id) => ({ id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const product = getProductById(id);
  if (!product) return { title: "Product not found" };
  return {
    title: `${product.name} | AFRINOVA FOOD`,
    description: product.description,
  };
}

export default async function ProductDetailPage({ params }: Props) {
  const { id } = await params;
  const product = getProductById(id);
  if (!product) notFound();

  const primaryWa = consultWhatsApps[0];
  const related = products.filter((p) => p.id !== product.id).slice(0, 2);

  return (
    <div className="bg-cream pt-24 pb-16 sm:pb-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <nav className="mb-6 text-sm text-muted">
          <Link href="/#products" className="hover:text-brand-green">
            Products
          </Link>
          <span className="mx-2 text-cream-dark">/</span>
          <span className="text-charcoal">{product.name}</span>
        </nav>

        <div className="grid gap-10 lg:grid-cols-2">
          <ProductGallery images={product.images} name={product.name} />

          <div>
            <div className="flex flex-wrap items-center gap-2">
              <span
                className={`rounded-full px-2.5 py-1 text-xs font-semibold ${
                  product.status === "available"
                    ? "bg-brand-green/15 text-brand-green"
                    : "bg-charcoal/10 text-muted"
                }`}
              >
                {product.badge}
              </span>
              {product.status === "coming_soon" && (
                <span className="rounded-full bg-cream-dark px-2.5 py-1 text-xs font-medium text-muted">
                  Specs TBD
                </span>
              )}
            </div>

            <h1 className="mt-3 font-display text-3xl font-bold text-charcoal sm:text-4xl">
              {product.name}
            </h1>
            {product.nameZh && (
              <p className="mt-1 text-sm font-medium text-muted">{product.nameZh}</p>
            )}
            <p className="mt-4 text-base leading-relaxed text-muted">
              {product.longDescription}
            </p>

            <p
              className={`mt-6 text-xl font-bold ${
                product.status === "available" ? "text-brand-green" : "text-muted"
              }`}
            >
              {product.price}
            </p>

            <div className="mt-6">
              {product.status === "available" ? (
                <WhatsAppButton contact={primaryWa} variant="dark" className="!px-6 !py-3">
                  WhatsApp consult
                </WhatsAppButton>
              ) : (
                <span className="inline-flex items-center rounded-full bg-charcoal/10 px-5 py-3 text-sm font-semibold text-muted">
                  Coming soon
                </span>
              )}
            </div>

            <div className="mt-10 overflow-hidden rounded-2xl border border-cream-dark bg-ivory">
              <div className="border-b border-cream-dark bg-cream/60 px-4 py-3">
                <h2 className="font-display text-lg font-semibold text-charcoal">
                  Product specs
                </h2>
                {product.status === "coming_soon" && (
                  <p className="text-xs text-muted">
                    Specs TBD until launch
                  </p>
                )}
              </div>
              <dl className="divide-y divide-cream-dark">
                {product.specs.map((spec) => (
                  <div
                    key={spec.label}
                    className="grid grid-cols-[40%_1fr] gap-3 px-4 py-3 text-sm"
                  >
                    <dt className="font-medium text-muted">{spec.label}</dt>
                    <dd>
                      <p className="font-semibold text-charcoal">{spec.value}</p>
                      {spec.note && (
                        <p className="mt-0.5 text-xs text-muted">{spec.note}</p>
                      )}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>

        {related.length > 0 && (
          <div className="mt-16">
            <h2 className="font-display text-2xl font-bold text-charcoal">
              More products
            </h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {related.map((p) => (
                <Link
                  key={p.id}
                  href={`/products/${p.id}`}
                  className="card-lift rounded-2xl border border-cream-dark bg-ivory p-5 shadow-sm transition hover:border-brand-green/30"
                >
                  <p className="font-display text-lg font-semibold text-charcoal">
                    {p.name}
                  </p>
                  {p.nameZh && (
                    <p className="mt-0.5 text-xs text-muted">{p.nameZh}</p>
                  )}
                  <p className="mt-2 text-sm text-muted line-clamp-2">
                    {p.description}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
