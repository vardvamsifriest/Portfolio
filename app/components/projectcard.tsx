"use client"
import {useRouter} from "next/navigation"
import {RadioIcon} from "../components/icons/radioicon"
import {Button} from "../components/button"
import {LinkIcon} from "../components/icons/linkicon"
interface cardprops {
    title:string,
    description:string,
    githuburl?: string,
    tagline?:string,
    forCode?:()=>void,
    forLive?:()=>void
}
export function ProjectCard(props:cardprops)
{
    const router = useRouter()
    return (
        <div className="bg-mist-200 min-h-120 w-100 rounded-lg shadow-lg p-8">
      
         
          <div>
            <p className="font-Rubik text-primary font-bold text-2xl">
              {props.title}
            </p>
          </div>
      
          
          <div className="pt-2">
            <p className="font-Rubik text-primary text-lg">
              {props.tagline}
            </p>
          </div>
      
          
          <div className="pt-6">
            <p className="font-Rubik text-primary leading-relaxed">
              {props.description}
            </p>
          </div>
      
          
          <div className="flex items-center gap-2 pt-6">
            <p className="font-Rubik text-lg text-primary">
              Links
            </p>
      
            <LinkIcon />
          </div>
      
         
          <div className="pt-4">
            <div className="pt-2 flex items-center gap-4">
            <Button
              onClick={props.forCode}
              size="sm"
              startIcon={
                <img
                  src="/github.png"
                  className="h-10 w-10"
                />
              }
              variant="secondary"
            />
              <div className="flex items-center gap-2">
            <p className="text-primary font-Rubik">
                <span>--▶</span>
                Code
            </p>
            </div>
            </div>
            <div className="pt-2 flex items-center gap-4">
                <Button onClick={props.forLive} size="md" startIcon={<RadioIcon/>} variant="secondary"/>
            
            <div className="flex items-center gap-2">
            <p className="text-primary font-Rubik">
                <span>--▶</span>
                Demo
            </p>
            </div>
            </div>
          </div>
      
        </div>
      );
}