import React, {useState} from 'react';
import {Display} from "./components/Display";
import {Button} from "./components/Button";
import s from "./App.module.css"
import {DisplayWithInput} from "./components/DisplayWithInput";

function App() {

    const [count, setCount] = useState(0)
    const [valueMax, setValueMax] = useState(0)
    const [valueStart, setValueStart] = useState(0)
    const [change, setChange] = useState(false)


    const Increment = () => {
        if (count < valueMax) {
            setCount(count + 1)
        }
    }
    const Reset = () => {
        setCount(valueStart)
    }
    const Set = () => {
        setChange(!change)
    }


    return (
        <div className={s.App}>
            { change && <>
                 <DisplayWithInput titleValueMax={'Max'} titleValueMin={'Start'}
                                   setValueStart={setValueStart} setValueMax={setValueMax}/>
                <> <Button actionButton={Set} title={'set'}/></>
            </>}

            {!change && <>
                <Display count={count}/>
                <> <Button actionButton={Increment} title={'inc'}/></>
                <> <Button actionButton={Reset} title={'res'}/></>
                <> <Button actionButton={Set} title={'set'}/></>
            </>}

        </div>
    )
}

export default App;
