import '../styles/Filters.scss'

function NameFilter({ searchName, onSearchChange }) {
  return (
    <div className="input-container">
      <label htmlFor="name">Busca por personaje:</label>
      <input
        type="text"
        id="name"
        name="name"
        className="input-house"
        placeholder="Nombre del personaje"
        value={searchName}
        onChange={(e) => onSearchChange(e.target.value)}
      />
    </div>
  );
}

export default NameFilter;
