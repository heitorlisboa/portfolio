import Image from 'next/image';
import Link from 'next/link';
import type { PropsWithChildren } from 'react';

import styles from './Project.module.scss';

type ProjectProps = PropsWithChildren<{
  title: string;
  pathName: string;
}>;

export function Project({ children, title, pathName }: ProjectProps) {
  const projectUrl = `/works/${pathName}`;

  return (
    <li className={styles.project} role="listitem">
      <Link href={projectUrl} passHref>
        <a className="image-anchor">
          <Image
            src={`/img/${pathName}.webp`}
            alt={`Print do website ${title}`}
            width={16}
            height={9}
            layout="responsive"
          />
        </a>
      </Link>
      <h3>{title}</h3>
      <p>{children}</p>
      <Link href={projectUrl} passHref>
        <a className={`${styles.projectLink} text-anchor`}>
          Detalhes do projeto
        </a>
      </Link>
    </li>
  );
}
