//import { useState } from "react";
import styled from "styled-components";

import Navbar from "./organisms/Navbar.jsx";
import UserQueryView from "./templates/user-query.jsx";

const StyledApp = styled.main`
  min-width: 36px;
  width: 90vw;
  margin: 0;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  border-left: 2px solid rgba(255, 255, 255, 0.5);
  border-right: 2px solid rgba(255, 255, 255, 0.5);
`;

function App() {
  //const [count, setCount] = useState(0);

  return (
    <StyledApp>
      <Navbar></Navbar>
      <UserQueryView></UserQueryView>
    </StyledApp>
  );
}

export default App;
