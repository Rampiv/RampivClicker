export const saveData = (score: number) => {
  const history = localStorage.getItem("history")
  if (!history) {
    localStorage.setItem("history", JSON.stringify([score]))
  } else {
    const parseHistory = JSON.parse(history)
    localStorage.setItem("history", JSON.stringify([...parseHistory, score]))
  }
}
