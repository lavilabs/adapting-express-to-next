import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const logo = require("../assets/LOGO2.png");

function Welcome() {
  return (
    <Wrapper>
      <Image src={logo} />
      <Copy>Let's go for a fashionable spin</Copy>
      <StyledButton to={"/SignIn"}>Sign In</StyledButton>
      <WrapperTwo>
        <CopySmall>Don't have an account? </CopySmall>
        <StyledLink to={"/CreateAccount"}> Create Account</StyledLink>
      </WrapperTwo>
    </Wrapper>
  );
}

export default Welcome;

const Wrapper = styled.div`
  margin-top: 150px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

const Image = styled.img`
  width: 300px;
`;

const Copy = styled.h2`
  color: black;
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
