import React from "react";
import './App.css'
import { QueryClient, QueryClientProvider } from "react-query";
import { styled } from "styled-components";
import DataView from "./components/DataView/DataView";

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Styled className="App">
        <DataView />
      </Styled>
    </QueryClientProvider>
  );
}

export default App;

const Styled = styled.div`
  height: 100vh;
  width: 100%;
  background: #171717;
  color: #ffffff;
  overflow-x: scroll;
`;
