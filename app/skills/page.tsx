"use client";

import { SkillSection } from "../components/skillsection";
import Link from "next/link";
import CodePiece from "../components/codepiece";
import { IconBar } from "../components/iconbar";
import { motion } from "motion/react";
import { CodePiece2 } from "../components/codepiece2";
import { CodePiece3 } from "../components/codepiece3";
import { TerminalText } from "../components/terminaltext";

export default function SkillPage() {
  return (
    <div className="bg-mist-700 min-h-screen w-full">

      <div className="bg-mist-400 h-25 w-full flex items-center gap-8">

        <div className="flex pt-10 pl-20 items-center gap-2">
          <Link href="/projects">
            <span className="text-mist-700">▶</span>
          </Link>

          <p className="font-Space text-primary font-bold text-2xl">
            PROJECTS
          </p>
        </div>

        <div className="flex pt-10 items-center gap-2">
          <Link href="/">
            <span className="text-mist-700">▶</span>
          </Link>

          <p className="text-2xl text-primary font-bold font-Space">
            HOME
          </p>
        </div>

        <div className="flex pt-10 items-center gap-2">
          <Link href="/education">
            <span className="text-mist-700">▶</span>
          </Link>

          <p className="text-2xl text-primary font-bold font-Space">
            EDUCATION
          </p>
        </div>

      </div>

      <div className="flex justify-center pt-10">
        <p className="font-Space text-mist-200 text-6xl">
          TECH STACK
        </p>
      </div>

      <div className="flex justify-center pt-10">
        <p className="font-Space text-mist-200 text-2xl">
          Technologies I use to build full-stack and real-time applications.
        </p>
      </div>

   
      <div className="mx-auto grid max-w-6xl grid-cols-3 items-start gap-10 pt-10">

      
        <div className="flex flex-col items-end gap-20">

          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <CodePiece />
          </motion.div>

          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5,
            }}
          >
            <CodePiece2 />
          </motion.div>

        </div>

        {/* Center */}
        <div className="flex justify-center">
          <SkillSection />
        </div>

        {/* Right code pieces */}
        <div className="flex flex-col items-start gap-20">

          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.8,
            }}
          >
            <CodePiece3 />
          </motion.div>

          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1.2,
            }}
          >
            <TerminalText />
          </motion.div>

        </div>

      </div>

      {/* Floating social bar */}
      <div className="pt-10 pb-30">
        <motion.div
          className="fixed bottom-0 left-1/2 z-50 -translate-x-1/2"
          animate={{
            y: [0, -8, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <IconBar />
        </motion.div>
      </div>

    </div>
  );
}