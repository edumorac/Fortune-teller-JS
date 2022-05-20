let userName = 'Edu';
if (userName === 'Edu') {
  console.log('Hello, Edu!');
} else {
  console.log('Hello!');
}
let userQuestion = 'Is my future bright?';
if (userQuestion) {
  console.log(`Your question is "${userQuestion}"`);
}
let randomNumber = Math.floor(Math.random() * 8);
let eightBall = '';
console.log(`The eight ball answered: ${eightBall}`);
switch (randomNumber) {
  case 0:
    console.log('It is certain');
  break;
  case 1:
    console.log('It is decicedely so');
  break;
  case 2:
    console.log('Reply hazy try again');
  break;
  case 3:
    console.log('Cannot predict now');
    break;
  case 4:
    console.log('Do not count on it');
    break;
  case 5:
    console.log('Do not count on it');
    break;
  case 6:
    console.log('My sources say no');
    break;
  case 7:
    console.log('Outlook not so good');
    break;
  case 8:
    console.log('Signs point to yes');
    break;
}