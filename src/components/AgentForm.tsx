"use client";

import { useState, FormEvent } from "react";
import { agentContact, company } from "@/lib/contacts";
import { WhatsAppIcon } from "@/components/WhatsAppButton";

export default function AgentForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [region, setRegion] = useState("");
  const [channel, setChannel] = useState("");
  const [note, setNote] = useState("");

  function buildMessage() {
    return [
      `Habari / Hello — Agent application for ${company.legalName}`,
      `Name: ${name || "-"}`,
      `Phone: ${phone || "-"}`,
      `Region: ${region || "-"}`,
      `Channel: ${channel || "-"}`,
      `Note: ${note || "-"}`,
    ].join("\n");
  }

  function onWhatsApp(e: FormEvent) {
    e.preventDefault();
    const url = `${agentContact.waUrl}?text=${encodeURIComponent(buildMessage())}`;
    window.open(url, "_blank", "noopener,noreferrer");
  }

  function onMailto(e: FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent(`Agent application — ${company.legalName}`);
    const body = encodeURIComponent(buildMessage());
    window.location.href = `mailto:?subject=${subject}&body=${body}`;
  }

  const field =
    "w-full rounded-xl border border-cream/20 bg-charcoal/40 px-3.5 py-2.5 text-sm text-cream placeholder:text-cream/35 outline-none transition focus:border-gold/50 focus:ring-2 focus:ring-gold/20";

  return (
    <form className="mt-6 space-y-3" onSubmit={onWhatsApp}>
      <div className="grid gap-3 sm:grid-cols-2">
        <label className="block text-xs text-cream/55">
          Name
          <input
            className={`mt-1 ${field}`}
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name"
            required
          />
        </label>
        <label className="block text-xs text-cream/55">
          Phone
          <input
            className={`mt-1 ${field}`}
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="+255 ..."
            required
          />
        </label>
        <label className="block text-xs text-cream/55">
          Region
          <input
            className={`mt-1 ${field}`}
            value={region}
            onChange={(e) => setRegion(e.target.value)}
            placeholder="e.g. Dar es Salaam"
            required
          />
        </label>
        <label className="block text-xs text-cream/55">
          Channel
          <input
            className={`mt-1 ${field}`}
            value={channel}
            onChange={(e) => setChannel(e.target.value)}
            placeholder="Retail / Wholesale / Hotel"
          />
        </label>
      </div>
      <label className="block text-xs text-cream/55">
        Note
        <textarea
          className={`mt-1 min-h-[88px] resize-y ${field}`}
          value={note}
          onChange={(e) => setNote(e.target.value)}
          placeholder="Tell us about your business"
        />
      </label>
      <div className="flex flex-col gap-3 pt-1 sm:flex-row">
        <button
          type="submit"
          className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-[#1da851]"
        >
          <WhatsAppIcon className="h-4 w-4" />
          Submit via WhatsApp
        </button>
        <button
          type="button"
          onClick={onMailto}
          className="inline-flex items-center justify-center rounded-full border border-cream/30 bg-cream/10 px-5 py-2.5 text-sm font-semibold text-cream transition hover:bg-cream/20"
        >
          Open email draft
        </button>
        <a
          href={agentContact.telHref}
          className="inline-flex items-center justify-center rounded-full border border-gold/40 bg-transparent px-5 py-2.5 text-sm font-semibold text-gold-soft transition hover:bg-cream/10"
        >
          Call {agentContact.phoneDisplay}
        </a>
      </div>
      <p className="text-[11px] text-cream/45">
        No backend: submit opens WhatsApp with a prefilled message, or a local email draft.
      </p>
    </form>
  );
}
