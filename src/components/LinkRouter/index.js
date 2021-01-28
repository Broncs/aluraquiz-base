/* eslint-disable linebreak-style */
import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

const LinkStyled = styled.a`
  color: ${({ theme }) => theme.colors.secondary};
  
`;

// eslint-disable-next-line react/prop-types
function LinkRouter({ href, name }) {
  return (
    <Link href={href} passHref>
      <LinkStyled>{name}</LinkStyled>
    </Link>
  );
}
export default LinkRouter;
