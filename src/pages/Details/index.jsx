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

  useEffect(() => {
    getPokemon();
  }, []);

  return <>{pokemon && <CardDetails pokemon={pokemon} />}</>;
}
