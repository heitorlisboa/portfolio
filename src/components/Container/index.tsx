import type { PropsWithChildren } from 'react';

import styles from './Container.module.scss';

type ContainerProps = PropsWithChildren<{}>;

export function Container({ children }: ContainerProps) {
  return <div className={styles.container}>{children}</div>;
}
