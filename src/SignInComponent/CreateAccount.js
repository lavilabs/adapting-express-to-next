import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import BottomImage from "./BottomImage.js";

function CreateAccount() {
  return (
    <Wrapper>
      <BottomImage />
      <Copy>Create Account </Copy>
      <CopyTwo>Welcome</CopyTwo>

      <Form>
        <p>Name:</p>
        <input type="text" />
        <p>Password:</p>
        <input type="text" />
        <p>Email:</p>
        <input type="text" />
      </Form>

      <StyledButton to={"/CreateAccount"}>Submit</StyledButton>

      <WrapperTwo>
        <CopySmall>Already have an account? </CopySmall>
        <StyledLink to={"/SignIn"}> Sign in</StyledLink>
      </WrapperTwo>
    </Wrapper>
  );
}

export default CreateAccount;

const Wrapper = styled.div`
  margin-top: 0px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

const Form = styled.div`
  font-family: Arial, sans-serif;
  font-size: 20px;
  color: grey;
`;

const Copy = styled.h1`
  margin-top: 0px;
  color: black;
  font-family: "Abel", sans-serif;
  font-weight: lighter;
`;

const CopyTwo = styled.h4`
  color: #d08080;
  font-family: "Abel", sans-serif;
  font-weight: lighter;
`;

const StyledButton = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  height: 56px;
  width: 300px;
  bottom: 56px;
  border-radius: 14px;
  border-style: none;
  background-color: black;
  color: #fbf1f1;
  text-decoration: none;
  font-family: "Abel", sans-serif;
  font-weight: bold;
`;

const WrapperTwo = styled.div`
  position: fixed;
  bottom: 10px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: baseline;
`;

const CopySmall = styled.h6`
  margin-top: 15px;
  color: #d08080;
  font-family: Arial, sans-serif;
  font-size: 12px;
`;

const StyledLink = styled(Link)`
  margin-top: 15px;
  color: #d08080;
  font-family: Arial, sans-serif;
  font-size: 12px;

  &:hover {
    text-decoration: underline;
  }
  &.active {
    color: grey;
  }
`;
