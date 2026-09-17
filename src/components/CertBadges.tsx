import Image from "next/image";

type Props = {
  /** Dark section → white plate behind badges */
  onDark?: boolean;
  className?: string;
  size?: "sm" | "md";
};

export default function CertBadges({ onDark = false, className = "", size = "md" }: Props) {
  const h = size === "sm" ? 56 : 72;
  const plate = onDark
    ? "rounded-2xl bg-white p-3 shadow-sm"
    : "rounded-2xl bg-white/90 p-3 ring-1 ring-charcoal/5 shadow-sm";

  return (
    <div className={`flex flex-wrap items-center gap-3 ${className}`}>
      <div className={plate}>
        <Image
          src="/brand/logo-tbs.png"
          alt="Tanzania Bureau of Standards (TBS) certification"
          width={h}
          height={h}
          className="h-auto w-auto object-contain"
          style={{ maxHeight: h }}
        />
      </div>
      <div className={plate}>
        <Image
          src="/brand/logo-bakwata-halal.png"
          alt="BAKWATA Halal certification"
          width={h}
          height={h}
          className="h-auto w-auto object-contain"
          style={{ maxHeight: h }}
        />
      </div>
    </div>
  );
}
