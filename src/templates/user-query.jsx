import Label from "../atoms/label.jsx";
import Input from "../atoms/input";
import Button from "../atoms/button.jsx";

import styled from "styled-components";

const StyledArticle = styled.article`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  gap: 10px;
`;
function UserQueryView() {
  return (
    <>
      <StyledDiv>
        <StyledArticle>
          <Label>Github User</Label>
          <Input></Input>
        </StyledArticle>
        <StyledArticle>
          <Label>Search by Repository Name</Label>
          <Input></Input>
        </StyledArticle>
      </StyledDiv>
      <Button texto="Search"></Button>
    </>
  );
}

export default UserQueryView;
