import React from "react";
import s from "../App.module.css"



export type ButtonType = {
    title: string
    actionButton: () => void

}

export const Button = (props: ButtonType) => {
    const ChangeHandler =() => {}

    return <div className={s.Buttons}>
        <button className={s.button} onClick={() => {props.actionButton()}}>
            {props.title}
        </button>
    </div>
}