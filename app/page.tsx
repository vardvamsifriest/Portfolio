"use client"
import {IconBar} from "./components/iconbar"
import Link from "next/link";
import { motion } from "motion/react";
import {FullStackAnimation} from "./components/fullstackanimation"
export default function Page()
{
  return (
    <div className="bg-mist-700 min-h-screen w-full">
      <div className="bg-mist-400 h-25 w-full flex items-center gap-8" >
  
        <div className="flex pt-10 pl-20 items-center gap-2">
        <Link href="/projects" >
        <span className="text-mist-700">▶</span>
        </Link>
        <p className="font-Space text-primary font-bold text-2xl">
          PROJECTS
        </p>
        </div>
      <div className="flex pt-10 items-center gap-2">
        <Link href="/skills" >
        <span className="text-mist-700">▶</span>
        </Link>
          <p className="text-2xl text-primary font-bold font-Space ">
            SKILLS
          </p>
          </div>
          <div className="flex pt-10 items-center gap-2">
        <Link href="/education" >
        <span className="text-mist-700">▶</span>
        </Link>
          <p className="text-2xl text-primary font-bold font-Space ">
            EDUCATION
          </p>
          
      
       </div>
      </div>
      <div className="flex justify-center pt-10">
        <p className="font-Space text-mist-200 text-6xl">
        VAMSI VARDHAN KATURI
        </p>
      </div>
      <div className= "flex justify-end pr-40">
        <p className= "font-Space text-mist-200 text-2xl">
        Full-Stack Developer | Web & Real-Time Systems
        </p>  
      </div>    
      <div className="bg-mist-400 max-w-5xl mx-auto rounded-2xl">
        <FullStackAnimation />
      </div>

      <motion.div
        className="fixed bottom-0 left-1/2 z-50 -translate-x-1/2 pt-60"
        animate={{
        y: [0, -8, 0],
      }}
        
      transition={{
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
      }}>
      <IconBar />
      </motion.div>
    </div>
  )
}