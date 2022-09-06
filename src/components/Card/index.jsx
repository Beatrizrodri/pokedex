import './styles.css';

export default function Card({ pokemon }) {
  const { name, number, color, image } = pokemon;

  return (
    <div className="card" style={{ border: `2px solid ${color}` }}>
      <span style={{ color: color }} className="pokedex-number">
        #{number}
      </span>
      <img src={image} alt="" />
      <span style={{ backgroundColor: color }} className="pokemon-name">
        {name}
      </span>
    </div>
  );
}
