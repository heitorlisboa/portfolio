import type { NextPage } from "next";
import styles from "../../src/styles/pages/Works.module.scss";

import Head from "next/head";
import CardList from "../../src/components/CardList";
import Footer from "../../src/components/Footer";

const Aluracord: NextPage = () => {
  return (
    <>
      <Head>
        <title>Heitor Lisboa - Aluracord</title>
      </Head>
      <main>
        <h1>Aluracord</h1>
        <p>
          O Aluracord consiste em um chat em tempo real, inspirado no Discord e
          feito durante a Imersão React 2022 da Alura, porém, sem utilização de
          nada que foi fornecido pelos instrutores, construído completamente do
          zero utilizando Next.js
        </p>
        <ul className={styles.links} aria-label="Links do projeto">
          <li>
            <a
              className="text-anchor"
              href="https://github.com/heitorlisboa/aluracord"
              target="_blank"
              rel="noreferrer"
            >
              Repositório
            </a>
          </li>
          <li>
            <a
              className="text-anchor"
              href="https://aluracord-heitorlisboa.vercel.app"
              target="_blank"
              rel="noreferrer"
            >
              Website
            </a>
          </li>
        </ul>
        <section>
          <h2 id="features">Principais funcionalidades</h2>
          <ul className={styles.features} aria-labelledby="features">
            <li>Troca de mensagens em tempo real</li>
            <li>Sistema usuários ativos em cada canal</li>
            <li>Gerenciamento de mensagens (deleção, modificação e menção)</li>
            <li>
              Sistema de canais e servidores <strong>(EM BREVE)</strong>
            </li>
          </ul>
        </section>
        <section>
          <h2 id="technologies">Tecnologias utilizadas</h2>
          <CardList aria-labelledby="technologies">
            <li>Next.js</li>
            <li>Typescript</li>
            <li>Sass</li>
            <li>Supabase</li>
          </CardList>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Aluracord;
