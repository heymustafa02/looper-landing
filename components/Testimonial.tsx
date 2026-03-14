"use client";

import { Quote } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      quote: "Loopra completely changed how we handle deployment incidents. The self-healing workflows saved us 200+ engineering hours last month.",
      author: "Alex Chen",
      role: "CTO at Vertex",
      featured: false,
    },
    {
      quote: "The ability to visualize and debug AI agents in real-time is a game changer. We shipped our gen-AI product 3x faster.",
      author: "Sarah Jenkins",
      role: "VP Engineering, Nova",
      featured: true,
    },
    {
      quote: "Finally, an automation platform that treats infrastructure as code. The Git integration allows us to version control our entire business logic.",
      author: "David Kim",
      role: "DevOps Lead, Stripe",
      featured: false,
    },
  ];

  return (
    <section className="[animation:animationIn_0.8s_ease-out_0.2s_both] animate-on-scroll max-w-7xl mr-auto ml-auto pt-10 pr-6 pb-24 pl-6 relative" id="customers">
      <div className="md:p-8 bg-gradient-to-br from-blue-500/5 via-transparent to-blue-500/5 ring-white/10 ring-1 rounded-[28px] pt-6 pr-6 pb-6 pl-6 relative shadow-[0_0px_0px_rgba(0,0,0,0)] gap-x-12 gap-y-12">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between mb-24 gap-x-6 gap-y-6 items-start">
          <div>
            <p className="text-[11px] uppercase tracking-widest text-blue-400 font-semibold mb-3 font-geist">Testimonials</p>
            <h2 className="sm:text-4xl text-3xl text-white font-geist tracking-tight font-semibold">
              Trusted by teams who automate at scale
            </h2>
            <p className="mt-4 text-base text-zinc-400 max-w-xl leading-relaxed font-geist">
              From startups to growing teams, Loopra helps teams save time, reduce manual work, and ship faster with confidence.
            </p>
          </div>
          <button className="inline-flex text-[13px] font-medium transition-all hover:brightness-110 hover:shadow-[0_0_20px_rgba(59,130,246,0.4)] text-white bg-zinc-800 border border-zinc-700 h-10 rounded-full px-6 items-center font-geist">
            Read customer stories
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 [animation:animationIn_0.8s_ease-out_0.3s_both] animate-on-scroll">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`p-8 rounded-2xl flex flex-col justify-between h-full ${
                testimonial.featured
                  ? "bg-gradient-to-b from-blue-900/20 to-zinc-900 border border-blue-500/20 relative overflow-hidden group"
                  : "bg-zinc-900/50 border border-white/5"
              }`}
            >
              {testimonial.featured && (
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-blue-500/20 blur-3xl group-hover:bg-blue-500/30 transition"></div>
              )}
              <div>
                <Quote className={`w-8 h-8 mb-6 fill-current ${testimonial.featured ? "text-blue-500/50" : "text-zinc-700"}`} />
                <p className={`leading-relaxed mb-6 font-geist ${testimonial.featured ? "text-xl text-white font-medium" : "text-lg text-zinc-300"}`}>
                  {testimonial.quote}
                </p>
              </div>
              <div className="flex items-center gap-4">
                <div className={`w-10 h-10 rounded-full ${testimonial.featured ? "bg-gradient-to-br from-blue-500 to-indigo-500" : "bg-gradient-to-br from-zinc-700 to-zinc-600"}`}></div>
                <div>
                  <div className="text-sm font-medium text-white font-geist">{testimonial.author}</div>
                  <div className={`text-xs font-geist ${testimonial.featured ? "text-blue-200/70" : "text-zinc-500"}`}>{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}