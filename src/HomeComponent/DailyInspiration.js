import React from 'react';
import styled from 'styled-components';
import Bar from './bar.js';

function DailyInspiration() {
  const categories = [
    'coats',
    'jackets',
    'pants',
    'blouse',
    'hats',
    'shoes',
    'jewelry',
  ];

  return (
    <Wrapper>
      <Copy>Daily Inspiration</Copy>
      <Date>October 22 2020</Date>
      <WrapperTwo>
        {categories.map((category) => {
          return <Input>{category.toUpperCase()}</Input>;
        })}
      </WrapperTwo>
      <Bar />
    </Wrapper>
  );
}

export default DailyInspiration;

const Wrapper = styled.div`
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

const Copy = styled.h1`
  color: black;
  font-family: 'Abel', sans-serif;
  font-weight: lighter;
`;

const Date = styled.h4`
  display: inline;
  margin: 0px;
  color: #d08080;
  font-family: 'Abel', sans-serif;
  font-weight: lighter;
`;

const WrapperTwo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Input = styled.div`
  border: 2px solid black;
  margin: 10px;
  color: black;
  height: 240px;
  width: 330px;
  border-radius: 30px;
  text-decoration: none;
  font-family: 'Abel', sans-serif;
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
  font-family: 'Abel', sans-serif;
  font-weight: bold;
  font-size: 30px;
  text-align: center;
  padding-top: 50px;
`;
