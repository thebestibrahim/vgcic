"use client";

import { Clock, ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const events = [
  {
    month: "FEB",
    day: "24",
    title: "Understanding Surah Al-Kahf",
    desc: "Weekly Tafseer session with Imam Yusuf. Open to brothers and sisters.",
    time: "After Maghrib",
    location: "Main Prayer Hall",
  },
  {
    month: "MAR",
    day: "02",
    title: "Pre-Ramadan Workshop",
    desc: "Preparing your heart, body, and home for the holy month.",
    time: "10:00 AM",
    location: "Community Hall",
  },
  {
    month: "MAR",
    day: "10",
    title: "Ramadan Moonwatch Gathering",
    desc: "Join the community for the official moonwatch event and Iftar dinner.",
    time: "5:30 PM",
    location: "Mosque Courtyard",
  },
];

export default function Events() {
  return (
    <section id="events" className="py-24 px-6 max-w-7xl mx-auto">
      {/* Header */}
      <ScrollReveal>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 border-b border-slate-200 pb-6">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900 mb-2">
              Community Calendar
            </h2>
            <p className="text-slate-500">
              Upcoming lectures, workshops, and gatherings.
            </p>
          </div>
          <div className="flex gap-2 mt-4 md:mt-0">
            <button className="p-2 rounded-lg border border-slate-200 hover:bg-slate-50 text-slate-600 transition-colors duration-200 active:scale-95">
              <ChevronLeft size={20} />
            </button>
            <button className="p-2 rounded-lg border border-slate-200 hover:bg-slate-50 text-slate-600 transition-colors duration-200 active:scale-95">
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </ScrollReveal>

      {/* Event List */}
      <div className="space-y-4">
        {events.map((event, i) => (
          <ScrollReveal key={event.title} delay={i * 0.08}>
            <div className="group flex flex-col md:flex-row items-center gap-6 p-5 rounded-xl border border-slate-100 bg-white hover:border-brand-gold-200 hover:shadow-md hover:shadow-brand-gold-50/50 transition-all duration-300">
              {/* Date Block */}
              <div className="flex-shrink-0 w-full md:w-20 h-20 bg-slate-50 rounded-lg border border-slate-200 flex flex-col items-center justify-center text-slate-800 group-hover:border-brand-gold-200 group-hover:bg-brand-gold-50/50 transition-colors duration-300">
                <span className="text-[10px] font-bold uppercase text-brand-gold-600">
                  {event.month}
                </span>
                <span className="text-2xl font-bold">{event.day}</span>
              </div>

              {/* Content */}
              <div className="flex-grow text-center md:text-left">
                <h3 className="text-lg font-semibold text-slate-900 group-hover:text-brand-gold-600 transition-colors duration-200">
                  {event.title}
                </h3>
                <p className="text-sm text-slate-500 mt-1">{event.desc}</p>
              </div>

              {/* Meta */}
              <div className="flex flex-col items-center md:items-end gap-1 flex-shrink-0 min-w-[140px]">
                <span className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-600 bg-slate-100 px-2 py-1 rounded">
                  <Clock size={14} />
                  {event.time}
                </span>
                <span className="text-xs text-slate-400">
                  {event.location}
                </span>
              </div>

              {/* Arrow */}
              <div className="hidden md:block">
                <button className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 group-hover:text-brand-gold-600 group-hover:border-brand-gold-200 group-hover:bg-brand-gold-50 transition-all duration-300">
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
