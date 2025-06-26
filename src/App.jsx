import { useState, useEffect } from 'react';
import Header from './components/Header';
import NameFilter from './components/NameFilter';
import HouseFilter from './components/HouseFilter';
import HogwartsGrid from './components/HogwartsGrid';
import './styles/App.scss';

function App() {
  const [AllCharacters, setAllCharacters] = useState([]);
  const [searchName, setSearchName] = useState('');
  const [selectedHouse, setSelectedHouse] = useState('ALL');

  useEffect(() => {
    fetch('https://hp-api.onrender.com/api/characters')
      .then((response) => response.json())
      .then((data) => setAllCharacters(data));
  }, []);

  const filteredCharacters = AllCharacters.filter((character) => {
    const nameMatch = character.name.toLowerCase().includes(searchName.toLowerCase());
    const houseMatch = selectedHouse === 'ALL' || character.house === selectedHouse;
    return nameMatch && houseMatch;
  });

  return (
    <>
      <Header />
      <NameFilter searchName={searchName} onSearchChange={setSearchName} />
      <HouseFilter selectedHouse={selectedHouse} onChangeHouse={setSelectedHouse} />
      <HogwartsGrid characters={filteredCharacters} />
    </>
  );
}

export default App;

