import styles from './Footer.module.css';

export function Footer() {
  const currentYear = new Date().getFullYear();
  // NOTE(tolstovrob): использовать под это стейт абсурдно. Здесь за глаза хватит и обычной константы

  return (
    <footer className={styles.footer}>
      <p className={styles.tagline}>
        Киберспортивный портал: турниры, рейтинги, команды и аналитика в одном месте.
      </p>
      <div className={styles.row}>
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
        <nav className={styles.links}>
          <a href="#">Партнёрам</a>
          <a href="#">Политика конфиденциальности</a>
          <a href="#">О нас</a>
        </nav>
      </div>
      <p className={styles.copy}>© {currentYear} NEXUS ARENA. Все права защищены.</p>
    </footer>
  );
}
