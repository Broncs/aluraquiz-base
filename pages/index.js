import styled from "styled-components";
import db from "../db.json";
import Widget from "../src/components/Widget";
import Link from "next/link";
import Button from "../src/components/Button";

import GitHubCorner from "../src/components/GitHubCorner";
import QuizBackground from "../src/components/QuizBackground";
import Footer from "../src/components/Footer";

export const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;

export const InputName = styled.input`
  width: 100%;
  margin: 1em 0 2em;
  background: transparent;
  color: ${({ theme }) => theme.colors.contrastText};
  outline: none;
  border: 1px solid ${({ theme }) => theme.colors.secondary};
  padding: 0.7em 1em;
  border-radius: ${({ theme }) => theme.borderRadius};
`;

export default function Home() {
  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <Widget>
          <Widget.Header>
            <h1>{db.title}</h1>
          </Widget.Header>
          <Widget.Content>
            <p>{db.description}</p>
            <InputName placeholder="Diz ai seu nome pra jogar 🤗" />

            <Button text="jogar" linkTo="quiz"></Button>
          </Widget.Content>
        </Widget>
        <Widget>
          <Widget.Content>
            <h1>Quizes da Galera</h1>
            <p>lorem ipsum dolor sit amet....</p>
          </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/Broncs/aluraquiz-base" />
    </QuizBackground>
  );
}
