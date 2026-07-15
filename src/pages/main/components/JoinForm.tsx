import { SyntheticEvent, useState } from 'react';

import dpad from '../assets/dpad.png';
import trophy from '../assets/trophy.png';
import styles from './JoinForm.module.css';

export function JoinForm() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', game: '' });

  const submit = (e: SyntheticEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <section className={styles.section}>
      <img src={dpad} alt="" aria-hidden className={styles.dpad} />
      <img src={trophy} alt="" aria-hidden className={styles.trophy} />

      <h2 className={styles.title}>
        Присоединяйся к <span className={styles.brand}>NEXUS ARENA</span>
      </h2>
      <p className={styles.subtitle}>
        Регистрируй команду, подавай заявки на турниры и отслеживай свой рейтинг в реальном времени.
        <br />
        Ответим на вашу заявку в течение 24 часов
      </p>

      <form className={styles.form} onSubmit={submit}>
        <label className={styles.field}>
          <span>Имя</span>
          <input
            type="text"
            placeholder="ShadowFox"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            required
          />
        </label>
        <label className={styles.field}>
          <span>Email</span>
          <input
            type="email"
            placeholder="you@example.ru"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            required
          />
        </label>
        <label className={styles.field}>
          <span>Игра</span>
          <input
            type="text"
            placeholder="CS2"
            value={form.game}
            onChange={(e) => setForm({ ...form, game: e.target.value })}
            required
          />
        </label>
        <button type="submit" className={styles.submit}>
          {sent ? 'Заявка отправлена!' : 'Отправить заявку'}
        </button>
      </form>
    </section>
  );
}
