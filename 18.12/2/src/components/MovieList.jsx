import Movie from './Movie'

function MovieList(props) {
  return (
    <div>
      {props.movies.map(item => (
        <Movie key={item.id} title={item.title} year={item.year} />
      ))}
    </div>
  )
}

export default MovieList
