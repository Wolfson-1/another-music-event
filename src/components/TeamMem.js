import React from 'react'

export default function TeamMem( {teamMem} ) {
  return (
    <div>
      <img src={teamMem.img} alt='img not found'></img>
      <div>{teamMem.name}</div>
      <div>{teamMem.desc}</div>
    </div>
  )
}
