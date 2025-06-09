export const getRandomShape = () => {
  const shapes = ["circle", "square", "triangle"]
  return shapes[Math.floor(Math.random() * shapes.length)]
}
