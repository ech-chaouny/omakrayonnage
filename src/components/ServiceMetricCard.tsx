export type ServiceMetricIcon = "site" | "partners" | "steps" | "study" | "mount" | "control" | "support";

type ServiceMetricCardProps = {
  index: string;
  value: string;
  label: string;
  text: string;
  icon: ServiceMetricIcon;
  compact?: boolean;
};

function Icon({ name }: { name: ServiceMetricIcon }) {
  const className = "h-7 w-7";

  if (name === "partners") {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.1} aria-hidden="true">
        <path d="M7 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
        <path d="M17 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
        <path d="M5 15h4l3 4 3-4h4" />
      </svg>
    );
  }

  if (name === "steps") {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.1} aria-hidden="true">
        <path d="M5 6h4v4H5zM15 6h4v4h-4zM5 16h4v4H5zM15 16h4v4h-4z" />
        <path d="M9 8h6M17 10v6M9 18h6M7 10v6" />
      </svg>
    );
  }

  if (name === "study") {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.1} aria-hidden="true">
        <path d="M5 5h14v14H5z" />
        <path d="M8 9h8M8 13h5M15 16l3 3" />
      </svg>
    );
  }

  if (name === "mount") {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.1} aria-hidden="true">
        <path d="M6 19V5M18 19V5M6 8h12M6 13h12M6 18h12" />
        <path d="m9 5 6 14M15 5 9 19" />
      </svg>
    );
  }

  if (name === "control") {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.1} aria-hidden="true">
        <path d="M12 3 5 6v5c0 5 3.2 8.2 7 10 3.8-1.8 7-5 7-10V6z" />
        <path d="m8.5 12 2.2 2.2 4.8-5" />
      </svg>
    );
  }

  if (name === "support") {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.1} aria-hidden="true">
        <path d="M6 17v-5a6 6 0 0 1 12 0v5" />
        <path d="M5 14h3v5H5zM16 14h3v5h-3z" />
        <path d="M12 20h3" />
      </svg>
    );
  }

  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.1} aria-hidden="true">
      <path d="M4 20h16" />
      <path d="M6 20V9l6-5 6 5v11" />
      <path d="M9 20v-7h6v7" />
    </svg>
  );
}

export default function ServiceMetricCard({ index, value, label, text, icon, compact = false }: ServiceMetricCardProps) {
  return (
    <div
      className={`relative h-full overflow-hidden rounded-[24px] border border-black/10 bg-white shadow-[0_18px_64px_rgba(17,19,21,.08)] md:rounded-[30px] ${
        compact ? "min-h-[190px] p-4 md:min-h-[230px] md:p-5" : "min-h-[240px] p-4 md:min-h-[315px] md:p-7"
      }`}
    >
      <span
        className={`absolute -right-12 -top-14 rounded-full bg-orange/10 ${
          compact ? "h-28 w-28 md:h-36 md:w-36" : "h-32 w-32 md:h-44 md:w-44"
        }`}
        aria-hidden="true"
      />
      <span className="absolute right-4 top-4 rounded-full border border-black/10 bg-bg px-3 py-2 text-[11px] font-bold text-ink2 shadow-[0_8px_24px_rgba(17,19,21,.05)] md:right-6 md:top-6 md:px-5 md:py-3 md:text-[12px]">
        {index}
      </span>
      <span
        className={`grid place-items-center rounded-[18px] bg-orange text-white shadow-[0_18px_42px_rgba(242,72,28,.2)] md:rounded-[20px] ${
          compact ? "h-12 w-12 md:h-14 md:w-14" : "h-12 w-12 md:h-16 md:w-16"
        }`}
      >
        <Icon name={icon} />
      </span>
      <p className={`font-nb font-bold leading-none text-orange ${compact ? "mt-8 text-[34px] md:mt-10 md:text-[46px]" : "mt-10 text-[42px] md:mt-16 md:text-[clamp(52px,6vw,86px)]"}`}>
        {value}
      </p>
      <h3 className="mt-5 text-[12px] font-bold uppercase tracking-[.18em] text-ink md:mt-7 md:text-[13px] md:tracking-[.22em]">{label}</h3>
      <p className="mt-3 text-[14px] font-medium leading-[1.6] text-ink2 md:mt-5 md:text-[15px] md:leading-[1.65]">{text}</p>
    </div>
  );
}
