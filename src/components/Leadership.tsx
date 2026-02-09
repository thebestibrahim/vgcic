"use client";

import { MessageCircle, Users } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import Image from "next/image";

export default function Leadership() {
  return (
    <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-gold/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <ScrollReveal direction="left">
            <div>
              <h2 className="text-4xl font-semibold tracking-tight mb-6">
                Leadership &amp; Guidance
              </h2>
              <p className="text-lg text-slate-400 mb-8 leading-relaxed">
                Our Imams and committee members are dedicated to fostering a
                welcoming environment based on the Quran and Sunnah. We are here
                to listen, guide, and serve.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center border border-slate-700 text-brand-gold shrink-0 group-hover:border-brand-gold/50 group-hover:bg-slate-800/80 transition-all duration-300">
                    <MessageCircle size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-white">
                      Ask the Imam
                    </h4>
                    <p className="text-sm text-slate-400 mt-1">
                      Have a religious question? Submit it anonymously or book a
                      private consultation.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center border border-slate-700 text-brand-gold shrink-0 group-hover:border-brand-gold/50 group-hover:bg-slate-800/80 transition-all duration-300">
                    <Users size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-white">
                      Volunteer Program
                    </h4>
                    <p className="text-sm text-slate-400 mt-1">
                      Join the Usrah committee, maintenance team, or event
                      planning squad.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Right - Imam Card */}
          <ScrollReveal direction="right">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-gold/20 to-brand-red/10 rounded-2xl blur-2xl" />
              <div className="relative bg-slate-800 border border-slate-700 rounded-2xl p-8 hover:border-slate-600 transition-colors duration-500">
                <div className="flex items-center gap-4 mb-6">
                  <Image
                    src="https://i.pravatar.cc/150?img=11"
                    alt="Sheikh Yusuf Abdullah"
                    width={64}
                    height={64}
                    className="rounded-full border-2 border-slate-600"
                  />
                  <div>
                    <h3 className="text-xl font-medium text-white">
                      Sheikh Yusuf Abdullah
                    </h3>
                    <p className="text-brand-gold text-sm">
                      Chief Imam, VGCIC
                    </p>
                  </div>
                </div>
                <blockquote className="text-slate-300 italic text-lg mb-6 leading-relaxed">
                  &ldquo;The best of you are those who are most beneficial to
                  others. Our mosque is not just a building, but a foundation
                  for character and compassion.&rdquo;
                </blockquote>
                <button className="w-full py-3 rounded-lg border border-slate-600 text-white hover:bg-slate-700 hover:border-slate-500 transition-all duration-200 text-sm font-medium active:scale-[0.98]">
                  Contact Office
                </button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
