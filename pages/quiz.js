/* eslint-disable linebreak-style */
import React from 'react';
import { useRouter } from 'next/router';

import db from '../db.json';
import { QuizContainer } from './index';
import Widget from '../src/components/Widget';

import GitHubCorner from '../src/components/GitHubCorner';
import QuizBackground from '../src/components/QuizBackground';

export default function QuizPage() {
  const router = useRouter();
  // const [state, setstate] = useState('');
  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <Widget>
          <Widget.Header>
            <h1>
              Pergunta 1 de
              {' '}
              {db.questions.length}
            </h1>
          </Widget.Header>
          <Widget.Content>
            <p>
              Seja bem vindo
              {' '}
              <span>{ router.query.name }</span>
            </p>
          </Widget.Content>

        </Widget>
      </QuizContainer>
      <GitHubCorner />
    </QuizBackground>
  );
}
