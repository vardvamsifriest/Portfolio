"use client"
import {ProjectCard} from  "../../components/projectcard"
import Link from "next/link"
import {IconBar} from "../../components/iconbar"
import {motion} from "motion/react"
import {useRouter} from "next/navigation"
export default function Chess64XPage()
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
                    Chess64X
                </p>
            </div>
                <div className="flex justify-center pt-20">
                   <ProjectCard forCode={()=>window.open("https://tinyurl.com/53swerf4","_blank")} forLive={()=>window.open()} title="Overview" description="
                   Chess64X is a real-time multiplayer chess application where players can create or join rooms and play chess together through a WebSocket connection." />
                </div>
                <div className="pt-20 flex justify-center">
                    <p className="font-Space text-4xl text-secondary font-bold">How Chess64X works ?</p>
                </div>
                <div className="flex justify-center pt-20">
                    <img src="/chess64xflow.png" className="h-60 w-250 rounded-lg"></img>
                </div>
                <div className="flex justify-center pt-20">
                    <p className="text-secondary font-Space font-bold text-4xl">
                        Tech Stack
                    </p>
                </div>
                <div className="flex justify-center pt-10">
                    <p className="text-secondary font-Rubik font-bold text-2xl">
                    React · WebSockets · Express · TypeScript · MongoDB
                    </p>
                </div>
                <div className="flex justify-center pt-20">
                    <p className="text-secondary font-Space font-bold text-4xl">
                        Key Features
                    </p>
                    </div>
                    <div className="flex justify-center pt-10 pb-20">
                        <div>
                        <p className="text-secondary font-Space font-bold text-xl">- Authentication</p>
                         <p className="text-secondary font-Space font-bold text-xl">- Real-Time Multiplayer Chess</p>
                         <p className="text-secondary font-Space font-bold text-xl">- Live Move Synchronization</p>
                        <p className="text-secondary font-Space font-bold text-xl">- Game Management</p>
                        <p className="text-secondary font-Space font-bold text-xl">- MongoDB User Management</p>
                        <p className="text-secondary font-Space font-bold text-xl">- Chess Rule Validation using chess.js</p>
                        <p className="text-secondary font-Space font-bold text-xl">- Responsive Chess Interface</p>
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

                <img src="/chess1.png" className="absolute z-20 left-1/2 top-0 w-[420px] h-[320px]
                -translate-x-1/2 border-4 border-secondary shadow-lg"/>

                <img src="/chess2.png" className="absolute z-10 left-[16%] top-16 w-[420px] aspect-video
                -rotate-16 border-4 border-secondary shadow-lg"/>

                <img src="/chess3.png" className="absolute z-10 right-[16%] top-16 w-[420px] aspect-video
                rotate-16 border-4 border-secondary shadow-lg"/>

                </div>
                <div className="relative h-[400px] w-full">

                <img src="/chess4.png" className="absolute z-10 left-[26%] top-16 w-[420px] aspect-video
                -rotate-16 border-4 border-secondary shadow-lg"/>

                <img src="/chess5.png" className="absolute z-10 right-[26%] top-16 w-[420px] aspect-video
                rotate-16 border-4 border-secondary shadow-lg"/>

                </div>
                </div>
            </div>
    )
}
