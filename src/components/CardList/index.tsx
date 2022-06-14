import type { FC, HTMLProps } from 'react';

import styles from './CardList.module.scss';

const CardList: FC<HTMLProps<HTMLUListElement>> = ({
  children,
  ...otherProps
}) => {
  return (
    <ul className={styles.list} {...otherProps}>
      {children}
    </ul>
  );
};

export default CardList;
