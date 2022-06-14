import type { NextPage } from 'next';
import styles from '../../styles/pages/Works.module.scss';

import Head from 'next/head';
import Container from '../../components/Container';
import CardList from '../../components/CardList';
import Footer from '../../components/Footer';

const CosmoMapeamento: NextPage = () => {
  return (
    <>
      <Head>
        <title>Heitor Lisboa - Cosmo Mapeamento</title>
      </Head>

      <main>
        <Container>
          <h1>Cosmo Mapeamento</h1>
          <p className={styles.projectDescription}>
            Esse projeto consiste na reconstrução de um website previamente
            existente &ndash; o Cosmo Mapeamento &ndash; mas com um front-end
            feito totalmente do zero e de maneira responsiva e acessível,
            inicialmente utilizando apenas React, mas depois migrado para o
            framework Next.js
          </p>
          {/* <p>
            Design original por{" "}
            <a
              href="#"
              target="_blank"
              rel="noreferrer"
              className="text-anchor"
            >
              NOME DO DESIGNER
            </a>
          </p> */}
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
                href="https://cosmo-mapeamento.vercel.app"
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
              <li>Navegação lateral com reconhecimento de rolagem</li>
              <li>Modal de imagens com carrossel</li>
            </ul>
          </section>

          <section>
            <h2 id="technologies">Tecnologias utilizadas</h2>
            <CardList aria-labelledby="technologies">
              <li>React &amp; Next.js</li>
              <li>Typescript</li>
              <li>Sass &amp; CSS Modules</li>
            </CardList>
          </section>

          <section>
            <h2>Propósito do projeto</h2>
            <p>
              O objetivo inicial ao reconstruir o website da Cosmo Mapeamento
              era servir como um estudo prático, focando especialmente no que
              faltava no site original, que era acessibilidade, responsividade e
              performance.
            </p>
            <figure>
              <video className={styles.video} controls>
                <source
                  src="/videos/cosmo-mapeamento/website-original.webm"
                  type="video/webm"
                />
                <source
                  src="/videos/cosmo-mapeamento/website-original.m4v"
                  type="video/mp4"
                />
              </video>
              <figcaption>
                Website original em um computador com tela menor
              </figcaption>
            </figure>
            <p>
              Entretanto, após a minha versão da página chegar a um estágio em
              que estava quase totalmente pronta, eu a apresentei para o dono do
              website original e CEO da Cosmo Mapeamento, e assim surgiu a
              possibilidade da minha produção se tornar o site oficial de sua
              empresa.
            </p>
            <p>
              A partir daí, passei a ter mais um propósito, criando a
              necessidade de tornar a página ainda mais performática e fazer uma
              melhora no SEO. Foi então que eu decidi migrar minha aplicação
              feita apenas com React, para o framework Next.js, que apresenta a
              funcionalidade de pré-renderizar as páginas para HTML estático,
              tornando mais fácil para estas serem encontradas por mecanismos de
              busca, além de tornar a aplicação como um todo mais leve.
            </p>
          </section>

          <section>
            <h2>Destaques</h2>

            <article>
              <h3>Navegação lateral</h3>
              <p>
                A navegação lateral possui sistema de reconhecimento de rolagem
                (scroll), que faz com que, quando o usuário esteja em uma
                determinada seção da página, o item da navegação correspondente
                ficará ativo. Isso parece algo fácil de fazer, certo? Na teoria
                sim, mas na prática a implementação tornou-se bem mais complexa,
                apesar de que no fim o resultado foi bem simples.
              </p>
              <p>
                A ideia era criar um componente React que recebesse um número
                indefinido de seções da página, e criasse um item da navegação
                para cada uma delas, contendo um link para redirecionar o
                usuário à seção referente e que também reagisse quando a tela
                estivesse naquela seção.
              </p>
              <p>
                Para isso, criei um hook (gancho) que ficasse responsável por um
                observador que alertaria quando uma seção passasse pelo centro
                da tela. Assim, só restava passar para esse hook o que eu queria
                que acontecesse quando algo entrasse ou saísse do centro da
                tela, e quais elementos seriam observados.
              </p>
              <p>
                Então, eu utilizei uma função do próprio React para criar uma
                referência para cada seção recebida pelo componente e as
                associei aos itens da navegação e às próprias seções. Dessa
                forma, foi possível acessar diretamente os itens da navegação
                para definir um comportamento pra eles no observador, e informar
                quais elementos deveriam ser observados.
              </p>
              <figure>
                <video className={styles.video} controls>
                  <source
                    src="/videos/cosmo-mapeamento/navegacao-lateral.webm"
                    type="video/webm"
                  />
                  <source
                    src="/videos/cosmo-mapeamento/navegacao-lateral.m4v"
                    type="video/mp4"
                  />
                </video>
                <figcaption>
                  Demonstração da navegação lateral (preste atenção no canto
                  direito do vídeo)
                </figcaption>
              </figure>
              <p>
                Apesar de parecer que eu cheguei nessa solução num estalar de
                dedos, houve muitos acertos e erros até chegar nela, sendo essa
                a terceira e melhor solução que consegui encontrar para criar
                essa funcionalidade.
              </p>
            </article>

            <article>
              <h3>Modal com carrossel</h3>
              <p>
                As imagens presentes na seção de portfólio do website podem ser
                clicadas para abrir um modal, que inclui também um carrossel de
                todas as imagens do portfólio.
              </p>
              <p>
                Para fazer essa funcionalidade, eu criei um componente React
                para ser responsável pelo modal com carrossel, podendo receber
                um número indefinido de imagens. Para que o carrossel pudesse
                funcionar junto com o modal, eu fiz com que, ao abrir o modal,
                todas as imagens fossem listadas, mas apenas uma ficasse em
                foco.
              </p>
              <p>
                Isso foi feito através de uma barra de rolagem horizontal
                escondida, que é redirecionada para a imagem que o usuário
                clicar. Com isso, pude aproveitar essa mesma barra de rolagem
                para montar o carrossel em si.
              </p>
              <p>
                Para fazer o funcionamento em dispositivos móveis, eu utilizei
                um encaixe de rolagem. Assim, ao arrastar uma imagem para o lado
                &ndash; movendo a rolagem &ndash; a imagem já se encaixaria
                automaticamente.
              </p>

              <figure>
                <video className={styles.video} controls>
                  <source
                    src="/videos/cosmo-mapeamento/modal-carrossel-mobile.m4v"
                    type="video/mp4"
                  />
                  <source
                    src="/videos/cosmo-mapeamento/modal-carrossel-mobile.webm"
                    type="video/webm"
                  />
                </video>
                <figcaption>
                  Demonstração do modal com carrossel em um dispositivo móvel
                </figcaption>
              </figure>

              <p>
                Já para computadores, não seria intuitivo utilizar a rolagem
                manualmente, então adicionei botões na tela que poderiam ser
                clicados para mover exatamente a distância entre uma imagem e
                outra.
              </p>
              <p>
                Além disso, fiz com que, caso o usuário clicasse para ir à
                imagem anterior quando estivesse na primeira imagem, o carrossel
                seria redirecionado para a última imagem, e vice-versa.
              </p>

              <figure>
                <video className={styles.video} controls>
                  <source
                    src="/videos/cosmo-mapeamento/modal-carrossel-desktop.m4v"
                    type="video/mp4"
                  />
                  <source
                    src="/videos/cosmo-mapeamento/modal-carrossel-desktop.webm"
                    type="video/webm"
                  />
                </video>
                <figcaption>
                  Demonstração do modal com carrossel em um computador
                </figcaption>
              </figure>

              <p>
                Entretanto, como eu estava guardando o estado de qual imagem
                estava sendo exibida para fazer isso funcionar, e somente ao
                abrir o modal ou ao clicar nos botões do carrossel esse estado
                era alterado, o usuário poderia fazer um scroll manual que não
                estaria sincronizado com os botões. Então eu fiz com que, se a
                rolagem estivesse exatamente na posição de alguma das imagens,
                esse estado também seria alterado.
              </p>
            </article>
          </section>

          <section>
            <h2>Lições aprendidas</h2>
            <p>
              Algo que é fato é que esse projeto me serviu para aprender
              inúmeras coisas. Aprendi especialmente sobre arquitetura de
              projetos front-end (ter que decidir como organizar o projeto e
              separar as responsabilidades foi uma ótima experiência), sobre
              responsividade (principalmente na hora de fazer designs mobile e
              desktop que diferem muito um do outro, e ao ter que adaptar o
              design a todo tipo de tamanho de tela), e acessibilidade (tendo
              que testar a página navegando por ela usando o teclado e um leitor
              de tela).
            </p>
            <p>
              Além disso, também pude aprender bastante sobre o framework
              Next.js e sobre a biblioteca React, principalmente da parte de
              criação de componentes reutilizáveis e da criação de hooks que
              isolassem um comportamento para maior reusabilidade.
            </p>
          </section>
        </Container>
      </main>

      <Footer />
    </>
  );
};

export default CosmoMapeamento;
