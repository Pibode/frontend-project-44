import runGame from '../index.js'
import { getRandomNumber } from '../utils.js'

const generateProgression = (start, step, length) => {
  const progression = []
  for (let i = 0; i < length; i += 1) {
    progression.push(start + i * step)
  }
  return progression
}

const generateRound = () => {
  const length = getRandomNumber(5, 10)
  const start = getRandomNumber(1, 50)
  const step = getRandomNumber(1, 10)
  const progression = generateProgression(start, step, length)
  const hiddenIndex = getRandomNumber(0, progression.length - 1)
  const answer = String(progression[hiddenIndex])
  progression[hiddenIndex] = '..'
  const question = `Question: ${progression.join(' ')}`
  return [question, answer]
}

export default () => {
  runGame('What number is missing in the progression?', generateRound)
}
