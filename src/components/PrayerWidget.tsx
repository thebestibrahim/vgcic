"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Moon,
  Sun,
  Sunrise,
  Sunset,
  CloudMoon,
  Calendar,
  Download,
  Loader2,
  MapPin,
} from "lucide-react";

interface PrayerTime {
  name: string;
  time: string;
  icon: typeof Moon;
  passed?: boolean;
  active?: boolean;
}

interface AladhanResponse {
  data: {
    timings: {
      Fajr: string;
      Dhuhr: string;
      Asr: string;
      Maghrib: string;
      Isha: string;
    };
    date: {
      hijri: {
        day: string;
        month: { en: string };
        year: string;
      };
      gregorian: {
        weekday: { en: string };
      };
    };
  };
}

const PRAYER_ICONS = {
  Fajr: CloudMoon,
  Dhuhr: Sun,
  Asr: Sunrise,
  Maghrib: Sunset,
  Isha: Moon,
};

const containerVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.07, delayChildren: 0.3 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" as const } },
};

function formatTime(time24: string): string {
  const [hours, minutes] = time24.split(":").map(Number);
  const period = hours >= 12 ? "PM" : "AM";
  const hours12 = hours % 12 || 12;
  return `${hours12}:${minutes.toString().padStart(2, "0")} ${period}`;
}

function parseTime(timeStr: string): number {
  const [hours, minutes] = timeStr.split(":").map(Number);
  return hours * 60 + minutes;
}

export default function PrayerWidget() {
  const [prayers, setPrayers] = useState<PrayerTime[]>([]);
  const [hijriDate, setHijriDate] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchPrayerTimes() {
      try {
        // VGC Lagos coordinates: 6.4541° N, 3.5347° E
        const lat = 6.4541;
        const lng = 3.5347;
        const method = 3; // Muslim World League
        
        const response = await fetch(
          `https://api.aladhan.com/v1/timings?latitude=${lat}&longitude=${lng}&method=${method}`
        );
        
        if (!response.ok) throw new Error("Failed to fetch prayer times");
        
        const data: AladhanResponse = await response.json();
        const timings = data.data.timings;
        const hijri = data.data.date.hijri;
        const weekday = data.data.date.gregorian.weekday.en;
        
        // Get current time in minutes
        const now = new Date();
        const currentMinutes = now.getHours() * 60 + now.getMinutes();
        
        // Build prayer list with passed/active states
        const prayerNames = ["Fajr", "Dhuhr", "Asr", "Maghrib", "Isha"] as const;
        let foundNext = false;
        
        const prayerList: PrayerTime[] = prayerNames.map((name) => {
          const time24 = timings[name].split(" ")[0]; // Remove timezone if present
          const prayerMinutes = parseTime(time24);
          const passed = currentMinutes > prayerMinutes;
          const active = !passed && !foundNext;
          
          if (active) foundNext = true;
          
          return {
            name,
            time: formatTime(time24),
            icon: PRAYER_ICONS[name],
            passed: passed && foundNext ? false : passed,
            active,
          };
        });
        
        // If all prayers passed, mark Fajr as next (tomorrow)
        if (!foundNext && prayerList.every(p => p.passed)) {
          prayerList[0].active = true;
          prayerList[0].passed = false;
        }
        
        setPrayers(prayerList);
        setHijriDate(`${weekday}, ${hijri.day} ${hijri.month.en} ${hijri.year}`);
        setLoading(false);
      } catch (err) {
        setError("Unable to load prayer times");
        setLoading(false);
        console.error(err);
      }
    }
    
    fetchPrayerTimes();
    
    // Refresh every minute to update active prayer
    const interval = setInterval(fetchPrayerTimes, 60000);
    return () => clearInterval(interval);
  }, []);

  const nextPrayer = prayers.find(p => p.active);

  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
      className="relative"
    >
      <div className="relative bg-white rounded-2xl shadow-2xl shadow-slate-200/50 border border-slate-100 p-1">
        <div className="bg-slate-50 rounded-xl p-6 border border-slate-100">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h3 className="font-semibold text-slate-900 text-lg">
                Prayer Schedule
              </h3>
              {loading ? (
                <p className="text-slate-500 text-sm">Loading...</p>
              ) : (
                <>
                  <p className="text-slate-500 text-sm">{hijriDate}</p>
                  <p className="text-slate-400 text-xs flex items-center gap-1 mt-1">
                    <MapPin size={10} /> VGC, Lagos
                  </p>
                </>
              )}
            </div>
            <div className="p-2 bg-white rounded-lg border border-slate-200 shadow-sm hover:shadow-md transition-shadow duration-200 cursor-pointer">
              <Calendar size={22} className="text-brand-gold-600" />
            </div>
          </div>

          {/* Prayer List */}
          {loading ? (
            <div className="flex items-center justify-center py-12">
              <Loader2 size={32} className="animate-spin text-brand-gold" />
            </div>
          ) : error ? (
            <div className="text-center py-8 text-slate-500">{error}</div>
          ) : (
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="show"
              className="space-y-3"
            >
              {prayers.map((prayer) => {
                const Icon = prayer.icon;

                if (prayer.active) {
                  return (
                    <motion.div
                      key={prayer.name}
                      variants={itemVariants}
                      whileHover={{ scale: 1.01 }}
                      className="flex items-center justify-between p-4 rounded-lg bg-brand-gold-50 border border-brand-gold-100 shadow-sm relative overflow-hidden"
                    >
                      <div className="absolute left-0 top-0 bottom-0 w-1 bg-brand-gold" />
                      <div className="flex items-center gap-3 relative z-10">
                        <Icon size={20} className="text-brand-gold-600" />
                        <span className="font-semibold text-brand-black">
                          {prayer.name}
                        </span>
                      </div>
                      <div className="text-right relative z-10">
                        <span className="block font-mono font-bold text-brand-black">
                          {prayer.time}
                        </span>
                        <span className="text-[10px] text-brand-gold-600 font-medium uppercase tracking-wide">
                          Next Prayer
                        </span>
                      </div>
                    </motion.div>
                  );
                }

                return (
                  <motion.div
                    key={prayer.name}
                    variants={itemVariants}
                    whileHover={{ scale: 1.01, borderColor: "#e2e8f0" }}
                    className={`flex items-center justify-between p-3 rounded-lg bg-white border border-slate-100 transition-colors duration-200 ${
                      prayer.passed ? "opacity-50" : "hover:border-slate-200"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <Icon
                        size={20}
                        className={prayer.passed ? "text-slate-400" : "text-slate-600"}
                      />
                      <span className="font-medium text-slate-700">
                        {prayer.name}
                      </span>
                    </div>
                    <span
                      className={`font-mono ${
                        prayer.passed ? "text-slate-600" : "text-slate-900"
                      }`}
                    >
                      {prayer.time}
                    </span>
                  </motion.div>
                );
              })}
            </motion.div>
          )}

          {/* Footer */}
          <div className="mt-6 pt-6 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
            <span>Jumu&apos;ah Prayer: 1:30 PM</span>
            <a
              href="#"
              className="hover:text-brand-gold-600 flex items-center gap-1 transition-colors duration-200"
            >
              Download Calendar <Download size={12} />
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
