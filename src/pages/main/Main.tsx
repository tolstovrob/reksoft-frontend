import { Faq } from './components/Faq';
import { Features } from './components/Features';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { JoinForm } from './components/JoinForm';
import { News } from './components/News';
import styles from './Main.module.css';

export function MainPage() {
  return (
    <div className={styles.page}>
      <div className={styles.glow1} />
      <div className={styles.glow2} />
      <div className={styles.glow3} />
      <Header />
      <main className={styles.main}>
        <Hero />
        <Features />
        <News />
        <Faq />
        <JoinForm />
      </main>
      <Footer />
    </div>
  );
}
