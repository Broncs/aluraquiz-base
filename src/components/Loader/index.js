/* eslint-disable linebreak-style */
import React from 'react';
import styled from 'styled-components';

const StyledLoader = styled.div`
  position: absolute;
  top: 30%;
  left: 20%;
  transform: translate(-50%, -50%);
  width: 50px;
  height: 10px;
  background: #333;
  border-radius: 5px;
  animation: spinner 1.8s ease-in-out infinite;
  &:before,
  &:after {
    position: absolute;
    display: block;
    content: '';
    animation: spinner 1.8s ease-in-out infinite;
    height: 10px;
    border-radius: 5px;
  }
  &:before {
    top: -20px;
    left: 10px;
    width: 40px;
    background: #fba4a5;
  }
  &:after {
    bottom: -20px;
    width: 35px;
    background: #fabe03;
  }
  @keyframes spinner {
    0% {
      transform: translateX(40px);
    }
    50% {
      transform: translateX(-30px);
    }
    100% {
      transform: translateX(40px);
    }
  }
`;

const Loader = () => <StyledLoader />;

export default Loader;
