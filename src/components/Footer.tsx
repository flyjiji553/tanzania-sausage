import { company, consultWhatsApps } from "@/lib/contacts";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-charcoal/10 bg-cream-dark/50">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-12 sm:flex-row sm:items-start sm:justify-between sm:px-6 lg:px-8">
        <div className="max-w-md">
          <div className="flex items-center gap-2.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-burgundy text-[11px] font-bold text-cream ring-1 ring-gold/40">
              AF
            </span>
            <div>
              <p className="font-display text-lg font-semibold text-charcoal">
                {company.brandZh}
              </p>
              <p className="text-xs font-medium tracking-wide text-paprika">
                {company.legalName}
              </p>
            </div>
          </div>
          <p className="mt-3 text-sm text-muted">{company.sloganZh}</p>
          <p className="mt-1 text-xs text-muted">
            {company.poBox} · {company.address}
          </p>
        </div>
        <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted">
          <a href="#home" className="hover:text-paprika">
            主页
          </a>
          <a href="#products" className="hover:text-paprika">
            产品
          </a>
          <a href="#services" className="hover:text-paprika">
            服务
          </a>
          <a href="#contact" className="hover:text-paprika">
            联系我们
          </a>
          <a
            href={consultWhatsApps[0].waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-paprika"
          >
            WhatsApp
          </a>
        </div>
      </div>
      <div className="border-t border-charcoal/5 py-4 text-center text-xs text-muted">
        © {year} {company.legalName}. All rights reserved. TIN {company.tin} · VRN{" "}
        {company.vrn}
      </div>
    </footer>
  );
}
