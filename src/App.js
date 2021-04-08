import './App.css';
import styled from 'styled-components'
import Header from './components/layout/Header'
import Main from './Main'

function App() {
  return (
    <Container>
      <Header />
      <Main />
    </Container>
  );
}

export default App;

const Container = styled.div ``
