import "./History.scss"

interface Props {
  history: Number[]
}
export const History = ({history}: Props) => {
  return (
    <div className="history">
      <ul>
        {history.map((item) => {
          return <li key={`${item} ${Math.random}`}>Предыдущий результат: {Number(item)}</li>
        })}
      </ul>
    </div>
  )
}
