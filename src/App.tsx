import React from 'react';
import { styled } from 'styled-components';
import DataView from './components/DataView/DataView';

function App() {
  return (
    <Styled className="App">
     <DataView />
    </Styled>
  );
}

export default App;

const Styled = styled.div`
  height: 100vh;
  width: 100%;
  background: #171717;

`

