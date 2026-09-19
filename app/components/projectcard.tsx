interface cardprops {
    title:string
    description:string
}
export function ProjectCard(props:cardprops)
{
    return  (
        <div className="bg-mist-200 h-100 w-100 rounded-lg">
            <div>
                <p className="font-Rubik text-md text-mist-800">
                    {props.title}
                </p>
            </div>
            <div>
                <p className="font-Rubik text-md text-mist-800">
                    {props.description}
                </p>
            </div>
        </div>
    )
}