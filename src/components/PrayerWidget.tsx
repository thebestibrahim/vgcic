"use client";

import { motion } from "framer-motion";
import {
  Moon,
  Sun,
  Sunrise,
  Sunset,
  CloudMoon,
  Calendar,
  Download,
} from "lucide-react";

const prayers = [
  { name: "Fajr", time: "05:45 AM", icon: CloudMoon, passed: true },
  { name: "Dhuhr", time: "01:05 PM", icon: Sun, passed: true },
  { name: "Asr", time: "04:15 PM", icon: Sunrise, active: true },
  { name: "Maghrib", time: "06:45 PM", icon: Sunset },
  { name: "Isha", time: "08:00 PM", icon: Moon },
];

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

export default function PrayerWidget() {
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
              <p className="text-slate-500 text-sm">
                Thursday, 24th Rajab 1445
              </p>
            </div>
            <div className="p-2 bg-white rounded-lg border border-slate-200 shadow-sm hover:shadow-md transition-shadow duration-200 cursor-pointer">
              <Calendar size={22} className="text-brand-gold-600" />
            </div>
          </div>

          {/* Prayer List */}
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
