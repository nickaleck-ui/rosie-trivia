import styles from './SplashScreen.module.css';

export default function SplashScreen({ curtainOpen, onEnter }) {
  return (
    <div className={styles.wrap}>
      <div className={`${styles.curtainLeft} ${curtainOpen ? styles.open : ''}`} />
      <div className={`${styles.curtainRight} ${curtainOpen ? styles.open : ''}`} />
      <div className={styles.content}>
        <div className={styles.star}>✨</div>
        <h1 className={styles.title}>THE ROSIE<br />O'DONNELL SHOW</h1>
        <p className={styles.sub}>✦ TRIVIA EXTRAVAGANZA ✦</p>
        <button className={styles.btn} onClick={onEnter}>
          🎵&nbsp;&nbsp;Hit it, John!
        </button>
        <p className={styles.hint}>cue the band &amp; start the show</p>
      </div>
    </div>
  );
}
