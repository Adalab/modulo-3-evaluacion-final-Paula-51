import { useState, useEffect } from 'react'
import './styles/App.scss'

function App() {
  
const [AllCharacters, setAllCharacters] = useState([])

  useEffect(() => {
  
    fetch("https://hp-api.onrender.com/api/characters")
      .then(response => response.json())
      .then(data => {
        setAllCharacters(data);
      })
  }, [])
  return (
    <>
    
    </>
  )
}

export default App
