import {useDispatch, useSelector} from "react-redux";
import React from "react";
import {AppStateType} from "./store/store";
import {IncrementValueAC, ResetStartValueAC, SetChangeValueAC} from "./store/reducers/reducer";
import s from "./App.module.css";
import {DisplayWithInput} from "./components/DisplayWithInput";
import {Button} from "./components/Button";
import {Display} from "./components/Display";


export function AppWithRedux() {

    type CountType = number
    type ValueMaxType = number
    type ValueStartType = number
    type ChangeType = boolean

    const dispatch = useDispatch()

    const count = useSelector<AppStateType, CountType>(state => state.count)
    const valueMax = useSelector<AppStateType, ValueMaxType>(state => state.valueMax)
    const change = useSelector<AppStateType, ChangeType>(state => state.change)

    const Increment = () => {
        if (count < valueMax) {
            dispatch(IncrementValueAC())
        }
    }
    const Reset = () => {
        dispatch(ResetStartValueAC())
    }
    const Set = () => {
        dispatch(SetChangeValueAC(!change))
    }

    return (
        <div className={s.App}>
            {!change && <>
                <DisplayWithInput titleValueMax={'Max'} titleValueMin={'Start'}/>
                <> <Button actionButton={Set} title={'set'}/></>
            </>}

            {change && <>
                <Display count={count}/>
                <> <Button actionButton={Increment} title={'inc'}/></>
                <> <Button actionButton={Reset} title={'res'}/></>
                <> <Button actionButton={Set} title={'set'}/></>
            </>}

        </div>
    )
}

export default AppWithRedux
