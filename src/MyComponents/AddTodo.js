import React, { useState } from 'react'

export const AddTodo = ({addTodo}) => {
     const [title,setTitle]=useState("");
     const [desc,setdesc]=useState("");
     const Submit=(e)=>{
        e.preventDefault();
        if( !title || !desc){
            alert("title or description cant be blank");
        }
        else{

            addTodo(title,desc);
            setTitle("");
            setdesc("");
        }
    }
    return (
        <div className='container my-3'>
            <h3>Add a todo</h3>
            <form onSubmit={Submit}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Todo Title</label>
                    <input type="text" value={title}
                    onChange={(e)=>{
                        setTitle(e.target.value)
                    }} className="form-control" id="title" aria-describedby="emailHelp" />
                    
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Todo Description</label>
                    <input type="text" value={desc}
                    onChange={(e)=>{
                        setdesc(e.target.value)
                    }} className="form-control" id="desc" />
                </div>
                <button type="submit" className="btn btn-sm btn-success">Submit</button>
            </form></div>
    )
}
