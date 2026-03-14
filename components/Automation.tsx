"use client";

import { Terminal, Database, Webhook, Slack, Github, Figma, Zap, Activity, Server, Sparkles } from "lucide-react";

export default function AutomationEngine() {
  return (
    <section className="[animation:animationIn_0.8s_ease-out_0.2s_both] animate-on-scroll lg:px-6 lg:pb-12 lg:pt-12 max-w-7xl mr-auto ml-auto pt-24 pr-4 pb-24 pl-4">
      <div className="md:p-8 bg-gradient-to-br from-blue-500/5 via-transparent to-blue-500/5 ring-white/10 ring-1 rounded-[28px] pt-6 pr-6 pb-6 pl-6 relative shadow-[0_0px_0px_rgba(0,0,0,0)]">
        {/* Section Header */}
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between mb-12 gap-x-6 gap-y-6 items-start">
          <div>
            <p className="text-[11px] uppercase tracking-widest text-blue-400 font-semibold mb-3 font-geist">
              Features
            </p>
            <h2 className="sm:text-4xl text-3xl font-semibold text-white tracking-tight font-geist">
              Everything you need to build
            </h2>
            <p className="mt-4 text-base text-zinc-400 max-w-xl leading-relaxed font-geist">
              Powerful primitives designed for scale. Connect your entire stack with intelligent,
              self-healing workflows.
            </p>
          </div>
          <button className="inline-flex text-[13px] font-medium transition-all hover:brightness-110 hover:shadow-[0_0_20px_rgba(59,130,246,0.4)] text-white bg-zinc-800 border border-zinc-700 h-10 rounded-full px-6 items-center font-geist">
            Explore Documentation
          </button>
        </div>

        {/* Grid */}
        <div className="flex w-full relative gap-x-0 gap-y-x-0 items-center justify-center">
          {/* LEFT INTEGRATIONS RAIL */}
          <div className="hidden lg:block w-[260px] h-[440px] relative translate-x-6">
            <svg className="absolute top-0 right-0 bottom-0 left-0 w-[260px] h-[440px]" viewBox="0 0 260 440" fill="none">
              <defs>
                <linearGradient id="beam-gradient-left" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#3b82f6" stopOpacity="0"></stop>
                  <stop offset="50%" stopColor="#60a5fa"></stop>
                  <stop offset="100%" stopColor="#3b82f6" stopOpacity="0"></stop>
                </linearGradient>
              </defs>

              <path d="M 52 144 C 150 144, 150 220, 260 220" stroke="rgba(255,255,255,0.08)" strokeWidth="1.5" fill="none"></path>
              <path d="M 52 144 C 150 144, 150 220, 260 220" stroke="url(#beam-gradient-left)" strokeWidth="2" fill="none" className="animate-beam-path delay-100" strokeLinecap="round"></path>

              <path d="M 52 220 C 120 220, 180 220, 260 220" stroke="rgba(255,255,255,0.08)" strokeWidth="1.5" fill="none"></path>
              <path d="M 52 220 C 120 220, 180 220, 260 220" stroke="url(#beam-gradient-left)" strokeWidth="2" fill="none" className="animate-beam-path" strokeLinecap="round"></path>

              <path d="M 52 296 C 150 296, 150 220, 260 220" stroke="rgba(255,255,255,0.08)" strokeWidth="1.5" fill="none"></path>
              <path d="M 52 296 C 150 296, 150 220, 260 220" stroke="url(#beam-gradient-left)" strokeWidth="2" fill="none" className="animate-beam-path delay-200" strokeLinecap="round"></path>
            </svg>

            <div className="absolute left-6 top-1/2 -translate-y-1/2 flex flex-col gap-5 z-10">
              <div className="w-14 h-14 rounded-2xl bg-zinc-900/90 border border-white/10 ring-1 ring-white/5 backdrop-blur-md shadow-[0_0_20px_rgba(0,0,0,0.5)] flex items-center justify-center group/node transition-all hover:scale-110 hover:border-blue-500/50 hover:shadow-blue-500/20">
                <Terminal className="w-6 h-6 text-white/60 group-hover/node:text-blue-400 transition-colors" />
              </div>
              <div className="w-14 h-14 rounded-2xl bg-zinc-900/90 border border-white/10 ring-1 ring-white/5 backdrop-blur-md shadow-[0_0_20px_rgba(0,0,0,0.5)] flex items-center justify-center group/node transition-all hover:scale-110 hover:border-blue-500/50 hover:shadow-blue-500/20">
                <Database className="w-6 h-6 text-white/60 group-hover/node:text-blue-400 transition-colors" />
              </div>
              <div className="w-14 h-14 rounded-2xl bg-zinc-900/90 border border-white/10 ring-1 ring-white/5 backdrop-blur-md shadow-[0_0_20px_rgba(0,0,0,0.5)] flex items-center justify-center group/node transition-all hover:scale-110 hover:border-blue-500/50 hover:shadow-blue-500/20">
                <Webhook className="w-6 h-6 text-white/60 group-hover/node:text-blue-400 transition-colors" />
              </div>
            </div>
          </div>

          {/* CENTER CARD */}
          <div className="relative">
            <div className="hidden lg:block absolute -left-2 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.8)] z-20 border-2 border-zinc-950"></div>
            <div className="hidden lg:block absolute -right-2 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.8)] z-20 border-2 border-zinc-950"></div>

            <div className="overflow-hidden flex flex-col group/card bg-[#09090b]/90 w-full h-[440px] max-w-[700px] z-10 rounded-[32px] ring-white/10 ring-1 mr-auto ml-auto pt-6 pr-6 pb-6 pl-6 relative shadow-2xl backdrop-blur-xl">
              {/* Header Input Prompt */}
              <div className="flex justify-center w-full mb-8 relative z-20">
                <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-zinc-900/80 border border-blue-500/20 ring-1 ring-blue-500/10 shadow-lg backdrop-blur-xl transition-all hover:bg-zinc-800/80 hover:border-blue-500/30 cursor-default group">
                  <Sparkles className="w-3.5 h-3.5 text-blue-400 animate-pulse" />
                  <span className="text-xs font-medium text-blue-100/90 font-geist tracking-wide">
                    Detect anomalies in API latency and auto-scale pods
                  </span>
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse ml-1"></div>
                </div>
              </div>

              {/* Workflow Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 h-full relative z-10 overflow-y-auto md:overflow-hidden">
                {/* Col 1: Monitoring */}
                <div className="col-span-1 pt-6 flex flex-col gap-4">
                  <div className="bg-zinc-800/30 hover:bg-zinc-800/50 hover:border-red-500/30 transition-all duration-300 border border-white/5 ring-1 ring-white/5 rounded-2xl p-4 flex flex-col gap-3 shadow-sm group/item cursor-pointer">
                    <div className="flex items-center gap-2 justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.6)] animate-pulse"></div>
                        <span className="text-[11px] font-semibold text-zinc-200 uppercase tracking-wider font-geist">
                          Latency Spike
                        </span>
                      </div>
                      <span className="text-[9px] text-zinc-500 font-mono">500ms</span>
                    </div>
                    <div>
                      <div className="text-sm text-white font-medium mb-1 font-geist">API Gateway</div>
                      <div className="text-[10px] text-zinc-400 font-geist">Region: us-east-1</div>
                      <div className="w-full h-1 bg-zinc-700/50 rounded-full mt-2 overflow-hidden">
                        <div className="h-full bg-red-500 w-[85%]"></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Col 2: Actions */}
                <div className="col-span-1 flex flex-col gap-4">
                  <div className="bg-zinc-800/30 hover:bg-zinc-800/50 hover:border-emerald-500/30 transition-all duration-300 border border-white/5 ring-1 ring-white/5 rounded-2xl p-4 flex flex-col gap-2 shadow-sm cursor-pointer group">
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.6)]"></div>
                      <span className="text-[11px] font-semibold text-white font-geist">Auto-Scaler</span>
                    </div>
                    <div>
                      <div className="text-[11px] text-zinc-400 mb-0.5 font-geist">Provisioning Nodes</div>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-[10px] text-emerald-400 font-mono bg-emerald-500/10 px-1.5 py-0.5 rounded">
                          +2 Instances
                        </span>
                      </div>
                    </div>
                    <div className="mt-2 flex gap-1">
                      <div className="h-1 w-1 rounded-full bg-zinc-600 animate-[bounce_1s_infinite]"></div>
                      <div className="h-1 w-1 rounded-full bg-zinc-600 animate-[bounce_1s_infinite_0.2s]"></div>
                      <div className="h-1 w-1 rounded-full bg-zinc-600 animate-[bounce_1s_infinite_0.4s]"></div>
                    </div>
                  </div>

                  <div className="bg-zinc-800/30 hover:bg-zinc-800/50 hover:scale-[1.02] transition-all duration-300 border border-white/5 ring-1 ring-white/5 rounded-2xl p-4 flex flex-col gap-2 shadow-sm h-full opacity-80 cursor-pointer relative overflow-hidden">
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.6)]"></div>
                      <span className="text-[11px] font-semibold text-white font-geist">Log Analysis</span>
                    </div>
                    <div>
                      <div className="text-[11px] text-zinc-400 mb-0.5 font-geist">Pattern Match</div>
                      <div className="text-[10px] text-zinc-500 font-mono">ERROR_CONNECTION_REFUSED</div>
                    </div>
                  </div>
                </div>

                {/* Col 3: Results */}
                <div className="col-span-1 flex flex-col gap-4 pt-10">
                  <div className="bg-zinc-800/30 hover:bg-zinc-800/50 hover:border-purple-500/30 transition-all duration-300 border border-white/5 ring-1 ring-white/5 rounded-2xl p-4 flex flex-col gap-2 shadow-sm cursor-pointer">
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-purple-500 shadow-[0_0_8px_rgba(168,85,247,0.6)]"></div>
                      <span className="text-[11px] font-semibold text-white font-geist">Incident Report</span>
                    </div>
                    <div>
                      <div className="text-[11px] text-zinc-400 mb-0.5 font-geist">Generated by AI</div>
                      <div className="text-[10px] text-zinc-500 font-geist">Ticket #8924 created</div>
                    </div>
                    <div className="flex -space-x-2 mt-1">
                      <div className="w-5 h-5 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center">
                        <Github className="w-2.5 h-2.5 text-zinc-400" />
                      </div>
                      <div className="w-5 h-5 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center">
                        <Slack className="w-2.5 h-2.5 text-zinc-400" />
                      </div>
                    </div>
                  </div>

                  <div className="bg-zinc-800/30 hover:bg-zinc-800/50 hover:border-cyan-500/30 transition-all duration-300 border border-white/5 ring-1 ring-white/5 rounded-2xl p-4 flex flex-col gap-2 shadow-sm opacity-70 cursor-pointer">
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 shadow-[0_0_8px_rgba(6,182,212,0.6)]"></div>
                      <span className="text-[11px] font-semibold text-white font-geist">Slack Notify</span>
                    </div>
                    <div>
                      <div className="text-[11px] text-zinc-400 mb-0.5 font-geist">Channel: #ops-alerts</div>
                      <div className="text-[10px] text-zinc-500 font-geist">Sent 2s ago</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Processing Orb */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-40 bg-gradient-to-t from-[#09090b] via-[#09090b]/80 to-transparent pointer-events-none z-20"></div>

              <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center">
                <div className="relative flex items-center justify-center w-16 h-16">
                  <div className="absolute inset-0 rounded-full border border-blue-500/10 animate-[ping_3s_ease-out_infinite] opacity-50"></div>
                  <div className="absolute inset-2 rounded-full border border-blue-500/20 animate-[ping_3s_ease-out_1s_infinite] opacity-50"></div>

                  <div className="relative w-14 h-14 rounded-full bg-zinc-900/90 backdrop-blur-md border border-white/10 shadow-[0_0_30px_rgba(59,130,246,0.2)] flex items-center justify-center group overflow-hidden ring-1 ring-white/5">
                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-blue-500/20 to-transparent rotate-45 translate-y-full group-hover:translate-y-[-200%] transition-transform duration-1000 ease-in-out"></div>
                    <Zap className="w-5 h-5 text-blue-400 drop-shadow-[0_0_10px_rgba(59,130,246,0.5)]" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT INTEGRATIONS RAIL */}
          <div className="relative hidden lg:block w-[260px] h-[440px]">
            <svg className="absolute top-0 right-0 bottom-0 left-0 w-[260px] h-[440px]" viewBox="0 0 260 440" fill="none">
              <defs>
                <linearGradient id="beam-gradient-right" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#22d3ee" stopOpacity="0"></stop>
                  <stop offset="50%" stopColor="#67e8f9"></stop>
                  <stop offset="100%" stopColor="#22d3ee" stopOpacity="0"></stop>
                </linearGradient>
              </defs>

              <path d="M 0 220 C 100 220, 100 68, 208 68" stroke="rgba(255,255,255,0.08)" strokeWidth="1.5" fill="none"></path>
              <path d="M 0 220 C 100 220, 100 68, 208 68" stroke="url(#beam-gradient-right)" strokeWidth="2" fill="none" className="animate-beam-path delay-300" strokeLinecap="round"></path>

              <path d="M 0 220 C 100 220, 100 144, 208 144" stroke="rgba(255,255,255,0.08)" strokeWidth="1.5" fill="none"></path>
              <path d="M 0 220 C 100 220, 100 144, 208 144" stroke="url(#beam-gradient-right)" strokeWidth="2" fill="none" className="animate-beam-path delay-100" strokeLinecap="round"></path>

              <path d="M 0 220 C 100 220, 100 220, 208 220" stroke="rgba(255,255,255,0.08)" strokeWidth="1.5" fill="none"></path>
              <path d="M 0 220 C 100 220, 100 220, 208 220" stroke="url(#beam-gradient-right)" strokeWidth="2" fill="none" className="animate-beam-path delay-500" strokeLinecap="round"></path>

              <path d="M 0 220 C 100 220, 100 296, 208 296" stroke="rgba(255,255,255,0.08)" strokeWidth="1.5" fill="none"></path>
              <path d="M 0 220 C 100 220, 100 296, 208 296" stroke="url(#beam-gradient-right)" strokeWidth="2" fill="none" className="animate-beam-path delay-200" strokeLinecap="round"></path>

              <path d="M 0 220 C 100 220, 100 372, 208 372" stroke="rgba(255,255,255,0.08)" strokeWidth="1.5" fill="none"></path>
              <path d="M 0 220 C 100 220, 100 372, 208 372" stroke="url(#beam-gradient-right)" strokeWidth="2" fill="none" className="animate-beam-path delay-300" strokeLinecap="round"></path>
            </svg>

            <div className="absolute right-6 top-1/2 -translate-y-1/2 flex flex-col gap-5 z-10">
              <div className="w-14 h-14 rounded-2xl bg-zinc-900/90 border border-white/10 ring-1 ring-white/5 backdrop-blur-md shadow-[0_0_20px_rgba(0,0,0,0.5)] flex items-center justify-center transition-all hover:scale-110 hover:border-purple-500/50 hover:shadow-purple-500/20 group/node">
                <Slack className="w-6 h-6 text-white/60 group-hover/node:text-purple-400 transition-colors" />
              </div>
              <div className="w-14 h-14 rounded-2xl bg-zinc-900/90 border border-white/10 ring-1 ring-white/5 backdrop-blur-md shadow-[0_0_20px_rgba(0,0,0,0.5)] flex items-center justify-center transition-all hover:scale-110 hover:border-blue-500/50 hover:shadow-blue-500/20 group/node">
                <Activity className="w-6 h-6 text-white/60 group-hover/node:text-blue-400 transition-colors" />
              </div>
              <div className="w-14 h-14 rounded-2xl bg-zinc-900/90 border border-white/10 ring-1 ring-white/5 backdrop-blur-md shadow-[0_0_20px_rgba(0,0,0,0.5)] flex items-center justify-center transition-all hover:scale-110 hover:border-zinc-500/50 hover:shadow-zinc-500/20 group/node">
                <Github className="w-6 h-6 text-white/60 group-hover/node:text-white transition-colors" />
              </div>
              <div className="w-14 h-14 rounded-2xl bg-zinc-900/90 border border-white/10 ring-1 ring-white/5 backdrop-blur-md shadow-[0_0_20px_rgba(0,0,0,0.5)] flex items-center justify-center transition-all hover:scale-110 hover:border-red-500/50 hover:shadow-red-500/20 group/node">
                <Zap className="w-6 h-6 text-white/60 group-hover/node:text-red-400 transition-colors" />
              </div>
              <div className="w-14 h-14 rounded-2xl bg-zinc-900/90 border border-white/10 ring-1 ring-white/5 backdrop-blur-md shadow-[0_0_20px_rgba(0,0,0,0.5)] flex items-center justify-center transition-all hover:scale-110 hover:border-cyan-500/50 hover:shadow-cyan-500/20 group/node">
                <Server className="w-6 h-6 text-white/60 group-hover/node:text-cyan-400 transition-colors" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Add animation keyframes to globals.css */}
      <style jsx global>{`
        @keyframes beam-flow {
          0% {
            stroke-dashoffset: 600;
            opacity: 0;
          }
          15% {
            opacity: 1;
          }
          85% {
            opacity: 1;
          }
          100% {
            stroke-dashoffset: 0;
            opacity: 0;
          }
        }
        .animate-beam-path {
          stroke-dasharray: 80 600;
          stroke-dashoffset: 600;
          animation: beam-flow 4s linear infinite;
        }
        .delay-100 {
          animation-delay: 0.5s;
        }
        .delay-200 {
          animation-delay: 1s;
        }
        .delay-300 {
          animation-delay: 1.5s;
        }
        .delay-500 {
          animation-delay: 2.5s;
        }
      `}</style>
    </section>
  );
}