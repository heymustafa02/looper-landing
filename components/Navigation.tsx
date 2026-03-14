"use client";

import Link from "next/link";

export default function Navigation() {
  return (
    <nav className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-6xl px-6 pt-6 z-50">
      
      <div className="flex items-center justify-between rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-xl shadow-[0_8px_30px_rgb(0,0,0,0.3)] px-6 py-3">

        {/* Logo */}
        <div className="flex items-center gap-2 group cursor-pointer">
          <svg
            width="420"
            height="120"
            viewBox="0 0 420 120"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label="Looper logo"
            className="w-[147px] h-[42px]"
            strokeWidth="2"
            style={{ color: "white" }}
          >
            <text
              x="0"
              y="80"
              fill="currentColor"
              fontSize="72"
              fontWeight="600"
              letterSpacing="-1.5"
              fontFamily="Inter, SF Pro Display, system-ui, -apple-system, BlinkMacSystemFont, sans-serif"
            >
              Looper
            </text>
          </svg>
        </div>

        {/* Links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
          <Link href="#features" className="hover:text-white transition-colors font-geist">
            Features
          </Link>
          <Link href="#customers" className="hover:text-white transition-colors font-geist">
            Customers
          </Link>
          <Link href="#pricing" className="hover:text-white transition-colors font-geist">
            Pricing
          </Link>
          <Link href="#docs" className="hover:text-white transition-colors font-geist">
            Docs
          </Link>
        </div>

        {/* Button */}
        <button className="group relative inline-flex h-8 items-center justify-center overflow-hidden rounded-full bg-white/10 backdrop-blur-md px-4 font-medium text-white transition-all duration-300 hover:bg-white/20 ring-1 ring-white/20 hover:ring-white/40">
          <span className="text-xs tracking-tight font-geist">
            Launch App
          </span>
        </button>

      </div>
    </nav>
  );
}