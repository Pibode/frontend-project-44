import { getRandomNumber } from '../utils.js'  
import runGame from '../index.js'             

const isPrime = (num) => {
  if (num < 2) return false
  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) return false
  }
  return true
}

const generateRound = () => {
  const number = getRandomNumber(1, 100)
  const question = `Question: ${number}`
  const answer = isPrime(number) ? 'yes' : 'no'
  return [question, answer]
}

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".'

export default () => runGame(description, generateRound)