import Head from 'next/head';
import Image from 'next/image';

import styles from '@/styles/pages/Home.module.scss';

import { Container } from '@/components/Container';
import { AbilitiesList } from '@/components/AbilitiesList';
import { Project } from '@/components/Project';
import { Footer } from '@/components/Footer';

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Heitor Lisboa - Desenvolvedor Front End</title>
      </Head>

      <header className={styles.header}>
        <Container>
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
                  src="/icons/github-icon.svg"
                  alt="GitHub"
                  width={50}
                  height={50}
                  layout="responsive"
                />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/heitor-lisboa/"
                target="_blank"
                rel="noreferrer"
              >
                <Image
                  src="/icons/linkedin-icon.svg"
                  alt="LinkedIn"
                  width={50}
                  height={50}
                  layout="responsive"
                />
              </a>
            </li>
          </ul>
        </Container>
      </header>

      <main id="main-content">
        <Container>
          <div className={styles.hero}>
            <h1 className={styles.heroTitle}>
              Olá, sou Heitor Lisboa! Desenvolvedor Front End e estudante de
              Engenharia de Software.
            </h1>
            <div className={styles.heroImageContainer}>
              <Image
                src="/img/hero-image.webp"
                alt="Heitor sorrindo"
                layout="responsive"
                width={200}
                height={200}
                priority
              />
            </div>
          </div>
          <section>
            <h2>Sobre mim</h2>
            <p>
              Opa, e aí? Meu nome é Heitor. Sou um jovem apaixonado por
              tecnologia e que adora construir coisas através do código.
            </p>
            <p>
              Desde os meus 3 aninhos de idade eu já gostava muito de mexer no
              computador e navegar pela internet procurando coisas pra fazer.
              Desde então, por crescer ao lado do mundo da computação, passei a
              nutrir uma paixão cada vez maior por ele, até o ponto que, aos
              meus 14 anos, parei de simplesmente olhar para aquele mar profundo
              da tecnologia e resolvi molhar um pouco o pé.
            </p>
            <p>
              Comecei aprendendo Python. No início foi agradável, mas ao mesmo
              tempo assustador: era uma linguagem simples de se entender, porém
              quanto mais eu aprendia, mais eu percebia o quanto havia para
              aprender. Assim, essa experiência acabou durando poucos meses.
            </p>
            <p>
              Entretanto, ao passar dos anos, não saía da minha cabeça o
              pensamento de querer me aventurar e não sair mais desse mundo. Foi
              então que, aos meus 17 anos, eu tomei uma decisão: mergulhar de
              ponta no universo da tecnologia. A partir daí eu não parei mais,
              voltei a estudar Python, estudei Django, HTML, CSS, Javascript,
              React etc.
            </p>
            <p>
              E hoje aqui estou, focando meus estudos em back-end com Node.js e
              em front-end com React. Além disso, estou sempre mantendo uma
              aplicação em desenvolvimento!
            </p>
          </section>

          <section>
            <h2 id="abilities-title">Habilidades</h2>
            <AbilitiesList aria-labelledby="abilities-title" />
          </section>

          <section>
            <h2 id="projects-title">Meus projetos</h2>
            <ul className={styles.projectList} aria-labelledby="projects-title">
              <Project title="Cosmo Mapeamento" pathName="cosmo-mapeamento">
                Reconstrução responsíva e acessível do website Cosmo Mapeamento
              </Project>
              <Project title="Aluracord" pathName="aluracord">
                Chat em tempo real inspirado no Discord feito durante a Imersão
                React 2022 da Alura <strong>(projeto original)</strong>
              </Project>
            </ul>
          </section>

          <section>
            <h2>Contato</h2>
            <p>
              A fim de construir algo juntos? Sinta-se livre pra me contatar se
              estiver procurando um desenvolvedor ou simplesmente quiser
              conectar!
            </p>
            <a
              className={`${styles.emailLink} text-anchor`}
              href="mailto:heitorcareer@gmail.com"
            >
              heitorcareer@gmail.com
            </a>
          </section>
        </Container>
      </main>

      <Footer />
    </>
  );
}
