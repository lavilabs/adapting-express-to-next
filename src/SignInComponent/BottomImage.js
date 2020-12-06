import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import useWebAuth from "./useWebAuth.js";

const Image = require("../assets/illustration2.png");

function BottomImage() {
  return (
    <Wrapper>
      <Img src={Image}></Img>
    </Wrapper>
  );
}

export default BottomImage;

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
  color: #d08080;
  font-family: "Abel", sans-serif;
  font-weight: lighter;
`;

const Img = styled.img`
  width: 100%;
  display: flex;

  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 0px;
`;
