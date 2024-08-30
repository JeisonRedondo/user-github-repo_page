import styled from "styled-components";

const StyledInput = styled.input`
  width: fit-content;
  height: fit-content;
`;

function Input(props) {
  return <StyledInput {...props} />;
}

export default Input;
