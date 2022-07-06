import styles from './header.module.css';

import rocketSVG from '../../assets/rocket.svg';

export function Header() {
  return (
    <header className={styles.header}>
      <div>
        <img src={rocketSVG} alt="Rocket Icon" />
        <strong className={styles['first']}>To</strong>
        <strong className={styles['last']}>DO</strong>
      </div>
    </header>
  );
}
