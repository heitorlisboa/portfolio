import Head from "next/head";
import type { AppProps } from "next/app";

import "../src/styles/global/index.scss";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="Olá, sou Heitor Lisboa! Desenvolvedor Front End e
          estudante de Engenharia de Software."
        />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="shortcut icon" href="favicon.png" type="image/png" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
