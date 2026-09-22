import {useState} from "react"
import {ArrowIcon} from "../components/icons/arrowicon"
import {GithubIcon} from "../components/icons/githubicon"
import {GitIcon} from "../components/icons/giticon"
import {CursorIcon} from "../components/icons/cursoricon"
import {MongoDBIcon} from "../components/icons/mongodbicon"
import {VSCodeIcon} from "../components/icons/vscodeicon"
import {HTMLIcon} from "../components/icons/htmlicon"
import {DockerIcon} from "../components/icons/dockericon"
import {JSIcon} from "../components/icons/jsicon"
import {TSIcon} from "../components/icons/tsicon"
import {NextIcon} from "../components/icons/nexticon"
import {VercelIcon} from "../components/icons/vercelicon"
import {PostmanIcon} from "../components/icons/postmanicon"
import {TailwindIcon} from "../components/icons/tailwindicon"
import {SQLIcon} from "../components/icons/sqlicon"
import {ReactIcon} from "../components/icons/reacticon"
import {PostgresSQLIcon} from "../components/icons/postgressicon"
import {ExpressIcon} from "../components/icons/expressicon"
import {NodejsIcon} from "../components/icons/nodejsicon"
import {WebsocketIcon} from "../components/icons/websocketicon"
import {PrismaIcon} from "../components/icons/prismaicon"
import {CloudIcon} from "../components/icons/cloudicon"
import {CanvasIcon} from "../components/icons/canvasicon"



export function SkillSection()
{
    const[showlanguages,setShowlanguages] = useState(false)
    const[showfrontend,setShowfrontend] = useState(false)
    const[showbackend,setShowbackend] = useState(false)
    const[showdatabases,setShowdatabases] = useState(false)
    const[showtools,setShowtools] = useState(false)
    return (
        <div className="flex justify-center pt-10">
        <div className="bg-mist-200 min-h-60 w-80 rounded-lg shadow-xl">
            <div className="pt-4 pl-4 flex items-center gap-2">
            <ArrowIcon onClick={()=>setShowlanguages(!showlanguages)} variant="secondary"/>
            <p className="font-Rubik text-xl text-primary">
                Languages
            </p>
            </div>
            {showlanguages && 
            <div className="pt-2 pl-11 ">
                <div className="flex items-center gap-2 pt-2">
                <TSIcon/>
                <p className="font-Rubik text-md text-primary">
                    Typescript
                </p>
                </div>
                <div className="flex items-center gap-2 pt-2">
                <JSIcon/>
                <p className="font-Rubik text-md text-primary">
                    JavaScript
                </p>
                </div>
                <div className="flex items-center gap-2 pt-2">
                <SQLIcon/>
                <p className="font-Rubik text-md text-primary">
                    SQL
                </p>
                </div>
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
                 <div className="flex items-center gap-2 pt-2">
                <ReactIcon />
                <p className="font-Rubik text-md text-primary">
                    React
                </p>
                </div>
                <div className="flex items-center gap-2 pt-2">
                <TailwindIcon/>
                <p className="font-Rubik text-md text-primary">
                    TailwindCSS
                </p>
                </div>
                <div className="flex items-center gap-2 pt-2">
                <NextIcon/>
                <p className="font-Rubik text-md text-primary">
                    Next.js
                </p>
                </div>
                <div className="flex items-center gap-2 pt-2">
                <HTMLIcon/>
                <p className="font-Rubik text-md text-primary">
                    HTML
                </p>
                </div>
                <div className="flex items-center gap-2 pt-2">
                <CanvasIcon />
                <p className="font-Rubik text-md text-primary">
                    CanvasAPI
                </p>
                </div>
                </div>
                }
                  <div className="pt-4 pl-4 flex items-center gap-2">
            <ArrowIcon onClick={()=>setShowbackend(!showbackend)} variant="secondary"/>
            <p className="font-Rubik text-xl text-primary">
                Backend
            </p>
            </div>
            {showbackend && 
            <div className="pt-2 pl-11 ">
                 <div className="flex items-center gap-2 pt-2">
                <NodejsIcon/>
                <p className="font-Rubik text-md text-primary">
                    Node.js
                </p>
                </div>
                <div className="flex items-center gap-2 pt-2">
                <ExpressIcon/>
                <p className="font-Rubik text-md text-primary">
                    Express
                </p>
                </div>
                <div className="flex items-center gap-2 pt-2">
                <WebsocketIcon/>
                <p className="font-Rubik text-md text-primary">
                    WebSockets
                </p>
                </div>
                <div className="flex items-center gap-2 pt-2">
                <PrismaIcon/>
                <p className="font-Rubik text-md text-primary">
                    Prisma ORM
                </p>
                </div>
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
                 <div className="flex items-center gap-2 pt-2">
                <MongoDBIcon/>
                <p className="font-Rubik text-md text-primary">
                    MongoDB
                </p>
                </div>
                <div className="flex items-center gap-2 pt-2">
                <PostgresSQLIcon/>
                <p className="font-Rubik text-md text-primary">
                    PostgresSQL
                </p>
                </div>
                </div>
                }
              <div className="pt-4 pl-4 flex items-center gap-2 pt-2 pb-2">
            <ArrowIcon onClick={()=>setShowtools(!showtools)} variant="secondary"/>
            <p className="font-Rubik text-xl text-primary">
                Tools
            </p>
            </div>
            {showtools && 
            <div className="pt-2 pl-11 pb-4">
                 <div className="flex items-center gap-2 pt-2">
                <GitIcon/>
                <p className="font-Rubik text-md text-primary">
                    Git 
                </p>
                </div>
                <div className="flex items-center gap-2 pt-2">
                <GithubIcon/>
                <p className="font-Rubik text-md text-primary">
                    GitHub
                </p>
                </div>
                <div className="flex items-center gap-2 pt-2">
                <VSCodeIcon/>
                <p className="font-Rubik text-md text-primary">
                    VS Code
                </p>
                </div>
                <div className="flex items-center gap-2 pt-2">
                <CursorIcon/>
                <p className="font-Rubik text-md text-primary">
                    Cursor
                </p>
                </div>
                <div className="flex items-center gap-2 pt-2">
                <DockerIcon/>
                <p className="font-Rubik text-md text-primary">
                    Docker
                </p>
                </div>
                <div className="flex items-center gap-2 pt-2">
                <VercelIcon/>
                <p className="font-Rubik text-md text-primary">
                    Vercel
                </p>
                </div>
                <div className="flex items-center gap-2 pt-2">
                <CloudIcon/>
                <p className="font-Rubik text-md text-primary">
                    Render
                </p>
                </div>
                <div className="flex items-center gap-2 pt-2">
                <PostmanIcon />
                <p className="font-Rubik text-md text-primary">
                    Postman
                </p>
                </div>
                </div>
                }
        </div>
        </div>
    )
}