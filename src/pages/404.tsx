import Link from 'next/link';

import styles from '@/styles/pages/Error404.module.scss';

export default function Error404Page() {
  return (
    <main className={styles.container}>
      <h1>Erro 404</h1>
      <p>
        Opa! Parece que a página que você está tentando acessar não foi
        encontrada...
      </p>

      <Link href="/" passHref>
        <a className={`${styles.homeLink} text-anchor`}>
          Voltar à página inicial
        </a>
      </Link>
    </main>
  );
}
