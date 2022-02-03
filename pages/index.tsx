import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import type { NextPage } from "next";
import styles from "../src/styles/pages/Home.module.scss";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Heitor Lisboa - Desenvolvedor Front End</title>
      </Head>

      <header className={styles.header}>
        <a href="#main-content" className={styles.skipContent}>
          Pular para o conteúdo
        </a>
        <ul className={styles.socialsIcons} aria-label="Redes sociais">
          <li>
            <a
              href="https://github.com/heitorlisboa"
              target="_blank"
              rel="noreferrer"
            >
              <Image
                src="/svg/github-icon.svg"
                alt="GitHub"
                width={50}
                height={50}
                layout="responsive"
              />
            </a>
          </li>
          <li>
            <a href="" target="_blank" rel="noreferrer">
              <Image
                src="/svg/linkedin-icon.svg"
                alt="LinkedIn"
                width={50}
                height={50}
                layout="responsive"
              />
            </a>
          </li>
        </ul>
        <h1 className={styles.mainTitle}>
          Olá, sou Heitor Lisboa! Desenvolvedor Front End e estudante de
          Engenharia de Software.
        </h1>
      </header>

      <main id="main-content">
        <section>
          <h2>Sobre mim</h2>
          <p>
            Opa, eai? Meu nome é Heitor. Sou um introvertido apaixonado por
            tecnologia e que adora construir coisas através do código.
          </p>
          <p>
            Desde os meus 3 aninhos de idade eu já gostava muito de mexer no
            computador e navegar pela internet procurando coisas pra fazer.
            Desde então, por crescer ao lado do mundo da computação, passei a
            nutrir uma paixão cada vez maior por ele, até o ponto que, aos meus
            14 anos, parei de simplesmente olhar para aquele mar profundo da
            tecnologia e resolvi molhar um pouco o pé.
          </p>
          <p>
            Comecei aprendendo Python. No início foi agradável, mas ao mesmo
            tempo assustador: era uma linguagem simples de se entender, porém
            quanto mais eu aprendia, mais eu percebia o quanto havia para
            aprender. Assim, essa experiência acabou durando poucos meses.
          </p>
          <p>
            Entretanto, ao passar dos anos, não saía da minha cabeça o
            pensamento de querer me aventurar e não sair mais desse mundo, foi
            então que, aos meus 17 anos, eu tomei uma decisão: mergulhar de
            ponta no universo da tecnologia. A partir daí eu não parei mais,
            voltei a estudar Python, estudei Django, HTML e CSS, Javascript,
            Sass etc.
          </p>
          <p>
            E hoje aqui estou, focando meus estudos em React, Next.js e
            acessibilidade na web, recém entrando na faculdade de Engenharia de
            Software, e sempre mantendo uma aplicação em desenvolvimento!
          </p>
        </section>

        <section>
          <h2 id="abilities-title">Habilidades</h2>
          <ul
            className={styles.abilitiesList}
            aria-labelledby="abilities-title"
          >
            <li>HTML &amp; CSS</li>
            <li>Javascript ES6</li>
            <li>Sass</li>
            <li>React</li>
            <li>Next.js</li>
            <li>Python</li>
          </ul>
        </section>

        <section>
          <h2 id="projects-title">Meus projetos</h2>
          <ul className={styles.projectList} aria-labelledby="projects-title">
            <article className={styles.project} role="listitem">
              <Link href="/works/cosmo-mapeamento">
                <a>
                  <Image
                    src="/img/cosmo-mapeamento.webp"
                    alt="Print do website Cosmo Mapeamento"
                    width={16}
                    height={9}
                    layout="responsive"
                  />
                </a>
              </Link>
              <h3>Cosmo Mapeamento</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Nostrum explicabo consequuntur rerum delectus quis! Natus
                assumenda perferendis itaque modi quam.
              </p>
              <Link href="/works/cosmo-mapeamento">
                <a className="text-anchor">Detalhes do projeto</a>
              </Link>
            </article>

            <article className={styles.project} role="listitem">
              <Link href="/works/aluracord">
                <a>
                  <Image
                    src="/img/aluracord.webp"
                    alt="Print do website Aluracord"
                    width={16}
                    height={9}
                    layout="responsive"
                  />
                </a>
              </Link>
              <h3>Aluracord</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Nostrum explicabo consequuntur rerum delectus quis! Natus
                assumenda perferendis itaque modi quam.
              </p>
              <Link href="/works/aluracord">
                <a className="text-anchor">Detalhes do projeto</a>
              </Link>
            </article>
          </ul>
        </section>

        <section>
          <h2>Contato</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt at
            commodi culpa sit iste. Dolores hic quam impedit quis ullam.
          </p>
          <a className="text-anchor" href="mailto:heitor01101000@gmail.com">
            heitor01101000@gmail.com
          </a>
        </section>
      </main>

      <footer className={styles.footer}>
        <ul className={styles.socialsTexts} aria-label="Redes sociais">
          <li>
            <a
              className="text-anchor"
              href="https://github.com/heitorlisboa"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </li>
          <li>
            <a className="text-anchor" href="" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          </li>
        </ul>
      </footer>
    </>
  );
};

export default Home;