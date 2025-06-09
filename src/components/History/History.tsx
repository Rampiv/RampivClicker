import { memo } from "react"
import "./History.scss"

interface Props {
  history: Number[]
}

export const History = memo(({ history }: Props) => {
  return (
    <div className="history">
      <ul className="history__list">
        {history ? (
          history.map((item, index) => {
            const numValue = Number(item)
            return (
              <li key={index}>
                <p className="history__text">
                  Предыдущий результат: <strong>{numValue}</strong>
                </p>
              </li>
            )
          })
        ) : (
          <></>
        )}
      </ul>
    </div>
  )
})
