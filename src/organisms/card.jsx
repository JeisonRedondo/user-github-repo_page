import styled from "styled-components";
import PropTypes from "prop-types";

const StyledArticle = styled.article`
  border: 2px solid grey;
  border-radius: 10px;
  padding: 2px 12px;
  width: 200px;
`;

const StyledSpan = styled.span`
  color: #3fe0d2;
`;

const StyledP = styled.p`
  color: #e93bba;
  overflow-wrap: break-word;
  text-decoration: none;
`;

function Card({ name, desc, url, onClick }) {
  return (
    <StyledArticle onClick={onClick}>
      <p alt="Repo Name">
        {" "}
        <StyledSpan>Repositorio :</StyledSpan>
        {name}
      </p>
      <p alt="Repo Description">
        {" "}
        <StyledSpan>Description: </StyledSpan>
        {desc}
      </p>
      <StyledP>
        {" "}
        <StyledSpan>Url: </StyledSpan>
        {url}
      </StyledP>
    </StyledArticle>
  );
}

Card.propTypes = {
  name: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

export default Card;
