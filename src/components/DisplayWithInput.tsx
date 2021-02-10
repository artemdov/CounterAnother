import React from 'react'
import s from "../App.module.css"
import {useDispatch} from "react-redux";
import {SetMaxValueAC, SetStartValueAC} from "../store/reducers/reducer";


export type DisplayWithInputType = {
    titleValueMax: string
    titleValueMin: string
}

export const DisplayWithInput = (props: DisplayWithInputType) => {
    const dispatch = useDispatch()
    return  <div className={s.DisplayWithInput}>
        {props.titleValueMin}
        <input type='number' onChange={(e) => {
             dispatch(SetStartValueAC(+e.currentTarget.value))
        }}/>
        {props.titleValueMax}
        <input type='number' onChange={(e) => {
            dispatch(SetMaxValueAC(+e.currentTarget.value))
        }}/>
    </div>
}