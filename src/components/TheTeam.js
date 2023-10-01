import React from 'react'
import TeamMem from './TeamMem'

export default function TheTeam( {team} ) {
  return (
        team.map(Member => {
           return <TeamMem teamMem = {Member}/>
        })
)
}
