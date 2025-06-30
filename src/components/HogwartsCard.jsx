import '../styles/CardDetails.scss';
import { Link } from 'react-router-dom';
import defaultImage from '../images/imgrelleno.png';

function HogwartsCard({ character, onCardClick }) {
  return (
    <Link to={`/character/${character.id}`} onClick={onCardClick} className="hogwarts-card">
      <img
        src={character.image || defaultImage}
        alt={character.name}
        className="hogwarts-img"
      />
      <div className="hogwarts-info">
        <h3>{character.name}</h3>
        <p>{character.species}</p>
        <p>{character.house}</p>
      </div>
    </Link>
  );
}

export default HogwartsCard;

