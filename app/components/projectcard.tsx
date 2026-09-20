"use client"
import {useRouter} from "next/navigation"
import {ReactElement} from "react"
import {Button} from "../components/button"
import {LinkIcon} from "../components/icons/linkicon"
interface cardprops {
    title:string,
    description:string,
    githuburl?: string,
    tagline?:string
}
export function ProjectCard(props:cardprops)
{
    const router = useRouter()
    return  (
        <div className="bg-mist-200 h-100 w-100 rounded-lg shadow-lg">
            <div className="pt-2 flex justify-center">
                <p className="font-Rubik text-md text-primary font-bold text-xl">
                    {props.title}
                </p>
            </div>
            <div className="pt-2 flex justify-center">
                <p className="font-Rubik text-md text-primary font-md text-xl">
                    {props.tagline}
                </p>
            </div>
            <div className="pt-2 flex justify-center pl-8">
                <p className="font-Rubik font-md text-primary">
                    {props.description}
                </p>
            </div>
            <div className="flex items-center  gap-2 pt-4">
                <p className="font-Rubik text-xl text-primary pl-8 pt-2">
                    Links
                </p>
                <div>
                    <LinkIcon />
                </div>
            </div>
            <div className="pl-8 pt-2">
                <Button size="sm" startIcon={<img src="./github.png" className="h-10 w-10"/>} variant="secondary" /> 
            </div>
        </div>
    )
}