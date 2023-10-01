import React from 'react'

export default function Event( {event} ) {
   const ticketButton = (live) => {if (live === true) {
        return <button>Tickets</button>
      }}
    
  return (
    <div className ='eventDiv'>
      <img src={event.lineup} alt='img not found'></img>
      <div>{event.name}</div>
      <div>{event.date}</div>
    {ticketButton(event.live)}
    </div>
  )
}
