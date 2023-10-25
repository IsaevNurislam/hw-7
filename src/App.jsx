import React from "react";
import styled from "styled-components";
import "./App.css";
import Card from "./components/task1/Card";
import Button from "./components/task1/Button";
import Child from "./components/task1/Child";
import Parent from "./components/task1/Parent";
import MyComponent from "./components/task1/Mycomponent";
import MediaQuery from "./components/task1/MediaQuery";
import InputsStorage from "./components/task2/InputsStorage";

function App() {
  return (
    <ContainerComponents>
      <Card $backgroundcolor="green" />
      <Button />
      <Child />
      <Parent />
      <MyComponent $error="green" />
      <MediaQuery />
      <InputsStorage />
    </ContainerComponents>
  );
}

export default App;

const ContainerComponents = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5rem;
  justify-content: center;
  align-items: center;
  text-align: center;
`;
