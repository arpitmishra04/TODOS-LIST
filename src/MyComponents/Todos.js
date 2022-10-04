import React from "react";
import {TodoItem} from "./TodoItem"

export const Todos = (props) => {
let todoStyle={
  height:"350px",
  width:"1400px"
}

  if (props.todos.length===0) {
  return  <h6 className="text-center">No items to Display in the List</h6>
  }

 else return (
    
    <div className="container overflow-scroll " style={todoStyle} >
  <h3 className="text-center my-3">Todos List </h3>
 
    {props.todos.map((todo)=>{
    return <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete}/>}
    )}
  
  </div>  
  
  
  )


};

