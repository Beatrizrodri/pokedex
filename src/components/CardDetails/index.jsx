import { getPokemonTypePrimaryColor } from '../../utils/pokemonColor';
import CardDetailsBody from '../CardDetailsBody';
import CardDetailsHeader from '../CardDetailsHeader/CardDetailsHeader';
import CardDetailsNavigation from '../CardDetailsNavigation';
import './styles.css';

export default function CardDetails({ pokemon }) {
  const pokemonPrimaryType = pokemon.types && pokemon.types[0].type.name;
  const primaryColor = getPokemonTypePrimaryColor(pokemonPrimaryType);
  console.log(pokemon);

  return (
    <div id="container">
      <div id="card">
        <div
          id="content"
          style={{ backgroundColor: primaryColor && primaryColor }}
        >
          <CardDetailsHeader name={pokemon.name} number={pokemon.id} />
          <CardDetailsNavigation pokemon={pokemon} />
          <CardDetailsBody pokemon={pokemon} primaryColor={primaryColor} />
        </div>
      </div>
    </div>
  );
}
