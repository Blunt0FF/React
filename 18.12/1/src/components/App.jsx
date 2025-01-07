import CarList from './CarList'
import RandomPhrase from './RandomPhrase'
import Title from './Title'
import Content from './Content'
import Image from '../assets/react.svg'

function App() {
  const description = 'My Description'

  return (
    <>
      <Title text='First Title' size='lg' description={description} />
      <Title text='Second Title' size='md' />
      <CarList />
      <RandomPhrase />
      <Content
        titleText='Hello World'
        paragraghText='Some paragragh text'
        imgUrl={Image}
      >
        <h2>Hello</h2>
      </Content>
    </>
  )
}

export default App
