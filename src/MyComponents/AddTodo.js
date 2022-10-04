import React, { useState } from 'react'

export const AddTodo = (props) => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");


 const onSubmit = (e) => {
 e.preventDefault();
 if(!title||!desc){
    alert("Title or Description cannot be left blank");
 }
 else{props.addTodo(title,desc);}
 setTitle("");
 setDesc("");

}
 

  return (
    <div className='container my-3'>
    <form onSubmit={onSubmit}>
    <h3 className='text-center'>Add a Todo</h3>
    <div className="mb-3">
    <label htmlFor="title" className="form-label">Title:</label>
    <input type="text" className="form-control" value={title} onChange={(e)=>setTitle(e.target.value)} id="ttl" placeholder="Add the title for your todo here..."/>
  </div>
  <div className="mb-3">
    <label htmlFor="description" className="form-label">Description:</label>
    <textarea className="form-control" value={desc} onChange={(e)=>setDesc(e.target.value)} id="description" rows="3" placeholder="Add the description for your todo here..."></textarea>
    <br/>
    <button type="submit" className="btn btn-sm btn-success">Add Todo</button>
  </div>
  </form>
  </div>
  )
}
