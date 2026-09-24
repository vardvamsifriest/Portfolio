"use client";

import { motion } from "motion/react";

export function FullStackAnimation() {
  return (
    <div className="mt-16 flex justify-center">
      <svg
        viewBox="0 0 1000 420"
        className="w-full max-w-5xl"
        fill="none"
      >
        {/* Connections */}

        <motion.path
          d="M250 100 L500 210"
          stroke="#30383A"
          strokeOpacity="0.25"
          strokeWidth="2"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5 }}
        />

        <motion.path
          d="M750 100 L500 210"
          stroke="#30383A"
          strokeOpacity="0.25"
          strokeWidth="2"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5 }}
        />

        <motion.path
          d="M500 210 L300 330"
          stroke="#30383A"
          strokeOpacity="0.25"
          strokeWidth="2"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5 }}
        />

        <motion.path
          d="M500 210 L700 330"
          stroke="#30383A"
          strokeOpacity="0.25"
          strokeWidth="2"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5 }}
        />

        {/* Animated packets */}

        <motion.circle
          r="5"
          fill="#30383A"
          animate={{
            cx: [250, 500],
            cy: [100, 210],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        <motion.circle
          r="5"
          fill="#30383A"
          animate={{
            cx: [750, 500],
            cy: [100, 210],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "linear",
            delay: 0.5,
          }}
        />

        <motion.circle
          r="5"
          fill="#30383A"
          animate={{
            cx: [500, 300],
            cy: [210, 330],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "linear",
            delay: 1,
          }}
        />

        <motion.circle
          r="5"
          fill="#30383A"
          animate={{
            cx: [500, 700],
            cy: [210, 330],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "linear",
            delay: 1.5,
          }}
        />

        {/* React / Next */}

        <Node x={250} y={100} title="Next.js / React" />

        {/* API */}

        <Node x={750} y={100} title="REST / WebSocket" />

        {/* Backend */}

        <Node x={500} y={210} title="Node.js / Express" />

        {/* Databases */}

        <Node x={300} y={330} title="PostgreSQL" />

        <Node x={700} y={330} title="MongoDB" />
      </svg>
    </div>
  );
}

function Node({
  x,
  y,
  title,
}: {
  x: number;
  y: number;
  title: string;
}) {
  return (
    <motion.g
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
      style={{ transformOrigin: `${x}px ${y}px` }}
    >
      <motion.circle
        cx={x}
        cy={y}
        r="48"
        stroke="#E4E8E9"
        strokeOpacity="0.5"
        fill="#30383A"
        animate={{
          r: [48, 51, 48],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <text
        x={x}
        y={y + 5}
        textAnchor="middle"
        fill="#E4E8E9"
        fontSize="14"
        fontWeight="500"
      >
        {title}
      </text>
    </motion.g>
  );
}