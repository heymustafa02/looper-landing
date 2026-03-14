"use client";

import { useEffect } from "react";

export default function PhilosophySection() {
  useEffect(() => {
    const container = document.getElementById("karaoke-text");
    if (!container) return;

    const words = container.querySelectorAll(".k-word");
    let ticking = false;

    const updateWords = () => {
      const triggerLine = window.innerHeight * 0.75;

      words.forEach((word) => {
        const rect = word.getBoundingClientRect();
        if (rect.top < triggerLine) {
          word.classList.add("active");
        } else {
          word.classList.remove("active");
        }
      });

      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateWords);
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });

    updateWords();

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const words = [
    "We", "build", "the", "nervous", "system", "for", "the", "autonomous", "enterprise.",
    "Rejecting", "the", "friction", "of", "manual", "orchestration,", "we", "engineer",
    "intelligent", "loops", "that", "blend", "data", "precision", "with", "infinite",
    "scale", "to"
  ];

  const italicWords = ["accelerate", "and", "evolve."];

  return (
    <section className="[animation:animationIn_0.8s_ease-out_0.2s_both] animate-on-scroll lg:px-6 lg:pb-12 lg:pt-12 max-w-7xl mr-auto ml-auto pt-24 pr-4 pb-24 pl-4" id="features">
      <section className="md:px-12 bg-zinc-950 pt-32 pr-6 pb-32 pl-6 relative overflow-hidden rounded-3xl border border-white/5">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none"></div>

        <div className="text-center max-w-5xl mr-auto ml-auto relative z-10">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[11px] font-semibold tracking-[0.2em] uppercase mb-10 font-geist shadow-[0_0_15px_rgba(59,130,246,0.15)]">
            [ The Philosophy ]
          </span>

          <h2
            id="karaoke-text"
            className="text-3xl md:text-5xl leading-tight font-normal text-white mb-12 tracking-tight font-geist flex flex-wrap justify-center gap-x-[0.25em] gap-y-1"
          >
            {words.map((word, i) => (
              <span key={i} className="k-word opacity-20 blur-[1px] text-zinc-500">
                {word}
              </span>
            ))}
            <span className="italic font-serif inline-flex gap-x-[0.25em]">
              {italicWords.map((word, i) => (
                <span key={i} className="k-word opacity-20 blur-[1px] text-zinc-400">
                  {word}
                </span>
              ))}
            </span>
          </h2>

          <p className="text-xs text-zinc-500 uppercase tracking-[0.15em] mt-12 font-geist font-medium">
            Welcome to the new standard
          </p>
        </div>
      </section>
    </section>
  );
}