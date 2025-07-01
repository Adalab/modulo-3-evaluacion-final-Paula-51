import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import NameFilter from './components/NameFilter';
import HouseFilter from './components/HouseFilter';
import HogwartsGrid from './components/HogwartsGrid';
import CharacterDetail from './components/CharacterDetail';
import './styles/App.scss';

function App() {
  const [allCharacters, setAllCharacters] = useState([]);
  const [searchName, setSearchName] = useState('');
  const [selectedHouse, setSelectedHouse] = useState('ALL');

  // Cargar personajes con IDs únicos
  useEffect(() => {
    fetch('https://hp-api.onrender.com/api/characters')
      .then((response) => response.json())
      .then((data) => {
        const formattedCharacters = data.map((char, index) => ({
          ...char,
          id: `${char.name.replace(/\s+/g, '-').toLowerCase()}-${index}`
        }));
        setAllCharacters(formattedCharacters);
      });
  }, []);

  // Filtrar por nombre y casa
  const filteredCharacters = allCharacters.filter((character) => {
    const nameMatch = character.name.toLowerCase().includes(searchName.toLowerCase());
    const houseMatch = selectedHouse === 'ALL' || character.house === selectedHouse;
    return nameMatch && houseMatch;
  });

  //Limpiar búsqueda al hacer clic
  const handleCardClick = () => {
    setSearchName('');
  };

  return (
    <Routes>
    
      
      
        <Route
          index
          element={
            <>
            <Header />
              <NameFilter searchName={searchName} onSearchChange={setSearchName} />
              <HouseFilter selectedHouse={selectedHouse} onChangeHouse={setSelectedHouse} />
              <HogwartsGrid
                characters={filteredCharacters}
                onCardClick={handleCardClick}/>  </> }/>

               
        <Route path="/character/:id" element={<CharacterDetail characters={allCharacters} />} />
      
      </Routes>
    
  );
}

export default App;



