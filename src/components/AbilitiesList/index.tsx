import styles from './AbilitiesList.module.scss';

import { Ability } from './Ability';

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
          <Ability iconName="js">JavaScript</Ability>
          <Ability iconName="ts">TypeScript</Ability>
          <Ability iconName="jest">Jest</Ability>
        </ul>
      </li>
      <li>
        <h3 id="front-end-abilities">Front-end</h3>
        <ul
          aria-labelledby="front-end-abilities"
          className={styles.abilitiesList}
        >
          <Ability iconName="html">HTML</Ability>
          <Ability iconName="css">CSS</Ability>
          <Ability iconName="sass">Sass</Ability>
          <Ability iconName="react">React</Ability>
          <Ability iconName="nextjs">Next.js</Ability>
        </ul>
      </li>
      <li>
        <h3 id="back-end-abilities">Back-end</h3>
        <ul
          aria-labelledby="back-end-abilities"
          className={styles.abilitiesList}
        >
          <Ability iconName="nodejs">Node.js</Ability>
          <Ability iconName="express">Express</Ability>
        </ul>
      </li>
      <li>
        <h3 id="devops-abilities">DevOps</h3>
        <ul aria-labelledby="devops-abilities" className={styles.abilitiesList}>
          <Ability iconName="docker">Docker</Ability>
          <Ability iconName="kubernetes">Kubernetes</Ability>
        </ul>
      </li>
    </ul>
  );
}
