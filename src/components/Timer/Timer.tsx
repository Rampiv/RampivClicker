interface Props {
    timeLeft: number
}

export const Timer = ({ timeLeft }: Props) => (
  <div className="timer">Время: {timeLeft} сек</div>
);