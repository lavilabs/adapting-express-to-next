import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import nl2br from "react-newline-to-break";
// import ShadowText from "react-shadow-text";

function Home() {
  let myString =
    "Welcome \n to your \n Wardrobe! \n Let’s go for a \n fashionable spin.";
  return (
    <>
      <Wrapper>
        <WrapperTwo>
          <Copy>{nl2br(myString)}</Copy>
        </WrapperTwo>
        <StyledButton to={"/DailyInspiration"}>Enter</StyledButton>
      </Wrapper>
    </>
  );
}

export default Home;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background-image: url("/closet3.jpg");
  background-size: cover;
  height: 100%;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
`;

const WrapperTwo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: flex-start;
  padding-bottom: 350px;
`;

const Copy = styled.h2`
  color: black;
  font-family: "Abel", sans-serif;
  font-weight: lighter;
  z-index: 1;
  align-items: center;
  text-align: center;
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
  /* background-color: #facece; */
  background-color: black;
  color: #fbf1f1;
  text-decoration: none;
  font-family: "Abel", sans-serif;
  font-weight: bold;
`;
