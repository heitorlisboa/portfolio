import Head from 'next/head';

import styles from '@/styles/pages/Works.module.scss';

import { Container } from '@/components/Container';
import { TechList } from '@/components/TechList';
import { Tech } from '@/components/Tech';
import { Footer } from '@/components/Footer';

export default function AluracordPage() {
  return (
    <>
      <Head>
        <title>Heitor Lisboa - Aluracord</title>
      </Head>

      <main>
        <Container>
          <h1>
            Aluracord &mdash;{' '}
            <span className="wip-warning">Página em construção</span>
          </h1>
          <p>
            O Aluracord consiste em um chat em tempo real, inspirado no Discord
            e feito durante a Imersão React 2022 da Alura, porém, sem utilização
            de nada que foi fornecido pelos instrutores, construído
            completamente do zero utilizando Next.js
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
              <li>
                Gerenciamento de mensagens (deleção, modificação e menção)
              </li>
              <li>
                Sistema de canais e servidores <strong>(EM BREVE)</strong>
              </li>
              <li>
                Sistema de autenticação <strong>(EM BREVE)</strong>
              </li>
            </ul>
          </section>
          <section>
            <h2 id="technologies">Tecnologias utilizadas</h2>
            <TechList aria-labelledby="technologies">
              <Tech iconName="nextjs">Next.js</Tech>
              <Tech iconName="ts">Typescript</Tech>
              <Tech iconName="sass">Sass</Tech>
              <Tech iconName="supabase">Supabase</Tech>
            </TechList>
          </section>
        </Container>
      </main>

      <Footer />
    </>
  );
}
