import Image from "next/image";
import Link from "next/link";
import { company, consultWhatsApps } from "@/lib/contacts";
import CertBadges from "@/components/CertBadges";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-charcoal/10 bg-cream-dark/50">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-12 sm:flex-row sm:items-start sm:justify-between sm:px-6 lg:px-8">
        <div className="max-w-md">
          <Link
            href="/#home"
            className="inline-block rounded-xl bg-white p-2 shadow-sm ring-1 ring-charcoal/5"
          >
            <Image
              src="/brand/logo-afrinova.png"
              alt="AFRINOVA FOOD LIMITED"
              width={200}
              height={58}
              className="h-10 w-auto object-contain"
            />
          </Link>
          <div className="mt-4 space-y-1.5 text-sm text-charcoal-soft">
            <p className="font-semibold text-brand-green">{company.legalName}</p>
            <p>{company.address}</p>
            <p>{company.poBox}</p>
            <p>
              <a href={company.telHref} className="hover:text-brand-green hover:underline">
                {company.tel}
              </a>
            </p>
            <p>TIN：{company.tin}</p>
            <p>VAT：{company.vrn}</p>
          </div>
          <div className="mt-5">
            <p className="mb-2 text-[11px] font-semibold uppercase tracking-wider text-muted">
              Certified
            </p>
            <CertBadges size="sm" />
          </div>
        </div>
        <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted">
          <a href="/#home" className="hover:text-brand-green">
            Home
          </a>
          <a href="/#products" className="hover:text-brand-green">
            Products
          </a>
          <a href="/#services" className="hover:text-brand-green">
            Services
          </a>
          <a href="/#contact" className="hover:text-brand-green">
            Contact
          </a>
          <a
            href={consultWhatsApps[0].waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-brand-green"
          >
            WhatsApp
          </a>
        </div>
      </div>
      <div className="border-t border-charcoal/5 py-4 text-center text-xs text-muted">
        © {year} {company.legalName}. All rights reserved.
      </div>
    </footer>
  );
}
