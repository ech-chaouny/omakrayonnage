export default function Logo({ light = false, className = "" }: { light?: boolean; className?: string }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={light ? "/logo-omak-light.png" : "/logo-omak.png"}
      alt="OMAK RAYONNAGE"
      className={`${className || "h-11"} w-auto select-none object-contain`}
    />
  );
}
