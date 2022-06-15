import type { PropsWithChildren } from 'react';

import styles from './TechList.module.scss';

type TechListProps = PropsWithChildren<{
  'aria-labelledby': string;
}>;

export function TechList({
  children,
  'aria-labelledby': ariaLabelledBy,
}: TechListProps) {
  return (
    <ul className={styles.list} aria-labelledby={ariaLabelledBy}>
      {children}
    </ul>
  );
}
