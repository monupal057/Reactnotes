
import React, { useState } from 'react'
import Home from './Home'

function Stateup() {
    const [nameData, setNameData] = useState('')
    const getFunction = (data) => {
        console.log(data);
        setNameData(data)
    }
  return (
    <div>
        <h2>Parent : {nameData}</h2>
        <h1>This is State Up component</h1>
        <Home getData={getFunction} send = "Ea24"/>
      
    </div>
  )
}

export default Stateup
