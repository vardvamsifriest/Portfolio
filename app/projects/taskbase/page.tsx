"use client"
import {ProjectCard} from  "../../components/projectcard"
import Link from "next/link"
import {IconBar} from "../../components/iconbar"
import {motion} from "motion/react"
import {useRouter} from "next/navigation"
export default function TaskBasePage()
{
    const router = useRouter()
    return (
        <div className="bg-mist-700 min-h-screen w-full pb-32">
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
                <p className="font-Space text-6xl text-secondary font-bold">
                    TaskBase
                </p>
            </div>
                <div className="flex justify-center pt-20">
                   <ProjectCard forCode={()=>window.open("https://tinyurl.com/24yv5unv","_blank")} forLive={()=>window.open("https://tinyurl.com/5n88y3rt","_blank")} title="Overview" description="TaskBase is a priority-driven task management application built with Next.js and Express. 
                   It enables users to create, organize, and manage tasks through a structured workflow, with authentication 
                   handled by NextAuth and persistent data managed using Prisma and PostgreSQL."  />
                </div>
                <div className="pt-20 flex justify-center">
                    <p className="font-Space text-4xl text-secondary font-bold">How TaskBase works ?</p>
                </div>
                <div className="flex justify-center pt-20">
                    <img src="/taskbaseflow.png" className="h-60 w-250 rounded-lg"></img>
                </div>
                <div className="flex justify-center pt-20">
                    <p className="text-secondary font-Space font-bold text-4xl">
                        Tech Stack
                    </p>
                </div>
                <div className="flex justify-center pt-10">
                    <p className="text-secondary font-Rubik font-bold text-2xl">
                    Next.js · NextAuth · Express · TypeScript · PostgreSQL · Prisma
                    </p>
                </div>
                <div className="flex justify-center pt-20">
                    <p className="text-secondary font-Space font-bold text-4xl">
                        Key Features
                    </p>
                    </div>
                    <div className="flex justify-center pt-10 pb-20">
                        <div>
                        <p className="text-secondary font-Space font-bold text-xl">- Priority-driven task management</p>
                         <p className="text-secondary font-Space font-bold text-xl">- Create, edit, and delete tasks</p>
                         <p className="text-secondary font-Space font-bold text-xl">- Task status management</p>
                        <p className="text-secondary font-Space font-bold text-xl">- User authentication</p>
                        <p className="text-secondary font-Space font-bold text-xl">- Google & GitHub authentication</p>
                        <p className="text-secondary font-Space font-bold text-xl">- Responsive task dashboard</p>
                        <p className="text-secondary font-Space font-bold text-xl">- Database-backed user and task relationships</p>
                    </div>
                        <div>
                            <motion.div
                            className="fixed bottom-0 left-1/2 z-50 -translate-x-1/2"
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
                </div>
                <div className="flex justify-center pt-20">
                    <p className="text-secondary font-Space font-bold text-4xl">
                        Visual Walkthrough
                    </p>
                </div>
                <div className="pt-10">
                <div className="relative h-[400px] w-full">

                <img src="/taskbase1.png" className="absolute z-20 left-1/2 top-0 w-[420px] h-[320px]
                -translate-x-1/2 border-4 border-mist-800 shadow-lg"/>

                <img src="/taskbase2.png" className="absolute z-10 left-[16%] top-16 w-[420px] aspect-video
                -rotate-16 border-4 border-mist-800 shadow-lg"/>

                <img src="/taskbase3.png" className="absolute z-10 right-[16%] top-16 w-[420px] aspect-video
                rotate-16 border-4 border-mist-800 shadow-lg"/>

                </div>
                <div className="relative h-[400px] w-full">

                <img src="/taskbase4.png" className="absolute z-10 left-[26%] top-16 w-[420px] aspect-video
                -rotate-16 border-4 border-mist-800 shadow-lg"/>

                <img src="/taskbase5.png" className="absolute z-10 right-[26%] top-16 w-[420px] aspect-video
                rotate-16 border-4 border-mist-800 shadow-lg"/>

                </div>
                </div>
            </div>
    )
}
