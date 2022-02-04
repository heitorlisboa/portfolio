import type { NextPage } from "next";
import styles from "../../src/styles/pages/Works.module.scss";

import Head from "next/head";
import CardList from "../../src/components/CardList";
import Footer from "../../src/components/Footer";

const CosmoMapeamento: NextPage = () => {
  return (
    <>
      <Head>
        <title>Heitor Lisboa - Cosmo Mapeamento</title>
      </Head>
      <main>
        <h1>Cosmo Mapeamento</h1>
        <p className={styles.projectDescription}>
          Esse projeto consiste na reconstrução de um website previamente
          existente &ndash; o Cosmo Mapeamento &ndash; mas com um front end
          feito totalmente do zero e de maneira responsiva e acessível
          utilizando React
        </p>
        <ul className={styles.links} aria-label="Links do projeto">
          <li>
            <a
              className="text-anchor"
              href="https://github.com/heitorlisboa/cosmo-mapeamento"
              target="_blank"
              rel="noreferrer"
            >
              Repositório
            </a>
          </li>
          <li>
            <a
              className="text-anchor"
              href="https://heitorlisboa.github.io/cosmo-mapeamento/"
              target="_blank"
              rel="noreferrer"
            >
              Website
            </a>
          </li>
        </ul>
        <section>
          <h2 id="features">Funcionalidades interessantes</h2>
          <ul className={styles.features} aria-labelledby="features">
            <li>Navegação lateral que acompanha o scroll</li>
            <li>Modal de imagens com carrossel</li>
          </ul>
        </section>
        <section>
          <h2 id="technologies">Tecnologias utilizadas</h2>
          <CardList aria-aria-labelledby="technologies">
            <li>React</li>
            <li>Typescript</li>
            <li>Sass</li>
          </CardList>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default CosmoMapeamento;
