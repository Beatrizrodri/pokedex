import { api } from '../../services/api';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './styles.css';
import CardDetails from '../../components/CardDetails';

export default function Details() {
  const [pokemon, setPokemon] = useState({});
  const { id } = useParams();

  function getPokemon() {
    api
      .get(`/pokemon/${id}`)
      .then(response => {
        setPokemon(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }

  const imageUrl =
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg';

  useEffect(() => {
    getPokemon();
  }, []);

  return <>{pokemon && <CardDetails pokemon={pokemon} />}</>;
}
