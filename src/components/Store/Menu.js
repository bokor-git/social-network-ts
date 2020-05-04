import React, {useContext} from "react";
import Context from "./Context";
export const Menu = () => {
const{setCount, count, isDisable, setDisable}=useContext(Context)
    count === 5?setDisable(true): setDisable(false)
    return <div style={{border: "solid 1px black", margin: "10px", padding: "10px"}}><p>menu</p>
        <button disabled={isDisable} onClick={() => setCount(count + 1)}>incr</button>
        <button onClick={() => setCount(0)}>reset</button>
    </div>
}