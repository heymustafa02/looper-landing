"use client";
import Prism from "./ui/Prism";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden w-full pt-60 pb-20 items-center justify-start">

      {/* Prism Background */}
      <div className="absolute inset-0 -z-20 pointer-events-none">
        <Prism
          animationType="rotate"
          timeScale={0.5}
          height={3.5}
          baseWidth={5.5}
          scale={3.6}
          hueShift={0}
          colorFrequency={1}
          noise={0}
          glow={1}
        />
      </div>

      {/* Aura overlay */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/40 via-zinc-950/0 to-zinc-950/0 opacity-70"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-blue-500/10 blur-[120px] rounded-full mix-blend-screen"></div>
      </div>

      {/* Hero Content */}
      <div className="flex flex-col text-center w-full max-w-7xl z-10 px-4 items-center [animation:animationIn_0.8s_ease-out_0.3s_both]">

        <h1 className="md:text-7xl text-5xl text-transparent bg-clip-text tracking-tight font-geist bg-gradient-to-b from-white via-white to-white/60 max-w-2xl mb-6 pb-2">
          Automate workflows like never before
        </h1>

        <p className="text-lg md:text-xl text-zinc-400 max-w-2xl font-light tracking-tight leading-relaxed mb-10 font-geist">
          Less friction. More flow. Loopra turns complex manual processes into intelligent, self-healing automation loops that scale with your code.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-20 items-center">

          <button className="hover:brightness-110 transition-all flex text-sm font-medium text-white border-transparent border rounded-full pt-3 pr-6 pb-3 pl-6 shadow-[0_0_20px_rgba(59,130,246,0.5)] items-center gap-2"
            style={{
              background:
                "linear-gradient(135deg, #2563eb 0%, #3b82f6 50%, #60a5fa 100%)"
            }}
          >
            <span className="tracking-tight font-geist">Start Building</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button className="group relative inline-flex min-w-[140px] cursor-pointer transition-all duration-[500ms] hover:-translate-y-[1px] hover:text-white shadow-lg overflow-hidden font-medium text-neutral-400 tracking-tight bg-zinc-900/50 border-zinc-700/50 border rounded-full py-3 px-6 items-center justify-center backdrop-blur-sm">
            <span className="relative z-10 text-sm transition-all duration-500 ease-out group-hover:translate-y-8 group-hover:opacity-0 group-hover:blur-md font-geist">
              View Documentation
            </span>

            <span className="absolute inset-0 z-10 flex items-center justify-center transition-all duration-300 ease-in-out -translate-y-8 group-hover:translate-y-0 group-hover:opacity-100 opacity-0 text-sm font-medium font-geist">
              View Documentation
            </span>
          </button>

        </div>
      </div>

    </section>
  );
}