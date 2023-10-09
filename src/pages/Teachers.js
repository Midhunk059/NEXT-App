import React from 'react'
import { useState,useRef } from 'react'
import './Teachers.css'

function Teachers() {
    let newArrt=[]
   const [state,setStatet]=useState([])
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
    newArrt.push(data)
    setStatet(newArrt)
 }

 const handleDelete=(idx)=>{
        let updatedArr=newArrt.filter((data,index)=>
        idx !== index
    )
    setStatet(updatedArr)
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
            newArrt= state.map((item,idx)=>
               {
               return(<tr>
               <td>{item.id}</td>
               <td>{item.name}</td>
               <td>{item.age}</td>
               <td>
                   <button class="btn btn-primary">Edit</button>
                   <button onClick={(idx)=>{
                    handleDelete(idx)
                   }}class="btn btn-danger">Delete</button>
               </td>
              </tr>)
            })
        }
        </tbody>
    </table>
</div>
  )
}

export default Teachers