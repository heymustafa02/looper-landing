"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="max-w-7xl mx-auto px-6 pb-8">
      <div className="relative overflow-hidden ring-1 ring-white/5 bg-zinc-900/40 rounded-3xl p-10 md:p-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Brand & Newsletter */}
          <div>
            <svg
              width="420"
              height="120"
              viewBox="0 0 420 120"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              aria-label="Looper logo"
              className="w-[147px] h-[42px]"
              strokeWidth="2"
              style={{ width: "147px", height: "42px", color: "rgb(255, 255, 255)" }}
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
            <p className="text-zinc-400 max-w-sm mb-8 leading-relaxed text-sm font-geist">
              Building the nervous system for the autonomous enterprise. Connect, automate, and scale with intelligence.
            </p>

            <form className="flex items-center gap-2 max-w-sm">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-zinc-950 border border-white/10 rounded-full px-4 py-2.5 text-sm text-white w-full focus:outline-none focus:border-blue-500/50 transition"
              />
              <button className="bg-white text-black px-4 py-2.5 rounded-full text-sm font-medium hover:bg-zinc-200 transition font-geist">
                Subscribe
              </button>
            </form>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
            <div>
              <h4 className="text-white font-medium mb-4 font-geist">Product</h4>
              <ul className="space-y-2 text-sm text-zinc-500">
                <li>
                  <Link href="#features" className="hover:text-blue-400 transition font-geist">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-blue-400 transition font-geist">
                    Integrations
                  </Link>
                </li>
                <li>
                  <Link href="#pricing" className="hover:text-blue-400 transition font-geist">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-blue-400 transition font-geist">
                    Changelog
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-medium mb-4 font-geist">Company</h4>
              <ul className="space-y-2 text-sm text-zinc-500">
                <li>
                  <Link href="#" className="hover:text-blue-400 transition font-geist">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-blue-400 transition font-geist">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-blue-400 transition font-geist">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-blue-400 transition font-geist">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-medium mb-4 font-geist">Social</h4>
              <ul className="space-y-2 text-sm text-zinc-500">
                <li>
                  <Link href="#" className="hover:text-blue-400 transition font-geist">
                    Twitter
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-blue-400 transition font-geist">
                    GitHub
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-blue-400 transition font-geist">
                    Discord
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-blue-400 transition font-geist">
                    LinkedIn
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-600">
          <p className="font-geist">© 2025 Loopra Inc. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-zinc-400 transition font-geist">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-zinc-400 transition font-geist">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}