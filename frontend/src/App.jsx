import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const [jokes, setJokes] = useState([]);

  useEffect(() => { })

  useEffect(() => {
    axios.get('/api/jokes')
      .then((response) => {
        setJokes(response.data)
      })
      .catch((error) => {
        console.log(error)
      })
  })
  return (
    <div>
      <h1> stack</h1>
      <p>JOKES:{jokes.length}</p>
      {
        jokes.map((jokes, index) => (
          <div key={jokes.title}>
            <h3>{jokes.title}</h3>
            <p>{jokes.content}</p>
          </div >
        ))
      }
    </div>
  )
}


export default App
