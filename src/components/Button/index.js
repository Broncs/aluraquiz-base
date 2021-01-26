import Link from 'next/link';
import styled from 'styled-components';

const MainButton = styled.button`
  width: 100%;
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.contrastText};
  border: none;
  text-transform: uppercase;
  padding: 0.7em 1em;
  border-radius: ${({ theme }) => theme.borderRadius};
  cursor: pointer;
`;

export default function Button({ text, linkTo }) {
  return (
    <Link href={linkTo}>
      <MainButton>{text}</MainButton>
    </Link>
  );
}
