import React,{useState} from "react";
import "../App.css";
import {useDispatch,useSelector} from "react-redux"
import { AddTodo } from "../Action/Action";

function Home() {

const [inputData,setinputData]= useState([])

const {item} =useSelector((state)=>state.ToDoReducer)
console.log(item);
const dispatch= useDispatch()
  return (
    <>
      <div className="body">
        <div className="container ">
          <h2>To Do List App </h2>
          <br />
          <br />
          <div className="row">
            <div className="col">
              <input className="form-control form-control-lg" value={inputData} onChange={(e)=>setinputData(e.target.value)} />
            </div>
            <div className="col-auto">
              <button class="btn btn-dark btn-add" onClick={()=>dispatch(AddTodo(inputData))}>Add</button>
            </div>
          </div>
          {
            item.map(ele=>{
                 return(

                    <h1>{ele.data}</h1>
            )
            })
          }
        </div>
      </div>
    </>
  );
}

export default Home;
