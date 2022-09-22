import './styles.css';

export default function CardDetailsHeader({ name, number }) {
  return (
    <div id="card-header-container">
      <span id="card-header-back-button"></span>
      <div className="card-header-details">
        <span id="card-header-pokemon-name">{name}</span>
        <span id="card-header-pokemon-number">#{number}</span>
      </div>
    </div>
  );
}
