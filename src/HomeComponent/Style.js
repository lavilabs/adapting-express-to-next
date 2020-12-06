import React from "react";
import styled from "styled-components";
import Bar from "./bar.js";

function Style() {
  return (
    <Wrapper>
      <Copy>Style</Copy>
      <CopyTwo>Start composing your oufit</CopyTwo>

      <WrapperTwo>
        <SmallWrapper>
          <Input1>INPUT</Input1>
          <Input2>INPUT</Input2>
        </SmallWrapper>
        <SmallWrapper>
          <Input3>INPUT</Input3>
          <Input4>INPUT</Input4>
        </SmallWrapper>
      </WrapperTwo>

      <Bar />
    </Wrapper>
  );
}

export default Style;

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

const SmallWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const Input1 = styled.div`
  border: 2px solid black;
  margin: 10px;
  height: 240px;
  width: 160px;
  border-radius: 30px;
`;

const Input2 = styled.div`
  border: 2px solid black;
  margin: 10px;
  height: 240px;
  width: 160px;
  border-radius: 30px;
`;

const Input3 = styled.div`
  border: 2px solid black;
  margin: 10px;
  height: 240px;
  width: 160px;
  border-radius: 30px;
`;

const Input4 = styled.div`
  border: 2px solid black;
  margin: 10px;
  height: 240px;
  width: 160px;
  border-radius: 30px;
`;
