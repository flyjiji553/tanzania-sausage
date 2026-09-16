import {
  agentContact,
  company,
  payment,
} from "@/lib/contacts";
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

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-cream/10 bg-charcoal-soft/70 p-6 shadow-lg sm:p-8">
            <h3 className="font-display text-xl font-bold text-cream">About the company</h3>
            <p className="mt-1 text-xs text-gold">AFRINOVA FOOD LIMITED</p>
            <p className="mt-4 text-sm leading-relaxed text-cream/80">{company.introEn}</p>
            <p className="mt-3 text-sm leading-relaxed text-cream/45">{company.introZh}</p>
          </div>

          <div className="rounded-3xl border border-cream/10 bg-charcoal-soft/70 p-6 shadow-lg sm:p-8">
            <h3 className="font-display text-xl font-bold text-cream">Company details</h3>
            <p className="mt-1 text-xs text-gold">Legal & contact</p>
            <dl className="mt-5 space-y-3.5 text-sm">
              <div>
                <dt className="text-cream/40">Legal name</dt>
                <dd className="mt-0.5 font-semibold text-cream">{company.legalName}</dd>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <dt className="text-cream/40">TIN</dt>
                  <dd className="mt-0.5 font-medium text-cream">{company.tin}</dd>
                </div>
                <div>
                  <dt className="text-cream/40">VRN</dt>
                  <dd className="mt-0.5 font-medium text-cream">{company.vrn}</dd>
                </div>
              </div>
              <div>
                <dt className="text-cream/40">TEL</dt>
                <dd className="mt-0.5">
                  <a href={company.telHref} className="font-medium text-gold-soft hover:underline">
                    {company.tel}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-cream/40">Address</dt>
                <dd className="mt-0.5 text-cream/85">
                  {company.poBox}
                  <br />
                  {company.address}
                </dd>
              </div>
            </dl>
          </div>

          <div className="rounded-3xl border border-cream/10 bg-charcoal-soft/70 p-6 shadow-lg sm:p-8">
            <h3 className="font-display text-xl font-bold text-cream">Payment</h3>
            <p className="mt-1 text-xs text-gold">Bank & Lipa details</p>
            <dl className="mt-5 space-y-3 text-sm">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <dt className="text-cream/40">Lipa number</dt>
                  <dd className="mt-0.5 font-semibold text-cream">{payment.lipaNumber}</dd>
                </div>
                <div>
                  <dt className="text-cream/40">Jina / Lipa name</dt>
                  <dd className="mt-0.5 text-cream/90">{payment.lipaName}</dd>
                </div>
              </div>
              <div>
                <dt className="text-cream/40">Party Name</dt>
                <dd className="mt-0.5 text-cream/90">{payment.partyName}</dd>
              </div>
              <div>
                <dt className="text-cream/40">Account Number</dt>
                <dd className="mt-0.5 font-semibold tracking-wide text-gold-soft">
                  {payment.accountNumber}
                </dd>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <dt className="text-cream/40">Bank Name</dt>
                  <dd className="mt-0.5 text-cream/90">{payment.bankName}</dd>
                </div>
                <div>
                  <dt className="text-cream/40">Branch</dt>
                  <dd className="mt-0.5 text-cream/90">{payment.branch}</dd>
                </div>
              </div>
            </dl>
          </div>

          <div className="rounded-3xl border border-brand-green/40 bg-gradient-to-br from-brand-green/25 via-charcoal-soft/80 to-charcoal-soft/80 p-6 shadow-lg sm:p-8">
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
