"use client";
import { useState } from "react";
import { useTranslations } from "next-intl";

const inputClass =
  "h-[48px] w-full rounded-[15px] border border-black/10 bg-bg px-4 text-[14px] font-semibold text-ink outline-none transition-colors placeholder:text-ink2/55 focus:border-orange focus:bg-white md:h-[52px] md:rounded-[16px]";

type Status = "idle" | "sending" | "sent" | "error";

export default function ContactForm() {
  const t = useTranslations("contact");
  const needs = t.raw("form.needs") as string[];
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    setStatus("sending");
    try {
      // Le site est exporté en statique : l'envoi passe par le script PHP
      // déposé à la racine de l'hébergement (voir public/contact.php).
      const body = new URLSearchParams(
        // FormData ne contient que des champs texte ici.
        Array.from(new FormData(form), ([key, value]) => [key, String(value)]),
      ).toString();
      const response = await fetch("/contact.php", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body,
      });
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="rounded-[24px] border border-black/10 bg-white p-6 shadow-[0_18px_60px_rgba(17,19,21,.07)] md:rounded-[30px] md:p-10">
        <div className="grid h-14 w-14 place-items-center rounded-full bg-orange text-white">
          <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2} aria-hidden="true">
            <path d="m5 13 4 4L19 7" />
          </svg>
        </div>
        <h2 className="mt-5 text-[26px] font-semibold leading-[1.05] tracking-[-.025em] md:text-[32px]">
          {t("form.successTitle")}
        </h2>
        <p className="mt-3 max-w-[46ch] text-[14px] font-medium leading-[1.6] text-ink2 md:text-[15px]">
          {t("form.successText")}
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-6 rounded-full border border-black/15 bg-white px-6 py-3 text-[13px] font-bold text-ink transition-colors hover:border-black/40"
        >
          {t("form.again")}
        </button>
      </div>
    );
  }

  return (
    <form
      name="contact"
      method="POST"
      action="/contact.php"
      onSubmit={handleSubmit}
      className="rounded-[24px] border border-black/10 bg-white p-4 shadow-[0_18px_60px_rgba(17,19,21,.07)] md:rounded-[30px] md:p-7"
    >
      <p hidden>
        <label>
          {/* Piège à robots : laissé vide par les humains */}
          <input name="bot-field" tabIndex={-1} autoComplete="off" />
        </label>
      </p>

      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <p className="text-[12px] font-bold uppercase tracking-[.24em] text-orange">{t("form.eyebrow")}</p>
          <h2 className="mt-3 text-[28px] font-semibold leading-[1] tracking-[-.025em] md:text-[clamp(28px,3.6vw,44px)]">
            {t("form.title")}
          </h2>
        </div>
        <span className="rounded-full border border-black/10 bg-bg px-4 py-2 text-[11px] font-bold uppercase tracking-[.12em] text-ink2">
          {t("form.duration")}
        </span>
      </div>

      <div className="mt-5 grid gap-3 sm:grid-cols-2 md:mt-7">
        <input className={`${inputClass} sm:col-span-2`} name="name" placeholder={t("form.fields.name")} required />
        <input className={inputClass} type="tel" name="phone" placeholder={t("form.fields.phone")} required />
        <input className={inputClass} type="email" name="email" placeholder={t("form.fields.email")} required />
        <input className={inputClass} name="company" placeholder={t("form.fields.company")} />
        <input className={inputClass} name="city" placeholder={t("form.fields.city")} />
      </div>

      <div className="mt-4">
        <p className="mb-3 text-[12px] font-bold uppercase tracking-[.16em] text-ink2">{t("form.needTypeLabel")}</p>
        <div className="flex flex-wrap gap-2">
          {needs.map((need) => (
            <label key={need} className="cursor-pointer">
              <input className="peer sr-only" type="checkbox" name="need" value={need} />
              <span className="block rounded-full border border-black/10 bg-bg px-4 py-2 text-[12px] font-bold text-ink2 transition-colors peer-checked:border-orange peer-checked:bg-orange peer-checked:text-white">
                {need}
              </span>
            </label>
          ))}
        </div>
      </div>

      <textarea
        className="mt-4 min-h-28 w-full resize-none rounded-[18px] border border-black/10 bg-bg px-4 py-4 text-[14px] font-semibold leading-[1.5] text-ink outline-none transition-colors placeholder:text-ink2/55 focus:border-orange focus:bg-white md:min-h-32"
        name="message"
        placeholder={t("form.messagePlaceholder")}
      />

      <button
        type="submit"
        disabled={status === "sending"}
        className="mt-5 w-full rounded-full bg-orange px-7 py-3.5 text-[14px] font-bold text-white shadow-[0_12px_34px_rgba(242,72,28,.32)] transition-colors hover:bg-orangedark disabled:cursor-not-allowed disabled:opacity-60 md:px-8 md:py-4 md:text-[15px]"
      >
        {status === "sending" ? t("form.sending") : `${t("form.submit")} →`}
      </button>

      {status === "error" && (
        <p className="mt-4 rounded-[16px] border border-orange/30 bg-orange/[.06] px-4 py-3 text-[13px] font-semibold leading-[1.5] text-ink">
          {t("form.errorText")}
        </p>
      )}
    </form>
  );
}
