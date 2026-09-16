import Image from "next/image";
import { company, consultWhatsApps } from "@/lib/contacts";
import CertBadges from "@/components/CertBadges";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-charcoal/10 bg-cream-dark/50">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-12 sm:flex-row sm:items-start sm:justify-between sm:px-6 lg:px-8">
        <div className="max-w-md">
          <a href="#home" className="inline-block rounded-xl bg-white p-2 shadow-sm ring-1 ring-charcoal/5">
            <Image
              src="/brand/afrinova-horizontal.jpeg"
              alt="AFRINOVA — Africa Nova"
              width={200}
              height={58}
              className="h-10 w-auto object-contain"
            />
          </a>
          <p className="mt-3 text-sm font-medium text-paprika">{company.legalName}</p>
          <p className="mt-1 text-sm text-muted">{company.sloganZh}</p>
          <p className="mt-1 text-xs text-muted">
            {company.poBox} · {company.address}
          </p>
          <div className="mt-4">
            <p className="mb-2 text-[11px] font-semibold uppercase tracking-wider text-muted">
              Certified · 认证
            </p>
            <CertBadges size="sm" />
          </div>
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
