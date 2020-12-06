import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import './bar.css';

const magicWand = require('../assets/GV MW.svg');
const home = require('../assets/GV HOME.png');
const drivethrucloset = require('../assets/GV drivethrucloset.png');
const profile = require('../assets/GV PROFILE2.svg');
const plus = require('../assets/GV PLUS.png');

function Bar() {
  return (
    <Wrapper>
      <NavLink to='/DailyInspiration' activeClassName='active'>
        <Home src={home} />
      </NavLink>

      <NavLink to='/StartSelecting' activeClassName='active'>
        <DriveThruCloset src={drivethrucloset} />
      </NavLink>

      <NavLink to='/Camera' activeClassName='active'>
        <Plus src={plus} />
      </NavLink>

      <NavLink to='/Style' activeClassName='active'>
        <MagicWand src={magicWand} />
      </NavLink>

      <NavLink to='/SaveAndShare' activeClassName='active'>
        <Profile src={profile} />
      </NavLink>
    </Wrapper>
  );
}

export default Bar;

const Wrapper = styled.div`
  padding-top: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-content: center;
  position: fixed;
  height: 56px;
  width: 300px;
  bottom: 56px;
  border-radius: 30px;
  border-style: none;
  background-color: pink;
  color: #fbf1f1;
  text-decoration: none;
`;

const Home = styled.img`
  height: 40px;
  fill: black;
`;

const MagicWand = styled.img`
  height: 40px;
`;

const DriveThruCloset = styled.img`
  height: 40px;
`;

const Profile = styled.img`
  height: 40px;
`;

const Plus = styled.img`
  height: 40px;
`;

const LogOut = styled.img`
  height: 40px;
`;
