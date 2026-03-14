"use client";

import { 
  Search, Upload, Plus, ChevronLeft, ChevronRight, 
  UserPlus, Mail, Clock, Tag, Activity, 
  ArrowRight
} from "lucide-react";

export default function WorkflowCanvas() {
  return (
    <div className="group [animation:animationIn_0.8s_ease-out_0.5s_both] w-full relative">
      <div className="flex lg:pl-0 lg:pr-0 font-geist w-full h-[800px] pt-4 pr-4 pb-4 pl-4 relative items-center justify-center">
        {/* Window Container */}
        <div className="w-full h-full max-w-[1400px] bg-[#07070A] rounded-2xl border border-white/10 shadow-2xl flex flex-col overflow-hidden relative">
          {/* Subtle top glow */}
          <div className="pointer-events-none absolute inset-x-0 -top-24 h-48 bg-gradient-to-b from-sky-500/15 via-indigo-500/10 to-transparent blur-3xl"></div>

          {/* Window Title Bar */}
          <div className="h-11 bg-[#07070A] border-b border-white/5 flex items-center justify-between px-4 select-none relative">
            <div className="flex items-center gap-2">
              <div className="flex gap-1.5 opacity-70 hover:opacity-100 transition-opacity">
                <div className="w-3 h-3 rounded-full bg-[#FF5F57] border border-[#E0443E]"></div>
                <div className="w-3 h-3 rounded-full bg-[#FEBC2E] border border-[#D89E24]"></div>
                <div className="w-3 h-3 rounded-full bg-[#28C840] border border-[#1AAB29]"></div>
              </div>

              <div className="ml-4 flex items-center gap-2">
                <button className="text-zinc-500 hover:text-zinc-200 transition">
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button className="text-zinc-500 hover:text-zinc-200 transition">
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Center URL */}
            <div className="-translate-x-1/2 flex text-xs text-zinc-300 bg-white/5 border-white/10 border rounded-full pt-1 pr-2 pb-1 pl-1 absolute left-1/2 gap-x-2 gap-y-2 items-center">
              <span className="inline-flex items-center gap-1 rounded-full bg-sky-500/10 border border-sky-500/20 px-2 py-0.5 text-[10px] text-sky-300">
                <span className="w-1.5 h-1.5 rounded-full bg-sky-400"></span>
                Prod
              </span>
              <span className="text-zinc-500">/</span>
              <span className="text-zinc-300">nexus.ai</span>
              <span className="text-zinc-500">/</span>
              <span className="text-zinc-400">builder</span>
            </div>

            {/* Right actions */}
            <div className="flex items-center gap-2 text-zinc-500">
              <button className="w-9 h-9 inline-flex items-center justify-center rounded-md hover:bg-white/5 hover:text-white transition border border-transparent hover:border-white/10">
                <Search className="w-4 h-4" />
              </button>
              <button className="w-9 h-9 inline-flex items-center justify-center rounded-md hover:bg-white/5 hover:text-white transition border border-transparent hover:border-white/10">
                <Upload className="w-4 h-4" />
              </button>
              <button className="w-9 h-9 inline-flex items-center justify-center rounded-md hover:bg-white/5 hover:text-white transition border border-transparent hover:border-white/10">
                <Plus className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* App Layout */}
          <div className="flex flex-1 overflow-hidden">
            {/* Left Sidebar */}
            <div className="flex flex-col hidden md:flex bg-[#07070A] w-50 border-white/5 border-r">
              <div className="p-4 flex items-center gap-3">
                <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-sky-500 to-indigo-500 flex items-center justify-center text-white shadow-lg shadow-sky-500/15">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                  </svg>
                </div>
                <div className="flex flex-col leading-tight">
                  <span className="font-semibold text-white tracking-tight">Looper</span>
                </div>
              </div>

              <div className="px-3 pb-3">
                <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-lg px-3 py-2">
                  <Search className="w-3.5 h-3.5 text-zinc-500" />
                  <input
                    className="bg-transparent outline-none text-xs text-zinc-300 placeholder:text-zinc-600 w-full"
                    placeholder="Search workflows, runs..."
                  />
                  <span className="text-[10px] text-zinc-600 border border-white/10 rounded px-1.5 py-0.5">⌘K</span>
                </div>
              </div>

              <div className="px-3 py-2">
                <div className="text-[10px] font-semibold text-zinc-500 uppercase tracking-widest px-3 mb-2">
                  Workspace
                </div>
                <nav className="space-y-0.5">
                  <a href="#" className="flex items-center gap-2.5 px-3 py-2 text-sm text-zinc-300 hover:text-white hover:bg-white/5 rounded-md transition-colors">
                    Overview
                  </a>
                  <a href="#" className="flex items-center gap-2.5 px-3 py-2 text-sm text-zinc-300 hover:text-white hover:bg-white/5 rounded-md transition-colors">
                    Inbox
                    <span className="ml-auto text-[10px] bg-sky-500/15 text-sky-300 px-1.5 py-0.5 rounded-full border border-sky-500/20">
                      4
                    </span>
                  </a>
                </nav>
              </div>

              <div className="px-3 py-2">
                <div className="text-[10px] font-semibold text-zinc-500 uppercase tracking-widest px-3 mb-2">
                  Automation
                </div>
                <nav className="space-y-0.5">
                  <a href="#" className="flex items-center gap-2.5 px-3 py-2 text-sm text-white bg-white/5 rounded-md transition-colors font-medium border-l-2 border-sky-400">
                    Workflows
                  </a>
                  <a href="#" className="flex items-center gap-2.5 px-3 py-2 text-sm text-zinc-300 hover:text-white hover:bg-white/5 rounded-md transition-colors">
                    Integrations
                  </a>
                  <a href="#" className="flex items-center gap-2.5 px-3 py-2 text-sm text-zinc-300 hover:text-white hover:bg-white/5 rounded-md transition-colors">
                    Settings
                  </a>
                </nav>
              </div>

              <div className="mt-auto p-4 border-t border-white/5">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-xs font-medium text-zinc-300">
                    SJ
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs font-medium text-white">Sarah Jenkins</span>
                    <span className="text-[10px] text-zinc-500">sarah@nexus.ai</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Main Canvas */}
            <div className="flex-1 bg-[#050507] relative flex flex-col min-w-0">
              {/* Toolbar */}
              <div className="h-14 border-b border-white/5 flex items-center justify-between px-6 bg-[#07070A]/70 backdrop-blur z-20">
                <div className="flex items-center gap-3 min-w-0">
                  <button className="text-zinc-500 hover:text-white transition">
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <div className="h-4 w-px bg-white/10"></div>
                  <span className="text-zinc-500 text-sm shrink-0">Workflows</span>
                  <span className="text-zinc-600">/</span>
                  <span className="text-white font-medium text-sm truncate">Customer Onboarding v2</span>
                </div>

                <div className="flex items-center gap-2">
                  <button className="flex items-center gap-2 px-3 py-1.5 text-xs font-medium text-zinc-300 hover:text-white hover:bg-white/5 rounded-md transition border border-white/10">
                    <ArrowRight className="w-3 h-3" />
                    Test run
                  </button>
                  <button className="flex items-center gap-2 px-4 py-1.5 text-xs font-medium bg-sky-500 hover:bg-sky-400 text-black rounded-md shadow-[0_0_18px_rgba(56,189,248,0.25)] transition">
                    Deploy
                  </button>
                </div>
              </div>

              {/* Canvas Area */}
              <div className="flex-1 relative overflow-hidden bg-[#050507]">
                {/* Grid Background */}
                <div
                  className="absolute inset-0 opacity-25 pointer-events-none"
                  style={{
                    backgroundImage: "radial-gradient(rgba(255,255,255,0.18) 1px, transparent 1px)",
                    backgroundSize: "26px 26px",
                  }}
                ></div>

                {/* SVG Connections */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-visible">
                  <defs>
                    <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                      <polygon points="0 0, 10 3.5, 0 7" fill="rgba(255,255,255,0.28)"></polygon>
                    </marker>
                  </defs>
                  <path d="M 274 310 C 332 310, 332 215, 390 215" stroke="rgba(255,255,255,0.22)" strokeWidth="2" fill="none" markerEnd="url(#arrowhead)"></path>
                  <path d="M 274 310 C 332 310, 332 430, 390 430" stroke="rgba(255,255,255,0.22)" strokeWidth="2" fill="none" markerEnd="url(#arrowhead)"></path>
                  <path d="M 646 215 C 700 215, 700 230, 760 230" stroke="rgba(255,255,255,0.22)" strokeWidth="2" fill="none" markerEnd="url(#arrowhead)"></path>
                  <path d="M 646 430 C 700 430, 700 390, 760 390" stroke="rgba(255,255,255,0.22)" strokeWidth="2" fill="none" markerEnd="url(#arrowhead)"></path>
                </svg>

                {/* Workflow Nodes */}
                {/* Node 1: Trigger */}
                <div className="absolute left-[50px] top-[250px] w-56 rounded-2xl border border-white/10 bg-white/[0.03] shadow-[0_20px_60px_rgba(0,0,0,0.6)] backdrop-blur-sm hover:border-sky-400/40 transition group cursor-pointer">
                  <div className="absolute -top-3 left-4 px-2 py-0.5 bg-sky-500/10 border border-sky-500/20 rounded text-[10px] font-semibold text-sky-300 uppercase tracking-wide">
                    Trigger
                  </div>
                  <div className="p-4">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-300">
                        <UserPlus className="w-4 h-4" />
                      </div>
                      <div className="flex flex-col leading-tight">
                        <span className="text-sm font-medium text-white">New subscriber</span>
                        <span className="text-[11px] text-zinc-500">Event from Web Form</span>
                      </div>
                    </div>
                    <div className="text-xs text-zinc-400 bg-black/20 p-2 rounded-lg border border-white/10">
                      Source: <span className="text-zinc-200">Newsletter</span>
                      <span className="text-zinc-600">•</span>
                      List: <span className="text-zinc-200">Main</span>
                    </div>
                  </div>
                  <div className="absolute -right-2 top-1/2 -translate-y-1/2 w-3.5 h-3.5 bg-sky-400/80 rounded-full border-4 border-[#050507] shadow-[0_0_0_6px_rgba(56,189,248,0.08)] group-hover:scale-110 transition"></div>
                </div>

                {/* Node 2: Action */}
                <div className="absolute left-[390px] top-[140px] w-64 rounded-2xl border border-white/10 bg-white/[0.03] shadow-[0_20px_60px_rgba(0,0,0,0.6)] backdrop-blur-sm hover:border-sky-400/40 transition group cursor-pointer z-10">
                  <div className="absolute -top-3 left-4 px-2 py-0.5 bg-white/5 border border-white/10 rounded text-[10px] font-semibold text-zinc-300 uppercase tracking-wide">
                    Action
                  </div>
                  <div className="p-4">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-zinc-200">
                          <Mail className="w-4 h-4" />
                        </div>
                        <span className="text-sm font-medium text-white">Send email</span>
                      </div>
                    </div>
                    <div className="bg-black/20 p-3 rounded-xl border border-white/10 mb-2">
                      <div className="text-[10px] text-zinc-500 mb-1">Subject</div>
                      <div className="text-xs text-zinc-200 truncate">
                        Welcome to Nexus — let's automate your onboarding
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-[10px] text-sky-300">
                      <span className="inline-flex items-center gap-1 rounded-full bg-sky-500/10 border border-sky-500/20 px-2 py-0.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-sky-400"></span>
                        AI drafted
                      </span>
                      <span className="text-zinc-600">•</span>
                      <span className="text-zinc-500">Tone: friendly</span>
                    </div>
                  </div>
                  <div className="absolute -left-2 top-1/2 -translate-y-1/2 w-3.5 h-3.5 bg-white/60 rounded-full border-4 border-[#050507]"></div>
                  <div className="absolute -right-2 top-1/2 -translate-y-1/2 w-3.5 h-3.5 bg-white/60 rounded-full border-4 border-[#050507] group-hover:bg-sky-400/80 group-hover:scale-110 transition"></div>
                </div>

                {/* Node 3: Logic */}
                <div className="absolute left-[390px] top-[370px] w-64 rounded-2xl border border-white/10 bg-white/[0.03] shadow-[0_20px_60px_rgba(0,0,0,0.6)] backdrop-blur-sm hover:border-sky-400/40 transition group cursor-pointer">
                  <div className="absolute -top-3 left-4 px-2 py-0.5 bg-white/5 border border-white/10 rounded text-[10px] font-semibold text-zinc-300 uppercase tracking-wide">
                    Logic
                  </div>
                  <div className="p-4">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-zinc-200">
                        <Clock className="w-4 h-4" />
                      </div>
                      <span className="text-sm font-medium text-white">Wait</span>
                    </div>
                    <div className="flex items-center justify-between text-xs text-zinc-300 bg-black/20 p-2 rounded-lg border border-white/10">
                      <span className="text-zinc-400">Duration</span>
                      <span className="font-mono text-sky-300">24h</span>
                    </div>
                  </div>
                  <div className="absolute -left-2 top-1/2 -translate-y-1/2 w-3.5 h-3.5 bg-white/60 rounded-full border-4 border-[#050507]"></div>
                  <div className="absolute -right-2 top-1/2 -translate-y-1/2 w-3.5 h-3.5 bg-white/60 rounded-full border-4 border-[#050507] group-hover:bg-sky-400/80 group-hover:scale-110 transition"></div>
                </div>

                {/* Node 4: Integration */}
                <div className="absolute left-[760px] top-[180px] w-56 rounded-2xl border border-white/10 bg-white/[0.03] shadow-[0_20px_60px_rgba(0,0,0,0.6)] backdrop-blur-sm hover:border-sky-400/40 transition group cursor-pointer opacity-95">
                  <div className="absolute -top-3 left-4 px-2 py-0.5 bg-white/5 border border-white/10 rounded text-[10px] font-semibold text-zinc-300 uppercase tracking-wide">
                    Integration
                  </div>
                  <div className="p-4">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-8 h-8 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-zinc-200">
                        <Tag className="w-4 h-4" />
                      </div>
                      <span className="text-sm font-medium text-white">Add tag</span>
                    </div>
                    <div className="text-xs text-zinc-400">
                      Apply:{" "}
                      <span className="text-sky-200 bg-sky-500/10 border border-sky-500/20 px-1.5 py-0.5 rounded-md">
                        Onboarded
                      </span>
                    </div>
                  </div>
                  <div className="absolute -left-2 top-1/2 -translate-y-1/2 w-3.5 h-3.5 bg-white/60 rounded-full border-4 border-[#050507]"></div>
                </div>

                {/* Node 5: Condition */}
                <div className="absolute left-[760px] top-[340px] w-56 rounded-2xl border border-white/10 bg-white/[0.03] shadow-[0_20px_60px_rgba(0,0,0,0.6)] backdrop-blur-sm hover:border-sky-400/40 transition group cursor-pointer opacity-95">
                  <div className="absolute -top-3 left-4 px-2 py-0.5 bg-white/5 border border-white/10 rounded text-[10px] font-semibold text-zinc-300 uppercase tracking-wide">
                    Condition
                  </div>
                  <div className="p-4">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-8 h-8 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-zinc-200">
                        <Activity className="w-4 h-4" />
                      </div>
                      <span className="text-sm font-medium text-white">Check activity</span>
                    </div>
                    <div className="text-xs text-zinc-400">
                      If: <span className="text-zinc-200">Clicked link</span>
                    </div>
                  </div>
                  <div className="absolute -left-2 top-1/2 -translate-y-1/2 w-3.5 h-3.5 bg-white/60 rounded-full border-4 border-[#050507]"></div>
                </div>

                {/* Bottom Logs Panel */}
                <div className="absolute bottom-0 left-0 right-0 h-10 bg-[#07070A]/90 border-t border-white/5 flex items-center justify-between px-4 cursor-pointer hover:bg-white/5 transition backdrop-blur">
                  <div className="flex items-center gap-2 text-xs text-zinc-300">
                    <span className="text-zinc-400">Runs</span>
                    <span className="text-zinc-600">•</span>
                    <span className="text-zinc-300">Success rate</span>
                    <span className="text-sky-300 font-mono">99.2%</span>
                  </div>
                  <div className="flex items-center gap-4 text-[10px] text-zinc-500">
                    <span>Last run: 2m ago</span>
                    <span className="text-emerald-400">● Operational</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Sidebar (Inspector) */}
            <div className="w-80 bg-[#07070A] border-l border-white/5 flex-col hidden lg:flex">
              <div className="p-4 border-b border-white/5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="flex flex-col leading-tight">
                      <span className="text-sm font-medium text-white">Send email</span>
                      <span className="text-[10px] text-zinc-500">Node • Action</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                <div className="rounded-xl border border-white/10 bg-white/[0.03] p-3">
                  <div className="text-[10px] uppercase tracking-wider text-zinc-500 mb-2">AI assistant</div>
                  <div className="text-xs text-zinc-300 leading-relaxed mb-3">
                    Describe changes and I'll update this node.
                  </div>
                  <div className="relative">
                    <textarea
                      className="w-full bg-black/20 border border-white/10 rounded-lg p-3 text-xs text-zinc-200 focus:outline-none focus:border-sky-400/40 resize-none h-20 placeholder:text-zinc-600"
                      placeholder="e.g. Make the subject more friendly, add personalization…"
                    ></textarea>
                    <button className="absolute bottom-2 right-2 px-2 py-1 bg-sky-500 text-black text-[10px] font-medium rounded-md hover:bg-sky-400 transition">
                      Apply
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}