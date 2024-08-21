//import { useState } from "react";
import styled from "styled-components";

import ButtonTest from "./atoms/button.jsx";
import Input from "./atoms/input.jsx";
import Label from "./atoms/label.jsx";

const StyledApp = styled.main`
  min-width: 36px;
  width: 80vw;
  height: 100vh;
  background-color: #120907;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  padding: 10px;
`;

function App() {
  //const [count, setCount] = useState(0);

  return (
    <StyledApp>
      <Label></Label>
      <Input></Input>
      <ButtonTest></ButtonTest>
    </StyledApp>
  );
}

export default App;
