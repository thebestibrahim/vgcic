"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Clock, ArrowRight } from "lucide-react";
import PrayerWidget from "./PrayerWidget";

interface NextPrayerInfo {
  name: string;
  time: string;
}

export default function Hero() {
  const [nextPrayer, setNextPrayer] = useState<NextPrayerInfo | null>(null);

  useEffect(() => {
    async function fetchNextPrayer() {
      try {
        const lat = 6.4541;
        const lng = 3.5347;
        const response = await fetch(
          `https://api.aladhan.com/v1/timings?latitude=${lat}&longitude=${lng}&method=3`
        );
        if (!response.ok) return;
        
        const data = await response.json();
        const timings = data.data.timings;
        const prayerNames = ["Fajr", "Dhuhr", "Asr", "Maghrib", "Isha"];
        
        const now = new Date();
        const currentMinutes = now.getHours() * 60 + now.getMinutes();
        
        for (const name of prayerNames) {
          const time24 = timings[name].split(" ")[0];
          const [h, m] = time24.split(":").map(Number);
          const prayerMinutes = h * 60 + m;
          
          if (currentMinutes < prayerMinutes) {
            const period = h >= 12 ? "PM" : "AM";
            const h12 = h % 12 || 12;
            setNextPrayer({ name, time: `${h12}:${m.toString().padStart(2, "0")} ${period}` });
            return;
          }
        }
        
        // All passed, next is Fajr tomorrow
        const fajrTime = timings.Fajr.split(" ")[0];
        const [fh, fm] = fajrTime.split(":").map(Number);
        const period = fh >= 12 ? "PM" : "AM";
        const fh12 = fh % 12 || 12;
        setNextPrayer({ name: "Fajr", time: `${fh12}:${fm.toString().padStart(2, "0")} ${period}` });
      } catch (err) {
        console.error(err);
      }
    }
    
    fetchNextPrayer();
    const interval = setInterval(fetchNextPrayer, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative pt-20 pb-20 px-6 max-w-7xl mx-auto overflow-hidden">
      {/* Background decorative blob */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-br from-brand-gold-50 to-slate-100 rounded-full blur-3xl -z-10 opacity-60 translate-x-1/3 -translate-y-1/4 animate-pulse-soft" />

      <div className="grid lg:grid-cols-2 gap-16 items-center">
        {/* Left Content */}
        <div className="max-w-2xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 text-slate-600 text-xs font-medium mb-8 shadow-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-gold-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-gold-500" />
            </span>
            {nextPrayer ? `Next Prayer: ${nextPrayer.name} ${nextPrayer.time}` : "Loading prayer times..."}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-5xl md:text-7xl font-semibold tracking-tighter text-slate-900 mb-6 leading-[1.1]"
          >
            A Spiritual Sanctuary in{" "}
            <br />
            <span className="text-brand-gold-600">Victoria Garden City.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="text-lg text-slate-600 mb-10 leading-relaxed max-w-lg"
          >
            Welcome to the official website of VGCIC. We are a community
            dedicated to nurturing faith, serving humanity, and building a
            strong, inclusive Islamic environment for all generations.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <button className="group px-6 py-3.5 bg-slate-900 text-white text-sm font-medium rounded-lg hover:bg-slate-800 transition-all duration-200 flex items-center justify-center gap-2 shadow-xl shadow-slate-200 active:scale-[0.97]">
              View Prayer Times
              <Clock size={18} className="group-hover:rotate-12 transition-transform duration-300" />
            </button>
            <button className="group px-6 py-3.5 bg-white border border-slate-200 text-slate-700 text-sm font-medium rounded-lg hover:bg-slate-50 hover:border-slate-300 transition-all duration-200 flex items-center justify-center gap-2 active:scale-[0.97]">
              Community Services
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </motion.div>
        </div>

        {/* Right - Prayer Widget */}
        <PrayerWidget />
      </div>
    </section>
  );
}
