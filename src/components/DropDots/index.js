/* eslint-disable linebreak-style */
import React from 'react';
import styled from 'styled-components';

const StyledDropDots = styled.div`
  .spinner {
    width: 70px;
    text-align: center;
    display:flex;
    justify-content: center;
    align-items:center;
  }

  .spinner > div {
    width: 18px;
    height: 18px;
    background-color: #fabe03;

    border-radius: 100%;
    display: inline-block;
    -webkit-animation: sk-bouncedelay 1.4s infinite ease-in-out both;
    animation: sk-bouncedelay 1.4s infinite ease-in-out both;
  }

  .spinner .bounce1 {
    -webkit-animation-delay: -0.32s;
    animation-delay: -0.32s;
    background-color: #fba4a5;
  }

  .spinner .bounce2 {
    -webkit-animation-delay: -0.16s;
    animation-delay: -0.16s;
    background-color: #333;
  }

  @-webkit-keyframes sk-bouncedelay {
    0%,
    80%,
    100% {
      -webkit-transform: scale(0);
    }
    40% {
      -webkit-transform: scale(1);
    }
  }

  @keyframes sk-bouncedelay {
    0%,
    80%,
    100% {
      -webkit-transform: scale(0);
      transform: scale(0);
    }
    40% {
      -webkit-transform: scale(1);
      transform: scale(1);
    }
  }
`;

const DropDots = () => (
  <StyledDropDots>
    <div className="spinner">
      <div className="bounce1" />
      <div className="bounce2" />
      <div className="bounce3" />
    </div>
  </StyledDropDots>
);

export default DropDots;
