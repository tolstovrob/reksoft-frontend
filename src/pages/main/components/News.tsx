import { useState } from 'react';

import gameOn from '../assets/game-on.png';
import news1 from '../assets/news1.jpg';
import news2 from '../assets/news2.jpg';
import news3 from '../assets/news3.jpg';
import styles from './News.module.css';

const ITEMS = [
  {
    img: news1,
    title: 'Гостями финалов Чемпионата Москвы по компьютерному спорту стали 6,5 тысяч человек',
  },
  {
    img: news2,
    title:
      'Московский кластер видеоигр и анимации за полгода работы принял 119 заявок на резидентство',
  },
  {
    img: news3,
    title:
      'На чемпионский трофей Esports World Cup 2026 по Dota 2 нанесена надпись на русском языке',
  },
];

export function News() {
  const [index, setIndex] = useState(0);
  const max = ITEMS.length;

  const prev = () => setIndex((i) => (i - 1 + max) % max);
  const next = () => setIndex((i) => (i + 1) % max);

  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Свежие новости</h2>
      <div className={styles.carousel}>
        <button className={styles.arrow} onClick={prev} aria-label="Назад" type="button">
          «
        </button>
        <div className={styles.track}>
          {ITEMS.map((item, i) => (
            <article key={i} className={`${styles.card} ${i === index ? styles.cardActive : ''}`}>
              <img src={item.img} alt="" className={styles.img} loading="lazy" />
              <div className={styles.overlay} />
              <h3 className={styles.cardTitle}>{item.title}</h3>
            </article>
          ))}
        </div>
        <button className={styles.arrow} onClick={next} aria-label="Далее" type="button">
          »
        </button>
      </div>

      <img src={gameOn} alt="GAME ON" className={styles.gameOn} loading="lazy" />
    </section>
  );
}
