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
       
        setChange(true)
    }
    const ChangeClickSet = () => {
        setChange(false)
    }


    return (
        <div className={s.App}>
            <DisplayWithInput setChange={ChangeClickSet} setValueStart={setValueStart} setValueMax={setValueMax}/>
            <Display change={change} count={count}/>
            <Button actionButton={Increment} title={'inc'}/>
            <Button actionButton={Reset} title={'res'}/>
            <Button actionButton={Set} title={'set'}/>

        </div>
    )
}

export default App;
