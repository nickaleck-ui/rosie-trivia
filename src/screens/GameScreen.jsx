import SlimeDrops from '../components/SlimeDrops';
import StarBurst from '../components/StarBurst';
import YouTubeLink from '../components/YouTubeLink';
import styles from './GameScreen.module.css';

const LETTERS = ["A", "B", "C", "D"];

export default function GameScreen({ question, qIndex, totalQ, score, selected, showFact, burst, onAnswer, onNext }) {
  const progress = ((qIndex + 1) / totalQ) * 100;

  return (
    <div className={styles.card}>
      {/* Header */}
      <div className={styles.head}>
        <SlimeDrops />
        <div className={styles.logo}>💜 The Rosie Show</div>
        <div className={styles.logoSub}>TRIVIA EXTRAVAGANZA</div>
        <div className={styles.scorePill}>⭐ {score}/{totalQ}</div>
      </div>

      {/* Body */}
      <div className={styles.body}>
        <StarBurst visible={burst.visible} correct={burst.correct} />

        {/* Progress */}
        <div className={styles.progLabel}>Question {qIndex + 1} of {totalQ}</div>
        <div className={styles.progTrack}>
          <div className={styles.progFill} style={{ width: `${progress}%` }} />
        </div>

        {/* Question */}
        <div className={styles.qNum}>Q{qIndex + 1} — Can you handle this?</div>
        <div className={styles.qText}>{question.q}</div>

        {/* Choices */}
        <div className={styles.choices}>
          {question.choices.map((c, i) => {
            let cls = styles.choice;
            if (selected !== null) {
              if (i === question.answer) cls = `${styles.choice} ${styles.correct}`;
              else if (i === selected)  cls = `${styles.choice} ${styles.wrong}`;
              else                      cls = `${styles.choice} ${styles.dim}`;
            }
            return (
              <button key={i} className={cls} onClick={() => onAnswer(i)} disabled={selected !== null}>
                <span className={styles.letter}>{LETTERS[i]}</span>
                <span>{c}</span>
              </button>
            );
          })}
        </div>

        {/* Fact + clip */}
        {showFact && (
          <div>
            <div className={styles.factBox}>
              <div className={styles.factLabel}>🎭 ROSIE SAYS —</div>
              {question.fact}
            </div>
            <YouTubeLink videoId={question.youtubeId} label={question.clipLabel} />
          </div>
        )}

        {/* Next button */}
        {selected !== null && (
          <button className={styles.btnNext} onClick={onNext}>
            {qIndex + 1 >= totalQ ? "See My Score! 🎉" : "Next Question →"}
          </button>
        )}
      </div>
    </div>
  );
}
