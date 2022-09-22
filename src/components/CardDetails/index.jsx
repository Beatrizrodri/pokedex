import CardDetailsBody from '../CardDetailsBody';
import CardDetailsHeader from '../CardDetailsHeader/CardDetailsHeader';
import CardDetailsNavigation from '../CardDetailsNavigation';
import './styles.css';

export default function CardDetails({ pokemon }) {
  return (
    <div id="container">
      <div id="card">
        <div id="content">
          <CardDetailsHeader name={pokemon.name} number={pokemon.id} />
          <CardDetailsNavigation pokemon={pokemon} />
          <CardDetailsBody pokemon={pokemon} />
        </div>
      </div>
    </div>
  );
}
