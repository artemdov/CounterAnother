import React from 'react'
import s from "../App.module.css"


export type DisplayWithInputType = {
    setValueStart: (e: number) => void
    setValueMax: (e: number) => void
    titleValueMax: string
    titleValueMin: string
}

export const DisplayWithInput = (props: DisplayWithInputType) => {
    return  <div className={s.DisplayWithInput}>
        {props.titleValueMin}
        <input type='number' onChange={(e) => {
             props.setValueStart(+e.currentTarget.value)
        }}/>
        {props.titleValueMax}
        <input type='number' onChange={(e) => {
            props.setValueMax(+e.currentTarget.value)
        }}/>
    </div>
}