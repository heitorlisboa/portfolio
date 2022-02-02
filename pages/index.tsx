import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Heitor Lisboa - Desenvolvedor Front End</title>
      </Head>

      <header>
        <a href="#main-content">
          Pular para o conteúdo
        </a>
        <ul aria-label="Redes sociais">
          <li>
            <a href="https://github.com/heitorlisboa">
              {/* <Image src="/svg/github-icon.svg" alt="GitHub" layout="fill" /> */}
            </a>
          </li>
          <li>
            <a href="">
              {/* <Image
                src="/svg/linkedin-icon.svg"
                alt="LinkedIn"
                layout="fill"
              /> */}
            </a>
          </li>
        </ul>
      </header>

      <main id="main-content">
        <h1>
          <span>Olá, sou Heitor Lisboa!</span>
          <span>Um desenvolvedor Front End</span>
          <span>e estudante de Engenharia de Software.</span>
        </h1>
        {/* <Image
          src="/img/landing-image.webp"
          alt="Heitor sorrindo"
          layout="fill"
        /> */}

        <section>
          <h2>Sobre mim</h2>
        </section>

        <section>
          <h2 id="abilities-title">Habilidades</h2>
          <ul aria-labelledby="abilities-title">
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
          <ul aria-labelledby="projects-title">
            <article role="listitem">
              {/* <Image
                src="/img/cosmo-mapeamento"
                alt="Print do website Cosmo Mapeamento"
                layout="fill"
              /> */}
              <h3>Cosmo Mapeamento</h3>
              <p></p>
              <Link href="/works/cosmo-mapeamento">
                <a>Detalhes do projeto</a>
              </Link>
            </article>

            <article role="listitem">
              {/* <Image
                src="/img/aluracord"
                alt="Print do website Aluracord"
                layout="fill"
              /> */}
              <h3>Aluracord</h3>
              <p></p>
              <Link href="/works/aluracord">
                <a>Detalhes do projeto</a>
              </Link>
            </article>
          </ul>
        </section>

        <section>
          <h2>Contato</h2>
          <p></p>
          <a href="mailto:heitor01101000@gmail.com">heitor01101000@gmail.com</a>
        </section>
      </main>

      <footer>
        <ul aria-label="Redes sociais">
          <li>
            <a href="https://github.com/heitorlisboa">GitHub</a>
          </li>
          <li>
            <a href="">LinkedIn</a>
          </li>
        </ul>
      </footer>
    </>
  );
};

export default Home;
