import Menu from './Menu'
import MovieList from './MovieList'
import PokemonList from './PokemonList'

function App() {
  const pokemons = [
    { id: 1, name: 'Bulbasaur', type: 'Grass/Poison' },
    { id: 2, name: 'Charmander', type: 'Fire' },
    { id: 3, name: 'Squirtle', type: 'Water' },
    { id: 4, name: 'Pikachu', type: 'Electric' },
    { id: 5, name: 'Jigglypuff', type: 'Normal/Fairy' },
    { id: 6, name: 'Gengar', type: 'Ghost/Poison' },
    { id: 7, name: 'Snorlax', type: 'Normal' },
    { id: 8, name: 'Mewtwo', type: 'Psychic' },
    { id: 10, name: 'Eevee', type: 'Normal' },
  ]
  const movies = [
    { id: 1, title: 'Inception', year: '2010' },
    { id: 2, title: 'The Matrix', year: '1999' },
    { id: 3, title: 'Interstellar', year: '2014' },
    { id: 4, title: 'Pulp Fiction', year: '1994' },
    { id: 5, title: 'Forrest Gump', year: '1994' },
    {
      id: 6,
      title: 'The Lord of the Rings: The Fellowship of the Ring',
      year: '2001',
    },
    {
      id: 7,
      title: 'Star Wars: Episode V - The Empire Strikes Back',
      year: '1980',
    },
    { id: 8, title: 'The Dark Knight', year: '2008' },
    { id: 9, title: 'Fight Club', year: '1999' },
    { id: 10, title: 'The Godfather', year: '1972' },
  ]
  const menu = [
    {
      id: 1,
      name: 'Garlic Bread',
      description: 'Classic garlic bread, with a hint of herbs.',
      price: 5,
    },
    {
      id: 2,
      name: 'Soup of the Day',
      description: 'A delicious way to start your meal.',
      price: 7,
    },
    {
      id: 3,
      name: 'Grilled Salmon',
      description: "Fresh salmon that's grilled to perfection.",
      price: 15,
    },
    {
      id: 4,
      name: 'Steak',
      description: 'High-quality beef with our special sauce.',
      price: 18,
    },
    {
      id: 5,
      name: 'Cheesecake',
      description: 'Creamy cheesecake with a crispy base.',
      price: 6,
    },
    {
      id: 6,
      name: 'Ice Cream',
      description: 'Choose from our variety of flavors.',
      price: 4,
    },
  ]
  return (
    <>
      <PokemonList pokemons={pokemons} />
      <MovieList movies={movies} />
      <Menu menu={menu} />
    </>
  )
}

export default App
