"use client"
import {ProjectCard} from  "../../components/projectcard"
import Link from "next/link"
import {IconBar} from "../../components/iconbar"
import {motion} from "motion/react"
export default function ZrawPage()
{
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
                    Zraw
                </p>
            </div>
                <div className="flex justify-center pt-20">
                   <ProjectCard title="Overview" description="Zraw is a real-time collaborative drawing application built with Next.js and React
                   , allowing users to create and join shared rooms and collaborate on a canvas in real time. It uses WebSocket communication to synchronize drawing events between connected users, 
                   with a backend built using Express and persistent data managed through PostgreSQL and Prisma. The project focuses on real-time state synchronization, room-based collaboration, 
                   and building a responsive canvas experience."  />
                </div>
                <div className="pt-20 flex justify-center">
                    <p className="font-Space text-4xl text-secondary font-bold">How Zraw works ?</p>
                </div>
                <div className="flex justify-center pt-20">
                    <img src="/zrawflow.png" className="h-60 w-250 rounded-lg"></img>
                </div>
                <div className="flex justify-center pt-20">
                    <p className="text-secondary font-Space font-bold text-4xl">
                        Tech Stack
                    </p>
                </div>
                <div className="flex justify-center pt-10">
                    <p className="text-secondary font-Rubik font-bold text-2xl">
                    Next.js · React · Express · WebSockets · PostgreSQL · Prisma
                    </p>
                </div>
                <div className="flex justify-center pt-20">
                    <p className="text-secondary font-Space font-bold text-4xl">
                        Key Features
                    </p>
                    </div>
                    <div className="flex justify-center pt-10 pb-20">
                        <div>
                        <p className="text-secondary font-Space font-bold text-xl">- Real-time WebSocket synchronization</p>
                         <p className="text-secondary font-Space font-bold text-xl">- Room-based collaboration</p>
                         <p className="text-secondary font-Space font-bold text-xl">- Canvas drawing state</p>
                        <p className="text-secondary font-Space font-bold text-xl">- Backend API + WebSocket server</p>
                        <p className="text-secondary font-Space font-bold text-xl">- Persistent database layer</p>
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

                <img src="/zraw1.png" className="absolute z-20 left-1/2 top-0 w-[420px] h-[320px]
                -translate-x-1/2 border-4 border-secondary shadow-lg"/>

                <img src="/zraw2.png" className="absolute z-10 left-[16%] top-16 w-[420px] aspect-video
                -rotate-16 border-4 border-secondary shadow-lg"/>

                <img src="/zraw3.png" className="absolute z-10 right-[16%] top-16 w-[420px] aspect-video
                rotate-16 border-4 border-secondary shadow-lg"/>

                </div>
                <div className="relative h-[400px] w-full">

                <img src="/zraw4.png" className="absolute z-10 left-[26%] top-16 w-[420px] aspect-video
                -rotate-16 border-4 border-secondary shadow-lg"/>

                <img src="/zraw5.png" className="absolute z-10 right-[26%] top-16 w-[420px] aspect-video
                rotate-16 border-4 border-secondary shadow-lg"/>

                </div>
                </div>
            </div>
    )
}
