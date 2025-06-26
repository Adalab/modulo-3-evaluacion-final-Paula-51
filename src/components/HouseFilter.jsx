function HouseFilter({ selectedHouse, onChangeHouse }) {
  const houses = [
    { name: 'Gryffindor', color: '#ae0001', emoji: '🦁' },
    { name: 'Ravenclaw', color: '#519cf0', emoji: '🦅' },
    { name: 'Hufflepuff', color: '#ecb939', emoji: '🦡' },
    { name: 'Slytherin', color: '#2a623d', emoji: '🐍' },
    { name: 'ALL', color: '#777', emoji: '✨' },
  ];

  const handleHouseClick = (houseName) => {
    if (selectedHouse === houseName) {
      onChangeHouse('ALL'); // Si haces clic en la casa ya seleccionada, resetea
    } else {
      onChangeHouse(houseName); // Si es diferente, selecciona esa casa
    }
  };

  return (
    <div className="filter-house">
      {houses.map((house) => (
        <button
          key={house.name}
          className={`house-btn ${selectedHouse === house.name ? 'selected' : ''}`}
          style={{
            borderColor: house.color,
            color: house.color,
          }}
          onClick={() => handleHouseClick(house.name)}
        >
          {house.emoji} {house.name}
        </button>
      ))}
    </div>
  );
}

export default HouseFilter;
