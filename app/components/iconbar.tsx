"use client"
import {Button} from "../components/button"
import {useRouter} from "next/navigation"
export function IconBar()
{
    const router = useRouter()
    return (
    <div className="bg-mist-400 h-20 w-70 rounded-lg border-3 border-mist-700">
        <div className="flex items-center gap-8">
            <div className="pt-2 pl-4">
            <Button size="sm" onClick={()=>router.push("https://shorturl.at/s8P7V")} startIcon={<img src="/github.png" className="h-10 w-10"/>} variant="secondary" />
            </div>
            <div className="pt-2">
            <Button size="sm" onClick={()=>router.push("https://shorturl.at/GZjKf")} startIcon={<img src="/linkedin.png" className="h-10 w-10"/>} variant="secondary" />
            </div>
            <div className="pt-2">
            <Button size="sm" onClick={()=>router.push("https://rb.gy/a6ae55")} startIcon={<img src="/x.png" className="h-10 w-10"/>} variant="secondary" />
            </div>
        
        </div>
        </div>
    )
}
