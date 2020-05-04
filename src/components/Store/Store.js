import React, {useState} from "react";
import {Screen} from "./Screen";
import Context from "./Context"
import {Menu} from "./Menu";

const Calc = ()=>{

    const [isDisable, setDisable]=useState(false)
    const [count, setCount]=useState(0)
    return(
    <Context.Provider value={{setCount, count, isDisable, setDisable}}>
    <div style={{border:"solid 1px black", margin:"10px", padding:"10px", width:"200px"}}> <p>Calc</p>
    <Screen/>
    <Menu/>
    </div>
    </Context.Provider>
    )
}

export default  Calc