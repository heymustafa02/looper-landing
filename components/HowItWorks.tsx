"use client";

import { useEffect } from "react";
import { FileText, GitMerge, TrendingUp } from "lucide-react";

export default function HowItWorks() {
  useEffect(() => {
    const wrapper = document.querySelector(".stack-cards-container");
    const cards = document.querySelectorAll(".stack-card");

    if (!wrapper || !cards.length) return;

    const updateStack = () => {
      cards.forEach((card, index) => {
        const nextCard = cards[index + 1];
        const cardRect = card.getBoundingClientRect();
        const stickyTop = 112 + index * 16;

        if (nextCard) {
          const nextRect = nextCard.getBoundingClientRect();
          const isStuck = cardRect.top <= stickyTop + 1;

          if (isStuck) {
            const gap = nextRect.top - stickyTop;
            const maxGap = window.innerHeight * 0.5;
            const ratio = Math.max(0, Math.min(1, gap / maxGap));

            const scale = 0.92 + 0.1 * ratio;
            const opacity = 0.5 + 0.5 * ratio;
            const brightness = 50 + 50 * ratio;

            (card as HTMLElement).style.transform = `scale(${scale})`;
            (card as HTMLElement).style.opacity = `${opacity}`;
            (card as HTMLElement).style.filter = `brightness(${brightness}%)`;
          } else {
            (card as HTMLElement).style.transform = "scale(1.02)";
            (card as HTMLElement).style.opacity = "1";
            (card as HTMLElement).style.filter = "brightness(100%)";
          }
        } else {
          (card as HTMLElement).style.transform = "scale(1.02)";
          (card as HTMLElement).style.opacity = "1";
          (card as HTMLElement).style.filter = "brightness(100%)";
        }
      });
    };

    window.addEventListener("scroll", updateStack, { passive: true });
    updateStack();

    return () => window.removeEventListener("scroll", updateStack);
  }, []);

  const steps = [
    {
      number: "01",
      icon: FileText,
      title: "Connect your data",
      description: "Link your tools (CRM, email, database, spreadsheets). Loopra unifies events and keeps everything in sync.",
      tags: ["CRM", "Email", "Database", "Sheets"],
    },
    {
      number: "02",
      icon: GitMerge,
      title: "Build with AI instructions",
      description: "Describe your automation. Loopra generates steps, conditions, and routing so your workflow is ready to run.",
      example: '"When a lead replies, score it, assign an owner, and send a follow-up email."',
    },
    {
      number: "03",
      icon: TrendingUp,
      title: "Launch, monitor, optimize",
      description: "Go live with confidence. Monitor every run, get alerts, and improve performance with clear logs and outcomes.",
      features: ["Real-time logs", "Alerts", "Analytics"],
    },
  ];

  return (
    <section className="[animation:animationIn_0.8s_ease-out_0.2s_both] animate-on-scroll lg:px-6 lg:pb-12 lg:pt-12 max-w-7xl mr-auto ml-auto pt-24 pr-4 pb-24 pl-4">
      <div className="md:p-8 bg-gradient-to-br from-blue-500/5 via-transparent to-blue-500/5 ring-white/10 ring-1 rounded-[28px] pt-6 pr-6 pb-6 pl-6 relative shadow-[0_0px_0px_rgba(0,0,0,0)] gap-x-12 gap-y-12">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between mb-24 gap-x-6 gap-y-6 items-start">
          <div>
            <p className="text-[11px] uppercase tracking-widest text-blue-400 font-semibold mb-3 font-geist">How it works</p>
            <h2 className="sm:text-4xl text-3xl font-semibold text-white tracking-tight font-geist">
              Automate in three simple steps
            </h2>
            <p className="mt-4 text-base text-zinc-400 max-w-xl leading-relaxed font-geist">
              Connect your tools, define your logic, and let Loopra run workflows automatically in the background with AI-powered decisions.
            </p>
          </div>
          <button className="inline-flex text-[13px] font-medium transition-all hover:brightness-110 hover:shadow-[0_0_20px_rgba(59,130,246,0.4)] text-white bg-zinc-800 border border-zinc-700 h-10 rounded-full px-6 items-center font-geist">
            See how it works
          </button>
        </div>

        <div className="flex flex-col gap-[35vh] pb-[20vh] relative stack-cards-container">
          {steps.map((step, index) => (
            <div
              key={index}
              className="stack-card sticky overflow-hidden group bg-[#02050e] w-full border-white/10 border rounded-[32px] relative transition-all duration-75 ease-linear origin-top"
              style={{
                top: `${7 + index * 1}rem`,
                transform: index === 2 ? "scale(1.02)" : "scale(0.92)",
                opacity: index === 2 ? 1 : 0.5,
                filter: index === 2 ? "brightness(100%)" : "brightness(50%)",
              }}
            >
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-blue-900/25 via-transparent to-transparent pointer-events-none"></div>
              <div className="absolute -top-24 -right-24 w-72 h-72 bg-blue-500/10 blur-[80px] rounded-full pointer-events-none"></div>

              <div className="absolute top-2 right-2 sm:top-4 sm:right-6 z-0 pointer-events-none select-none">
                <div className="text-[170px] sm:text-[200px] font-semibold text-white/[0.055] font-geist leading-none tracking-tighter">
                  {step.number}
                </div>
              </div>

              <div className="grid lg:grid-cols-2 gap-12 md:p-20 p-8 relative z-10 items-center">
                <div className="relative flex flex-col items-center justify-center min-h-[420px]">
                  <div className="absolute -left-2 top-2 w-16 h-16 rounded-full bg-[#0f1219] border border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.5)] flex items-center justify-center z-30 group-hover:scale-105 transition-transform duration-500">
                    <step.icon className="w-7 h-7 text-zinc-300 group-hover:text-blue-400 transition-colors" />
                  </div>
                  <div className="w-full max-w-[520px] rounded-2xl bg-[#0f1116] border border-white/5 shadow-2xl relative p-6">
                    <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-44 h-20 bg-blue-500/20 blur-[55px] rounded-full pointer-events-none opacity-60"></div>
                    {/* Placeholder visual */}
                    <div className="h-64 flex items-center justify-center text-zinc-600">
                      <step.icon className="w-20 h-20" />
                    </div>
                  </div>
                </div>

                <div className="relative flex flex-col justify-center">
                  <h3 className="text-4xl font-semibold text-white mb-6 font-geist tracking-tight">{step.title}</h3>
                  <p className="text-lg text-zinc-300/90 leading-relaxed font-geist max-w-xl">{step.description}</p>

                  {step.tags && (
                    <div className="mt-8 flex flex-wrap gap-2">
                      {step.tags.map((tag, i) => (
                        <span key={i} className="text-[12px] px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-zinc-200 font-geist">
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}

                  {step.example && (
                    <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-4 max-w-xl">
                      <div className="text-[12px] uppercase tracking-widest text-blue-300/90 font-semibold font-geist mb-2">Example</div>
                      <div className="text-zinc-200 font-geist">{step.example}</div>
                    </div>
                  )}

                  {step.features && (
                    <div className="mt-8 flex items-center gap-3">
                      {step.features.map((feature, i) => (
                        <div key={i} className="px-4 py-2 rounded-2xl bg-white/5 border border-white/10 text-zinc-200 font-geist text-sm">
                          {feature}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}