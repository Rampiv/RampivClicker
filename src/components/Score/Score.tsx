interface Props {
    score: number
}

export const Score = ({ score }: Props) => (
  <div className="score">Кликов: {score}</div>
);