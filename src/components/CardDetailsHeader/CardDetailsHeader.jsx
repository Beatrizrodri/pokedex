import './styles.css';

export default function CardDetailsHeader({ name, number }) {
  return (
    <div id="card-header-container">
      <span id="card-header-back-button"></span>
      <div className="card-header-details">
        <span id="card-header-pokemon-name">
          {name && name[0].toUpperCase() + name.substring(1)}
        </span>
        <span id="card-header-pokemon-number">
          #{String(number).padStart(3, '0')}
        </span>
      </div>
    </div>
  );
}
