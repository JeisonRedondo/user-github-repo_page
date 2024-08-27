//import { useState } from "react";
import styled from "styled-components";

import Navbar from "./organisms/Navbar.jsx";
import UserQueryView from "./templates/user-query.jsx";

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
      <UserQueryView></UserQueryView>
    </StyledApp>
  );
}

export default App;
