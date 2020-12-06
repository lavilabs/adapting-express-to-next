import React from "react";
import styled from "styled-components";

function Camera() {
  return (
    <Wrapper>
      <input type="file" accept="image/*" capture="environment"></input>
    </Wrapper>
  );
}

export default Camera;

const Wrapper = styled.div`
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;
