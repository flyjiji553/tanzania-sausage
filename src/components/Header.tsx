"use client";

import { useState } from "react";
import Image from "next/image";
import { consultWhatsApps } from "@/lib/contacts";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#products", label: "Products", sw: "Bidhaa" },
  { href: "#services", label: "Services" },
  { href: "#contact", label: "Contact", sw: "Wasiliana nasi" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const primaryWa = consultWhatsApps[0];

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-charcoal/5 bg-cream/95 shadow-[0_8px_30px_-12px_rgba(31,28,26,0.25)] backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-2.5 sm:px-6 lg:px-8">
        <a href="#home" className="group flex shrink-0 items-center">
          <Image
            src="/brand/afrinova-horizontal.jpeg"
            alt="AFRINOVA FOOD LIMITED"
            width={220}
            height={64}
            priority
            className="h-10 w-auto object-contain sm:h-11"
          />
        </a>

        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full px-3.5 py-2 text-sm font-medium text-charcoal-soft transition hover:bg-cream-dark/70 hover:text-brand-green"
            >
              {link.label}
            </a>
          ))}
          <a
            href={primaryWa.waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 rounded-full bg-brand-green px-4 py-2 text-sm font-semibold text-white shadow-md shadow-brand-green/25 transition hover:bg-brand-green-deep"
          >
            WhatsApp
          </a>
        </nav>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-cream-dark/80 text-charcoal md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Menu</span>
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
                {link.sw && (
                  <span className="ml-2 text-xs text-muted">{link.sw}</span>
                )}
              </a>
            ))}
            <a
              href={primaryWa.waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 rounded-full bg-brand-green px-4 py-2.5 text-center text-sm font-semibold text-white"
              onClick={() => setOpen(false)}
            >
              WhatsApp · Wasiliana nasi
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
