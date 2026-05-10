"use client";

import { motion } from "framer-motion";
import {
  Rocket,
  Code2,
  Sparkles,
  TrendingUp,
} from "lucide-react";

export default function JourneySection() {
  const journey = [
    {
      title: "Started",
      year: "2026",
      desc: "My coding journey begins.",
      icon: <Rocket size={26} />,
      glow: "shadow-pink-500/60",
      bg: "from-pink-500 to-purple-500",
    },
    {
      title: "Learning",
      year: "Early 2026",
      desc: "Exploring web development.",
      icon: <Code2 size={26} />,
      glow: "shadow-cyan-500/60",
      bg: "from-cyan-400 to-blue-500",
    },
    {
      title: "Building",
      year: "Mid 2026",
      desc: "Building projects for clients.",
      icon: <Sparkles size={26} />,
      glow: "shadow-purple-500/60",
      bg: "from-purple-500 to-indigo-500",
    },
    {
      title: "Growing",
      year: "Now",
      desc: "Continuing to learn & grow.",
      icon: <TrendingUp size={26} />,
      glow: "shadow-sky-500/60",
      bg: "from-sky-400 to-cyan-500",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#050816] py-28 px-4 text-white">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(124,58,237,0.25),transparent_35%)]" />

      {/* Floating particles */}
      <motion.div
        animate={{
          y: [0, -20, 0],
          opacity: [0.4, 1, 0.4],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
        }}
        className="absolute top-20 left-20 w-2 h-2 rounded-full bg-purple-500 blur-sm"
      />

      <motion.div
        animate={{
          y: [0, 20, 0],
          opacity: [0.2, 1, 0.2],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
        }}
        className="absolute bottom-32 right-20 w-3 h-3 rounded-full bg-cyan-400 blur-sm"
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center mb-28"
        >
          <h2 className="text-5xl md:text-7xl font-black mb-6">
            My{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Journey
            </span>
          </h2>

          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Every line of code is one more step toward my dream.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Animated Curved Line */}
          <svg
            className="absolute top-20 left-0 w-full hidden md:block"
            height="220"
            viewBox="0 0 1200 220"
            fill="none"
          >
            <motion.path
              d="M0 150 C150 250 250 20 400 120 C550 220 650 40 800 100 C950 160 1050 60 1200 120"
              stroke="url(#gradient)"
              strokeWidth="5"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              transition={{
                duration: 3,
                ease: "easeInOut",
              }}
              viewport={{ once: true }}
            />

            <defs>
              <linearGradient
                id="gradient"
                x1="0"
                y1="0"
                x2="1200"
                y2="0"
              >
                <stop stopColor="#a855f7" />
                <stop offset="0.5" stopColor="#06b6d4" />
                <stop offset="1" stopColor="#3b82f6" />
              </linearGradient>
            </defs>
          </svg>

          {/* Timeline Items */}
          <div className="grid md:grid-cols-4 gap-14 relative">
            {journey.map((item, index) => (
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  y: 80,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.25,
                }}
                viewport={{ once: true }}
                className="relative flex flex-col items-center"
              >
                {/* Floating Icon */}
                <motion.div
                  animate={{
                    y: [0, -18, 0],
                    rotate: [0, 4, -4, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    delay: index * 0.5,
                  }}
                  className={`relative z-20 w-24 h-24 rounded-full bg-gradient-to-br ${item.bg} flex items-center justify-center ${item.glow} shadow-[0_0_60px_rgba(168,85,247,0.7)]`}
                >
                  {/* Orbit Ring */}
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 10,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="absolute inset-[-14px] border border-white/10 rounded-full"
                  />

                  {/* Pulse */}
                  <motion.div
                    animate={{
                      scale: [1, 1.5],
                      opacity: [0.6, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                    }}
                    className="absolute inset-0 rounded-full bg-purple-500"
                  />

                  {item.icon}
                </motion.div>

                {/* Dotted Line */}
                <motion.div
                  initial={{ height: 0 }}
                  whileInView={{ height: 70 }}
                  transition={{
                    duration: 1,
                    delay: 0.5 + index * 0.2,
                  }}
                  viewport={{ once: true }}
                  className="w-[2px] border-l-2 border-dashed border-cyan-400/50"
                />

                {/* Card */}
                <motion.div
                  whileHover={{
                    y: -12,
                    scale: 1.04,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 200,
                  }}
                  className="group relative p-7 rounded-[28px] border border-white/10 bg-white/5 backdrop-blur-xl overflow-hidden"
                >
                  {/* Glow Hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-purple-500/10 to-cyan-500/10" />

                  {/* Floating Glow */}
                  <motion.div
                    animate={{
                      x: [-20, 20, -20],
                      y: [-10, 10, -10],
                    }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                    }}
                    className="absolute top-0 right-0 w-24 h-24 bg-purple-500/20 blur-3xl"
                  />

                  <h3 className="text-3xl font-bold mb-3 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                    {item.title}
                  </h3>

                  <p className="text-purple-400 font-semibold mb-4">
                    {item.year}
                  </p>

                  <p className="text-gray-400 leading-relaxed text-sm">
                    {item.desc}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Bottom Quote */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              delay: 1,
            }}
            viewport={{ once: true }}
            className="mt-28 flex justify-center"
          >
            <motion.div
              animate={{
                y: [0, -8, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
              className="px-8 py-4 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl text-lg text-gray-300 shadow-[0_0_40px_rgba(168,85,247,0.2)]"
            >
              ✨ The best is yet to come...
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}