import heroImg from '../assets/hero-gamers.jpg';
import styles from './Hero.module.css';

export function Hero() {
  return (
    <section className={styles.hero}>
      <label className={styles.searchBar}>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="11" cy="11" r="7" />
          <path d="m20 20-3.5-3.5" />
        </svg>
        <input placeholder="Поиск турниров, игроков..." />
      </label>

      <div className={styles.grid}>
        <div className={styles.copy}>
          <h1 className={styles.title}>
            ГЛАВНАЯ АРЕНА
            <br />
            <span className={styles.titleAccent}>КИБЕРСПОРТА</span>
          </h1>
          <p className={styles.subtitle}>
            Турниры, рейтинги, статистика игроков и команд, в одном месте.
            <br />
            Следи за матчами и подавай заявки на участие уже сегодня.
          </p>
          <button className={styles.cta} type="button">
            Участвовать
          </button>
        </div>
        <div className={styles.mediaWrap}>
          <img
            src={heroImg}
            alt="Киберспортивная арена"
            className={styles.media}
            width={1200}
            height={720}
          />
        </div>
      </div>
    </section>
  );
}
