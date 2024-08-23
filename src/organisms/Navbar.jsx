import styled from "styled-components";
import { FaGithub } from "react-icons/fa";

const StyledNavbar = styled.nav`
  width: 100vw;
  height: fit-content;
  display: flex;
  flex-direction: row;
  gap: 10px;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid rgba(255, 255, 255, 0.3); /* Ajusta la opacidad según necesites */
`;

function Navbar() {
  return (
    <StyledNavbar>
      <FaGithub />
      <p>Github User Search</p>
    </StyledNavbar>
  );
}

export default Navbar;
