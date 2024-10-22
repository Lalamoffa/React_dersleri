import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function About() {
  return (
    <div>
      <h1>About</h1>
      <hr />
      <Link style={{margin:'10px', textDecoration:'none'}} to="employee">Sirket haqqinda</Link>
      <Link style={{margin:'10px', textDecoration:'none'}} to="company">Isciler haqqinda</Link>
    <Outlet/>
    </div>
  )
}

export default About