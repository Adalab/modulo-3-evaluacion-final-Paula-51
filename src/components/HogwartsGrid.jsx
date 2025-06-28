import HogwartsCard from './HogwartsCard';
import '../styles/CardGrid.scss';

function HogwartsGrid({ characters, onCardClick }) {
  return (
    <section className="card-grid">
      {characters.map((character) => (
  <HogwartsCard key={character.id} character={character} onCardClick={onCardClick} />
))}

    </section>
  );
}

export default HogwartsGrid;
