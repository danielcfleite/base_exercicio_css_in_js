import Header from './components/Cabecalho'
import Hero from './components/Hero'
import ListaVagas from './containers/ListaVagas'
import { Container } from './global'

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Container>
        <ListaVagas />
      </Container>
    </>
  )
}

export default App
