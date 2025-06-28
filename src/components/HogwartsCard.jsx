import '../styles/CardDetails.scss';
import defaultImage from '../images/imgrelleno.png';


function HogwartsCard({ character }) {
  return (
    <article className="hogwarts-card">
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
