import Image from 'next/image';
import type { PropsWithChildren } from 'react';

type AbilityProps = PropsWithChildren<{
  iconName: string;
}>;

export function Ability({ children, iconName }: AbilityProps) {
  return (
    <li>
      <Image
        src={`/icons/techs/${iconName}-icon.svg`}
        alt=""
        width={25}
        height={25}
        layout="fixed"
      />
      <span>{children}</span>
    </li>
  );
}
