import './styles.css';
import BalanceImg from '../../assets/Balance.svg';
import ScaleImg from '../../assets/Scale.svg';
import { getPokemonTypePrimaryColor } from '../../utils/pokemonColor';

export default function CardDetailsBody({ pokemon, primaryColor }) {
  const { types } = pokemon;

  function addComma(number) {
    const value = String(number);
    const lastNumber = value.substring(value.length - 1, value.length);

    return `${value.substring(0, value.length - 1)},${lastNumber}`;
  }

  function PokemonType({ typeName }) {
    const primaryColor = getPokemonTypePrimaryColor(typeName);

    return (
      <div
        className="pokemon-type"
        style={{
          backgroundColor: primaryColor,
          border: `0.4rem solid ${primaryColor}`,
        }}
      >
        {typeName}
      </div>
    );
  }

  return (
    <div id="card-body-container">
      <div id="card-body-pokemon-types">
        {types &&
          types.map((type, index) => (
            <PokemonType key={index} typeName={type?.type?.name} />
          ))}
      </div>
      <div id="card-body-about" style={{ color: primaryColor }}>
        About
      </div>
      <div id="card-body-pokemon-features">
        <div className="pokemon-features">
          <div>
            <img src={BalanceImg} alt="balance" />
            <span>{addComma(pokemon?.weight)} kg</span>
          </div>
          <span>Weight</span>
        </div>
        <hr />

        <div className="pokemon-features">
          <div>
            <img src={ScaleImg} alt="scale" />
            <span>{addComma(pokemon?.height)} m</span>
          </div>
          <span>Height</span>
        </div>
        <hr />

        <div className="pokemon-features">
          <div>
            <span>Rain-Dish</span>
          </div>
          <span>Moves</span>
        </div>
      </div>
      <span id="card-body-pokemon-information">
        When it retracts its long neck into its shell, it squirts out water with
        vigorous force.
      </span>
    </div>
  );
}
