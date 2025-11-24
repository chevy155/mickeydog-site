"use client";

import { motion } from "framer-motion";
import FrenchieSilhouette from "@/components/FrenchieSilhouette";

export default function Loading() {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-black">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="relative flex items-center justify-center"
      >
        {/* Glowing ring */}
        <div
          className="absolute w-[260px] h-[260px] rounded-full border-4 border-white/40 animate-pulse shadow-[0_0_40px_10px_rgba(255,255,255,0.4)]"
        ></div>

        {/* Frenchie silhouette */}
        <FrenchieSilhouette className="w-[200px] h-[200px] text-white" />
      </motion.div>
    </div>
  );
}
