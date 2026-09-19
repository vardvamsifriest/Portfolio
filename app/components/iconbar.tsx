export function IconBar()
{
    return (
    <div className="bg-mist-200 h-10 w-36 rounded-lg outline-2 outline-mist-800">
        <div className="flex items-center gap-2">
        <img src="./github.png" className="h-10 w-10 hover:scale-115 hover:cursor-pointer transition-all"/>
        <img src="./linkedin.png" className="h-10 w-10 hover:scale-115 hover:cursor-pointer transition-all"/>
        <img src="./x.png" className="h-9 w-9 hover:scale-115 hover:cursor-pointer "/>


        </div>
        </div>
    )
}
