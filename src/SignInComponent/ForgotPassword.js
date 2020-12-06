import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import useWebAuth from "./useWebAuth.js";
import BottomImage from "./BottomImage.js";

function ForgotPassword() {
  const { webAuth } = useWebAuth();
  const emailInput = React.useRef();
  return (
    <Wrapper>
      <BottomImage />
      <Copy>Forgot Password? </Copy>
      <CopyTwo>A reset link will be emailed to you</CopyTwo>

      <Form>
        <p>Email:</p>
        <input type="text" ref={emailInput} />
      </Form>

      <StyledButton
        onClick={() => {
          if (webAuth.current && emailInput.current) {
            webAuth.current.changePassword(
              {
                connection: "Username-Password-Authentication",
                email: emailInput.current.value,
              },
              function (err, resp) {
                if (err) {
                  console.log(err.message);
                } else {
                  console.log(resp);
                }
              }
            );
          }
        }}
      >
        <Link to={"/ForgotPassword2"}>Submit</Link>
      </StyledButton>
    </Wrapper>
  );
}

export default ForgotPassword;

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

// const Linking = styled(Link)``;
