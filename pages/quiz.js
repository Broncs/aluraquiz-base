/* eslint-disable linebreak-style */
/* eslint-disable react/prop-types */

import React, { useState, useEffect } from 'react';

import db from '../db.json';
import Widget from '../src/components/Widget';
import QuizBackground from '../src/components/QuizBackground';
import QuizContainer from '../src/components/QuizContainer';

import GitHubCorner from '../src/components/GitHubCorner';

import Button from '../src/components/Button';

const ResultWidget = ({ results }) => (
  <Widget>
    <Widget.Header>Carregando...</Widget.Header>

    <Widget.Content>
      <p>
        {'Você acertou '}
        {results.reduce((somatoriaAtual, resultAtual) => {
          const isAcerto = resultAtual === true;
          if (isAcerto) {
            return somatoriaAtual + 1;
          }
          return somatoriaAtual;
        }, 0)}
        {' perguntas '}
      </p>
      <ul>
        {results.map((result, index) => (
          <li key={`result__${result}`}>
            #0
            {index + 1}
            {' '}
            Resultado:
            {result ? 'Acertou' : 'Errou'}
          </li>
        ))}
      </ul>
    </Widget.Content>
  </Widget>
);

const LoadingWidget = () => (
  <Widget>
    <Widget.Header>Carregando...</Widget.Header>

    <Widget.Content>[Desafio do Loading]</Widget.Content>
  </Widget>
);
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

        <form
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
            return (
              <Widget.Topic
                as="label"
                key={alternativeId}
                htmlFor={alternativeId}
              >
                <input
                  id={alternativeId}
                  name={questionId}
                  type="radio"
                  onChange={() => setSelectedAlternative(alternativeIndex)}
                />
                {alternative}
              </Widget.Topic>
            );
          })}

          {/* <pre>{JSON.stringify(question, null, 4)}</pre> */}

          <Button type="submit" disabled={!hasAlternativeSelected}>Confirmar</Button>
          {isQuestionSubmited && isCorrect && <p>Você acertou !</p>}

          {!isCorrect && isQuestionSubmited && <p>Você errou!</p>}
        </form>
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
  const [screenState, setScreenState] = useState(screenStates.LOADING);
  const [results, setResults] = useState([]);
  const totalQuestions = db.questions.length;
  const [questionIndex, setQuestionIndex] = useState(0);
  const question = db.questions[questionIndex];

  function addResult(result) {
    setResults([
      ...results,
      result,
    ]);
  }

  useEffect(() => {
    setTimeout(() => {
      setScreenState(screenStates.QUIZ);
    }, 500);
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

        {screenState === screenStates.LOADING && <LoadingWidget />}

        {screenState === screenStates.RESULT && (
          <ResultWidget results={results} />
        )}
      </QuizContainer>
      <GitHubCorner />
    </QuizBackground>
  );
}
