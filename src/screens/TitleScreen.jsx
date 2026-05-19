import Splat from '../components/Splat';
import SlimeDrops from '../components/SlimeDrops';
import styles from './TitleScreen.module.css';

export default function TitleScreen({ onStart }) {
  return (
    <div className={styles.card}>
      <div className={styles.stripe} />
      <SlimeDrops />
      <Splat style={{ position: "absolute", top: 14, right: 14, zIndex: 0 }} size={75} color="#FF3EA5" opacity={0.8} seed={5} />

      <div className={styles.koosh}>🟣</div>
      <h1 className={styles.title}>THE ROSIE SHOW</h1>
      <p className={styles.sub}>✨ TRIVIA EXTRAVAGANZA ✨</p>
      <p className={styles.desc}>
        Think you know your Koosh balls from your Broadway belters?<br />
        Test your knowledge of the Queen of Nice — 1996 to 2002!
      </p>
      <div className={styles.pinkBar}>
        🎭 20 iconic questions &bull; 12 per game &bull; Pink slime for wrong answers!
      </div>
      <div className={styles.ytNote}>
        <span className={styles.ytIcon}>▶</span>
        <span>7 questions unlock real YouTube clips from the show — watch after you answer!</span>
      </div>
      <button className={styles.btn} onClick={onStart}>
        LET&apos;S PLAY! 💜
      </button>
      <p className={styles.footer}>No Koosh balls were harmed in the making of this game.</p>
    </div>
  );
}
