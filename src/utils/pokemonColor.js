const pokemonsTypes = [
  {
    type: 'normal',
    primaryColor: '#9F9E70',
  },
  {
    type: 'fire',
    primaryColor: '#EC762C',
  },
  {
    type: 'water',
    primaryColor: '#5583EC',
  },
  {
    type: 'electric',
    primaryColor: '#F6CB31',
  },
  {
    type: 'grass',
    primaryColor: '#6DC148',
  },
  {
    type: 'ice',
    primaryColor: '#8AD3D0',
  },
  {
    type: 'fighting',
    primaryColor: '#BB2923',
  },
  {
    type: 'poison',
    primaryColor: '#993395',
  },
  {
    type: 'ground',
    primaryColor: '#DEB85C',
  },
  {
    type: 'flying',
    primaryColor: '#9F81ED',
  },
  {
    type: 'psychic',
    primaryColor: '#FB4A7A',
  },
  {
    type: 'bug',
    primaryColor: '#9CB228',
  },
  {
    type: 'rock',
    primaryColor: '#AD9732',
  },
  {
    type: 'ghost',
    primaryColor: '#674C8C',
  },
  {
    type: 'dragon',
    primaryColor: '#6322F8',
  },
  {
    type: 'dark',
    primaryColor: '#654D40',
  },
  {
    type: 'steel',
    primaryColor: '#AFAEC7',
  },
  {
    type: 'fairy',
    primaryColor: '#D279A2',
  },
];

export function getPokemonTypePrimaryColor(type) {
  const typeColor = pokemonsTypes.find(
    pokemonType => pokemonType.type === type,
  );

  return typeColor?.primaryColor;
}
