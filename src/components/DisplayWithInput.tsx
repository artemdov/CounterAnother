import React from 'react'
import s from "../App.module.css"


export type DisplayWithInputType = {
    setValueStart: (e: number) => void
    setValueMax: (e: number) => void
    setChange: (v:boolean) => void
}

export const DisplayWithInput = (props: DisplayWithInputType) => {
    return <div className={s.DisplayWithInput}>
        <input type='number' onChange={(e) => {
            props.setValueStart(+e.currentTarget.value)
        }}/>
        <input type='number' onChange={(e) => {
            props.setValueMax(+e.currentTarget.value)
        }}/>
        <button onClick={() => {props.setChange(false)}}>Set</button>
    </div>
}