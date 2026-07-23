import { Link } from "@/i18n/navigation";

export default function NotFound() {
  return (
    <main className="grid min-h-screen place-items-center bg-bg px-6 text-center text-ink">
      <div>
        <p className="font-nb text-[clamp(72px,12vw,120px)] font-bold leading-none text-orange">404</p>
        <p className="mt-3 text-[18px] font-semibold">Page introuvable · Page not found · الصفحة غير موجودة</p>
        <Link
          href="/"
          className="mt-8 inline-flex rounded-full bg-orange px-7 py-3 text-[14px] font-bold text-white transition-colors hover:bg-orangedark"
        >
          OMAK RAYONNAGE →
        </Link>
      </div>
    </main>
  );
}
