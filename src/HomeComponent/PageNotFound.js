import React from "react";
import styled from "styled-components";

function PageNotFound() {
  return (
    <Wrapper>
      <Copy>Oops!</Copy>
      <CopyTwo>Wrong Wardrobe here!</CopyTwo>
    </Wrapper>
  );
}

export default PageNotFound;

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
  color: #d08080;
  font-family: "Abel", sans-serif;
  font-weight: lighter;
`;
