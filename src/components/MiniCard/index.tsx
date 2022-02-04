import type { FC } from "react";
import styles from "./MiniCard.module.scss";

const MiniCard: FC = ({ children }) => {
  return <li className={styles.card}>{children}</li>;
};

export default MiniCard;
