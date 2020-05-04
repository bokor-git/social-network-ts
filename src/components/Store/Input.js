import React, {useContext} from "react";
import Context from "./Context";
import "./todolist.css"

const Input = () => {
    const{value, setValue, addTodo, items, setItems, addItems}=useContext(Context)


    return <div className="input"><input type="text" value={value} onChange={event => setValue(event.target.value)}/>
        <button onClick={()=>addTodo(value)}>Add my todo</button>
        <div><input type="number" step={1} value={items}  onChange={event => setItems(event.target.value)}/>
        <button onClick={()=>addItems(items)}>Generate new todo</button></div>

  </div>

}
export default Input