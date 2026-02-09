"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Heart,
  Menu,
  X,
  UserCircle,
} from "lucide-react";
import Image from "next/image";

const navLinks = [
  { label: "Home", href: "#", active: true },
  { label: "About Us", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Education", href: "#education" },
  { label: "Events", href: "#events" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <nav
        className={`sticky top-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/90 backdrop-blur-xl shadow-sm border-b border-slate-200/80"
            : "bg-white/80 backdrop-blur-xl border-b border-slate-200"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <Image
              src="/vgcic-logo.png"
              alt="VGCIC Logo"
              width={72}
              height={72}
              className="group-hover:scale-105 transition-transform duration-200"
            />
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`text-sm font-medium transition-colors duration-200 relative group ${
                  link.active
                    ? "text-slate-900"
                    : "text-slate-500 hover:text-slate-900"
                }`}
              >
                {link.label}
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 bg-brand-gold rounded-full transition-all duration-300 ${
                    link.active
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                  }`}
                />
              </a>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="hidden md:flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors duration-200"
            >
              <UserCircle size={20} />
              Member Portal
            </a>
            <a
              href="#donate"
              className="px-4 py-2 bg-brand-red text-white text-sm font-medium rounded-lg hover:bg-brand-red-600 transition-all duration-200 shadow-lg shadow-brand-red-100 hover:shadow-brand-red-200 flex items-center gap-2 active:scale-[0.97]"
            >
              <span>Donate</span>
              <Heart size={16} />
            </a>
            <button
              onClick={() => setMobileOpen(true)}
              className="md:hidden p-2 text-slate-600 hover:text-slate-900 transition-colors"
              aria-label="Open menu"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[60]"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 bottom-0 w-[300px] bg-white z-[70] shadow-2xl"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-10">
                  <span className="text-lg font-semibold text-slate-900">
                    Menu
                  </span>
                  <button
                    onClick={() => setMobileOpen(false)}
                    className="p-2 rounded-lg hover:bg-slate-100 transition-colors"
                    aria-label="Close menu"
                  >
                    <X size={20} />
                  </button>
                </div>
                <div className="space-y-1">
                  {navLinks.map((link, i) => (
                    <motion.a
                      key={link.label}
                      href={link.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05, duration: 0.3 }}
                      onClick={() => setMobileOpen(false)}
                      className={`block px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                        link.active
                          ? "bg-brand-gold-50 text-brand-gold-700"
                          : "text-slate-700 hover:bg-slate-50"
                      }`}
                    >
                      {link.label}
                    </motion.a>
                  ))}
                </div>
                <div className="mt-8 pt-8 border-t border-slate-100 space-y-3">
                  <a
                    href="#"
                    className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-slate-600 hover:bg-slate-50 rounded-lg transition-colors"
                  >
                    <UserCircle size={20} />
                    Member Portal
                  </a>
                  <a
                    href="#donate"
                    className="flex items-center justify-center gap-2 px-4 py-3 bg-brand-red text-white text-sm font-medium rounded-lg hover:bg-brand-red-600 transition-colors"
                  >
                    Donate
                    <Heart size={16} />
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
