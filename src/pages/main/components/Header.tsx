import profileIcon from '../assets/profile.svg';
import styles from './Header.module.css';

const NAV = ['Игроки', 'Команды', 'Турниры', 'Игры', 'Новости', 'Трансляции'];

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logoBlock}>
        <div className={styles.logoIcon}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M3 20h18l-2-9-4 3-3-8-3 8-4-3-2 9z" />
          </svg>
        </div>
        <div className={styles.logoText}>
          <span>NEXUS</span>
          <span>ARENA</span>
        </div>
      </div>
      <nav className={styles.nav}>
        {NAV.map((item) => (
          <a key={item} href="#" className={styles.navLink}>
            {item}
          </a>
        ))}
      </nav>
      <button className={styles.loginBtn} type="button">
        <img src={profileIcon} className={styles.avatar} />
        Войти
      </button>
    </header>
  );
}
