import {ReactElement} from "react"
interface buttonprops {
    onClick?:()=>void,
    size:"sm"|"md"|"lg",
    variant:"primary"|"secondary",
    startIcon?:ReactElement,
    text?:string
}
const sizeStyles ={
    "sm":"p-2",
    "md":"p-4",
    "lg":"p-8"
}
const variantStyles = {
    "primary":"bg-mist-800 shadow-md rounded-md hover:cursor-pointer transition-transform hover:scale-115",
    "secondary":"bg-mist-200 shadow-md rounded-md hover:cursor-pointer transition-transform hover:scale-115"
}
export function Button(props:buttonprops)
{
    return (
        <button onClick={props.onClick} className={`${sizeStyles[props.size]} ${variantStyles[props.variant]}`}>{props.startIcon && props.startIcon}{props.text}</button>
    )
}