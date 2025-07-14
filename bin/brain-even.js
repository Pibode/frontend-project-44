#!/usr/bin/env node
import readlineSync from 'readline-sync'
import { greetUser } from '../src/cli.js'
import { isEven } from '../src/games/even.js'

const playEvenGame = () => {
  const name = greetUser()
  console.log('Answer "yes" if the number is even, otherwise answer "no".')

  for (let i = 0; i < 3; i++) {
    const number = Math.floor(Math.random() * 100)
    const correctAnswer = isEven(number) ? 'yes' : 'no'
    const userAnswer = readlineSync.question(`Question: ${number}\nYour answer: `)

    if (userAnswer !== correctAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`)
      console.log(`Let's try again, ${name}!`)
      return
    }
    console.log('Correct!')
  }

  console.log(`Congratulations, ${name}!`)
}

playEvenGame()
