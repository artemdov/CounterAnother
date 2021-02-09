import React from 'react'
import s from "../App.module.css"



export type DisplayType = {
    count: number
    change: boolean
}

export const  Display = (props: DisplayType) => {
    return <div className={s.Display}>
        {props.count}
        {props.change}
    </div>
}