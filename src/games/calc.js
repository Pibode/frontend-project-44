import runGame from '../index.js'
import { getRandomNumber } from '../utils.js'

const calculate = (num1, num2, operator) => {
  switch (operator) {
    case '+': return num1 + num2
    case '-': return num1 - num2
    case '*': return num1 * num2
    default: throw new Error(`Unknown operator: ${operator}`)
  }
}

const generateRound = () => {
  const operators = ['+', '-', '*']
  const num1 = getRandomNumber(1, 25)
  const num2 = getRandomNumber(1, 25)
  const operator = operators[getRandomNumber(0, operators.length - 1)]
  const question = `Question: ${num1} ${operator} ${num2}` // Изменено здесь
  const correctAnswer = String(calculate(num1, num2, operator))
  return [question, correctAnswer]
}

export default () => {
  runGame('What is the result of the expression?', generateRound)
}
