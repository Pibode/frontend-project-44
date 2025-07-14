import runGame from '../index.js'
import { getRandomNumber } from '../utils.js'

const findGCD = (a, b) => {
  if (!b) return a
  return findGCD(b, a % b)
}

const generateRound = () => {
  const num1 = getRandomNumber(1, 100)
  const num2 = getRandomNumber(1, 100)
  const question = `Question: ${num1} ${num2}`
  const correctAnswer = String(findGCD(num1, num2))
  return [question, correctAnswer]
}

export default () => {
  runGame('Find the greatest common divisor of given numbers.', generateRound)
}
