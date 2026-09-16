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
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-ochre">
            Services
          </p>
          <h2 className="mt-2 font-display text-3xl font-bold text-charcoal sm:text-4xl">
            服务
          </h2>
          <p className="mt-4 text-base text-muted sm:text-lg">
            配送、代理与售后投诉通道。标注「占位」的内容可直接在源码中替换为正式信息。
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {/* 配送区域 */}
          <div className="rounded-3xl border border-cream-dark bg-white/70 p-6 shadow-sm">
            <div className="flex items-center justify-between gap-2">
              <h3 className="font-display text-xl font-bold text-charcoal">
                配送区域
              </h3>
              <span className="rounded-full bg-amber-100 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-amber-800">
                可编辑占位
              </span>
            </div>
            <p className="mt-1 text-xs text-muted">Delivery areas · editable placeholder</p>
            <ul className="mt-5 space-y-3">
              {deliveryAreasPlaceholder.map((a) => (
                <li
                  key={a.zone}
                  className="rounded-xl border border-cream-dark/80 bg-cream/50 px-3 py-2.5"
                >
                  <p className="text-sm font-semibold text-charcoal">{a.zone}</p>
                  <p className="text-xs text-muted">{a.note}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* 配送费用 */}
          <div className="rounded-3xl border border-cream-dark bg-white/70 p-6 shadow-sm">
            <div className="flex items-center justify-between gap-2">
              <h3 className="font-display text-xl font-bold text-charcoal">
                配送费用
              </h3>
              <span className="rounded-full bg-amber-100 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-amber-800">
                可编辑占位
              </span>
            </div>
            <p className="mt-1 text-xs text-muted">Delivery fees · editable placeholder</p>
            <ul className="mt-5 space-y-3">
              {deliveryFeesPlaceholder.map((f) => (
                <li
                  key={f.zone}
                  className="rounded-xl border border-cream-dark/80 bg-cream/50 px-3 py-2.5"
                >
                  <div className="flex items-baseline justify-between gap-2">
                    <p className="text-sm font-semibold text-charcoal">{f.zone}</p>
                    <p className="shrink-0 text-sm font-bold text-ochre">{f.fee}</p>
                  </div>
                  <p className="mt-1 text-xs text-muted">{f.note}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* 代理区域 */}
          <div className="rounded-3xl border border-cream-dark bg-white/70 p-6 shadow-sm">
            <div className="flex items-center justify-between gap-2">
              <h3 className="font-display text-xl font-bold text-charcoal">
                代理区域
              </h3>
              <span className="rounded-full bg-amber-100 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-amber-800">
                可编辑占位
              </span>
            </div>
            <p className="mt-1 text-xs text-muted">Agent areas · editable placeholder</p>
            <ul className="mt-5 space-y-3">
              {agentAreasPlaceholder.map((a) => (
                <li
                  key={a.region}
                  className="rounded-xl border border-cream-dark/80 bg-cream/50 px-3 py-2.5"
                >
                  <p className="text-sm font-semibold text-charcoal">{a.region}</p>
                  <p className="text-xs text-muted">{a.status}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* 投诉服务入口 */}
        <div className="mt-8 rounded-3xl bg-charcoal p-6 sm:p-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h3 className="font-display text-2xl font-bold text-cream">
                投诉服务入口
              </h3>
              <p className="mt-2 text-sm text-cream/70">
                Complaints desk · WhatsApp / 电话 · {complaintContact.phoneDisplay}
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <WhatsAppButton contact={complaintContact}>
                WhatsApp 投诉
              </WhatsAppButton>
              <a
                href={complaintContact.telHref}
                className="inline-flex items-center justify-center rounded-full border border-cream/30 bg-cream/10 px-5 py-2.5 text-sm font-semibold text-cream transition hover:bg-cream/20"
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
