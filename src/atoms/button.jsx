import styled from "styled-components";
import PropTypes from "prop-types";

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

function Button({ texto, onClick }) {
  return <StyledButton onClick={onClick}>{texto}</StyledButton>;
}

Button.propTypes = {
  texto: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

export default Button;
