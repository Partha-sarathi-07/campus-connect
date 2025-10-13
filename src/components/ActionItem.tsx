import { useState } from "react"

type ActionItemProp = {
    active: boolean
    handleClick: ()=> void
    activeIcon: string
    inActiveIcon: string
    label: string
}
export default function ActionItem(props: ActionItemProp) {
    return (
        <li onClick={props.handleClick} className="flex gap-2 items-center cursor-pointer">
            <img    
                className="w-[20px] h-[20px]"
                src={props.active? props.inActiveIcon : props.activeIcon} 
                alt={props.label}
            />
            <span className="text-[#555] font-medium">{props.label}</span>
        </li>
    )
}