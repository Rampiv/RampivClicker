export const loadData = () => {
  const historyData = localStorage.getItem("history")
  if (!historyData) return
  const historyParse = JSON.parse(historyData)
  return historyParse
}
