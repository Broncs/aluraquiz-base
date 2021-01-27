/* eslint-disable linebreak-style */

import PropTypes from 'prop-types';
import styled from 'styled-components';

const Button = styled.button`
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.contrastText};
  border-radius: ${({ theme }) => theme.borderRadius};
  border: 0;

  width: 100%;
  text-transform: uppercase;
  padding: 10px 16px;
  font-weight: bold;
  font-size: 14px;
  line-height: 1;
  cursor: pointer;
  outline: 0;
  transition: 0.3s;

  &:hover,
  &:focus {
    opacity: 0.5;
  }

  &:disabled {
    background-color: #979797;
    cursor: not-allowed;
  }
`;

export default Button;

Button.prototypes = {
  type: PropTypes.oneOf(['submit', 'type', 'button']).isRequired,
  children: PropTypes.node.isRequired,
};
