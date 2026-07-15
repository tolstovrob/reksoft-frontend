import logo from '../assets/logo.svg';
import profileIcon from '../assets/profile.svg';
import styles from './Header.module.css';

const NAV = ['Игроки', 'Команды', 'Турниры', 'Игры', 'Новости', 'Трансляции'];

export function Header() {
  return (
    <header className={styles.header}>
      <a href="#" className={styles.logoBlock}>
        <div className={styles.logoIcon}>
          <img src={logo} alt="logo" width="24" height="24" />
        </div>
        <div className={styles.logoText}>
          <span>NEXUS</span>
          <span>ARENA</span>
        </div>
      </a>
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
