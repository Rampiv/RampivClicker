import { memo } from "react"
import "./History.scss"

interface Props {
  history: Number[]
}

export const History = memo(({ history }: Props) => {
  const reversedHistory = [...(history || [])].reverse()
  return (
    <div className="history">
      <p className="history__descr"><strong>История попыток от новых к старым ↓</strong></p>
      <ul className="history__list">
        {history ? (
          reversedHistory.map((item, index) => {
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
