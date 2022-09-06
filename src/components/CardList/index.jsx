import Card from '../Card';
import './styles.css';

export default function CardList({ pokemons }) {
  return (
    <div id="card-list">
      {pokemons.map(pokemon => (
        <Card key={pokemon.name} pokemon={pokemon} />
      ))}
    </div>
  );
}
