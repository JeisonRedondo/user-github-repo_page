//import { useState } from "react";
import styled from "styled-components";

import ButtonTest from "./atoms/button.jsx";
import Input from "./atoms/input.jsx";
import Label from "./atoms/label.jsx";

const StyledApp = styled.main`
  min-width: 36px;
  width: 100vw;
  height: 100vh;
  background-color: #120907;
  display: flex;
  padding: 10px;
`;

function App() {
  //const [count, setCount] = useState(0);

  return (
    <StyledApp>
      <ButtonTest></ButtonTest>
      <Label></Label>
      <Input></Input>
    </StyledApp>
  );
}

export default App;
