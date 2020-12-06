import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import BottomImage from "./BottomImage.js";

function SignIn() {
  const { loginWithRedirect } = useAuth0();
  const emailInput = React.useRef();
  const passWordInput = React.useRef();
 
  return (
    <Wrapper>
      <BottomImage />
      <Copy>Sign in</Copy>
      <CopyTwo>Welcome Back</CopyTwo>
      <Form>
        <p>Email:</p>
        <input type="text" ref={emailInput} />
        <p>Password:</p>
        <input type="text" ref={passWordInput} />
      </Form>
      <StyledLink to={"/ForgotPassword"}> Forgot Password?</StyledLink>
      <StyledButton onClick={() => loginWithRedirect()}
      >
        Log In
      </StyledButton>
    </Wrapper>
    // )
  );
}

export default SignIn;

const Wrapper = styled.div`
  margin-top: 0px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

const Copy = styled.h1`
  margin-top: 0px;
  color: black;
  font-family: "Abel", sans-serif;
  font-weight: lighter;
`;

const CopyTwo = styled.h4`
  margin-top: 0px;
  color: #d08080;
  font-family: "Abel", sans-serif;
  font-weight: lighter;
`;

const Form = styled.div`
  margin-top: 0px;
  font-family: Arial, sans-serif;
  font-size: 20px;
  color: grey;
`;

const StyledButton = styled(Link)`
  margin-top: 30px;
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

const StyledLink = styled(Link)`
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
