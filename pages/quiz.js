import styled from "styled-components";
import db from "../db.json";
import QuizBackground from "../src/components/QuizBackground";
import { QuizContainer } from "./index";
import Widget from "../src/components/Widget";
import GitHubCorner from "../src/components/GitHubCorner";
import Button from "../src/components/Button";
import Footer from "../src/components/Footer";
import { useState } from "react";
import { ChevronBack } from "@styled-icons/ionicons-outline/ChevronBack";

const Arrow = styled(ChevronBack)`
  width: 20px;
  margin-right: 20px;
  cursor: pointer;
`;

export default function Quiz() {
  const [indexNumber, setIndexNumber] = useState(0);

  const handleClick = () => {
    setIndexNumber(indexNumber - 1);
  };
  const confirmAnswer = () => {
    if (indexNumber < db.questions.length - 1) {
      setIndexNumber(indexNumber + 1);
    }
    return;
  };

  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <Widget>
          <Widget.Header>
            {indexNumber !== 0 && <Arrow onClick={handleClick} />}

            <h1>
              Pergunta {indexNumber + 1} de {db.questions.length}
            </h1>
          </Widget.Header>
          <Widget.HeaderImage
            backgroundImage={db.questions[indexNumber].image}
          />

          <Widget.Content>
            <h2>{db.questions[indexNumber].title} </h2>
            <p>{db.questions[indexNumber].description}</p>
            <ul>
              {db.questions[indexNumber].alternatives.map(
                (alternative, index) => {
                  return <li key={index}>{alternative}</li>;
                }
              )}
            </ul>
            <div onClick={confirmAnswer}>
              <Button text="Confirmar" linkTo="" />
            </div>
          </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/Broncs/aluraquiz-base" />
    </QuizBackground>
  );
}
