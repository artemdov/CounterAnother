import React from 'react'
import s from "../App.module.css"


export type DisplayType = {
    count: number

}

export const Display = (props: DisplayType) => {
    return <div>

            <p className='s.Display'>
                {props.count}
            </p>

    </div>
}
