import controller from '../assets/controller.png';
import styles from './Features.module.css';

const ITEMS = [
  {
    n: '01',
    title: 'АКТУАЛЬНЫЕ ТУРНИРЫ',
    text: 'Более 400 еженедельных турниров в дисциплинах с прямыми трансляциями и живым счётом.',
  },
  {
    n: '02',
    title: 'ТОЧНЫЕ РЕЙТИНГИ',
    text: 'Гибкая ELO-система оценки игроков и команд с историей изменений и графиками.',
  },
  {
    n: '03',
    title: 'ЭКСПЕРТНАЯ АНАЛИТИКА',
    text: 'Разборы матчей от профессиональных аналитиков и комментаторов команд в реальном времени.',
  },
];

export function Features() {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>
        Почему <span className={styles.brand}>NEXUS ARENA</span>
      </h2>
      <p className={styles.subtitle}>
        Всё, что нужно для участия и наблюдения за киберспортом — в одном портале
      </p>
      <div className={styles.grid}>
        {ITEMS.map((item) => (
          <article key={item.n} className={styles.card}>
            <div className={styles.num}>{item.n}</div>
            <h3 className={styles.cardTitle}>{item.title}</h3>
            <p className={styles.cardText}>{item.text}</p>
          </article>
        ))}
      </div>
      <img src={controller} alt="" className={styles.controller} aria-hidden />
    </section>
  );
}
