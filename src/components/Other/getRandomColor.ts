export const getRandomColor = () => {
  const colors = ["#FF5733", "#33FF57", "#3357FF", "#F3FF33"]
  return colors[Math.floor(Math.random() * colors.length)]
}
