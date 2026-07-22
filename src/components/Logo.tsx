export default function Logo({ light = false }: { light?: boolean }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={light ? "/logo-omak-light.png" : "/logo-omak.png"}
      alt="OMAK RAYONNAGE"
      className="h-11 w-auto select-none object-contain"
    />
  );
}
