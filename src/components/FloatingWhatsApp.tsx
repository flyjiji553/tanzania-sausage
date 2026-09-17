"use client";

import { consultWhatsApps } from "@/lib/contacts";
import { WhatsAppIcon } from "@/components/WhatsAppButton";

export default function FloatingWhatsApp() {
  const primary = consultWhatsApps[0];

  return (
    <a
      href={primary.waUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`WhatsApp ${primary.phoneDisplay}`}
      className="fixed bottom-[max(5.5rem,calc(env(safe-area-inset-bottom)+4.5rem))] right-[max(1.25rem,env(safe-area-inset-right))] z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-[#25D366]/40 transition hover:scale-105 hover:bg-[#1da851] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#25D366] sm:bottom-7 sm:right-7"
    >
      <WhatsAppIcon className="h-7 w-7" />
      <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#25D366] opacity-60" />
        <span className="relative inline-flex h-3.5 w-3.5 rounded-full bg-white ring-2 ring-[#25D366]" />
      </span>
    </a>
  );
}
