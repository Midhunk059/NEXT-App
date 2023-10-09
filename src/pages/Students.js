import React from 'react'
import { useState,useRef } from 'react'
import './Students.css'

function Students() {
    let newArr=[]
   const [state,setState]=useState([])
   const idSubmit=useRef()
   const nameSubmit=useRef()
   const ageSubmit=useRef()

    const handleSubmit= (e) =>
    {
    e.preventDefault()
    const id=idSubmit.current.value
    const name=nameSubmit.current.value
    const age=ageSubmit.current.value

    const data ={
        id,
        name,
        age
    }
    newArr.push(data)
    setState(newArr)
 }
  return (
    <div class="container">
        <form onSubmit={handleSubmit}>
          <input type='text'on id='addId' placeholder='enter id' ref={idSubmit}/>
          <input type='text' id='addName' placeholder='enter name' ref={nameSubmit}/>
          <input type='text' id='addAge' placeholder='enter age' ref={ageSubmit}/>
          <button id='btn'>Submit</button>
        </form>
    <table>
       
        <thead>
            
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Age</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            {
            newArr= state.map((item)=>
               {
               return(<tr>
               <td>{item.id}</td>
               <td>{item.name}</td>
               <td>{item.age}</td>
               <td>
                   <button class="btn btn-primary">Edit</button>
                   <button class="btn btn-danger">Delete</button>
               </td>
              </tr>)
            })
        }
        </tbody>
    </table>
</div>
  )
}

export default Students