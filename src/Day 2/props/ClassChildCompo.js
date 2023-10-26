import React from 'react'

function ClassChildCompo(props) {
  return (
    <div>
      <h1>Child</h1> 
      <h2>{props.Name} {props.age}</h2>
    </div>
  )
}

export default ClassChildCompo
