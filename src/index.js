import { greetUser } from './cli.js'
import readlineSync from 'readline-sync'

const runGame = (description, generateRound) => {
  const roundsCount = 3
  const userName = greetUser()
  console.log(description)

  for (let i = 0; i < roundsCount; i += 1) {
    const [question, correctAnswer] = generateRound()
    const userAnswer = readlineSync.question(`${question}\nYour answer: `)

    if (userAnswer !== correctAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`)
      console.log(`Let's try again, ${userName}!`)
      return
    }
    console.log('Correct!')
  }

  console.log(`Congratulations, ${userName}!`)
}

export default runGame
