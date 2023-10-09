import React from 'react'
import {NavLink} from 'react-router-dom'

import './Header.css'

function Header() {
  return (
    <div>
       <header>
        <h1>NEXT</h1>
        <NavLink to='students'style={{color:'white',textDecoration:null}}>Students</NavLink>
        <NavLink to='teachers' style={{color:'white'}}>Teachers</NavLink>
       </header>
    </div>
  )
}

export default Header