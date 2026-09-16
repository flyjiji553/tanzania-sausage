const points = [
  {
    title: "产地可追溯",
    description:
      "原料来自坦桑尼亚优质牧场，批次可追溯，让您清楚每一口背后的来源与标准。",
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.75}
          d="M12 21s7-4.5 7-11a7 7 0 10-14 0c0 6.5 7 11 7 11z"
        />
        <circle cx="12" cy="10" r="2.5" strokeWidth={1.75} />
      </svg>
    ),
  },
  {
    title: "传统与现代并重",
    description:
      "保留东非烟熏与调味智慧，同时严格执行现代冷链与食品安全规范。",
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.75}
          d="M12 3v18M5 8h14M7 12h10M9 16h6"
        />
      </svg>
    ),
  },
  {
    title: "风味层次丰富",
    description:
      "原味、香辣、烟熏、香草等多款配方，满足家庭日常、聚会烧烤与礼赠需求。",
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.75}
          d="M4 12c2-4 6-6 8-6s6 2 8 6c-2 4-6 6-8 6s-6-2-8-6z"
        />
        <circle cx="12" cy="12" r="2" strokeWidth={1.75} />
      </svg>
    ),
  },
  {
    title: "贴心咨询服务",
    description:
      "批发、零售、定制礼盒均可咨询。我们提供口味建议与配送沟通，响应及时。",
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.75}
          d="M8 10h8M8 14h5M5 19l2-2h12a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
  },
];

export default function WhyUs() {
  return (
    <section id="why-us" className="scroll-mt-20 bg-cream py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-ochre">
            Why Us
          </p>
          <h2 className="mt-2 font-display text-3xl font-bold text-charcoal sm:text-4xl">
            为何选择我们
          </h2>
          <p className="mt-4 text-base text-muted sm:text-lg">
            以品质为底，以温度相待——这是坦桑尼亚香肠对每一位顾客的承诺。
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {points.map((point) => (
            <div
              key={point.title}
              className="rounded-2xl border border-cream-dark bg-cream p-6 shadow-sm transition hover:border-ochre/30 hover:shadow-md"
            >
              <div className="mb-4 inline-flex rounded-xl bg-ochre/10 p-3 text-ochre">
                {point.icon}
              </div>
              <h3 className="font-display text-lg font-semibold text-charcoal">
                {point.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {point.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
