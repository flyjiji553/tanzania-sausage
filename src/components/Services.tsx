import {
  agentAreasPlaceholder,
  complaintContact,
  deliveryAreasPlaceholder,
  deliveryFeesPlaceholder,
} from "@/lib/contacts";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Services() {
  return (
    <section id="services" className="scroll-mt-20 bg-cream py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="section-eyebrow text-xs font-semibold uppercase text-paprika">
            Services
          </p>
          <h2 className="mt-2 font-display text-3xl font-bold text-charcoal sm:text-4xl">
            服务
          </h2>
          <div className="gold-rule mx-auto mt-4" />
          <p className="mt-4 text-base text-muted sm:text-lg">
            配送、代理与售后投诉通道。覆盖与费用可在{" "}
            <code className="rounded bg-cream-dark px-1.5 py-0.5 text-xs text-burgundy">
              src/lib/contacts.ts
            </code>{" "}
            更新。
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          <div className="card-lift rounded-3xl border border-cream-dark bg-ivory p-6 shadow-sm">
            <div className="flex items-start justify-between gap-2">
              <div>
                <h3 className="font-display text-xl font-bold text-charcoal">配送区域</h3>
                <p className="mt-1 text-xs text-muted">Delivery areas</p>
              </div>
              <span className="rounded-full bg-gold/15 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-burgundy">
                Editable
              </span>
            </div>
            <ul className="mt-5 space-y-2.5">
              {deliveryAreasPlaceholder.map((a) => (
                <li
                  key={a.zone}
                  className="flex items-start gap-3 rounded-xl border border-cream-dark/80 bg-cream/70 px-3.5 py-3"
                >
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-paprika" />
                  <div>
                    <p className="text-sm font-semibold text-charcoal">{a.zone}</p>
                    <p className="text-xs text-muted">{a.note}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="card-lift rounded-3xl border border-cream-dark bg-ivory p-6 shadow-sm">
            <div className="flex items-start justify-between gap-2">
              <div>
                <h3 className="font-display text-xl font-bold text-charcoal">配送费用</h3>
                <p className="mt-1 text-xs text-muted">Delivery fees</p>
              </div>
              <span className="rounded-full bg-gold/15 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-burgundy">
                Editable
              </span>
            </div>
            <div className="mt-5 overflow-hidden rounded-xl border border-cream-dark">
              <table className="w-full text-left text-sm">
                <thead className="bg-burgundy text-cream">
                  <tr>
                    <th className="px-3 py-2.5 font-semibold">区域 Zone</th>
                    <th className="px-3 py-2.5 font-semibold">费用 Fee</th>
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
                      <td className="px-3 py-3 align-top font-bold text-paprika whitespace-nowrap">
                        {f.fee}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="card-lift rounded-3xl border border-cream-dark bg-ivory p-6 shadow-sm">
            <div className="flex items-start justify-between gap-2">
              <div>
                <h3 className="font-display text-xl font-bold text-charcoal">代理区域</h3>
                <p className="mt-1 text-xs text-muted">Agent regions</p>
              </div>
              <span className="rounded-full bg-gold/15 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-burgundy">
                Editable
              </span>
            </div>
            <ul className="mt-5 space-y-2.5">
              {agentAreasPlaceholder.map((a) => (
                <li
                  key={a.region}
                  className="rounded-xl border border-cream-dark/80 bg-cream/70 px-3.5 py-3"
                >
                  <p className="text-sm font-semibold text-charcoal">{a.region}</p>
                  <p className="text-xs text-muted">{a.status}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-8 overflow-hidden rounded-3xl bg-charcoal p-6 shadow-xl sm:p-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                Complaints
              </p>
              <h3 className="mt-1 font-display text-2xl font-bold text-cream">
                投诉服务入口
              </h3>
              <p className="mt-2 text-sm text-cream/70">
                WhatsApp / 电话 · {complaintContact.phoneDisplay}
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <WhatsAppButton contact={complaintContact}>WhatsApp 投诉</WhatsAppButton>
              <a
                href={complaintContact.telHref}
                className="inline-flex items-center justify-center rounded-full border border-gold/40 bg-cream/10 px-5 py-2.5 text-sm font-semibold text-cream transition hover:bg-cream/20"
              >
                拨打 {complaintContact.phoneDisplay}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
