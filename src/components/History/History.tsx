import "./History.scss"

interface Props {
  history: Number[]
}
export const History = ({ history }: Props) => {
  return (
    <div className="history">
      <ul>
        {history ? (
          history.map((item, index) => {
            return <li key={index}>Предыдущий результат: {Number(item)}</li>
          })
        ) : (
          <></>
        )}
      </ul>
    </div>
  )
}
