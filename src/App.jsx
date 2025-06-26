import { useState, useEffect } from 'react'
import Header from './components/Header'
import NameFilter from './components/NameFilter'
import HouseFilter from './components/HouseFilter'
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
    <Header />
    <NameFilter />
    <HouseFilter />
    </>
  )
}

export default App
