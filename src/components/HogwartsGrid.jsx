import HogwartsCard from './HogwartsCard';
import '../styles/CardGrid.scss';

function HogwartsGrid({ characters }) {
  return (
    <section className="card-grid">
      {characters.map((character) => (
        <HogwartsCard key={character.name} character={character} />
      ))}
    </section>
  );
}

export default HogwartsGrid;
