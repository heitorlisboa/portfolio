import styles from './AbilitiesList.module.scss';

import { Tech } from '../Tech';

type AbilitiesListProps = {
  'aria-labelledby': string;
};

export function AbilitiesList({
  'aria-labelledby': ariaLabelledBy,
}: AbilitiesListProps) {
  return (
    <ul className={styles.areasList} aria-labelledby={ariaLabelledBy}>
      <li>
        <h3 id="general-abilities">Geral</h3>
        <ul
          aria-labelledby="general-abilities"
          className={styles.abilitiesList}
        >
          <Tech iconName="js">JavaScript</Tech>
          <Tech iconName="ts">TypeScript</Tech>
          <Tech iconName="jest">Jest</Tech>
        </ul>
      </li>
      <li>
        <h3 id="front-end-abilities">Front-end</h3>
        <ul
          aria-labelledby="front-end-abilities"
          className={styles.abilitiesList}
        >
          <Tech iconName="html">HTML</Tech>
          <Tech iconName="css">CSS</Tech>
          <Tech iconName="sass">Sass</Tech>
          <Tech iconName="react">React</Tech>
          <Tech iconName="nextjs">Next.js</Tech>
        </ul>
      </li>
      <li>
        <h3 id="back-end-abilities">Back-end</h3>
        <ul
          aria-labelledby="back-end-abilities"
          className={styles.abilitiesList}
        >
          <Tech iconName="nodejs">Node.js</Tech>
          <Tech iconName="express">Express</Tech>
          <Tech iconName="postgres">PostgreSQL (e PL/pgSQL)</Tech>
        </ul>
      </li>
      <li>
        <h3 id="devops-abilities">DevOps</h3>
        <ul aria-labelledby="devops-abilities" className={styles.abilitiesList}>
          <Tech iconName="docker">Docker</Tech>
          <Tech iconName="kubernetes">Kubernetes</Tech>
        </ul>
      </li>
    </ul>
  );
}
