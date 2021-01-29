/* eslint-disable linebreak-style */
/* eslint-disable react/prop-types */
import React from 'react';
import { ThemeProvider } from 'styled-components';
import QuizScreen from '../../src/Screens/Quiz';

const QuizDaGalera = ({ dbExterno }) => (
  <ThemeProvider theme={dbExterno.theme}>
    <QuizScreen
      externalQuestions={dbExterno.questions}
      externalBg={dbExterno.bg}
    />
  </ThemeProvider>
);

export default QuizDaGalera;

export async function getServerSideProps(context) {
  const [projectName, githubUser] = context.query.id.split('___');

  const dbExterno = await fetch(
    `https://${projectName}.${githubUser}.vercel.app/api/db`,
  )
    .then((respostaDoServer) => {
      if (respostaDoServer.ok) {
        return respostaDoServer.json();
      }
      throw new Error('falha em pegar os dados');
    })
    .then((respostaConvertidaEmObjeto) => respostaConvertidaEmObjeto)
    .catch((err) => {
      console.error(err);
    });

  console.log(dbExterno);
  return {
    props: {
      dbExterno,
    },
  };
}
