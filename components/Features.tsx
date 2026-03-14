
"use client";

import { Cpu, FileJson, Webhook, GitBranch, Slack, Github, Figma, Zap, Activity, Server, Workflow } from "lucide-react";

export default function FeaturesGrid() {
  return (
    <section className="[animation:animationIn_0.8s_ease-out_0.2s_both] animate-on-scroll lg:px-6 lg:pb-12 lg:pt-12 max-w-7xl mr-auto ml-auto pt-24 pr-4 pb-24 pl-4">
      <div className="md:p-8 bg-gradient-to-br from-blue-500/5 via-transparent to-blue-500/5 rounded-[28px] pt-6 pr-6 pb-6 pl-6 shadow-[0_0px_0px_rgba(0,0,0,0)] ring-1 ring-white/10 relative">
        {/* Section Header */}
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between gap-x-6 gap-y-6 items-start mb-12">
          <div>
            <p className="text-[11px] uppercase tracking-widest text-blue-400 font-semibold mb-3 font-geist">
              Product capabilities
            </p>
            <h2 className="sm:text-4xl text-3xl font-semibold text-white tracking-tight font-geist">
              One platform, infinite workflows
            </h2>
            <p className="mt-4 text-base text-zinc-400 max-w-xl leading-relaxed font-geist">
              Loopra connects to your stack, learns from your data, and turns repetitive tasks into reusable, intelligent playbooks.
            </p>
          </div>
          <button className="inline-flex text-[13px] font-medium transition-all hover:brightness-110 hover:shadow-[0_0_20px_rgba(59,130,246,0.4)] text-white bg-zinc-800 border border-zinc-700 h-10 rounded-full px-6 items-center font-geist">
            Explore Features
          </button>
        </div>

        {/* Grid */}
        <div className="grid gap-4 md:grid-cols-3 gap-x-4 gap-y-4">
          {/* Card 1: Orbit Animation */}
          <div className="group flex flex-col overflow-hidden sm:p-4 bg-zinc-950/50 h-[380px] border border-white/10 rounded-2xl pt-3 pr-3 pb-3 pl-3 relative shadow-inner">
            <div className="flex flex-col h-full relative gap-4">
              <div className="relative flex items-center justify-center rounded-xl h-52 overflow-hidden bg-[#020617] w-full shrink-0 border border-white/5">
                <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(#3b82f6 1px, transparent 1px)", backgroundSize: "20px 20px" }}></div>

                <div className="relative z-10 w-56 h-56 scale-90">
                  <div className="absolute inset-2 rounded-full border border-zinc-800"></div>
                  <div className="absolute inset-2 rounded-full border-t-2 border-t-blue-500/80 border-l-0 border-r-0 border-b-0" style={{ transform: "rotate(40deg)" }}></div>
                  <div className="absolute inset-10 rounded-full border border-zinc-800"></div>
                  <div className="absolute inset-10 rounded-full border-t-2 border-t-cyan-400/80 border-l-0 border-r-0 border-b-0" style={{ transform: "rotate(-20deg)" }}></div>

                  <div className="absolute inset-[86px] rounded-full bg-gradient-to-b from-blue-500 to-indigo-600 shadow-[0_0_40px_rgba(59,130,246,0.5)] flex items-center justify-center z-20">
                    <Cpu className="w-6 h-6 text-white" />
                  </div>

                  <div className="absolute inset-0 z-10 pointer-events-none animate-orbit">
                    <div className="absolute -left-1 top-16 h-8 w-8 rounded-full border border-white/20 bg-zinc-900 flex items-center justify-center animate-orbit-reverse">
                      <Server className="w-3 h-3 text-zinc-400" />
                    </div>
                    <div className="absolute right-2 top-6 h-8 w-8 rounded-full border border-white/20 bg-zinc-900 flex items-center justify-center animate-orbit-reverse">
                      <Activity className="w-3 h-3 text-zinc-400" />
                    </div>
                    <div className="absolute -right-1 bottom-10 h-8 w-8 rounded-full border border-white/20 bg-zinc-900 flex items-center justify-center animate-orbit-reverse">
                      <Zap className="w-3 h-3 text-zinc-400" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative mt-auto pb-2 px-2">
                <h3 className="text-lg font-medium text-white mb-2 font-geist">Unified Intelligence</h3>
                <p className="text-sm text-zinc-400 leading-relaxed font-geist">
                  Connect models, databases, and APIs. Manage context and tokens across your entire infrastructure.
                </p>
              </div>
            </div>
          </div>

          {/* Card 2: Scrolling Columns */}
          <div className="group flex flex-col overflow-hidden sm:p-4 bg-zinc-950/50 h-[380px] border border-white/10 rounded-2xl pt-3 pr-3 pb-3 pl-3 relative shadow-inner">
            <div className="flex flex-col h-full relative gap-4">
              <div className="flex overflow-hidden h-52 bg-[#020617] rounded-xl relative items-center justify-center w-full shrink-0 border border-white/5" style={{ maskImage: "linear-gradient(180deg, transparent, black 20%, black 80%, transparent)" }}>
                <div className="grid grid-cols-3 w-full h-full z-10 p-4 gap-3">
                  <div className="flex flex-col gap-3 animate-aura-scroll-down">
                    <div className="aspect-square rounded-lg bg-zinc-900 border border-white/5 flex items-center justify-center">
                      <FileJson className="w-5 h-5 text-blue-400" />
                    </div>
                    <div className="aspect-square rounded-lg bg-zinc-900 border border-white/5 flex items-center justify-center">
                      <Webhook className="w-5 h-5 text-purple-400" />
                    </div>
                    <div className="aspect-square rounded-lg bg-zinc-900 border border-white/5 flex items-center justify-center">
                      <GitBranch className="w-5 h-5 text-green-400" />
                    </div>
                    <div className="aspect-square rounded-lg bg-zinc-900 border border-white/5 flex items-center justify-center">
                      <FileJson className="w-5 h-5 text-blue-400" />
                    </div>
                  </div>

                  <div className="flex flex-col gap-3 animate-aura-scroll-up">
                    <div className="aspect-square rounded-lg bg-zinc-900 border border-white/5 flex items-center justify-center">
                      <Slack className="w-5 h-5 text-white" />
                    </div>
                    <div className="aspect-square rounded-lg bg-zinc-900 border border-white/5 flex items-center justify-center">
                      <Github className="w-5 h-5 text-white" />
                    </div>
                    <div className="aspect-square rounded-lg bg-zinc-900 border border-white/5 flex items-center justify-center">
                      <Figma className="w-5 h-5 text-white" />
                    </div>
                    <div className="aspect-square rounded-lg bg-zinc-900 border border-white/5 flex items-center justify-center">
                      <Slack className="w-5 h-5 text-white" />
                    </div>
                  </div>

                  <div className="flex flex-col gap-3 animate-aura-scroll-down">
                    <div className="aspect-square rounded-lg bg-zinc-900 border border-white/5 flex items-center justify-center">
                      <Zap className="w-5 h-5 text-yellow-400" />
                    </div>
                    <div className="aspect-square rounded-lg bg-zinc-900 border border-white/5 flex items-center justify-center">
                      <Activity className="w-5 h-5 text-red-400" />
                    </div>
                    <div className="aspect-square rounded-lg bg-zinc-900 border border-white/5 flex items-center justify-center">
                      <Server className="w-5 h-5 text-cyan-400" />
                    </div>
                    <div className="aspect-square rounded-lg bg-zinc-900 border border-white/5 flex items-center justify-center">
                      <Zap className="w-5 h-5 text-yellow-400" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative mt-auto pb-2 px-2">
                <h3 className="text-lg font-medium text-white mb-2 font-geist">Connect Your Stack</h3>
                <p className="text-sm text-zinc-400 leading-relaxed font-geist">
                  Bring Github, Linear, Stripe, and AWS into a single view. Loopra handles the API glue.
                </p>
              </div>
            </div>
          </div>

          {/* Card 3: Floating Elements */}
          <div className="group flex flex-col overflow-hidden sm:p-4 bg-zinc-950/50 h-[380px] border border-white/10 rounded-2xl pt-3 pr-3 pb-3 pl-3 relative shadow-inner">
            <div className="flex flex-col h-full relative gap-4">
              <div className="relative flex items-center justify-center rounded-xl h-52 overflow-hidden bg-[#020617] w-full shrink-0 border border-white/5">
                <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(#6366f1 1px, transparent 1px)", backgroundSize: "16px 16px" }}></div>

                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600 to-violet-600 flex items-center justify-center shadow-2xl animate-pulse-glow z-20 relative">
                    <Workflow className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute top-1/2 left-1/2 -translate-x-24 -translate-y-12 bg-zinc-900 border border-white/10 p-2 rounded-lg animate-bounce duration-[2000ms]">
                    <div className="w-8 h-2 rounded bg-zinc-700"></div>
                  </div>
                  <div className="absolute top-1/2 left-1/2 translate-x-16 translate-y-8 bg-zinc-900 border border-white/10 p-2 rounded-lg animate-bounce duration-[3000ms]">
                    <div className="w-8 h-2 rounded bg-zinc-700"></div>
                  </div>
                </div>
              </div>

              <div className="relative mt-auto pb-2 px-2">
                <h3 className="text-lg font-medium text-white mb-2 font-geist">Auto-Routing</h3>
                <p className="text-sm text-zinc-400 leading-relaxed font-geist">
                  Automatically route tasks to the cheapest or smartest model based on complexity and cost.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
