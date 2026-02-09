"use client";

import { Mail } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import Image from "next/image";

const quickLinks = [
  { label: "Prayer Times", href: "#" },
  { label: "Friday Sermons", href: "#" },
  { label: "Ramadan 2024", href: "#" },
  { label: "Live Stream", href: "#" },
];

const communityLinks = [
  { label: "Madrasah Registration", href: "#" },
  { label: "Nikah Services", href: "#" },
  { label: "Teen Talk", href: "#" },
  { label: "Janazah Support", href: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-200 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <ScrollReveal className="col-span-1 md:col-span-1">
            <div>
              <a href="#" className="flex items-center gap-2 mb-6">
                <Image
                  src="/vgcic-logo.png"
                  alt="VGCIC Logo"
                  width={56}
                  height={56}
                />
              </a>
              <p className="text-sm text-slate-500 mb-6 leading-relaxed">
                Victoria Garden City Islamic Community.
                <br />
                Plot 12, Road 4, VGC, Lagos, Nigeria.
              </p>
              <div className="flex gap-3">
                <a
                  href="#"
                  className="w-9 h-9 rounded-full bg-slate-50 flex items-center justify-center text-slate-500 hover:bg-slate-900 hover:text-white transition-all duration-300 border border-slate-100 hover:border-slate-900"
                  aria-label="Twitter"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-9 h-9 rounded-full bg-slate-50 flex items-center justify-center text-slate-500 hover:bg-slate-900 hover:text-white transition-all duration-300 border border-slate-100 hover:border-slate-900"
                  aria-label="Instagram"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-9 h-9 rounded-full bg-slate-50 flex items-center justify-center text-slate-500 hover:bg-slate-900 hover:text-white transition-all duration-300 border border-slate-100 hover:border-slate-900"
                  aria-label="Email"
                >
                  <Mail size={14} />
                </a>
              </div>
            </div>
          </ScrollReveal>

          {/* Quick Links */}
          <ScrollReveal delay={0.05}>
            <div>
              <h4 className="font-semibold text-slate-900 text-sm mb-4">
                Quick Links
              </h4>
              <ul className="space-y-3 text-sm text-slate-500">
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="hover:text-brand-gold-600 transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>

          {/* Community */}
          <ScrollReveal delay={0.1}>
            <div>
              <h4 className="font-semibold text-slate-900 text-sm mb-4">
                Community
              </h4>
              <ul className="space-y-3 text-sm text-slate-500">
                {communityLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="hover:text-brand-gold-600 transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>

          {/* Newsletter */}
          <ScrollReveal delay={0.15}>
            <div>
              <h4 className="font-semibold text-slate-900 text-sm mb-4">
                Newsletter
              </h4>
              <p className="text-sm text-slate-500 mb-4">
                Weekly updates on prayer times and events.
              </p>
              <form
                onSubmit={(e) => e.preventDefault()}
                className="flex gap-2"
              >
                <input
                  type="email"
                  placeholder="Email address"
                  className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-gold/20 focus:border-brand-gold-400 transition-all duration-200"
                />
                <button
                  type="submit"
                  className="bg-slate-900 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-slate-800 transition-colors duration-200 active:scale-[0.97] whitespace-nowrap"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </ScrollReveal>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-400 text-xs">
          <p>&copy; 2024 VGC Islamic Community. All rights reserved.</p>
          <div className="flex gap-6">
            <a
              href="#"
              className="hover:text-slate-600 transition-colors duration-200"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="hover:text-slate-600 transition-colors duration-200"
            >
              Constitution
            </a>
            <a
              href="#"
              className="hover:text-slate-600 transition-colors duration-200"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
