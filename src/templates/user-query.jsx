import { useState, useEffect } from "react";

import Label from "../atoms/label.jsx";
import Input from "../atoms/input";
import Button from "../atoms/button.jsx";

import styled from "styled-components";

import filterTextRepo from "../services/services-github.js";

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
  const [userInput, setUserInput] = useState("");
  const [queryInput, setQueryInput] = useState("");

  useEffect(() => {
    const storedUserInput = localStorage.getItem("userSearched");
    const storedQueryInput = localStorage.getItem("querySearched");

    storedUserInput ? setUserInput(storedUserInput) : false;
    storedQueryInput ? setQueryInput(storedQueryInput) : false;
  }, []);

  const onChangeUser = (event) => {
    setUserInput(event.target.value);
    //console.log("El input ha cambiado", event.target.value);
  };

  const onChangeQuery = (event) => {
    setQueryInput(event.target.value);
    //console.log("El query ha cambiado de valor", event.target.value);
  };

  const onClickButton = async () => {
    localStorage.setItem("userSearched", userInput);
    localStorage.setItem("querySearched", queryInput);

    console.log("Oprimiendo boton");
    try {
      const repos = await filterTextRepo(userInput, queryInput);
      console.log(`User: ${userInput}, query: ${queryInput}`);
      console.log("Repos: ", repos);
    } catch (err) {
      throw new Error("Este es el error: ", err);
    }
  };

  const onClickReset = () => {
    localStorage.removeItem("userSearched");
    localStorage.removeItem("querySearched");
  };

  return (
    <>
      <StyledDiv>
        <StyledArticle>
          <Label>Github User</Label>
          <Input value={userInput} onChange={onChangeUser}></Input>
        </StyledArticle>
        <StyledArticle>
          <Label>Search by Repository Name</Label>
          <Input value={queryInput} onChange={onChangeQuery}></Input>
        </StyledArticle>
      </StyledDiv>
      <Button texto="Search" onClick={onClickButton}></Button>
      <Button texto="Reset" onClick={onClickReset}></Button>
    </>
  );
}

export default UserQueryView;
