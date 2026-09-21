"use client";
import { useEffect, useMemo, useRef, useState } from "react";
import { useTranslations } from "next-intl";
import * as THREE from "three";
import { Link } from "@/i18n/navigation";

const STEP_ICONS = ["structure", "beams", "pallets", "complete"] as const;
type StepIconType = (typeof STEP_ICONS)[number];

function StepIcon({ type }: { type: StepIconType }) {
  if (type === "structure") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M7 3v18M17 3v18M7 6h10M7 12h10M7 18h10" />
      </svg>
    );
  }
  if (type === "beams") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4 7h16M4 12h16M4 17h16M7 5v14M17 5v14" />
      </svg>
    );
  }
  if (type === "pallets") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M5 8h14v6H5zM6 17h12M8 14v3M16 14v3M9 6h6" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M5 13l4 4L19 7M4 20h16M7 4h10" />
    </svg>
  );
}

export default function Hero() {
  const t = useTranslations("hero");
  const tn = useTranslations("nav");
  const accentIndex = Number(t.raw("accentIndex"));

  // Animate the title per word (each word is a single span). This reads cleaner
  // than the per-letter scatter and works for Arabic too, where per-letter spans
  // would break the cursive glyph joining.
  const heroWords = useMemo(() => {
    let index = 0;
    return (t.raw("words") as string[]).map((text, wordIndex) => ({
      text,
      accent: wordIndex === accentIndex,
      chars: [{ char: text, index: index++ }],
    }));
  }, [t, accentIndex]);

  const heroSteps = useMemo(
    () =>
      (t.raw("steps") as Array<{ eyebrow: string; title: string; description: string }>).map((step, i) => ({
        ...step,
        number: String(i + 1).padStart(2, "0"),
        icon: STEP_ICONS[i] ?? "complete",
      })),
    [t],
  );

  const title = heroWords.map((word) => word.text).join(" ");

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const heroRef = useRef<HTMLElement>(null);
  const frameRef = useRef<HTMLDivElement>(null);
  const introRef = useRef<HTMLDivElement>(null);
  const titleLettersRef = useRef<HTMLSpanElement[]>([]);
  const scrollRef = useRef<HTMLDivElement>(null);
  const stepsRef = useRef<HTMLDivElement>(null);
  const stepFillRefs = useRef<HTMLSpanElement[]>([]);
  const activeStepRef = useRef(-1);
  const [activeStepIndex, setActiveStepIndex] = useState(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    const heroEl = heroRef.current;
    if (!canvas || !heroEl) return;

    const stepCount = STEP_ICONS.length;

    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
    const applyRendererQuality = () => {
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.75));
    };
    applyRendererQuality();
    renderer.shadowMap.enabled = false;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.15;

    const scene = new THREE.Scene();
    scene.fog = new THREE.Fog(0x08080e, 40, 90);
    const camera = new THREE.PerspectiveCamera(40, window.innerWidth / window.innerHeight, 0.1, 200);

    {
      const pmrem = new THREE.PMREMGenerator(renderer);
      const ec = document.createElement("canvas");
      ec.width = 64;
      ec.height = 256;
      const x = ec.getContext("2d")!;
      const g = x.createLinearGradient(0, 0, 0, 256);
      g.addColorStop(0, "#35322c");
      g.addColorStop(0.5, "#131212");
      g.addColorStop(1, "#050505");
      x.fillStyle = g;
      x.fillRect(0, 0, 64, 256);
      x.fillStyle = "rgba(255,140,70,.6)";
      x.beginPath();
      x.ellipse(46, 64, 12, 30, 0, 0, 7);
      x.fill();
      x.fillStyle = "rgba(215,210,205,.35)";
      x.beginPath();
      x.ellipse(16, 40, 8, 22, 0, 0, 7);
      x.fill();
      const t = new THREE.CanvasTexture(ec);
      t.mapping = THREE.EquirectangularReflectionMapping;
      scene.environment = pmrem.fromEquirectangular(t).texture;
      t.dispose();
      pmrem.dispose();
    }

    scene.add(new THREE.HemisphereLight(0x9a9aa2, 0x05050a, 0.5));
    const key = new THREE.DirectionalLight(0xffffff, 2.2);
    key.position.set(10, 20, 14);
    key.castShadow = false;
    scene.add(key);
    const glow = new THREE.PointLight(0xf2551e, 1.6, 60);
    glow.position.set(8, 6, 10);
    scene.add(glow);
    const rimWarm = new THREE.PointLight(0xffa060, 0.7, 60);
    rimWarm.position.set(-14, 6, -6);
    scene.add(rimWarm);

    const clamp01 = (t: number) => Math.min(1, Math.max(0, t));
    const easeOut = (t: number) => 1 - Math.pow(1 - t, 3);
    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    type Unit = {
      g: THREE.Group;
      base: THREE.Vector3;
      scatter: THREE.Vector3;
      spin: THREE.Euler;
      t0: number;
      t1: number;
      mats: THREE.MeshStandardMaterial[];
    };
    const units: Unit[] = [];
    const mkMat = (c: number, m: number, r: number) => {
      const mat = new THREE.MeshStandardMaterial({ color: c, metalness: m, roughness: r, transparent: true, opacity: 0 });
      mat.envMapIntensity = 1;
      return mat;
    };
    const mkBox = (w: number, h: number, d: number, mat: THREE.Material) => {
      const me = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), mat);
      me.castShadow = true;
      me.receiveShadow = true;
      return me;
    };
    const rand = (a: number, b: number) => a + Math.random() * (b - a);
    let uCount = 0;
    const addU = (g: THREE.Group, t0: number, t1: number, mats: THREE.MeshStandardMaterial[]) => {
      const ang = uCount * 2.39996323;
      const rr = 6 + (uCount % 5) * 1.6 + rand(0, 2);
      const scatter = new THREE.Vector3(Math.cos(ang) * rr, Math.sin(ang) * rr * 0.68 + rand(-1, 2), rand(-4, 5));
      uCount++;
      g.visible = false;
      units.push({ g, base: g.position.clone(), scatter, spin: new THREE.Euler(rand(-1.4, 1.4), rand(-1.4, 1.4), rand(-0.7, 0.7)), t0, t1, mats });
      return g;
    };

    const rack = new THREE.Group();
    scene.add(rack);
    const STEEL = 0x9aa2ab;
    const BEAM = 0xf2481c;
    const nB = 3,
      nL = 3,
      bayW = 2.6,
      depth = 1.15,
      fH = 5.0,
      post = 0.13;
    const fx: number[] = [];
    for (let i = 0; i <= nB; i++) fx.push(i * bayW - (nB * bayW) / 2);
    const lv = [1.5, 2.85, 4.2];
    fx.forEach((xx, i) => {
      const g = new THREE.Group();
      const mat = mkMat(STEEL, 0.9, 0.3);
      [depth / 2, -depth / 2].forEach((z) => {
        const p = mkBox(post, fH, post, mat);
        p.position.set(0, fH / 2, z);
        g.add(p);
      });
      for (let s = 0; s <= 6; s++) {
        const h = mkBox(post * 0.6, post * 0.6, depth, mat);
        h.position.set(0, Math.min((fH / 6) * s, fH - 0.05), 0);
        g.add(h);
      }
      for (let s = 0; s < 6; s++) {
        const y0 = (fH / 6) * s,
          y1 = (fH / 6) * (s + 1),
          len = Math.hypot(depth, y1 - y0);
        const d = mkBox(post * 0.5, post * 0.5, len, mat);
        d.position.set(0, (y0 + y1) / 2, 0);
        d.rotation.x = Math.atan2(depth, y1 - y0) * (s % 2 ? -1 : 1);
        g.add(d);
      }
      g.position.x = xx;
      addU(g, 0.02 + i * 0.04, 0.24 + i * 0.04, [mat]);
      rack.add(g);
    });
    for (let L = 0; L < nL; L++)
      for (let j = 0; j < nB; j++) {
        const g = new THREE.Group();
        const mat = mkMat(BEAM, 0.6, 0.34);
        const cx = fx[j] + bayW / 2;
        [depth / 2 - 0.05, -depth / 2 + 0.05].forEach((z) => {
          const b = mkBox(bayW + post, 0.14, 0.07, mat);
          b.position.set(cx, lv[L], z);
          g.add(b);
        });
        const t0 = 0.26 + L * 0.05 + j * 0.015;
        addU(g, t0, t0 + 0.16, [mat]);
        rack.add(g);
      }
    for (let L = 0; L < nL; L++)
      for (let j = 0; j < nB; j++) {
        const g = new THREE.Group();
        const mat = mkMat(0xb98442, 0.05, 0.72);
        const cx = fx[j] + bayW / 2;
        [-0.58, 0.58].forEach((px) => {
          const pg = new THREE.Group();
          const deck = mkBox(1, 0.06, depth * 0.86, mat);
          deck.position.y = 0.13;
          pg.add(deck);
          for (let b = -1; b <= 1; b++) {
            const bl = mkBox(0.14, 0.12, depth * 0.86, mat);
            bl.position.set(b * 0.42, 0.05, 0);
            pg.add(bl);
          }
          pg.position.set(cx + px, lv[L] + 0.07, 0);
          g.add(pg);
        });
        const t0 = 0.5 + L * 0.05 + j * 0.02;
        addU(g, t0, t0 + 0.18, [mat]);
        rack.add(g);
      }
    const cc = [0xcfa771, 0xbd925a, 0xd8b079];
    for (let L = 0; L < nL; L++)
      for (let j = 0; j < nB; j++) {
        const g = new THREE.Group();
        const mats: THREE.MeshStandardMaterial[] = [];
        const cx = fx[j] + bayW / 2;
        [-0.58, 0.58].forEach((px, k) => {
          const mat = mkMat(cc[(L + j + k) % 3], 0.02, 0.82);
          mats.push(mat);
          const h = 0.55 + ((L + j + k) % 2) * 0.28;
          const bx = mkBox(0.86, h, depth * 0.78, mat);
          bx.position.set(cx + px, lv[L] + 0.2 + h / 2, 0);
          g.add(bx);
        });
        const t0 = 0.68 + L * 0.04 + j * 0.015;
        addU(g, t0, t0 + 0.18, mats);
        rack.add(g);
      }

    const C0 = { p: new THREE.Vector3(0, 7.5, 25), t: new THREE.Vector3(0, 4, 0) };
    const C1 = { p: new THREE.Vector3(3.8, 5.45, 15), t: new THREE.Vector3(0, 3.35, 0) };

    const secProg = () => {
      const r = heroEl.getBoundingClientRect();
      const hold = window.innerHeight * 0.7;
      const activeRange = Math.max(1, r.height - window.innerHeight - hold);
      return clamp01(-r.top / activeRange);
    };

    const clock = new THREE.Clock();
    let raf = 0;
    const tmpT = new THREE.Vector3();
    const tick = () => {
      const time = clock.getElapsedTime();
      const forced = (window as unknown as { __fHero?: number }).__fHero;
      const p = typeof forced === "number" ? forced : secProg();
      const intro = clamp01((time - 0.2) * 1.4);
      const textOut = easeOut(clamp01((p - 0.02) / 0.34));
      const sceneP = clamp01((p - 0.27) / 0.73);
      const frameP = easeOut(clamp01((p - 0.17) / 0.72));
      if (frameRef.current) {
        const scale = lerp(1, 0.925, frameP);
        const radius = lerp(0, 34, frameP);
        frameRef.current.style.transform = `scale(${scale})`;
        frameRef.current.style.borderRadius = `${radius}px`;
      }
      if (introRef.current) {
        introRef.current.style.opacity = String(clamp01(1 - textOut * 1.06));
        introRef.current.style.transform = `translate3d(0, ${-36 * textOut}px, 0) scale(${1 + textOut * 0.035})`;
        introRef.current.style.filter = `blur(${textOut * 7}px)`;
      }
      titleLettersRef.current.forEach((letter, i) => {
        const side = i % 2 === 0 ? -1 : 1;
        const x = side * (18 + (i % 5) * 9) * textOut;
        const y = -(30 + (i % 6) * 11) * textOut;
        const r = side * (5 + (i % 7) * 2) * textOut;
        letter.style.transform = `translate3d(${x}px, ${y}px, 0) rotate(${r}deg)`;
      });
      if (scrollRef.current) {
        scrollRef.current.style.opacity = String(clamp01(1 - p / 0.18));
        scrollRef.current.style.transform = `translateY(${p * 28}px)`;
      }
      const stepsIn = easeOut(clamp01((p - 0.18) / 0.2));
      if (stepsRef.current) {
        stepsRef.current.style.opacity = String(stepsIn);
        stepsRef.current.style.transform = `translate3d(0, ${(1 - stepsIn) * 24}px, 0)`;
      }
      const stepFloat = sceneP * stepCount;
      const stepIndex = Math.min(stepCount - 1, Math.floor(stepFloat));
      const stepLocal = clamp01(stepFloat - stepIndex);
      if (activeStepRef.current !== stepIndex) {
        activeStepRef.current = stepIndex;
        setActiveStepIndex(stepIndex);
      }
      stepFillRefs.current.forEach((fill, i) => {
        const amount = i < stepIndex ? 1 : i === stepIndex ? Math.max(stepLocal, 0.08) : 0;
        fill.style.transform = `scaleX(${amount})`;
      });
      for (const u of units) {
        const local = clamp01((sceneP - u.t0) / (u.t1 - u.t0));
        const e = easeOut(local);
        u.g.visible = intro > 0.01;
        const k = 1 - e;
        const floatY = k * Math.sin(time * 0.8 + u.base.x) * 0.5;
        u.g.position.set(
          u.base.x + u.scatter.x * k,
          u.base.y + u.scatter.y * k + floatY,
          u.base.z + u.scatter.z * k,
        );
        u.g.rotation.set(u.spin.x * k, u.spin.y * k, u.spin.z * k);
        const objectPresence = lerp(0.24, 1, easeOut(clamp01((p - 0.08) / 0.3)));
        for (const m of u.mats) m.opacity = intro * objectPresence;
      }
      rack.rotation.y = lerp(-0.4, 0.14, easeOut(sceneP)) + Math.sin(time * 0.14) * 0.03;
      const e = easeOut(sceneP);
      camera.position.lerpVectors(C0.p, C1.p, e);
      camera.position.x += Math.sin(time * 0.15) * 0.4;
      camera.lookAt(tmpT.lerpVectors(C0.t, C1.t, e));

      renderer.render(scene, camera);
      raf = requestAnimationFrame(tick);
    };
    const resize = () => {
      applyRendererQuality();
      renderer.setSize(window.innerWidth, window.innerHeight);
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
    };
    window.addEventListener("resize", resize);
    resize();
    tick();
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      renderer.dispose();
    };
  }, []);

  return (
    <section ref={heroRef} id="top" className="relative min-h-[390vh] bg-bg">
      <div className="sticky top-0 h-screen overflow-hidden bg-bg">
        <div
          ref={frameRef}
          className="absolute inset-0 origin-center overflow-hidden bg-[#08080e] shadow-[0_18px_70px_rgba(17,19,21,.18)] will-change-transform"
        >
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(40% 44% at 50% 52%, rgba(255,150,90,.16), transparent 64%), radial-gradient(66% 60% at 66% 40%, rgba(242,72,28,.20), transparent 60%), radial-gradient(55% 55% at 22% 74%, rgba(242,72,28,.10), transparent 62%), #08080e",
            }}
          />
          <div
            className="pointer-events-none absolute inset-0 opacity-[.22]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.05) 1px, transparent 1px), repeating-linear-gradient(135deg, transparent 0 34px, rgba(242,72,28,.12) 34px 35px, transparent 35px 72px)",
              backgroundSize: "92px 92px, 92px 92px, 100% 100%",
            }}
          />
          <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(120% 85% at 50% 45%, transparent 58%, rgba(0,0,0,.46) 100%)",
            }}
          />

          <div
            ref={introRef}
            className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center px-5 pt-8 text-center"
            style={{ willChange: "opacity, transform, filter" }}
          >
            <div className="relative max-w-[1180px]">
              <p className="mb-5 text-[11px] font-bold uppercase tracking-[.36em] text-orange sm:mb-6 sm:text-[13px] sm:tracking-[.42em]">
                {t("eyebrow")}
              </p>
              <h1
                aria-label={title}
                className="flex flex-wrap items-baseline justify-center gap-x-[.24em] gap-y-2 font-nb text-[46px] font-extrabold leading-[.9] text-white sm:gap-x-[.28em] sm:text-[58px] sm:leading-[.92] md:text-[72px] lg:text-[86px] xl:text-[96px]"
              >
                {heroWords.map((word) => (
                  <span
                    key={word.text}
                    className={`inline-flex whitespace-nowrap ${word.accent ? "text-orange" : "text-white"}`}
                    aria-hidden="true"
                  >
                    {word.chars.map(({ char, index }) => (
                      <span
                        key={`${char}-${index}`}
                        ref={(el) => {
                          if (el) titleLettersRef.current[index] = el;
                        }}
                        className="inline-block will-change-transform"
                      >
                        {char}
                      </span>
                    ))}
                  </span>
                ))}
              </h1>
              <p className="mx-auto mt-6 max-w-[330px] text-[10px] font-bold uppercase leading-[1.55] tracking-[.15em] text-white/62 sm:mt-7 sm:max-w-[760px] sm:text-[14px] sm:leading-normal sm:tracking-[.18em]">
                {t("subtitle")}
              </p>
              <Link
                href="/contact"
                className="pointer-events-auto mt-6 inline-flex items-center justify-center rounded-full bg-orange px-5 py-3 text-[13px] font-bold text-white shadow-[0_10px_26px_rgba(245,130,32,.35)] transition-colors hover:bg-orangedark sm:hidden"
              >
                {tn("quote")} →
              </Link>
            </div>
          </div>

          <div
            ref={stepsRef}
            className="pointer-events-none absolute bottom-[max(24px,4vh)] left-[max(26px,5vw)] right-[max(26px,5vw)] z-20 hidden lg:block"
            style={{ opacity: 0, transform: "translate3d(0, 24px, 0)", willChange: "opacity, transform" }}
          >
            <div className="hero-step-panel hero-step-dock">
              <div className="hero-step-kicker">
                <span className="text-[11px] font-bold uppercase tracking-[.26em] text-orange">{t("liveBadge")}</span>
                <span className="rounded-full border border-white/12 px-3 py-1 text-[10px] font-bold uppercase tracking-[.18em] text-white/58">
                  {t("guideBadge")}
                </span>
              </div>
              <div className="hero-step-grid">
                {heroSteps.map((step, index) => (
                  <div
                    key={step.number}
                    className={`hero-step ${index === activeStepIndex ? "is-active" : ""} ${
                      index < activeStepIndex ? "is-complete" : ""
                    }`}
                  >
                    <div className="hero-step-head">
                      <span className="hero-step-icon">
                        <StepIcon type={step.icon} />
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="hero-step-eyebrow">{step.eyebrow}</span>
                        <strong className="hero-step-title">{step.title}</strong>
                      </span>
                      <span className="hero-step-number">{step.number}</span>
                    </div>
                    <p className="hero-step-copy">{step.description}</p>
                    <span className="hero-step-track">
                      <span
                        ref={(el) => {
                          if (el) stepFillRefs.current[index] = el;
                        }}
                        className="hero-step-fill"
                      />
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div
            ref={scrollRef}
            className="pointer-events-none absolute inset-x-0 bottom-8 z-10 flex flex-col items-center gap-2 text-[11px] font-bold uppercase tracking-[.34em] text-white/70"
            style={{ willChange: "opacity, transform" }}
          >
            {t("scroll")}
            <span className="h-2 w-2 rotate-45 border-b-2 border-r-2 border-white/70" />
          </div>
        </div>
      </div>
    </section>
  );
}
