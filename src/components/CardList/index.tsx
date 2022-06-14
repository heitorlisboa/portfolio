import type { HTMLProps } from 'react';

import styles from './CardList.module.scss';

type CardListProps = HTMLProps<HTMLUListElement>;

export function CardList({ children, ...otherProps }: CardListProps) {
  return (
    <ul className={styles.list} {...otherProps}>
      {children}
    </ul>
  );
}
