"use client"
import {ProjectCard} from  "../../components/projectcard"
import Link from "next/link"
import {IconBar} from "../../components/iconbar"
import {motion} from "motion/react"
export default function BingeBookPage()
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
                    BingeBook
                </p>
            </div>
                <div className="flex justify-center pt-20">
                   <ProjectCard forCode={()=>window.open("https://tinyurl.com/773wcusj","_blank")} forLive={()=>window.open("https://tinyurl.com/4835tvxx","_blank")} title="Overview" description="
                   BingeBook is a full-stack movie and TV tracking platform that provides users with a centralized place to discover, organize, and track their entertainment. Users can search for movies and TV shows using TMDB, 
                   maintain a personal library, manage their watchlist, track viewing status, and write reviews. The application combines a responsive Next.js frontend with an Express.js backend and MongoDB database to provide secure, 
                   user-specific media management."  />
                </div>
                <div className="pt-20 flex justify-center">
                    <p className="font-Space text-4xl text-secondary font-bold">How BingeBook works ?</p>
                </div>
                <div className="flex justify-center pt-20">
                    <img src="/bingebookflow.png" className="h-60 w-250 rounded-lg"></img>
                </div>
                <div className="flex justify-center pt-20">
                    <p className="text-secondary font-Space font-bold text-4xl">
                        Tech Stack
                    </p>
                </div>
                <div className="flex justify-center pt-10">
                    <p className="text-secondary font-Rubik font-bold text-2xl">
                    Next.js · TypeScript · Express · MongoDB 
                    </p>
                </div>
                <div className="flex justify-center pt-20">
                    <p className="text-secondary font-Space font-bold text-4xl">
                        Key Features
                    </p>
                    </div>
                    <div className="flex justify-center pt-10 pb-20">
                        <div>
                        <p className="text-secondary font-Space font-bold text-xl">- Secure signup and signin using JWT authentication and bcrypt password hashing.</p>
                         <p className="text-secondary font-Space font-bold text-xl">- Search and explore movies and TV shows using the TMDB API.</p>
                         <p className="text-secondary font-Space font-bold text-xl">- Categorize content as Watchlist, Watching, Watched, or Dropped.</p>
                        <p className="text-secondary font-Space font-bold text-xl">- Users can create, view, and delete their own reviews.</p>
                        <p className="text-secondary font-Space font-bold text-xl">- View personal information and activity.</p>
                        <p className="text-secondary font-Space font-bold text-xl">- Designed to work across desktop, tablet, and mobile screens.</p>
                        <p className="text-secondary font-Space font-bold text-xl">- Clear feedback when content is loading or when sections contain no data.</p>
                        <p className="text-secondary font-Space font-bold text-xl">- Toast notifications for actions such as successful updates and errors.</p>
                        <p className="text-secondary font-Space font-bold text-xl">- Protected user-specific operations through JWT-based authorization.</p>
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
                    <div className="flex justify-center pb-10">
                            <p className="font-Space text-secondary text-2xl">
                                Landing
                            </p>
                        </div>
                <div className="relative h-[400px] w-full">
                        
                <img src="/binge1.png" className="absolute z-10 left-[26%] top-16 w-[420px] aspect-video
                -rotate-16 border-4 border-secondary shadow-lg"/>

                <img src="/binge2.png" className="absolute z-10 right-[26%] top-16 w-[420px] aspect-video
                rotate-16 border-4 border-secondary shadow-lg"/>

                </div>
                <div className="flex justify-center pb-10">
                            <p className="font-Space text-secondary text-2xl">
                                Authentication
                            </p>
                        </div>
                <div className="relative h-[400px] w-full">

                <img src="/binge3.png" className="absolute z-10 left-[26%] top-16 w-[420px] aspect-video
                -rotate-16 border-4 border-secondary shadow-lg"/>

                <img src="/binge4.png" className="absolute z-10 right-[26%] top-16 w-[420px] aspect-video
                rotate-16 border-4 border-secondary shadow-lg"/>

                </div>
                <div className="flex justify-center pb-10">
                            <p className="font-Space text-secondary text-2xl">
                                Movie/TV Details
                            </p>
                        </div>
                <div className="relative h-[400px] w-full">

                <img src="/binge5.png" className="absolute z-10 left-[26%] top-16 w-[420px] aspect-video
                -rotate-16 border-4 border-secondary shadow-lg"/>

                <img src="/binge6.png" className="absolute z-10 right-[26%] top-16 w-[420px] aspect-video
                rotate-16 border-4 border-secondary shadow-lg"/>

                </div>
                <div className="flex justify-center pb-10">
                            <p className="font-Space text-secondary text-2xl">
                                Cast & Crew
                            </p>
                        </div>
                <div className="relative h-[400px] w-full">

                <img src="/binge7.png" className="absolute z-10 left-[26%] top-16 w-[420px] aspect-video
                -rotate-16 border-4 border-secondary shadow-lg"/>

                <img src="/binge8.png" className="absolute z-10 right-[26%] top-16 w-[420px] aspect-video
                rotate-16 border-4 border-secondary shadow-lg"/>

                </div>
                <div className="flex justify-center pb-10">
                            <p className="font-Space text-secondary text-2xl">
                                Your Library
                            </p>
                        </div>
                <div className="relative h-[400px] w-full">

                <img src="/binge9.png" className="absolute z-10 left-[26%] top-16 w-[420px] aspect-video
                -rotate-16 border-4 border-secondary shadow-lg"/>

                <img src="/binge10.png" className="absolute z-10 right-[26%] top-16 w-[420px] aspect-video
                rotate-16 border-4 border-secondary shadow-lg"/>

                </div>
               
                <div className="relative h-[400px] w-full">

                <img src="/binge11.png" className="absolute z-10 left-[26%] top-16 w-[420px] aspect-video
                -rotate-16 border-4 border-secondary shadow-lg"/>

                <img src="/binge12.png" className="absolute z-10 right-[26%] top-16 w-[420px] aspect-video
                rotate-16 border-4 border-secondary shadow-lg"/>

                </div>
                <div className="flex justify-center pb-10">
                            <p className="font-Space text-secondary text-2xl">
                                Profile and Reviews
                            </p>
                        </div>
                <div className="relative h-[400px] w-full">

                <img src="/binge14.png" className="absolute z-10 left-[26%] top-16 w-[420px] aspect-video
                -rotate-16 border-4 border-secondary shadow-lg"/>

                <img src="/binge13.png" className="absolute z-10 right-[26%] top-16 w-[420px] aspect-video
                rotate-16 border-4 border-secondary shadow-lg"/>

            </div>
                </div>
            </div>
    )
}
