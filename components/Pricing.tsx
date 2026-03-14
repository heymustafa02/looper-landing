"use client";

import { useState } from "react";
import { Check } from "lucide-react";

export default function Pricing() {
  const [billing, setBilling] = useState<"monthly" | "annual">("monthly");
  const [selectedPlan, setSelectedPlan] = useState<"starter" | "pro" | "enterprise">("starter");

  const plans = {
    starter: {
      name: "Starter",
      description: "Perfect for exploring Loopra capabilities.",
      monthlyPrice: "$0",
      annualPrice: "$0",
      features: [
        "Up to 3 active workflows",
        "100 AI runs / month",
        "Community Support",
        "Basic integrations",
      ],
    },
    pro: {
      name: "Pro",
      description: "For scaling startups and growing teams.",
      monthlyPrice: "$49",
      annualPrice: "$39",
      features: [
        "Unlimited workflows",
        "10,000 AI runs / month",
        "Priority Support",
        "Advanced integrations",
        "Custom webhooks",
        "Team collaboration",
      ],
    },
    enterprise: {
      name: "Business",
      description: "For large teams with enterprise needs.",
      monthlyPrice: "$249",
      annualPrice: "$199",
      features: [
        "Everything in Pro",
        "Unlimited AI runs",
        "Dedicated support",
        "SSO / SAML",
        "Custom SLA",
        "On-premise deployment",
      ],
    },
  };

  const currentPlan = plans[selectedPlan];
  const price = billing === "monthly" ? currentPlan.monthlyPrice : currentPlan.annualPrice;

  return (
    <section className="[animation:animationIn_0.8s_ease-out_0.2s_both] animate-on-scroll max-w-7xl mr-auto ml-auto pt-10 pr-6 pb-24 pl-6 relative" id="pricing">
      <div className="md:p-8 bg-gradient-to-br from-blue-500/5 via-transparent to-blue-500/5 ring-white/10 ring-1 rounded-[28px] pt-6 pr-6 pb-6 pl-6 relative shadow-[0_0px_0px_rgba(0,0,0,0)] gap-x-12 gap-y-12">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between mb-24 gap-x-6 gap-y-6 items-start">
          <div>
            <p className="text-[11px] uppercase tracking-widest text-blue-400 font-semibold mb-3 font-geist">Pricing</p>
            <h2 className="sm:text-4xl text-3xl text-white font-geist tracking-tight font-semibold">
              Simple pricing that scales with you
            </h2>
            <p className="mt-4 text-base text-zinc-400 max-w-xl leading-relaxed font-geist">
              Start small, upgrade when you're ready. Every plan includes core automations, templates, and secure integrations.
            </p>
          </div>
          <button className="inline-flex text-[13px] font-medium transition-all hover:brightness-110 hover:shadow-[0_0_20px_rgba(59,130,246,0.4)] text-white bg-zinc-800 border border-zinc-700 h-10 rounded-full px-6 items-center font-geist">
            Compare plans
          </button>
        </div>

        <div className="overflow-hidden bg-zinc-950 border-white/10 border rounded-[32px] relative shadow-2xl">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/5 blur-[100px] pointer-events-none"></div>

          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Left: Selector */}
            <div className="md:p-12 flex flex-col pt-8 pr-8 pb-8 pl-8">
              <div className="flex items-center gap-4 mb-10">
                <div className="inline-flex p-1 rounded-xl bg-zinc-900 border border-white/5">
                  <button
                    onClick={() => setBilling("monthly")}
                    className={`px-4 py-2 rounded-lg text-xs font-semibold uppercase tracking-wide transition-all font-geist ${
                      billing === "monthly" ? "bg-zinc-800 text-white shadow-sm ring-1 ring-white/10" : "text-zinc-500 hover:text-white"
                    }`}
                  >
                    Monthly
                  </button>
                  <button
                    onClick={() => setBilling("annual")}
                    className={`px-4 py-2 rounded-lg text-xs font-semibold uppercase tracking-wide transition-all font-geist ${
                      billing === "annual" ? "bg-zinc-800 text-white shadow-sm ring-1 ring-white/10" : "text-zinc-500 hover:text-white"
                    }`}
                  >
                    Yearly
                  </button>
                </div>
                <span className="text-xs text-blue-400 font-medium tracking-tight font-geist">Save 20% on yearly</span>
              </div>

              <div className="space-y-3">
                {Object.entries(plans).map(([key, plan]) => (
                  <button
                    key={key}
                    onClick={() => setSelectedPlan(key as typeof selectedPlan)}
                    className={`w-full text-left p-5 rounded-xl transition-all flex items-center justify-between group ${
                      selectedPlan === key
                        ? "border border-blue-500/50 bg-blue-500/10"
                        : "border border-white/5 hover:border-white/10 bg-white/[0.02] hover:bg-white/[0.05]"
                    }`}
                  >
                    <div>
                      <div className="text-white font-semibold text-lg font-geist">{plan.name}</div>
                      <div className="text-zinc-400 text-xs uppercase tracking-wide mt-1 font-geist">
                        {key === "starter" ? "For side projects" : key === "pro" ? "For scaling startups" : "For large teams"}
                      </div>
                    </div>
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center transition ${
                        selectedPlan === key ? "bg-blue-500/20 text-blue-400" : "bg-white/5 text-zinc-500 group-hover:text-white"
                      } group-hover:scale-110`}
                    >
                      →
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Right: Details */}
            <div className="md:p-12 lg:border-l flex flex-col border-white/5 pt-8 pr-8 pb-8 pl-8 justify-center">
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl text-white mb-2 font-geist tracking-tight">{currentPlan.name}</h3>
                  <div className="flex items-baseline gap-1">
                    <span className="text-6xl text-white font-geist tracking-tight">{price}</span>
                    <span className="text-zinc-500 text-lg font-geist">/mo</span>
                  </div>
                  <p className="text-zinc-400 text-sm mt-4 font-geist">{currentPlan.description}</p>
                </div>

                <ul className="space-y-4">
                  {currentPlan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm text-zinc-300">
                      <div className="w-5 h-5 rounded-full bg-blue-500/20 flex items-center justify-center shrink-0">
                        <Check className="w-3 h-3 text-blue-400" strokeWidth={3} />
                      </div>
                      {feature}
                    </li>
                  ))}
                </ul>

                <button
                  className="w-full flex items-center justify-center py-4 text-center rounded-xl text-white font-medium tracking-tight hover:brightness-110 transition-all border border-transparent shadow-[0_0_20px_rgba(59,130,246,0.5)] font-geist"
                  style={{ background: "linear-gradient(135deg, #2563eb 0%, #3b82f6 50%, #60a5fa 100%)" }}
                >
                  Get Started Free
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}