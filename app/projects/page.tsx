"use client"
import { useState } from "react"
import Link from "next/link" 
export default function ProjectPage()
{

    return (
        <div className="bg-mist-700 min-h-screen w-full">
      <div className="bg-mist-400 h-25 w-full flex items-center gap-8" >
      <div className="flex pt-10 pl-20 items-center gap-2">
        <Link href="/" >
        <span className="text-mist-700">▶</span>
        </Link>
        <p className="font-Space text-primary font-bold text-2xl">
          HOME
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
        <div className="flex justify-center pt-20">
        <p className="font-Rubik text-2xl fond-bold">
          My latest projects.
        </p>
        </div>
        <div className="flex justify-center items-center gap-8">
        <div className="flex pt-10 pl-20 items-center gap-2">
        <Link href="/projects/bingebook">
        <span className="text-secondary">▶</span>
        </Link>
        <p className="font-Space text-secondary font-bold text-2xl">
          BingeBook
        </p>
        </div>
      <div className="flex pt-10 items-center gap-2">
        <Link href="/projects/zraw" >
        <span className="text-secondary">▶</span>
        </Link>
          <p className="text-2xl text-secondary font-bold font-Space ">
            Zraw
          </p>
          </div>
          <div className="flex pt-10 items-center gap-2">
        <Link href="/projects/taskbase">
        <span className="text-secondary">▶</span>
        </Link>
          <p className="text-2xl text-secondary font-bold font-Space ">
            TaskBase
          </p>
      </div>
      <div className="flex pt-10 items-center gap-2">
        <Link href="/projects/chess64X">
        <span className="text-secondary">▶</span>
        </Link>
          <p className="text-2xl text-secondary font-bold font-Space ">
            Chess64X
          </p>
      </div>
      </div>
      </div>
    )
}