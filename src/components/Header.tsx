"use client";

import { useEffect, useState } from "react";
import { company, consultWhatsApps } from "@/lib/contacts";

const navLinks = [
  { href: "#home", label: "主页", labelEn: "Home" },
  { href: "#products", label: "产品", labelEn: "Products" },
  { href: "#services", label: "服务", labelEn: "Services" },
  { href: "#contact", label: "联系我们", labelEn: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const primaryWa = consultWhatsApps[0];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-cream/95 shadow-sm backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <a href="#home" className="group flex items-center gap-2">
          <span
            className={`flex h-9 w-9 items-center justify-center rounded-full text-xs font-bold tracking-tight transition ${
              scrolled
                ? "bg-ochre text-cream"
                : "bg-cream/20 text-cream ring-1 ring-cream/40"
            }`}
          >
            AF
          </span>
          <div className="leading-tight">
            <p
              className={`font-display text-base font-semibold sm:text-lg ${
                scrolled ? "text-charcoal" : "text-cream"
              }`}
            >
              {company.brandZh}
            </p>
            <p
              className={`hidden text-[10px] tracking-wide sm:block ${
                scrolled ? "text-muted" : "text-cream/75"
              }`}
            >
              {company.brandEn}
            </p>
          </div>
        </a>

        <nav className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition hover:text-ochre ${
                scrolled ? "text-charcoal-soft" : "text-cream/90"
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href={primaryWa.waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-ochre px-4 py-2 text-sm font-semibold text-cream shadow-sm transition hover:bg-ochre-deep"
          >
            WhatsApp 咨询
          </a>
        </nav>

        <button
          type="button"
          aria-label={open ? "关闭菜单" : "打开菜单"}
          aria-expanded={open}
          className={`inline-flex h-10 w-10 items-center justify-center rounded-lg md:hidden ${
            scrolled ? "text-charcoal" : "text-cream"
          }`}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">菜单</span>
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {open ? (
              <path strokeLinecap="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeWidth={2} d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div className="border-t border-cream-dark/60 bg-cream px-4 py-4 shadow-lg md:hidden">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-lg px-3 py-2 text-sm font-medium text-charcoal hover:bg-cream-dark"
                onClick={() => setOpen(false)}
              >
                {link.label}
                <span className="ml-2 text-xs text-muted">{link.labelEn}</span>
              </a>
            ))}
            <a
              href={primaryWa.waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 rounded-full bg-ochre px-4 py-2.5 text-center text-sm font-semibold text-cream"
              onClick={() => setOpen(false)}
            >
              WhatsApp 咨询
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
