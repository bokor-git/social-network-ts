import React, {useContext} from "react";
import Context from "./Context";
export const Screen = () => {
    const {isDisable, count}= useContext(Context)
    return <div style={isDisable ? {border: "solid 1px black", margin: "10px", padding: "10px", color: "red"} :
        {border: "solid 1px black", margin: "10px", padding: "10px"}}><p>{count}</p></div>
}