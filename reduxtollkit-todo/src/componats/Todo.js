import React, { useState } from 'react'
import "../App.css"
import { useDispatch } from 'react-redux';
import { Addtodo } from '../Reduxtoolkit/Todoslice';



function Todo() {
  const[text,settext]=useState();
  const dispatch=useDispatch();
  return (
    <div className="body">
        <div className="container ">
          <h2>To Do List App </h2>
          <br />
          <div className="row">
            <div className="col"> 
              <input className="form-control form-control-lg" name ="text" value={text} onChange={(e)=>{settext(e.target.value)}}  />
            </div>
            <div className="col-auto">
              <button class="btn btn-dark btn-add" onClick={()=>dispatch(Addtodo())} >Add</button>
            </div>
          </div>
      
        </div>
      </div> 
  )
}

export default Todo