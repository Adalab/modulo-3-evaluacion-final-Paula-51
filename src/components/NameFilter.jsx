import '../styles/Filters.scss'

function NameFilter() {
    return (
      <div className="input-container">
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Nombre del personaje"
          className="input-house"
        />
      </div>
    );
  }
  
  export default NameFilter;