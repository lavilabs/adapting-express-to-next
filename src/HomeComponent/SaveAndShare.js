import React from "react";
import styled from "styled-components";
import Bar from "./bar.js";

function SaveAndShare() {
  return (
    <Wrapper>
      <Copy>Save and Share</Copy>
      <CopyTwo>The possibilities are endless!</CopyTwo>
      <WrapperTwo>
        <Input1></Input1>
        <Input2></Input2>
      </WrapperTwo>
      <Bar />
    </Wrapper>
  );
}

export default SaveAndShare;

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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Input1 = styled.div`
  border: 2px solid black;
  margin: 10px;
  color: black;
  height: 240px;
  width: 330px;
  border-radius: 30px;
  text-decoration: none;
  font-family: "Abel", sans-serif;
  font-weight: bold;
  font-size: 30px;
  text-align: center;
  padding-top: 50px;
`;

const Input2 = styled.div`
  border: 2px solid black;
  margin: 10px;
  color: black;
  height: 240px;
  width: 330px;
  border-radius: 30px;
  text-decoration: none;
  font-family: "Abel", sans-serif;
  font-weight: bold;
  font-size: 30px;
  text-align: center;
  padding-top: 50px;
`;
