import Pokemon from './Pokemon'

function PokemonList(props) {
  return (
    <div>
      {props.pokemons.map(item => (
        <Pokemon key={item.id} name={item.name} type={item.type} />
      ))}
    </div>
  )
}

export default PokemonList
