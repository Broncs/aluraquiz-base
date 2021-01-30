/* eslint-disable linebreak-style */
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Head from 'next/head';
import { useRouter } from 'next/router';
import db from '../db.json';
import Widget from '../src/components/Widget';
import LinkRouter from '../src/components/LinkRouter';

import GitHubCorner from '../src/components/GitHubCorner';
import QuizBackground from '../src/components/QuizBackground';
import Footer from '../src/components/Footer';
import { Input } from '../src/components/Input';
import Button from '../src/components/Button';
import QuizContainer from '../src/components/QuizContainer';
import QuizLogo from '../src/components/Logo';

export default function Home() {
  const router = useRouter();
  const [name, setName] = useState('');
  const [fillName, setFillName] = useState(false);

  return (
    <QuizBackground backgroundImage={db.bg}>
      {/* //arrumar meta tag================= */}
      <Head>
        {/* <!-- Primary Meta Tags --> */}
        <title>Imersão Alura-Next.js</title>
        <meta name="title" content="Imersão Alura-Next.js" />
        <meta
          name="description"
          content="Projeto baseado em Quiz , Usando o Next.js com Styled-components"
        />

        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://metatags.io/" />
        <meta property="og:title" content="Imersão Alura-Next.js" />
        <meta
          property="og:description"
          content="Projeto baseado em Quiz , Usando o Next.js com Styled-components"
        />
        <meta
          property="og:image"
          content="https://i.ibb.co/T1dspzM/QuizTag.png"
        />

        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://metatags.io/" />
        <meta property="twitter:title" content="Imersão Alura-Next.js" />
        <meta
          property="twitter:description"
          content="Projeto baseado em Quiz , Usando o Next.js com Styled-components"
        />
        <meta
          property="twitter:image"
          content="https://i.ibb.co/T1dspzM/QuizTag.png"
        />
      </Head>
      <QuizContainer>
        <QuizLogo />
        <Widget
          as={motion.section}
          transition={{ delay: 0, duration: 0.5 }}
          variants={{
            show: { opacity: 1, y: '0' },
            hidden: { opacity: 0, y: '100%' },
          }}
          initial="hidden"
          animate="show"
        >
          <Widget.Header>
            <h1>English Quiz</h1>
          </Widget.Header>
          <Widget.Content>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                router.push(`/quiz?name=${name}`);
              }}
            >
              <h2>
                Eai, como está seu ingles ? Teste seus conhecimentos nesse Quiz
              </h2>
              <Input
                className={fillName && 'error'}
                name="nomeDoUsuario"
                onChange={(e) => {
                  setName(e.target.value);
                  if (name.length > 0) {
                    setFillName(false);
                  }
                }}
                placeholder="Diz ai seu nome"
                value={name}
              />
              {fillName && (
                <p className="error-message">Por favor adicione um nome</p>
              )}
              <Button type="submit" disabled={name.length === 0}>
                {`Jogar ${name}`}
              </Button>
            </form>
          </Widget.Content>
        </Widget>
        <Widget
          as={motion.section}
          transition={{ delay: 0.5, duration: 0.5 }}
          variants={{
            show: { opacity: 1 },
            hidden: { opacity: 0 },
          }}
          initial="hidden"
          animate="show"
        >
          <Widget.Content>
            <h1>Quizes da Galera</h1>
            <ul>
              {db.external.map((linkExterno) => {
                const [projectName, githubUser] = linkExterno
                  .replace(/\//g, '')
                  .replace('https:', '')
                  .replace('.vercel.app', '')
                  .split('.');

                return (
                  <li key={linkExterno}>
                    <Widget.Topic
                      as={LinkRouter}
                      queryName={name}
                      onClick={() => {
                        if (name.length === 0) {
                          setFillName(true);
                        } else {
                          setFillName(false);
                        }
                      }}
                      href={`/quiz/${projectName}___${githubUser}`}
                    >
                      {`${projectName}/${githubUser}`}
                    </Widget.Topic>
                  </li>
                );
              })}
            </ul>
          </Widget.Content>
        </Widget>
        <Footer
          as={motion.footer}
          transition={{ delay: 0.5, duration: 0.5 }}
          variants={{
            show: { opacity: 1 },
            hidden: { opacity: 0 },
          }}
          initial="hidden"
          animate="show"
        />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/Broncs/aluraquiz-base" />
    </QuizBackground>
  );
}
