"use client";

import {
  BookOpen,
  Heart,
  Users,
  Mic2,
  ArrowRight,
} from "lucide-react";
import ScrollReveal from "./ScrollReveal";

export default function Services() {
  return (
    <section id="services" className="py-24 bg-white border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <ScrollReveal>
            <div className="max-w-xl">
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-4">
                Serving the Community
              </h2>
              <p className="text-lg text-slate-500">
                Beyond the five daily prayers, VGCIC is a hub for education,
                social welfare, and youth development.
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <a
              href="#"
              className="text-sm font-medium text-brand-gold-700 hover:text-brand-gold-600 flex items-center gap-2 group"
            >
              View all services
              <ArrowRight
                size={16}
                className="group-hover:translate-x-1 transition-transform duration-200"
              />
            </a>
          </ScrollReveal>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
          {/* Main Feature: Education */}
          <ScrollReveal delay={0} className="md:col-span-2">
            <div className="h-full relative group overflow-hidden rounded-2xl bg-slate-50 border border-slate-200 p-8 flex flex-col justify-between hover:shadow-lg hover:shadow-slate-200/50 transition-all duration-500">
              <div className="absolute top-0 right-0 p-12 opacity-[0.04] group-hover:opacity-[0.08] transition-opacity duration-500">
                <BookOpen size={200} strokeWidth={0.5} />
              </div>
              <div>
                <div className="w-12 h-12 bg-white rounded-xl border border-slate-200 flex items-center justify-center mb-6 shadow-sm text-slate-700 group-hover:scale-110 group-hover:shadow-md transition-all duration-300">
                  <BookOpen size={24} />
                </div>
                <h3 className="text-2xl font-semibold text-slate-900 mb-2">
                  VGCIC Madrasah
                </h3>
                <p className="text-slate-500 max-w-md">
                  Structured Islamic education for children ages 5-16. Quranic
                  recitation, memorization, and Islamic studies with qualified
                  teachers.
                </p>
              </div>
              <div className="flex gap-3">
                <span className="px-3 py-1 bg-white border border-slate-200 rounded-md text-xs font-medium text-slate-600">
                  Weekend Classes
                </span>
                <span className="px-3 py-1 bg-white border border-slate-200 rounded-md text-xs font-medium text-slate-600">
                  After School
                </span>
              </div>
            </div>
          </ScrollReveal>

          {/* Feature: Welfare */}
          <ScrollReveal delay={0.1}>
            <div className="h-full bg-white rounded-2xl border border-slate-200 p-8 flex flex-col justify-between hover:border-brand-gold-200 hover:shadow-lg hover:shadow-brand-gold-50 transition-all duration-500 group">
              <div>
                <div className="w-12 h-12 bg-brand-gold-50 rounded-xl border border-brand-gold-100 flex items-center justify-center mb-6 text-brand-gold-600 group-hover:scale-110 transition-transform duration-300">
                  <Heart size={24} />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">
                  Zakat &amp; Welfare
                </h3>
                <p className="text-slate-500 text-sm">
                  Supporting the needy within and outside VGC. Transparent
                  distribution of Zakat and Sadaqah.
                </p>
              </div>
              <a
                href="#"
                className="text-sm font-medium text-brand-red flex items-center gap-1 group-hover:gap-2 transition-all duration-200"
              >
                Donate Now <ArrowRight size={14} />
              </a>
            </div>
          </ScrollReveal>

          {/* Feature: Counseling */}
          <ScrollReveal delay={0.15}>
            <div className="h-full bg-white rounded-2xl border border-slate-200 p-8 flex flex-col justify-between hover:border-blue-200 hover:shadow-lg hover:shadow-blue-50 transition-all duration-500 group">
              <div>
                <div className="w-12 h-12 bg-blue-50 rounded-xl border border-blue-100 flex items-center justify-center mb-6 text-blue-600 group-hover:scale-110 transition-transform duration-300">
                  <Users size={24} />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">
                  Family Counseling
                </h3>
                <p className="text-slate-500 text-sm">
                  Confidential religious guidance for families, couples, and
                  individuals facing life&apos;s challenges.
                </p>
              </div>
              <a
                href="#"
                className="text-sm font-medium text-blue-700 flex items-center gap-1 group-hover:gap-2 transition-all duration-200"
              >
                Book Session <ArrowRight size={14} />
              </a>
            </div>
          </ScrollReveal>

          {/* Feature: Youth - Teen Talk */}
          <ScrollReveal delay={0.2} className="md:col-span-2">
            <div className="h-full bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl border border-slate-700 p-8 flex flex-col md:flex-row items-center justify-between text-white relative overflow-hidden group">
              {/* Abstract BG */}
              <div className="absolute right-0 top-0 w-64 h-64 bg-brand-gold/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2 group-hover:bg-brand-gold/20 transition-colors duration-700" />
              <div className="relative z-10 max-w-lg">
                <div className="flex items-center gap-2 mb-4">
                  <span className="px-2 py-1 bg-red-500/20 text-red-300 border border-red-500/30 rounded text-[10px] font-bold uppercase tracking-wider">
                    For Youth 13-19
                  </span>
                </div>
                <h3 className="text-2xl font-semibold mb-2">
                  The VGCIC Teen Talk Room
                </h3>
                <p className="text-slate-400 mb-6">
                  A safe space for the youth to connect, discuss real-world
                  issues, and strengthen their identity. Sessions every Friday.
                </p>
                <button className="px-5 py-2.5 bg-white text-slate-900 rounded-lg text-sm font-medium hover:bg-slate-100 transition-colors duration-200 active:scale-[0.97]">
                  Visit Teen Page
                </button>
              </div>
              <div className="relative z-10 mt-8 md:mt-0">
                <div className="w-20 h-20 bg-slate-800 rounded-full flex items-center justify-center border border-slate-600 group-hover:border-brand-gold/40 transition-colors duration-500">
                  <Mic2 size={32} className="text-brand-gold-400" />
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
