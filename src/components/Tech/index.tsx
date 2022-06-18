import Image from 'next/image';
import type { PropsWithChildren } from 'react';

import styles from './Tech.module.scss';

type TechProps = PropsWithChildren<{
  iconName: string;
}>;

export function Tech({ children, iconName }: TechProps) {
  return (
    <li className={styles.tech}>
      <Image
        src={`/icons/techs/${iconName}-icon.svg`}
        alt=""
        width={24}
        height={24}
        layout="fixed"
      />
      <span>{children}</span>
    </li>
  );
}
