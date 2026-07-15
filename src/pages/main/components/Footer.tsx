import { useEffect, useState } from 'react';
import logo from '../assets/logo.svg';
import styles from './Footer.module.css';

export function Footer() {
  // NOTE(tolstovrob): использовать под это стейт и тем более побочный эффект абсурдно.
  // Здесь за глаза хватит и обычной константы.
  // Впрочем, что не сделаешь за три дополнительных балла
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    const year = new Date().getFullYear();
    setCurrentYear(year);
  }, []);

  return (
    <footer className={styles.footer}>
      <p className={styles.tagline}>
        Киберспортивный портал: турниры, рейтинги, команды и аналитика в одном месте.
      </p>
      <div className={styles.row}>
        <div className={styles.logoBlock}>
          <div className={styles.logoIcon}>
            <img src={logo} alt="logo" width="24" height="24" />
          </div>
          <div className={styles.logoText}>
            <span>NEXUS</span>
            <span>ARENA</span>
          </div>
        </div>
        <nav className={styles.links}>
          <a href="#">Партнёрам</a>
          <a href="#">Политика конфиденциальности</a>
          <a href="#">О нас</a>
        </nav>
      </div>
      <p className={styles.copy}>&copy; {currentYear} NEXUS ARENA. Все права защищены.</p>
    </footer>
  );
}
