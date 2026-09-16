import {
  agentContact,
  company,
  payment,
} from "@/lib/contacts";
import AgentForm from "@/components/AgentForm";

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-20 bg-charcoal py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="section-eyebrow text-xs font-semibold uppercase text-gold">
            Contact · Wasiliana nasi
          </p>
          <h2 className="mt-2 font-display text-3xl font-bold text-cream sm:text-4xl">
            联系我们
          </h2>
          <div className="mx-auto mt-4 h-0.5 w-12 bg-gradient-to-r from-gold to-transparent" />
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-cream/10 bg-charcoal-soft/70 p-6 shadow-lg sm:p-8">
            <h3 className="font-display text-xl font-bold text-cream">公司简介</h3>
            <p className="mt-1 text-xs text-gold">About the company</p>
            <p className="mt-4 text-sm leading-relaxed text-cream/80">{company.introZh}</p>
            <p className="mt-3 text-sm leading-relaxed text-cream/55">{company.introEn}</p>
          </div>

          <div className="rounded-3xl border border-cream/10 bg-charcoal-soft/70 p-6 shadow-lg sm:p-8">
            <h3 className="font-display text-xl font-bold text-cream">公司联系方式</h3>
            <p className="mt-1 text-xs text-gold">Legal & contact details</p>
            <dl className="mt-5 space-y-3.5 text-sm">
              <div>
                <dt className="text-cream/40">公司名称 / Legal name</dt>
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
                <dt className="text-cream/40">地址 / Address</dt>
                <dd className="mt-0.5 text-cream/85">
                  {company.poBox}
                  <br />
                  {company.address}
                </dd>
              </div>
            </dl>
          </div>

          <div className="rounded-3xl border border-cream/10 bg-charcoal-soft/70 p-6 shadow-lg sm:p-8">
            <h3 className="font-display text-xl font-bold text-cream">收款账户 / Payment</h3>
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

          <div className="rounded-3xl border border-gold/35 bg-gradient-to-br from-burgundy/40 via-charcoal-soft/80 to-charcoal-soft/80 p-6 shadow-lg sm:p-8">
            <h3 className="font-display text-xl font-bold text-cream">代理商申请入口</h3>
            <p className="mt-1 text-xs text-gold">Agent application · {agentContact.phoneDisplay}</p>
            <p className="mt-4 text-sm leading-relaxed text-cream/75">
              欢迎经销商与区域代理合作。填写下方表单后通过 WhatsApp 或邮件草稿提交意向区域与渠道类型。
            </p>
            <AgentForm />
          </div>
        </div>
      </div>
    </section>
  );
}
