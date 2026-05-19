import { THEME_VIDEO_ID } from '../data/questions';
import styles from './ThemePlayer.module.css';

export default function ThemePlayer({ playing }) {
  if (!playing) return null;

  return (
    <a
      href={`https://www.youtube.com/watch?v=${THEME_VIDEO_ID}`}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.pill}
      title="Open theme song on YouTube"
    >
      <span className={styles.note}>🎵</span>
      <span className={styles.text}>
        <span className={styles.label}>Theme song</span>
        <span className={styles.sub}>▶ open on YouTube</span>
      </span>
    </a>
  );
}
