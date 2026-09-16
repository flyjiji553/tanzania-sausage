export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-charcoal/10 bg-cream-dark/40">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-10 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <div>
          <p className="font-display text-lg font-semibold text-charcoal">
            坦桑尼亚香肠 · Tanzania Sausage Co.
          </p>
          <p className="mt-1 text-sm text-muted">
            源自东非高原的温暖风味 · 匠心品质，安心分享
          </p>
        </div>
        <div className="flex flex-wrap gap-4 text-sm text-muted">
          <a href="#story" className="hover:text-ochre">
            品牌故事
          </a>
          <a href="#products" className="hover:text-ochre">
            产品系列
          </a>
          <a href="#contact" className="hover:text-ochre">
            联系咨询
          </a>
        </div>
      </div>
      <div className="border-t border-charcoal/5 py-4 text-center text-xs text-muted">
        © {year} Tanzania Sausage Co. 保留所有权利。演示站点，联系方式均为示例。
      </div>
    </footer>
  );
}
