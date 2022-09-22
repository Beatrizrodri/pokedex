import { useNavigate } from 'react-router-dom';
import './styles.css';

export default function CardDetailsNavigation(pokemon) {
  const navigate = useNavigate();
  const pokemonImageURL =
    pokemon?.pokemon?.sprites?.other?.dream_world?.front_default;

  function handlePrevious() {
    navigate(`/details/${Number(pokemon.pokemon.id) - 1}`);
  }

  return (
    <div id="card-details-navigation-container">
      <span onClick={handlePrevious}>&lt;</span>
      <div id="card-datails-navigation-image">
        {pokemonImageURL && <img src={pokemonImageURL} alt="" />}
      </div>
      <span>&gt;</span>
    </div>
  );
}
