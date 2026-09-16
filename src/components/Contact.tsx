import {
  agentContact,
  company,
  payment,
} from "@/lib/contacts";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-20 bg-charcoal py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-ochre">
            Contact
          </p>
          <h2 className="mt-2 font-display text-3xl font-bold text-cream sm:text-4xl">
            联系我们
          </h2>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {/* 公司简介 */}
          <div className="rounded-3xl border border-cream/10 bg-charcoal-soft/60 p-6 sm:p-8">
            <h3 className="font-display text-xl font-bold text-cream">公司简介</h3>
            <p className="mt-1 text-xs text-ochre">About the company</p>
            <p className="mt-4 text-sm leading-relaxed text-cream/80">
              {company.introZh}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-cream/60">
              {company.introEn}
            </p>
          </div>

          {/* 公司联系方式 */}
          <div className="rounded-3xl border border-cream/10 bg-charcoal-soft/60 p-6 sm:p-8">
            <h3 className="font-display text-xl font-bold text-cream">
              公司联系方式
            </h3>
            <p className="mt-1 text-xs text-ochre">Legal & contact details</p>
            <dl className="mt-5 space-y-3 text-sm">
              <div>
                <dt className="text-cream/45">公司名称 / Legal name</dt>
                <dd className="mt-0.5 font-semibold text-cream">{company.legalName}</dd>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <dt className="text-cream/45">TIN</dt>
                  <dd className="mt-0.5 font-medium text-cream">{company.tin}</dd>
                </div>
                <div>
                  <dt className="text-cream/45">VRN</dt>
                  <dd className="mt-0.5 font-medium text-cream">{company.vrn}</dd>
                </div>
              </div>
              <div>
                <dt className="text-cream/45">TEL</dt>
                <dd className="mt-0.5">
                  <a
                    href={company.telHref}
                    className="font-medium text-ochre hover:underline"
                  >
                    {company.tel}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-cream/45">地址 / Address</dt>
                <dd className="mt-0.5 text-cream/85">
                  {company.poBox}
                  <br />
                  {company.address}
                </dd>
              </div>
            </dl>
          </div>

          {/* 收款账户 */}
          <div className="rounded-3xl border border-cream/10 bg-charcoal-soft/60 p-6 sm:p-8">
            <h3 className="font-display text-xl font-bold text-cream">
              收款账户 / Payment
            </h3>
            <p className="mt-1 text-xs text-ochre">Bank & Lipa details</p>
            <dl className="mt-5 space-y-3 text-sm">
              <div>
                <dt className="text-cream/45">Lipa number</dt>
                <dd className="mt-0.5 font-semibold text-cream">{payment.lipaNumber}</dd>
              </div>
              <div>
                <dt className="text-cream/45">Jina / Lipa name</dt>
                <dd className="mt-0.5 text-cream/90">{payment.lipaName}</dd>
              </div>
              <div>
                <dt className="text-cream/45">Party Name</dt>
                <dd className="mt-0.5 text-cream/90">{payment.partyName}</dd>
              </div>
              <div>
                <dt className="text-cream/45">Account Number</dt>
                <dd className="mt-0.5 font-semibold text-cream">
                  {payment.accountNumber}
                </dd>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <dt className="text-cream/45">Bank Name</dt>
                  <dd className="mt-0.5 text-cream/90">{payment.bankName}</dd>
                </div>
                <div>
                  <dt className="text-cream/45">Branch</dt>
                  <dd className="mt-0.5 text-cream/90">{payment.branch}</dd>
                </div>
              </div>
            </dl>
          </div>

          {/* 代理商申请入口 */}
          <div className="rounded-3xl border border-ochre/30 bg-ochre/10 p-6 sm:p-8">
            <h3 className="font-display text-xl font-bold text-cream">
              代理商申请入口
            </h3>
            <p className="mt-1 text-xs text-ochre">Agent application</p>
            <p className="mt-4 text-sm leading-relaxed text-cream/75">
              欢迎经销商与区域代理合作。请通过 WhatsApp 或电话联系我们的代理专线，说明意向区域与渠道类型。
            </p>
            <p className="mt-2 text-sm text-cream/60">
              Agent line: {agentContact.phoneDisplay}
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <WhatsAppButton contact={agentContact}>
                WhatsApp 申请代理
              </WhatsAppButton>
              <a
                href={agentContact.telHref}
                className="inline-flex items-center justify-center rounded-full border border-cream/30 bg-cream/10 px-5 py-2.5 text-sm font-semibold text-cream transition hover:bg-cream/20"
              >
                拨打代理电话
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
