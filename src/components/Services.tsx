import {
  complaintContact,
  consultWhatsApps,
  deliveryAreasPlaceholder,
  deliveryFeesPlaceholder,
} from "@/lib/contacts";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Services() {
  const primaryWa = consultWhatsApps[0];

  return (
    <section id="services" className="scroll-mt-20 bg-cream py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="section-eyebrow text-xs font-semibold uppercase text-brand-green">
            Services
          </p>
          <h2 className="mt-2 font-display text-3xl font-bold text-charcoal sm:text-4xl">
            Delivery & support
          </h2>
          <div className="gold-rule mx-auto mt-4" />
          <p className="mt-4 text-base text-muted sm:text-lg">
            Free delivery in Dar es Salaam urban. Other areas are charged by actual cost —
            please consult WhatsApp.
          </p>
        </div>

        {/* Mobile: stack areas → fees → notice; desktop: 2-col then notice spans */}
        <div className="mt-12 flex flex-col gap-6">
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="card-lift rounded-3xl border border-cream-dark bg-ivory p-5 shadow-sm sm:p-6">
              <div className="flex items-start justify-between gap-2">
                <div>
                  <h3 className="font-display text-xl font-bold text-charcoal">Delivery areas</h3>
                  <p className="mt-1 text-xs text-muted">Maeneo ya usafirishaji</p>
                </div>
              </div>
              <ul className="mt-5 space-y-2.5">
                {deliveryAreasPlaceholder.map((a) => (
                  <li
                    key={a.zone}
                    className="flex items-start gap-3 rounded-xl border border-cream-dark/80 bg-cream/70 px-3.5 py-3"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-green" />
                    <div>
                      <p className="text-sm font-semibold text-charcoal">{a.zone}</p>
                      <p className="text-xs text-muted">{a.note}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="card-lift rounded-3xl border border-cream-dark bg-ivory p-5 shadow-sm sm:p-6">
              <div className="flex items-start justify-between gap-2">
                <div>
                  <h3 className="font-display text-xl font-bold text-charcoal">Delivery fees</h3>
                  <p className="mt-1 text-xs text-muted">Gharama za usafirishaji</p>
                </div>
              </div>
              <div className="mt-5 -mx-1 overflow-x-auto px-1">
                <div className="min-w-[280px] overflow-hidden rounded-xl border border-cream-dark">
                  <table className="w-full text-left text-sm">
                    <thead className="bg-brand-green text-white">
                      <tr>
                        <th className="px-3 py-2.5 font-semibold">Zone</th>
                        <th className="px-3 py-2.5 font-semibold">Fee</th>
                      </tr>
                    </thead>
                    <tbody>
                      {deliveryFeesPlaceholder.map((f, i) => (
                        <tr
                          key={f.zone}
                          className={i % 2 === 0 ? "bg-cream/80" : "bg-ivory"}
                        >
                          <td className="px-3 py-3 align-top">
                            <p className="font-semibold text-charcoal">{f.zone}</p>
                            <p className="mt-0.5 text-xs text-muted">{f.note}</p>
                          </td>
                          <td className="px-3 py-3 align-top font-bold text-brand-green whitespace-nowrap">
                            {f.fee}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-brand-green/25 bg-brand-green/5 p-4 sm:p-5">
            <p className="text-sm font-semibold text-charcoal">Delivery fee notice</p>
            <p className="mt-1 text-sm text-muted">
              For other cities and surrounding areas, fees are charged by actual cost. Please
              consult WhatsApp for a quote.
            </p>
            <div className="mt-3">
              <WhatsAppButton
                contact={primaryWa}
                variant="dark"
                className="w-full !px-4 !py-2.5 text-xs sm:w-auto"
              >
                Please consult WhatsApp
              </WhatsAppButton>
            </div>
          </div>
        </div>

        <div className="mt-8 overflow-hidden rounded-3xl bg-charcoal p-5 shadow-xl sm:p-8">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                Complaints
              </p>
              <h3 className="mt-1 font-display text-2xl font-bold text-cream">
                Complaint service
              </h3>
              <p className="mt-2 text-sm text-cream/70">
                WhatsApp / phone · {complaintContact.phoneDisplay}
              </p>
            </div>
            <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
              <WhatsAppButton contact={complaintContact} className="w-full sm:w-auto">
                WhatsApp complaint
              </WhatsAppButton>
              <a
                href={complaintContact.telHref}
                className="inline-flex w-full items-center justify-center rounded-full border border-gold/40 bg-cream/10 px-5 py-2.5 text-sm font-semibold text-cream transition hover:bg-cream/20 sm:w-auto"
              >
                Call {complaintContact.phoneDisplay}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
