interface Props {
  score: number
}


export const Score = ({ score }: Props) => {
  return (
    <div className="score">Кликов: {score}
    </div>
  )
}
