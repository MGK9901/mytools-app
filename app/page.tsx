import type { Metadata } from "next";
import Image from "next/image";
import Countdown from "./_components/Countdown";

export const metadata: Metadata = {
  title: "ADAWAT HUB — Coming Soon",
  description: "Tech Tools & Solutions — Launching soon",
};

export default function Home() {
  // هدف العدّاد: الآن + 7 أيام
  const sevenDaysMs = 7 * 24 * 60 * 60 * 1000;
  const target = Date.now() + sevenDaysMs;

  return (
    <main className="min-h-dvh relative overflow-hidden text-white">
      {/* خلفية الصورة */}
      <div aria-hidden className="absolute inset-0 -z-30">
        <Image
          src="/bg.jpg"
          alt="ADAWAT HUB background"
          fill
          priority
          className="object-cover object-center"
        />
      </div>

      {/* تعتيم لتحسين التباين */}
      <div
        aria-hidden
        className="absolute inset-0 -z-20 bg-gradient-to-b from-black/70 via-black/55 to-black/70"
      />

      {/* شبكة خفيفة اختيارية */}
      <div aria-hidden className="absolute inset-0 -z-10 bg-grid pointer-events-none" />

      {/* المحتوى مثبت أسفل الصفحة */}
      <section className="relative z-10 mx-auto flex min-h-dvh max-w-4xl flex-col items-center justify-end gap-5 px-6 text-center pb-12 sm:pb-16 md:pb-20">

        {/* العنوان — متحرك وواضح */}
        <div className="glass px-4 py-2">
          <h1 className="animated-title pulse-glow text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
            <span className="fill">ADAWAT HUB</span>
            <span aria-hidden className="shine">ADAWAT HUB</span>
          </h1>
        </div>

        <p className="text-sm sm:text-base text-slate-100/95 drop-shadow-[0_2px_12px_rgba(0,0,0,0.6)]">
          Tech Tools & Solutions
        </p>

        {/* COMING SOON…! */}
        <div className="mt-1">
          <span className="glass px-5 py-3 inline-block">
            <span className="font-mono text-lg sm:text-xl md:text-2xl font-semibold tracking-wider">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 via-sky-400 to-fuchsia-400">
                COMING SOON
              </span>
              <span className="inline-flex w-[3ch] align-middle pl-1">
                <span className="inline-block w-[1ch] text-left animate-pulse" style={{ animationDelay: "0s" }}>.</span>
                <span className="inline-block w-[1ch] text-left animate-pulse" style={{ animationDelay: "0.2s" }}>.</span>
                <span className="inline-block w-[1ch] text-left animate-pulse" style={{ animationDelay: "0.4s" }}>.</span>
              </span>
              <span className="ml-1 animate-pulse">!</span>
            </span>
          </span>
        </div>

        {/* السطر العربي داخل بطاقة */}
        <div className="glass px-4 py-3">
          <p className="max-w-2xl text-balance text-slate-100/90">
            قريبًا — منصّة أدوات تقنية و حلول ذكية.
          </p>
        </div>

        {/* العدّاد */}
        <Countdown target={target} />
      </section>
    </main>
  );
}