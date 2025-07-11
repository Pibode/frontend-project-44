#!/usr/bin/env node

import { greetUser, askQuestion, checkAnswer } from '../src/cli.js';
import { isEven } from '../src/games/even.js';

const playEvenGame = () => {
  const name = greetUser();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  let correctAnswers = 0;
  const roundsToWin = 3;

  while (correctAnswers < roundsToWin) {
    const number = Math.floor(Math.random() * 100) + 1;
    const correctResponse = isEven(number) ? 'yes' : 'no';
    
    const userAnswer = askQuestion(`Question: ${number}`);

    if (userAnswer !== 'yes' && userAnswer !== 'no') {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctResponse}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }

    if (!checkAnswer(userAnswer, correctResponse, name)) {
      return;
    }

    correctAnswers += 1;
    console.log('Correct!');
  }

  console.log(`Congratulations, ${name}!`);
};

playEvenGame();