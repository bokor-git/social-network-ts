import React, {useEffect, useState} from "react";
import {TodoItem} from "./TodoItem";
import * as axios from "axios";
import Context from "./Context";
import Input from "./Input";
import Loading from "../common/Conponents/Loading";
import "./todolist.css"

const TodoList = () => {
    const [todos, setTodos] = useState([])
    const [value, setValue] = useState("")
    const [items, setItems] = useState(5)
    if (todos.length===0){axios.get(`https://jsonplaceholder.typicode.com/todos?_limit=${items}`).then(response => setTodos(response.data))}
const addTodo=(value)=>{
        const newTodos = {userId: 1, id: new Date().getTime(), title: value, completed: false}
        const newArr = [...todos, newTodos];
   setTodos(newArr)
}

const del = (id)=>{
    return  setTodos(todos.filter(td => td.id !== id))
}
const check = (id)=>{
       setTodos(todos.map(todo=>{if (todo.id===id){todo.completed=!todo.completed}
        return todo}))

};
    const addItems = async (items)=>{
       let responce = await axios.get(`https://jsonplaceholder.typicode.com/todos?_limit=${items}`)
        await setTodos(responce.data)
    }
   return(
    <Context.Provider value={{value, setValue, addTodo,items, setItems , setTodos, addItems}}>

    <div className="todolist">
        <Input/>
        {todos.length===0&&<Loading/>}
        {todos.map(todo => <TodoItem {...todo} del={del} check={check}/>)}
    </div>
        </Context.Provider>)
}
export default TodoList
