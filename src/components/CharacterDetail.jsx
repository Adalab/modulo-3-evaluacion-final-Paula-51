import { useParams, Link } from 'react-router-dom';
import '../styles/CharacterDetail.scss';

function CharacterDetail({ characters }) {
  const { id } = useParams();
  const character = characters.find((char) => char.id === id);

  if (!character) {
    return (
      <section className="character-detail">
        <p>Personaje no encontrado.</p>
        <Link to="/" className="back-btn">Volver</Link>
      </section>
    );
  }
// Añade esta función para asignar clases por casa
const getHouseClass = (house) => {
  switch (house) {
    case 'Gryffindor': return 'gryffindor';
    case 'Slytherin': return 'slytherin';
    case 'Hufflepuff': return 'hufflepuff';
    case 'Ravenclaw': return 'ravenclaw';
    default: return '';
  }
};


// Extrae los datos del personaje
  const {
    name,
    image,
    house,
    gender,
    species,
    alive,
  } = character;

  const defaultImage = '/images/have-you-seen-this-wizard.png'; // imagen relleno

  return (
    <section className={`character-detail ${getHouseClass(house)}`}>
      <Link to="/" className="back-btn">← Volver</Link>
      <div className="card-detail horizontal-layout">
        <div className="left-side">
          <img
            src={image || defaultImage}
            alt={name}
            className="detail-img"
          />
          {house && (
            <img
              src={`/images/${house.toLowerCase()}.png`}
              alt={`Escudo de ${house}`}
              className="house-crest"
            />
          )}
        </div>
        <div className="right-side">
          <h2>{name}</h2>
          <ul>
            <li><strong>Casa:</strong> {house || 'Desconocida'}</li>
            <li><strong>Género:</strong> {gender}</li>
            <li><strong>Especie:</strong> {species}</li>
            <li><strong>Estado:</strong> {alive ? 'Vivo/a' : 'Muerto/a'}</li>
          </ul>
        </div>
      </div>
  </section>

  );
}

export default CharacterDetail;

