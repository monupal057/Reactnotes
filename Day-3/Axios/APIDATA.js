import React, { useEffect } from 'react'
import axios from 'axios'

function APIDATA() {
    useEffect(() =>{
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then((response) => console.log(response.data))
        .catch((error) => console.log(error))
    },[])
  return (
    <>
      
    </>
  )
}

export default APIDATA;
