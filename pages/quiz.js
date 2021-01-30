/* eslint-disable linebreak-style */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */

import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { TimesCircle } from '@styled-icons/fa-regular/TimesCircle';
import { CheckCircle } from '@styled-icons/fa-solid/CheckCircle';
// adding
import { useRouter } from 'next/router';
import LinkRouter from '../src/components/LinkRouter';

import db from '../db.json';
import Widget from '../src/components/Widget';
import QuizBackground from '../src/components/QuizBackground';
import QuizContainer from '../src/components/QuizContainer';
import AlternativesForm from '../src/components/AlternativesForm';
import GitHubCorner from '../src/components/GitHubCorner';
import BackLinkArrow from '../src/components/BackLinkArrow';
import Loader from '../src/components/Loader';
import QuizLogo from '../src/components/Logo';

import Button from '../src/components/Button';

const WrongIcon = styled(TimesCircle)`
  color: ${({ theme }) => theme.colors.wrong};
  width: 50px;
`;
const CorrectIcon = styled(CheckCircle)`
  color: ${({ theme }) => theme.colors.success};
  width: 50px;
`;
const WrongIcon2 = styled(TimesCircle)`
  color: ${({ theme }) => theme.colors.wrong};
  width: 20px;
`;
const CorrectIcon2 = styled(CheckCircle)`
  color: #feed01;
  width: 20px;
`;

const ResultWidget = ({ results, router }) => {
  const { name } = router.query;
  const totalCorrect = results.filter(Boolean).length;

  return (
    <>
      <QuizLogo />
      <Widget>

        <Widget.Header>Resultado</Widget.Header>

        <Widget.Content>
          <p>
            Mandou bem
            <span className="name-result">
              {' '}
              {name}
            </span>
          </p>
          <h2>
            {'Você acertou '}
            <span className="score-result">
              {results.reduce((somatoriaAtual, resultAtual) => {
                const isAcerto = resultAtual === true;
                if (isAcerto) {
                  return somatoriaAtual + 1;
                }
                return somatoriaAtual;
              }, 0)}
            </span>
            {' perguntas '}
          </h2>
          <ul>
            {results.map((result, index) => (
              <>
                <li className="single-result" key={`result__${result}`}>
                  #0
                  {index + 1}
                  {' '}
                  Resultado:
                  {result ? ' Acertou' : ' Errou'}
                  {result ? <CorrectIcon2 /> : <WrongIcon2 />}
                </li>
              </>
            ))}
          </ul>
          {totalCorrect <= 2 && (
          <>
            <h3>Parece que estava dificil né, don't worry!</h3>
            <p>que tal tentar mais uma vez ? 👇🏻</p>
          </>
          )}
          {totalCorrect <= 4 && totalCorrect >= 3 && (
          <>
            <h3>Parabens, Voce acertou mais que a metade !!</h3>
            <p>Wanna try one more time ? 👇🏻</p>
          </>
          )}
          {totalCorrect === 5 && (
          <>
            <h3>Congratulations, you nailed it !</h3>
            <p>wanna try new quizzes ? 👇🏻</p>
          </>
          )}
          <LinkRouter className="link-home-results" href="/">
            Voltar para home
          </LinkRouter>
        </Widget.Content>
      </Widget>
    </>
  );
};

function QuestionWidget({
  question,
  totalQuestions,
  questionIndex,
  onSubmit,
  addResult,
}) {
  const [selectedAlternative, setSelectedAlternative] = useState(undefined);
  const [isQuestionSubmited, setIsQuestionSubmited] = useState(false);
  const questionId = `question__${questionIndex}`;
  const isCorrect = selectedAlternative === question.answer;
  const hasAlternativeSelected = selectedAlternative !== undefined;
  return (
    <Widget>
      <Widget.Header>
        <BackLinkArrow href="/" />
        <h3>{`Pergunta ${questionIndex + 1} de ${totalQuestions}`}</h3>
      </Widget.Header>
      <img
        alt="Descrição"
        style={{
          width: '100%',
          height: '150px',
          objectFit: 'cover',
        }}
        src={question.image}
      />
      <Widget.Content>
        <h2>{question.title}</h2>
        <p>{question.description}</p>

        <AlternativesForm
          onSubmit={(e) => {
            e.preventDefault();
            setIsQuestionSubmited(true);
            setTimeout(() => {
              addResult(isCorrect);
              onSubmit();
              setIsQuestionSubmited(false);
              setSelectedAlternative(undefined);
            }, 3000);
          }}
        >
          {question.alternatives.map((alternative, alternativeIndex) => {
            const alternativeId = `alternative__${alternativeIndex}`;
            const alternativeStatus = isCorrect ? 'SUCCESS' : 'ERROR';
            const isSelected = selectedAlternative === alternativeIndex;
            return (
              <Widget.Topic
                as="label"
                key={alternativeId}
                htmlFor={alternativeId}
                data-selected={isSelected}
                data-status={isQuestionSubmited && alternativeStatus}
              >
                <input
                  // style={{ display: 'none' }}
                  id={alternativeId}
                  name={questionId}
                  type="radio"
                  checked={false}
                  onChange={() => setSelectedAlternative(alternativeIndex)}
                />
                {alternative}
              </Widget.Topic>
            );
          })}

          {/* <pre>{JSON.stringify(question, null, 4)}</pre> */}

          <Button type="submit" disabled={!hasAlternativeSelected}>
            Confirmar
          </Button>
          {isQuestionSubmited && isCorrect && (
            <div className="Answer">
              <CorrectIcon />
              <p>Você acertou !</p>
            </div>
          )}

          {!isCorrect && isQuestionSubmited && (
            <div className="Answer">
              <WrongIcon />
              <p>Você errou!</p>
            </div>
          )}
        </AlternativesForm>
      </Widget.Content>
    </Widget>
  );
}

const screenStates = {
  QUIZ: 'QUIZ',
  LOADING: 'LOADING',
  RESULT: 'RESULT',
};
export default function QuizPage() {
  const [screenState, setScreenState] = useState(screenStates.RESULT);
  const [results, setResults] = useState([true, true, false, false, false]);
  const totalQuestions = db.questions.length;
  const [questionIndex, setQuestionIndex] = useState(0);
  const question = db.questions[questionIndex];
  const router = useRouter();

  function addResult(result) {
    setResults([...results, result]);
  }

  useEffect(() => {
    setTimeout(() => {
      // setScreenState(screenStates.QUIZ);
    }, 1000);
  }, []);

  const handleSubmit = () => {
    const nextQuestion = questionIndex + 1;
    if (nextQuestion < totalQuestions) {
      setQuestionIndex(questionIndex + 1);
    } else {
      setScreenState(screenStates.RESULT);
    }
  };

  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        {screenState === screenStates.QUIZ && (
          <QuestionWidget
            question={question}
            questionIndex={questionIndex}
            totalQuestions={totalQuestions}
            onSubmit={handleSubmit}
            addResult={addResult}
          />
        )}

        {screenState === screenStates.LOADING && <Loader />}

        {screenState === screenStates.RESULT && (
          <ResultWidget results={results} router={router} />
        )}
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/Broncs/aluraquiz-base" />
    </QuizBackground>
  );
}
