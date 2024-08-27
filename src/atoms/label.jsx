import styled from "styled-components";
import PropTypes from "prop-types";

const StyledLabel = styled.label`
  width: fit-content;
  height: fit-content;
`;

function Label({ children }) {
  return <StyledLabel>{children}</StyledLabel>;
}

Label.PropTypes = {
  children: PropTypes.string.isRequired,
};

export default Label;
