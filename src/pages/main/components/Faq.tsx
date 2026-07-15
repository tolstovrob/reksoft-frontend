import { useState } from 'react';

import styles from './Faq.module.css';

const ITEMS = [
  {
    q: 'Как подать заявку на турнир?',
    a: 'Зарегистрируйтесь на портале, выберите нужный турнир в разделе «Турниры» и нажмите «Подать заявку». Модерация занимает до 24 часов.',
  },
  {
    q: 'Как рассчитывается рейтинг игроков?',
    a: 'Мы используем гибкую ELO-систему с учётом уровня соперников, результата матча и статистики за последний сезон.',
  },
  {
    q: 'Можно ли смотреть трансляции бесплатно?',
    a: 'Да, все трансляции турниров NEXUS ARENA доступны бесплатно и без регистрации.',
  },
  {
    q: 'Как стать партнёром портала?',
    a: 'Напишите нам через форму обратной связи с описанием предложения — команда партнёрств свяжется с вами.',
  },
] as const;

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Частые вопросы</h2>
      <p className={styles.subtitle}>Всё, что нужно знать перед регистрацией</p>
      <div className={styles.list}>
        {ITEMS.map((item, i) => {
          const isOpen = open === i;
          return (
            <div key={i} className={styles.item}>
              <button
                className={styles.head}
                onClick={() => setOpen(isOpen ? null : i)}
                type="button"
                aria-expanded={isOpen}
              >
                <span>{item.q}</span>
                <span className={`${styles.icon} ${isOpen ? styles.iconOpen : ''}`}>+</span>
              </button>
              <div className={`${styles.body} ${isOpen ? styles.bodyOpen : ''}`}>
                <p>{item.a}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
