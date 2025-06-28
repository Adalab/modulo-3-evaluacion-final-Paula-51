import '../styles/CardDetails.scss';
import defaultImage from '../images/imgrelleno.png';


function HogwartsCard({ character, onCardClick }) {
  return (
    <article className="hogwarts-card" onClick={onCardClick}>
      <img
        src={character.image ? character.image : defaultImage}
        alt={character.name}
        className="hogwarts-img"
      />

      <div className="hogwarts-info">
        <h3>{character.name}</h3>
        <p>{character.species}</p>
        <p>{character.house}</p>

      </div>
    </article>
  );
}

export default HogwartsCard;
