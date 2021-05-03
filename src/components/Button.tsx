import React from "react";
import s from "../App.module.css"



export type ButtonType = {
    title: string
    actionButton: () => void

}

export const Button = (props: ButtonType) => {
    const ChangeHandler = () => {props.actionButton()}

    return <div className={s.Buttons}>
        <button className={s.button} onClick={ChangeHandler}>
            {props.title}
        </button>
    </div>
}