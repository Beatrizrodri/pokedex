import './styles.css';
import BalanceImg from '../../assets/Balance.svg';
import ScaleImg from '../../assets/Scale.svg';

export default function CardDetailsBody(pokemonData) {
  const { pokemon } = pokemonData;
  const { types } = pokemon;

  return (
    <div id="card-body-container">
      <div id="card-body-pokemon-types">
        {types &&
          types.map(type => (
            <div key={type.type.name} className="pokemon-type">
              {type.type.name}
            </div>
          ))}
      </div>
      <div id="card-body-about">About</div>
      <div id="card-body-pokemon-features">
        <div className="pokemon-features">
          <div>
            <img src={BalanceImg} alt="balance" />
            <span>{pokemon.weight} kg</span>
          </div>
          <span>Weight</span>
        </div>
        <hr />

        <div className="pokemon-features">
          <div>
            <img src={ScaleImg} alt="scale" />
            <span>{pokemon.height} m</span>
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
