/* eslint-disable linebreak-style */
import styled from 'styled-components';

const Widget = styled.div`
  margin-top: 24px;
  margin-bottom: 24px;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme }) => theme.colors.mainBg};
  border-radius: 4px;
  overflow: hidden;
  h1,
  h2,
  h3 {
    font-size: 16px;
    font-weight: 700;
    line-height: 1;
    margin-bottom: 0;
  }
  p {
    font-size: 14px;
    font-weight: 400;
    line-height: 1;
  }
`;
Widget.Header = styled.header`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 18px 32px;
  background-color: ${({ theme }) => theme.colors.primary};

  * {
    margin: 0;
  }
`;
Widget.HeaderImage = styled.div`
  width: 100%;
  height: 150px;
  background-size: 100% 100%;
  background-position: center;
  background-image: url(${({ backgroundImage }) => backgroundImage});
  flex: 1;
`;

Widget.Content = styled.div`
  position: relative;
  padding: 24px 32px 32px 32px;
  & > *:first-child {
    margin-top: 0;
  }
  & > *:last-child {
    margin-bottom: 0;
  }
  ul {
    list-style: none;
    padding: 0;
  }
  h2 {
    margin-bottom: 10px;
  }
  .name-result,
  .score-result {
    color: ${({ theme }) => theme.colors.primary};
    font-size: 1.3rem;
  }

  .single-result {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${({ theme }) => theme.colors.secondary};
    color: ${({ theme }) => theme.colors.contrastText};
    margin: 10px 0;
    padding: 0.6em;
    border-radius: 4px;
    &:hover {
      opacity: 0.8;
    }
  }
  .link-home-results {
    display: flex;
    justify-content: center;
    margin-top: 10px;
    text-decoration: none;
    color: ${({ theme }) => theme.colors.secondary};
  }
  .error-message {
    margin: -10px 0 10px;
    color: red;
  }
`;

Widget.Topic = styled.a`
  outline: 0;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.contrastText};
  background-color: ${({ theme }) => `${theme.colors.primary}40`};
  padding: 10px 15px;
  margin-bottom: 8px;
  cursor: pointer;
  border-radius: ${({ theme }) => theme.borderRadius};
  transition: 0.3s;
  display: block;

  &:hover,
  &:focus {
    opacity: 0.5;
  }
`;
export default Widget;
