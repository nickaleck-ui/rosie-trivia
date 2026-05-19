import { useState, useEffect } from 'react';
import { QUESTIONS, QUESTIONS_PER_GAME } from './data/questions';
import CurtainBackdrop from './components/CurtainBackdrop';
import Splat from './components/Splat';
import ThemePlayer from './components/ThemePlayer';
import SplashScreen from './screens/SplashScreen';
import TitleScreen from './screens/TitleScreen';
import GameScreen from './screens/GameScreen';
import ResultScreen from './screens/ResultScreen';
import styles from './App.module.css';

function shuffle(arr) {
  return [...arr].sort(() => Math.random() - 0.5);
}

export default function App() {
  // screen: "splash" | "title" | "game" | "result"
  const [screen, setScreen] = useState('splash');
  const [curtainOpen, setCurtainOpen] = useState(false);
  const [themePlaying, setThemePlaying] = useState(false);

  const [shuffled, setShuffled] = useState([]);
  const [qIndex, setQIndex] = useState(0);
  const [selected, setSelected] = useState(null);
  const [score, setScore] = useState(0);
  const [showFact, setShowFact] = useState(false);
  const [burst, setBurst] = useState({ visible: false, correct: false });

  // Pre-shuffle on mount
  useEffect(() => {
    setShuffled(shuffle(QUESTIONS).slice(0, QUESTIONS_PER_GAME));
  }, []);

  function handleEnter() {
    setThemePlaying(true);
    setCurtainOpen(true);
    setTimeout(() => setScreen('title'), 900);
  }

  function startGame() {
    setShuffled(shuffle(QUESTIONS).slice(0, QUESTIONS_PER_GAME));
    setQIndex(0);
    setScore(0);
    setSelected(null);
    setShowFact(false);
    setScreen('game');
  }

  function handleAnswer(idx) {
    if (selected !== null) return;
    const correct = idx === shuffled[qIndex].answer;
    setSelected(idx);
    if (correct) setScore(s => s + 1);
    setShowFact(true);
    setBurst({ visible: true, correct });
    setTimeout(() => setBurst({ visible: false, correct: false }), 1600);
  }

  function handleNext() {
    if (qIndex + 1 >= shuffled.length) {
      setScreen('result');
    } else {
      setQIndex(q => q + 1);
      setSelected(null);
      setShowFact(false);
    }
  }

  const current = shuffled[qIndex];

  return (
    <>
      <CurtainBackdrop />

      {/* Decorative splats */}
      <Splat style={{ top: "-45px", left: "-45px", zIndex: 1 }} size={190} color="#9B30FF" opacity={0.35} seed={1} />
      <Splat style={{ bottom: "-55px", right: "-55px", zIndex: 1 }} size={210} color="#FF3EA5" opacity={0.35} seed={2} />
      <Splat style={{ top: "18%", right: "-55px", zIndex: 1 }} size={130} color="#FFE033" opacity={0.25} seed={3} />
      <Splat style={{ bottom: "12%", left: "-45px", zIndex: 1 }} size={150} color="#C251FF" opacity={0.2} seed={4} />

      <ThemePlayer playing={themePlaying} />

      {screen === 'splash' && (
        <SplashScreen curtainOpen={curtainOpen} onEnter={handleEnter} />
      )}

      <div className={styles.layout}>
        {screen === 'title' && (
          <TitleScreen onStart={startGame} />
        )}

        {screen === 'game' && current && (
          <GameScreen
            question={current}
            qIndex={qIndex}
            totalQ={shuffled.length}
            score={score}
            selected={selected}
            showFact={showFact}
            burst={burst}
            onAnswer={handleAnswer}
            onNext={handleNext}
          />
        )}

        {screen === 'result' && (
          <ResultScreen
            score={score}
            totalQ={shuffled.length}
            onPlayAgain={startGame}
          />
        )}
      </div>
    </>
  );
}
