import styles from './SlimeDrops.module.css';

const DROPS = [8, 20, 33, 47, 60, 74, 88];

export default function SlimeDrops() {
  return (
    <div className={styles.wrap}>
      {DROPS.map((left, i) => (
        <div
          key={i}
          className={styles.drop}
          style={{
            left: `${left}%`,
            width: `${13 + (i % 3) * 5}px`,
            animationDuration: `${1.4 + i * 0.28}s`,
          }}
        />
      ))}
    </div>
  );
}
