import styled from "styled-components";

const StyledButton = styled.button`
  width: fit-content;
  height: fit-content;
  background-color: #008cba;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #005f73;
  }
`;

function Button() {
  return <StyledButton>Agregar</StyledButton>;
}

export default Button;
