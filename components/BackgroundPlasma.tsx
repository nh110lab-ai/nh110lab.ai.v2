"use client";

import { motion } from "framer-motion";

export function BackgroundPlasma() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* Dégradé plasma principal */}
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            "radial-gradient(circle at 20% 30%, rgba(255,0,230,0.35), transparent 60%), radial-gradient(circle at 80% 70%, rgba(0,200,255,0.35), transparent 60%), radial-gradient(circle at 40% 80%, rgba(255,170,0,0.35), transparent 60%), #050505",
            "radial-gradient(circle at 15% 40%, rgba(0,220,255,0.35), transparent 60%), radial-gradient(circle at 70% 80%, rgba(255,0,200,0.35), transparent 60%), radial-gradient(circle at 50% 20%, rgba(255,180,50,0.35), transparent 60%), #050505",
            "radial-gradient(circle at 40% 20%, rgba(255,50,150,0.35), transparent 60%), radial-gradient(circle at 85% 50%, rgba(0,180,255,0.35), transparent 60%), radial-gradient(circle at 30% 75%, rgba(255,200,0,0.35), transparent 60%), #050505",
          ],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Orbes plasma */}
      {[
        { size: 400, color: "from-pink-500/25 to-purple-500/20", x: "10%", y: "20%" },
        { size: 500, color: "from-cyan-400/25 to-blue-500/20", x: "70%", y: "65%" },
        { size: 350, color: "from-orange-400/30 to-yellow-300/20", x: "30%", y: "80%" },
      ].map((o, i) => (
        <motion.div
          key={i}
          className={`absolute rounded-full blur-3xl bg-gradient-to-br ${o.color}`}
          style={{
            width: o.size,
            height: o.size,
            left: o.x,
            top: o.y,
          }}
          animate={{
            scale: [1, 1.25, 1],
            y: [0, -40, 0],
            x: [0, 30, 0],
          }}
          transition={{
            duration: 12 + i * 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Texture mouvante */}
      <motion.div
        className="absolute inset-0 opacity-[0.15]"
        style={{
          background:
            "url('https://grainy-gradients.vercel.app/noise.svg') repeat",
        }}
        animate={{
          opacity: [0.08, 0.18, 0.08],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
}
