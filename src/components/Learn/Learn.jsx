import React, { useState } from 'react'


function Learn() {
    const[name,setName]=useState()
   function handlenames(){
    name=Math.floor(Math.random()*1000)
    setName(name)
   }
  return (
    <div>Learn

        <button onClick={handlenames}>choose name</button>
    </div>
  )
}

export default Learn