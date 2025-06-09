import "./GameArea.scss"

interface Target {
  id: number
  x: number
  y: number
  color: string
  shape: string
}

interface GameAreaProps {
  target: Target | null
  onTargetClick: () => void
}

export const GameArea = ({ target, onTargetClick }: GameAreaProps) => {
  return (
    <div className="game-area">
      {target ? (
        <div
          key={target.id}
          className={`target ${target.shape}`}
          style={{
            left: `${target.x}%`,
            top: `${target.y}%`,
            backgroundColor: target.color,
          }}
          onClick={() => onTargetClick()}
        />
      ) : (
        <></>
      )}
    </div>
  )
}
