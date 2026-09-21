"use client"
import {IconBar} from "./components/iconbar"
import {ProjectCard} from "./components/projectcard"
import {EducationSection} from "./components/educationsection"
import {ArrowIcon} from "./components/icons/arrowicon"
import {ProjectSection} from  "./components/projectsection"
import {SkillSection} from "./components/skillsection"
import { useState } from "react"
export default function Page()
{
  const[showprojects,setShowprojects] = useState(false)
  const[showeducation,setShoweducation] = useState(false)
  const[showskills,setShowskills] = useState(false)
  return (
    <div className="bg-mist-700 min-h-screen w-full">
      <div className="bg-mist-200 h-25 w-full" >
      <div className="flex justify-center pt-3">
       <IconBar/>
       </div>
      </div>
      <div className="flex justify-center pt-10">
        <p className="font-Space text-mist-200 text-6xl">
        VAMSI VARDHAN KATURI
        </p>
      </div>
      <div className="flex justify-center pt-10 items-center gap-2">
        <div>
          <ArrowIcon onClick={()=>setShoweducation(!showeducation)} variant="primary" />
        </div>
        <p className="font-Space text-4xl">
          EDUCATION
        </p>
         </div>
         <div className="flex justify-center pt-10">
        {showeducation &&  
            <EducationSection />
          }
          </div>
        <div className="flex justify-center items-center gap-2 pt-10">
        <ArrowIcon onClick={()=>setShowskills(!showskills)} variant="primary" />
          <p className="text-4xl font-Space ">
            SKILLS
          </p>

        </div>
          {showskills && 
            <SkillSection />
          }
      <div className="flex justify-center items-center gap-2 pt-30">
        <ArrowIcon onClick={()=>setShowprojects(!showprojects)} variant="primary" />
        <p className="font-Space text-4xl">
          PROJECTS
        </p>
        </div>
      {showprojects && 
        <ProjectSection />
        }

    </div>
  )
}