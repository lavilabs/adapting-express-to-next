import React from "react";
import styled from "styled-components";
import Bar from "./bar.js";
import { Link } from "react-router-dom";

function StartSelecting() {
  return (
    <Wrapper>
      <Copy>Start Selecting</Copy>
      <CopyTwo>What suits your fancy?</CopyTwo>

      <WrapperTwo>
        <SmallWrapper>
          <StyledButton to={"/SignIn"}>Coats</StyledButton>
          <Input>Input</Input>
        </SmallWrapper>
        <SmallWrapper>
          <StyledButton to={"/SignIn"}>Jackets</StyledButton>
          <Input>Input</Input>
        </SmallWrapper>
        <SmallWrapper>
          <StyledButton to={"/SignIn"}>Cardigans</StyledButton>
          <Input>Input</Input>
        </SmallWrapper>
        <SmallWrapper>
          <StyledButton to={"/SignIn"}>Sweaters</StyledButton>
          <Input>Input</Input>
        </SmallWrapper>
        {/* <SmallWrapper>
          <StyledButton to={"/SignIn"}>Dresses</StyledButton>
          <Input>Input</Input>
        </SmallWrapper> */}
      </WrapperTwo>

      <Bar />
    </Wrapper>
  );
}

export default StartSelecting;

const Wrapper = styled.div`
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

const Copy = styled.h1`
  color: black;
  font-family: "Abel", sans-serif;
  font-weight: lighter;
`;

const CopyTwo = styled.h4`
  display: inline;
  margin: 0px;
  color: #d08080;
  font-family: "Abel", sans-serif;
  font-weight: lighter;
`;

const WrapperTwo = styled.div`
  padding-left: 15px;
  padding-right: 15px;
  /* margin-top: 100px; */
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: flex-start;
`;

const SmallWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
`;

const StyledButton = styled(Link)`
  height: 30px;
  width: 60px;
  border-radius: 14px;
  border-style: none;
  background-color: black;
  color: #fbf1f1;
  text-decoration: none;
  font-family: "Abel", sans-serif;
  font-weight: bold;
`;

const Input = styled.div`
  border: 2px solid black;
  margin: 10px;
  height: 240px;
  width: 60px;
  border-radius: 30px;
`;
