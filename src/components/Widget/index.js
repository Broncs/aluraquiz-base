/* eslint linebreak-style: ["error", "windows"] */
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

Widget.Content = styled.div`
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
  input{
    width: 100%;
    padding: 10px 16px;
    outline: none;
    border: 1px solid  ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.contrastText};
    background: transparent;
    border-radius: ${({ theme }) => theme.borderRadius};
    margin: 6px 0 20px;
  }
  button{
    width: 100%;
    padding: 10px 16px;
    cursor: pointer;
    border: none;
      color: ${({ theme }) => theme.colors.contrastText};
     background: ${({ theme }) => theme.colors.primary};
    border-radius: ${({ theme }) => theme.borderRadius};

    &[disabled] {
        opacity: 0.5;
        cursor: not-allowed;
    }
  }
 span{
   color: ${({ theme }) => theme.colors.primary};
 }
`;

export default Widget;
