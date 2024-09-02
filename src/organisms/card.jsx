import styled from "styled-components";
import PropTypes from "prop-types";

const StyledArticle = styled.article`
  width: 200px;
  border: 2px solid grey;
  border-radius: 10px;

  display: flex;
  flex-direction: column;
  padding: 5px;
  margin: 0;
`;

const StyledSpan = styled.span`
  color: #3fe0d2;
  margin: 0;
`;

const StyledP = styled.p`
  color: #e93bba;
  overflow-wrap: break-word;
  text-decoration: none;
  margin: 0;
`;

function Card({ name, desc, url, onClick }) {
  return (
    <StyledArticle onClick={onClick}>
      <>
        <StyledSpan>Repositorio :</StyledSpan>
        <p alt="Repo Name">{name}</p>
      </>
      <>
        <StyledSpan>Description: </StyledSpan>
        <p alt="Repo Description">{desc}</p>
      </>
      <>
        <StyledSpan>Url: </StyledSpan>
        <StyledP>{url}</StyledP>
      </>
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
