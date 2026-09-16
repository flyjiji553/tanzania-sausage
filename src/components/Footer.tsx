import { company, consultWhatsApps } from "@/lib/contacts";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-charcoal/10 bg-cream-dark/40">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-10 sm:flex-row sm:items-start sm:justify-between sm:px-6 lg:px-8">
        <div>
          <p className="font-display text-lg font-semibold text-charcoal">
            {company.brandZh}
          </p>
          <p className="mt-0.5 text-sm font-medium text-ochre">{company.legalName}</p>
          <p className="mt-2 text-sm text-muted">{company.sloganZh}</p>
          <p className="mt-1 text-xs text-muted">
            {company.poBox} · {company.address}
          </p>
        </div>
        <div className="flex flex-wrap gap-4 text-sm text-muted">
          <a href="#home" className="hover:text-ochre">
            主页
          </a>
          <a href="#products" className="hover:text-ochre">
            产品
          </a>
          <a href="#services" className="hover:text-ochre">
            服务
          </a>
          <a href="#contact" className="hover:text-ochre">
            联系我们
          </a>
          <a
            href={consultWhatsApps[0].waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-ochre"
          >
            WhatsApp
          </a>
        </div>
      </div>
      <div className="border-t border-charcoal/5 py-4 text-center text-xs text-muted">
        © {year} {company.legalName}. All rights reserved. TIN {company.tin}
      </div>
    </footer>
  );
}
