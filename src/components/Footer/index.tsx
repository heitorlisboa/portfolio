import styles from './Footer.module.scss';

import { Container } from '@/components/Container';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <Container>
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
            <a
              className="text-anchor"
              href="https://www.linkedin.com/in/heitor-lisboa-579b72230/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </li>
        </ul>
      </Container>
    </footer>
  );
}
