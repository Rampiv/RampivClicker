import { useState, useEffect } from "react"
import { getRandomColor, getRandomShape, loadData, saveData } from "../Other"
import { Timer } from "../Timer"
import { Score } from "../Score"
import { GameArea } from "../GameArea"
import "./Game.scss"
import { History } from "../History"

interface Target {
  id: number
  x: number
  y: number
  color: string
  shape: string
}

export function Game() {
  const [score, setScore] = useState(0)
  const [timeLeft, setTimeLeft] = useState(5)
  const [isGameRunning, setIsGameRunning] = useState(false)
  const [target, setTarget] = useState<Target | null>(null)
  const [history, setHistory] = useState([])

  const startGame = () => {
    setIsGameRunning(true)
    setScore(0)
    setTimeLeft(5)
    spawnTarget()
  }

  const spawnTarget = () => {
    const newTarget = {
      id: Date.now(),
      x: Math.random() * 70,
      y: Math.random() * 70,
      color: getRandomColor(),
      shape: getRandomShape(),
    }
    setTarget(newTarget)
  }

  const handleTargetClick = () => {
    if (!isGameRunning || !target) return
    setScore(score + 1)
    setTarget(null)
    setTimeout(spawnTarget, 10)
  }

  useEffect(() => {
    let timer: number | undefined
    setHistory(loadData())
    if (isGameRunning && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft(prev => +(prev - 0.1).toFixed(1))
      }, 100)
    } else if (timeLeft <= 0) {
      setIsGameRunning(false)
      setTarget(null)
    }
    return () => clearInterval(timer)
  }, [isGameRunning, timeLeft])

  useEffect(() => {
    if (!isGameRunning && timeLeft <= 0) {
      saveData(score)
      setHistory(loadData())
    }
  }, [isGameRunning, timeLeft, score])

  return (
    <div className="game">
      <h1>Кликер-тест на реакцию</h1>
      <button onClick={startGame} disabled={isGameRunning}>
        {isGameRunning ? "Идёт игра..." : "Старт"}
      </button>
      <Timer timeLeft={timeLeft} />
      <Score score={score} />
      <GameArea
        target={target ? target : null}
        onTargetClick={handleTargetClick}
      />
      <History history={history} />
    </div>
  )
}
