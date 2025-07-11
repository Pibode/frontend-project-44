#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { greetUser } from '../src/cli.js';
import isPrime from '../src/games/prime.js';

const playPrimeGame = () => {
  const name = greetUser();
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

  for (let i = 0; i < 3; i++) {
    const num = Math.floor(Math.random() * 100) + 1;
    const correctAnswer = isPrime(num) ? 'yes' : 'no';
    const userAnswer = readlineSync.question(`Question: ${num}\nYour answer: `);

    if (userAnswer !== correctAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
    console.log('Correct!');
  }

  console.log(`Congratulations, ${name}!`);
};

playPrimeGame();