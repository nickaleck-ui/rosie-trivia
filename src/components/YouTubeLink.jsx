import styles from './YouTubeLink.module.css';

export default function YouTubeLink({ videoId, label }) {
  if (!videoId) return null;

  return (
    <div className={styles.wrap}>
      <a
        href={`https://www.youtube.com/watch?v=${videoId}`}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.btn}
      >
        <span className={styles.play}>▶</span>
        <span className={styles.label}>{label}</span>
        <span className={styles.ext}>opens YouTube ↗</span>
      </a>
    </div>
  );
}
