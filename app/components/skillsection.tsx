import {useState} from "react"
import {ArrowIcon} from "../components/icons/arrowicon"
export function SkillSection()
{
    const[showlanguages,setShowlanguages] = useState(false)
    const[showfrontend,setShowfrontend] = useState(false)
    const[showbackend,setShowbackend] = useState(false)
    const[showdatabases,setShowdatabases] = useState(false)
    const[showtools,setShowtools] = useState(false)
    return (
        <div className="flex justify-center pt-10">
        <div className="bg-mist-200 min-h-100 w-80 rounded-lg shadow-xl">
            <div className="pt-4 pl-4 flex items-center gap-2">
            <ArrowIcon onClick={()=>setShowlanguages(!showlanguages)} variant="secondary"/>
            <p className="font-Rubik text-xl text-primary">
                Languages
            </p>
            </div>
            {showlanguages && 
            <div className="pt-2 pl-11">
                <p className="font-Rubik text-md text-primary">
                    Typescript
                </p>
                <p className="font-Rubik text-md text-primary">
                    JavaScript
                </p>
                <p className="font-Rubik text-md text-primary">
                    SQL
                </p>
                </div>
                }
                 <div className="pt-4 pl-4 flex items-center gap-2">
            <ArrowIcon onClick={()=>setShowfrontend(!showfrontend)} variant="secondary"/>
            <p className="font-Rubik text-xl text-primary">
                Frontend
            </p>
            </div>
            {showfrontend && 
            <div className="pt-2 pl-11">
                <p className="font-Rubik text-md text-primary">
                    React
                </p>
                <p className="font-Rubik text-md text-primary">
                    TailwindCSS
                </p>
                <p className="font-Rubik text-md text-primary">
                    Next.js
                </p>
                <p className="font-Rubik text-md text-primary">
                    HTML
                </p>
                <p className="font-Rubik text-md text-primary">
                    CanvasAPI
                </p>
                </div>
                }
                  <div className="pt-4 pl-4 flex items-center gap-2">
            <ArrowIcon onClick={()=>setShowbackend(!showbackend)} variant="secondary"/>
            <p className="font-Rubik text-xl text-primary">
                Backend
            </p>
            </div>
            {showbackend && 
            <div className="pt-2 pl-11">
                <p className="font-Rubik text-md text-primary">
                    Node.js
                </p>
                <p className="font-Rubik text-md text-primary">
                    Express
                </p>
                <p className="font-Rubik text-md text-primary">
                    WebSocket
                </p>
                <p className="font-Rubik text-md text-primary">
                    PrismaORM
                </p>
                </div>
                }
                 <div className="pt-4 pl-4 flex items-center gap-2">
            <ArrowIcon onClick={()=>setShowdatabases(!showdatabases)} variant="secondary"/>
            <p className="font-Rubik text-xl text-primary">
                Databases
            </p>
            </div>
            {showdatabases && 
            <div className="pt-2 pl-11">
                <p className="font-Rubik text-md text-primary">
                    MongoDB
                </p>
                <p className="font-Rubik text-md text-primary">
                    PostgresSQL
                </p>
                </div>
                }
              <div className="pt-4 pl-4 flex items-center gap-2">
            <ArrowIcon onClick={()=>setShowfrontend(!showfrontend)} variant="secondary"/>
            <p className="font-Rubik text-xl text-primary">
                Tools
            </p>
            </div>
            {showfrontend && 
            <div className="pt-2 pl-11 pb-4">
                <p className="font-Rubik text-md text-primary">
                    Git 
                </p>
                <p className="font-Rubik text-md text-primary">
                    Github
                </p>
                <p className="font-Rubik text-md text-primary">
                    VSCode
                </p>
                <p className="font-Rubik text-md text-primary">
                    Cursor
                </p>
                <p className="font-Rubik text-md text-primary">
                    Docker
                </p>
                <p className="font-Rubik text-md text-primary">
                    Vercel
                </p>
                <p className="font-Rubik text-md text-primary">
                    Render
                </p>
                <p className="font-Rubik text-md text-primary">
                    Postman
                </p>
                </div>
                }
        </div>
        </div>
    )
}