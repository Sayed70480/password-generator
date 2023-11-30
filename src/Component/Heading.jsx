import React from 'react'
import heading from './heading.css'
import { Link } from 'react-router-dom'

function Heading() {
  return (
    <div className='heading'>
      <Link to={'/'} className='link'><h2>password<br/>generator</h2></Link>
    </div>
  )
}

export default Heading