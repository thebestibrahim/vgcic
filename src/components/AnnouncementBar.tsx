"use client";

import { motion } from "framer-motion";
import { X } from "lucide-react";
import { useState } from "react";

export default function AnnouncementBar() {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <motion.div
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -40, opacity: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="bg-brand-black text-white py-2.5 px-4 text-xs font-medium text-center tracking-wide relative"
    >
      <span className="opacity-80">
        Jumu&apos;ah Khutbah begins at 1:30 PM this Friday.
      </span>
      <a
        href="#"
        className="ml-2 underline hover:text-brand-gold-400 transition-colors duration-200"
      >
        Read Guidelines
      </a>
      <button
        onClick={() => setVisible(false)}
        className="absolute right-3 top-1/2 -translate-y-1/2 p-1 rounded hover:bg-white/10 transition-colors"
        aria-label="Dismiss"
      >
        <X size={14} className="opacity-60" />
      </button>
    </motion.div>
  );
}
