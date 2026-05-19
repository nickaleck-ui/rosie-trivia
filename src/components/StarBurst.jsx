import styles from './StarBurst.module.css';

export default function StarBurst({ visible, correct }) {
  if (!visible) return null;
  return (
    <div className={styles.wrap}>
      <div className={styles.icon}>{correct ? "⭐" : "💦"}</div>
      <div className={styles.label} style={{ color: correct ? "#FFE033" : "#FF3EA5" }}>
        {correct ? "AWESOME!" : "SLIMED!"}
      </div>
    </div>
  );
}
