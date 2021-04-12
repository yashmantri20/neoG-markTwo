const readline = require('readline-sync');
const chalk = require('chalk');
let points = 0
let user = readline.question(chalk.black.bold.bgWhite("Welcome, Can I know your name:\n"));

user = user.charAt(0).toUpperCase() + user.slice(1);

console.log(chalk.bgBlue("Welcome " + user + " Let's Begin:"));

const highScore = [
  {
    Name: "Yash",
    Score: 3
  },
  {
    Name: "Mayank",
    Score: 1
  }];

const question = [
  {
    ques: "Virat Kohli opened the batting on his India ODI debut v Sri Lanka, 2008. Who was his opening partner?",
    options: "\n1. Virender Sehwag\n2. Gautam Gambhir\n3. Sachin Tendulkar",
    ans: 2,
    follow: "\nVirat Kohli opened the batting with Gautam Gambhir!!\n"
  },
  {
    ques: "How many Test hundreds has Virat Kohli scored?",
    options: "\n1. 22\n2. 27\n3. 24",
    ans: 2,
    follow: "\nVirat Kohli has scored 27 hundreds!!\n"
  },
  {
    ques: "Kohli failed to get a hundred in the 2019 World Cup. How many fifties did he score?",
    options: "\n1. 1\n2. 3\n3. 5",
    ans: 3,
    follow: "\n Kohli scored 5 fifties!!\n"
  },
  {
    ques: "What is the T-Shirt no. of Virat Kohli in ODI and T20Is?",
    options: "\n1. 10 \n2. 18\n3. 19",
    ans: 2,
    follow: "\n The T-Shirt no. of Virat Kohli is 18!!\n"
  },
  {
    ques: "In which year did Kohli made his T20I debut?",
    options: "\n1. 2008\n2. 2009\n3. 2010",
    ans: 3,
    follow: "\nIn 2010!!\n"
  }
];

function checkAnswers(data, res) {
  if (data.ans == Number(res)) {
    points++;
    console.log(chalk.black.bgGreen("Correct Answer :)\n"));
  } else {
    console.log(chalk.bgRed("Wrong Answer :(\n"));
  }
  console.log(chalk.black.bgMagentaBright(data.follow));
  console.log(chalk.green("Points = " + points))
}

for (let i in question) {
  const res = readline.question("\n" + question[i].ques + "\n" + chalk.blue(question[i].options + "\n"));
  checkAnswers(question[i], res);
}

console.log(chalk.green(`Thanks ${user}, Your final points: ${points}`));

for (let i in highScore) {
  if (points > highScore[i].Score) {
    if (i == 0) {
      console.log(chalk.green("\nYou have beaten the high score please send me a screenshot of your score!!"))
    }
  }
}
