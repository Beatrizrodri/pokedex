import Header from '../../components/Header';
import BulbasaurImage from '../../assets/Bulbasaur.svg';
import CharmanderImage from '../../assets/Charmander.svg';
import SquirtleImage from '../../assets/Squirtle.svg';
import ButterfreeImage from '../../assets/Butterfree.svg';
import PikachuImage from '../../assets/Pikachu.svg';
import GastlyImage from '../../assets/Gastly.svg';
import DittoImage from '../../assets/Ditto.svg';
import MewImage from '../../assets/Mew.svg';
import AronImage from '../../assets/Aron.svg';
import Search from '../../components/Search';

const pokemons = [
  {
    name: 'Bulbasaur',
    number: 1,
    color: '#74CB48',
    image: BulbasaurImage,
  },
  {
    name: 'Charmander',
    number: 2,
    color: '#F57D31',
    image: CharmanderImage,
  },
  {
    name: 'Squirtle',
    number: 7,
    color: '#6493EB',
    image: SquirtleImage,
  },
  {
    name: 'Butterfree',
    number: 12,
    color: '#A7B723',
    image: ButterfreeImage,
  },
  {
    name: 'Pikachu',
    number: 25,
    color: '#F9CF30',
    image: PikachuImage,
  },
  {
    name: 'Gastly',
    number: 92,
    color: '#70559B',
    image: GastlyImage,
  },
  {
    name: 'Ditto',
    number: 132,
    color: '#AAA67F',
    image: DittoImage,
  },
  {
    name: 'Mew',
    number: 152,
    color: '#FB5584',
    image: MewImage,
  },
  {
    name: 'Aron',
    number: 304,
    color: '#B7B9D0',
    image: AronImage,
  },
];

export default function Home() {
  return (
    <>
      <Header />
      <Search />
    </>
  );
}
