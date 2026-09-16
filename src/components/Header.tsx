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
          ? "border-b border-charcoal/5 bg-cream/95 shadow-[0_8px_30px_-12px_rgba(31,28,26,0.25)] backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <a href="#home" className="group flex items-center gap-2.5">
          <span
            className={`flex h-10 w-10 items-center justify-center rounded-full text-[11px] font-bold tracking-tight shadow-sm transition ${
              scrolled
                ? "bg-burgundy text-cream ring-1 ring-gold/40"
                : "bg-cream/15 text-cream ring-1 ring-gold/50"
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
              className={`hidden text-[10px] tracking-[0.12em] uppercase sm:block ${
                scrolled ? "text-muted" : "text-cream/70"
              }`}
            >
              {company.brandEn}
            </p>
          </div>
        </a>

        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`rounded-full px-3.5 py-2 text-sm font-medium transition hover:text-paprika ${
                scrolled ? "text-charcoal-soft hover:bg-cream-dark/70" : "text-cream/90 hover:bg-cream/10"
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href={primaryWa.waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 rounded-full bg-burgundy px-4 py-2 text-sm font-semibold text-cream shadow-md shadow-burgundy/25 transition hover:bg-burgundy-deep"
          >
            WhatsApp
          </a>
        </nav>

        <button
          type="button"
          aria-label={open ? "关闭菜单" : "打开菜单"}
          aria-expanded={open}
          className={`inline-flex h-10 w-10 items-center justify-center rounded-xl md:hidden ${
            scrolled ? "bg-cream-dark/80 text-charcoal" : "bg-cream/10 text-cream"
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
        <div className="border-t border-cream-dark/80 bg-ivory px-4 py-4 shadow-xl md:hidden">
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-xl px-3 py-2.5 text-sm font-medium text-charcoal hover:bg-cream-dark"
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
              className="mt-2 rounded-full bg-burgundy px-4 py-2.5 text-center text-sm font-semibold text-cream"
              onClick={() => setOpen(false)}
            >
              WhatsApp 咨询 · Wasiliana nasi
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
