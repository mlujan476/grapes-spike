import 'grapesjs/dist/css/grapes.min.css';
import "./App.css";
import GrapesMain2 from './components/GrapesMain2';
import styled from 'styled-components';

const SContainer = styled.div`

    width: 100%;
    height: 100vh;
    box-sizing: border-box;
`

function App() {


  return (
    <SContainer>
      <GrapesMain2 />
    </SContainer>
  )
}

export default App
