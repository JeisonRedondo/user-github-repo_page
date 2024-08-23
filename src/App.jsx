//import { useState } from "react";
import styled from "styled-components";

import ButtonTest from "./atoms/button.jsx";
import Input from "./atoms/input.jsx";
import Label from "./atoms/label.jsx";
import Navbar from "./organisms/Navbar.jsx";

const StyledApp = styled.main`
  min-width: 36px;
  width: 100vw;
  height: 100vh;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
`;

function App() {
  //const [count, setCount] = useState(0);

  return (
    <StyledApp>
      <Navbar></Navbar>
      <Label></Label>
      <Input></Input>
      <ButtonTest></ButtonTest>
    </StyledApp>
  );
}

export default App;
