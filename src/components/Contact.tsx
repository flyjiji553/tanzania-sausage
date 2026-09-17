import { agentContact, company } from "@/lib/contacts";
import AgentForm from "@/components/AgentForm";

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 bg-charcoal py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="section-eyebrow text-xs font-semibold uppercase text-gold">
            Contact · Wasiliana nasi
          </p>
          <h2 className="mt-2 font-display text-3xl font-bold text-cream sm:text-4xl">
            Get in touch
          </h2>
          <div className="mx-auto mt-4 h-0.5 w-12 bg-gradient-to-r from-gold to-transparent" />
        </div>

        <div className="mt-12 grid gap-6">
          <div className="rounded-3xl border border-cream/10 bg-charcoal-soft/70 p-5 shadow-lg sm:p-8">
            <h3 className="font-display text-xl font-bold text-cream">About the company</h3>
            <p className="mt-1 text-xs text-gold">AFRINOVA FOOD LIMITED</p>
            <div className="mt-4 space-y-3">
              {company.introEn.map((para) => (
                <p key={para.slice(0, 40)} className="text-sm leading-relaxed text-cream/80">
                  {para}
                </p>
              ))}
            </div>
            <a
              href={company.telHref}
              className="mt-5 block w-full rounded-2xl border border-gold/35 bg-cream/5 px-4 py-3.5 text-center text-sm font-semibold text-gold-soft transition hover:bg-cream/10"
            >
              Call {company.tel}
            </a>
          </div>

          <div className="rounded-3xl border border-brand-green/40 bg-gradient-to-br from-brand-green/25 via-charcoal-soft/80 to-charcoal-soft/80 p-5 shadow-lg sm:p-8">
            <h3 className="font-display text-xl font-bold text-cream">Agent application</h3>
            <p className="mt-1 text-xs text-gold">
              Agent inquiry · {agentContact.phoneDisplay}
            </p>
            <p className="mt-4 text-sm leading-relaxed text-cream/75">
              Distributors and regional agents are welcome. Fill the form below, then submit via
              WhatsApp or email draft with your target region and channel type.
            </p>
            <AgentForm />
          </div>
        </div>
      </div>
    </section>
  );
}
