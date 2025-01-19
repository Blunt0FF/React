import CategoryCardList from '../CategoryCardList/CategoryCardList'
import Container from '../Container/Container'
import SearchBar from '../SearchBar/SearchBar'

export default function Main() {
  return (
    <main>
      <SearchBar />
      <Container>
        <CategoryCardList />
        <CategoryCardList />
      </Container>
    </main>
  )
}
