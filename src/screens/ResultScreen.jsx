import SlimeDrops from '../components/SlimeDrops';
import styles from './ResultScreen.module.css';

function getVerdict(pct) {
  if (pct >= 90) return { text: "You're the Queen of Nice! 👑", color: "#9B30FF" };
  if (pct >= 70) return { text: "Rosie would mow your lawn! 🍋", color: "#FF3EA5" };
  if (pct >= 50) return { text: "Not bad — but no Koosh ball for you!", color: "#C89000" };
  return { text: "Slimed! Time to rewatch the classics 💗", color: "#FF3EA5" };
}

export default function ResultScreen({ score, totalQ, onPlayAgain }) {
  const pct = totalQ > 0 ? Math.round((score / totalQ) * 100) : 0;
  const verdict = getVerdict(pct);

  return (
    <div className={styles.card}>
      <div className={styles.head}>
        <SlimeDrops />
        <div className={styles.logo}>💜 Game Over, Honey!</div>
        <div className={styles.logoSub}>HERE&apos;S YOUR FINAL SCORE</div>
      </div>

      <div className={styles.body}>
        <div className={styles.scoreCircle}>
          <div className={styles.scoreBig}>{score}</div>
          <div className={styles.scoreDenom}>out of {totalQ}</div>
        </div>

        <div className={styles.verdict} style={{ color: verdict.color }}>
          {verdict.text}
        </div>

        <div className={styles.barTrack}>
          <div className={styles.barFill} style={{ width: `${pct}%` }} />
        </div>
        <div className={styles.pctLabel}>{pct}% correct</div>

        <div className={styles.funFact}>
          🎭 Fun fact: Rosie eventually added automated ceiling Koosh launchers AND
          a handheld Koosh cannon — across all 1,991 episodes!
        </div>

        <p className={styles.ytLink}>
          Watch more on Rosie&apos;s official channel →{" "}
          <a href="https://www.youtube.com/@Rosie" target="_blank" rel="noopener noreferrer">
            youtube.com/@Rosie
          </a>
        </p>

        <button className={styles.btn} onClick={onPlayAgain}>
          PLAY AGAIN! 💜
        </button>
      </div>
    </div>
  );
}
