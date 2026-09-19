import {IconBar} from "./components/iconbar"
import {ProjectCard} from "./components/projectcard"
export default function Page()
{
  
  return (
    <div className="bg-mist-700 h-full w-full">
      <div className="bg-mist-200 h-15 w-full" >
      <div className="flex justify-center pt-3">
       <IconBar/>
       </div>
      </div>
      <div className="flex justify-center pt-10">
        <p className="font-Space text-mist-200 text-6xl">
        VAMSI VARDHAN KATURI
        </p>
      </div>
      <div className="flex justify-center pt-30">
        <p className="font-Space text-4xl">
          PROJECTS
        </p>
        </div>
        <div className="grid grid-cols-2 gap-4 pl-60 pt-20">
        <div>
          <ProjectCard title={"Bingebook"} description="ghd"/>
        </div>
        <div>
          <ProjectCard title={"Zraw"} description="ghd"/>
        </div>
        <div>
          <ProjectCard title={"TaskBase"} description="ghd"/>
        </div>
        <div>
          <ProjectCard title={"Chess64X"} description="ghd"/>
        </div>
        </div>
     
    </div>
  )
}