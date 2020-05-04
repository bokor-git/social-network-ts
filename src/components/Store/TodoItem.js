import React from "react";
import "./todolist.css"

export const TodoItem = ({id, title, completed, del, check}) => {
    return <div className={`todo-item ${completed?"done":"not-done"}`}>{completed ? "✔" : "✘"}  {title}
    <input  style={completed?{display:"none", marginRight:"1rem"}:{display:"initial",marginRight:"1rem"}} type="checkbox" checked={completed} onChange={()=>check(id)}/>
    <button style={!completed?{display:"none"}:{display:"initial"}}  onClick={()=>del(id)}>Delete</button></div>
};
