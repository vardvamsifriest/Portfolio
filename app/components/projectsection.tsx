import {ProjectCard} from "../components/projectcard"
export function ProjectSection()
{
    return (
        <div>
        <div className="flex justify-center pt-4">
        <p className="font-Rubik text-xl text-mist-200">
          Here are my latest projects.
        </p>  
        </div>
        
        <div className="grid grid-cols-2 gap-3 pl-60 pt-20">
        <div>
          <ProjectCard title={"BingeBook"} 
          description="BingeBook is a full-stack movie and TV tracking platform 
          for discovering and organizing what you watch. Users can manage their 
          personal media library, track titles across different viewing statuses, and 
          maintain a watchlist. It also allows users to 
          write reviews and keep their entire watching experience in one place."
          tagline="A Home for Everything You Watch."/>
        </div>
        <div>
          <ProjectCard title={"Zraw"} description="Zraw is a real-time collaborative drawing application 
          built with Next.js and React, allowing users to create and join rooms
           and collaborate through WebSocket synchronization." tagline="Real-Time Collaborative Whiteboard."/>
        </div>
        <div className="pt-10 pb-20">
          <ProjectCard title={"TaskBase"} description="askBase is a full-stack task management platform designed to help users organize and manage tasks based on priority. 
          It supports authentication, task creation, editing, deletion, and priority-based task management,
           built with Next.js, PostgreSQL, Prisma, and NextAuth." tagline="Task Management Platform."/>
        </div>
        <div className="pt-10 pb-20">
          <ProjectCard title={"Chess64X"} description="Chess64X is a real-time multiplayer chess platform built with React and WebSockets, 
          allowing players to create or join games and play against others in real time. 
          It uses chess.js for chess logic and WebSockets for live game communication." tagline="Master the board-One move at a time."/>
        </div>
        </div>
        </div>
    )
}