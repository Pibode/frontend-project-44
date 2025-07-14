import runGame from '../index.js'
import { getRandomNumber } from '../utils.js'

export const isEven = num => num % 2 === 0  // Добавлен экспорт

const generateRound = () => {
  const number = getRandomNumber(1, 100)
  const question = `Question: ${number}`
  const answer = isEven(number) ? 'yes' : 'no'
  return [question, answer]
}

export default () => {
  runGame('Answer "yes" if the number is even, otherwise answer "no".', generateRound)
}