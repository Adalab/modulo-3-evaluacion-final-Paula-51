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

  const {
    name,
    image,
    house,
    gender,
    species,
    alive,
  } = character;

  const defaultImage = '/images/have-you-seen-this-wizard.png'; 

  return (
    <section className="character-detail">
      <Link to="/" className="back-btn">← Volver</Link>
      <div className="card-detail">
        <img
          src={image || defaultImage}
          alt={name}
          className="detail-img"
        />
        <div className="detail-info">
          <h2>{name}</h2>
          <p><strong>Casa:</strong> {house || 'Desconocida'}</p>
          <p><strong>Género:</strong> {gender}</p>
          <p><strong>Especie:</strong> {species}</p>
          <p><strong>Estado:</strong> {alive ? 'Vivo/a' : 'Muerto/a'}</p>
        </div>
      </div>
    </section>
  );
}

export default CharacterDetail;

