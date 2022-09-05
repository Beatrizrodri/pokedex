import pokeballImage from '../../assets/Pokeball.svg';
import arrowImage from '../../assets/Arrow.svg';
import './styles.css';

export default function Header() {
  return (
    <div id="header">
      <img src={pokeballImage} alt="" />
      <h1>Pokédex</h1>
      <div id="order-selector">
        <span>#</span>
        <img src={arrowImage} alt="" />
      </div>
    </div>
  );
}
