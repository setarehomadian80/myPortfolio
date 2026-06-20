"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

type IconItem = {
  txt: string;
  persent: string;
};

const Icons: IconItem[] = [
  { txt: "Frontend Technologies", persent: "85%" },
  { txt: "Responsive Designs", persent: "100%" },
  { txt: "Modern UI Components", persent: "90%" },
];

export default function PercentBox() {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  // تشخیص اینکه سکشن وارد viewport شده یا نه
  const isInView = useInView(sectionRef, {
    once: true, // فقط یک بار اجرا شود
    margin: "-100px",
  });

  return (
    <div
      ref={sectionRef}
      className="grid grid-cols-1 md:grid-cols-3 md:gap-x-6 mt-12 gap-y-6"
    >
      {Icons.map((item, index) => (
        <motion.div
          key={item.txt}
          initial={{ opacity: 0, y: 40, scale: 0.9 }}
          animate={
            isInView
              ? { opacity: 1, y: 0, scale: 1 }
              : { opacity: 0, y: 40, scale: 0.9 }
          }
          transition={{
            duration: 0.6,
            delay: index * 0.2, // 👈 این همون stagger تو هست
            ease: "easeOut",
          }}
          className="
            border border-[#ff6a3d70] hover:border-[#FF6A3D]
            bg-[#111827]
            py-8 text-center rounded-2xl
            group
            cursor-pointer
          "
        >
          <span className="p-4 rounded-xl text-4xl font-bold text-[#FF6A3D]">
            {item.persent}
          </span>

          <p className="text-[16px] text-[#99A1AF] font-bold transition-all group-hover:text-[#FF6A3D]">
            {item.txt}
          </p>
        </motion.div>
      ))}
    </div>
  );
}