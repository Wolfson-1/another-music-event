import React from 'react'
import Event from './Event';

export default function Events({ events }) {
  return (
              events.map(event => {
           return <Event event = {event}/>
      })
  )
}
