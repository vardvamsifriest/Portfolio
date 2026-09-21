interface arrowprops {
    onClick:()=>void,
    variant:"primary"|"secondary"
}
export function ArrowIcon(props:arrowprops)
{
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={props.variant=="primary" ? "#E4E8E9" : "#30383A"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" 
        className="lucide lucide-chevron-down preview-icon" onClick={props.onClick}><path d="m6 9 6 6 6-6"/></svg>
    )
}