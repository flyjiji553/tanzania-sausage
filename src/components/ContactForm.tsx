"use client";

import { FormEvent, useEffect, useState } from "react";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [message, setMessage] = useState("");
  const [toast, setToast] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (!toast) return;
    const t = window.setTimeout(() => setToast(null), 3500);
    return () => window.clearTimeout(t);
  }, [toast]);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!name.trim() || !contact.trim() || !message.trim()) {
      setToast("请填写完整信息后再提交");
      return;
    }
    setSubmitting(true);
    window.setTimeout(() => {
      setSubmitting(false);
      setName("");
      setContact("");
      setMessage("");
      setToast("提交成功！我们会尽快与您联系（演示模式，未实际发送）");
    }, 600);
  }

  return (
    <section id="contact" className="scroll-mt-20 bg-charcoal py-16 sm:py-24">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-ochre">
            Contact
          </p>
          <h2 className="mt-2 font-display text-3xl font-bold text-cream sm:text-4xl">
            联系咨询
          </h2>
          <p className="mt-4 text-base leading-relaxed text-cream/75 sm:text-lg">
            想了解批发价、礼盒定制或配送范围？留下您的联系方式，我们的顾问将尽快回复。
          </p>

          <div className="mt-8 space-y-4 rounded-2xl border border-cream/10 bg-charcoal-soft/50 p-5">
            <p className="text-xs font-semibold uppercase tracking-wider text-ochre">
              演示联系信息（非真实）
            </p>
            <ul className="space-y-3 text-sm text-cream/80">
              <li>
                <span className="text-cream/50">微信（演示）：</span>
                tanzania-sausage-demo
              </li>
              <li>
                <span className="text-cream/50">电话（演示）：</span>
                400-000-0000
              </li>
              <li>
                <span className="text-cream/50">邮箱（演示）：</span>
                hello@tanzania-sausage.demo
              </li>
              <li>
                <span className="text-cream/50">工作时间（演示）：</span>
                周一至周五 9:00–18:00（北京时间）
              </li>
            </ul>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-3xl bg-cream p-6 shadow-xl sm:p-8"
          noValidate
        >
          <div className="space-y-5">
            <div>
              <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-charcoal">
                姓名
              </label>
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="请输入您的姓名"
                className="w-full rounded-xl border border-cream-dark bg-white px-4 py-3 text-sm text-charcoal outline-none ring-ochre/30 transition placeholder:text-muted/60 focus:border-ochre focus:ring-2"
              />
            </div>
            <div>
              <label
                htmlFor="contact"
                className="mb-1.5 block text-sm font-medium text-charcoal"
              >
                电话 / 微信
              </label>
              <input
                id="contact"
                name="contact"
                type="text"
                value={contact}
                onChange={(e) => setContact(e.target.value)}
                placeholder="方便我们联系您的方式"
                className="w-full rounded-xl border border-cream-dark bg-white px-4 py-3 text-sm text-charcoal outline-none ring-ochre/30 transition placeholder:text-muted/60 focus:border-ochre focus:ring-2"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="mb-1.5 block text-sm font-medium text-charcoal"
              >
                留言
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="请简述您的需求，例如产品、数量、配送城市等"
                className="w-full resize-y rounded-xl border border-cream-dark bg-white px-4 py-3 text-sm text-charcoal outline-none ring-ochre/30 transition placeholder:text-muted/60 focus:border-ochre focus:ring-2"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={submitting}
            className="mt-6 w-full rounded-full bg-ochre py-3.5 text-sm font-semibold text-cream shadow-md transition hover:bg-ochre-deep disabled:cursor-not-allowed disabled:opacity-70"
          >
            {submitting ? "提交中…" : "提交咨询"}
          </button>
          <p className="mt-3 text-center text-xs text-muted">
            本表单为前端演示：提交后仅显示成功提示，不会发送至服务器。
          </p>
        </form>
      </div>

      {toast && (
        <div
          role="status"
          aria-live="polite"
          className="fixed bottom-6 left-1/2 z-[60] w-[min(92vw,28rem)] -translate-x-1/2 rounded-2xl bg-success px-5 py-3.5 text-center text-sm font-medium text-cream shadow-2xl"
        >
          {toast}
        </div>
      )}
    </section>
  );
}
