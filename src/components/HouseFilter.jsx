function HouseFilter({ selectedHouse, onChangeHouse }) {
    const houses = [
      { name: 'Gryffindor', color: '#ae0001', emoji: '🦁' },
      { name: 'Ravenclaw', color: '#51c0f7', emoji: '🦅' },
      { name: 'Hufflepuff', color: '#ecb939', emoji: '🦡' },
      { name: 'Slytherin', color: '#2a623d', emoji: '🐍' },
      { name: 'All', color: '#777', emoji: '✨' },
    ];
  
    return (
      <div className="filter-house">
        {houses.map(house => (
          <button
            key={house.name}
            className={`house-btn ${selectedHouse === house.name ? 'selected' : ''}`}
            style={{
              borderColor: house.color,
              color: house.color,
            }}
            onClick={() => onChangeHouse(house.name)}
          >
            {house.emoji} {house.name}
          </button>
        ))}
      </div>
    );
  }
  
  export default HouseFilter;