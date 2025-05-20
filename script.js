let num1;
let num2;
let answer;
let opt1;
let opt2;
let index;
let index2 = 0;
let currentOperation = "+";
let options = document.getElementsByClassName("options");
let equation = document.getElementById("equation");
let winMusic = new Audio("Happy.wav");
let looseMusic = new Audio("Sad.wav");

function cheak(option) {
  if (option === index) {
    win();
    console.log("Correct Answer");
  } else {
    loose();
    console.log("Wrong Answer");
  }
}

function win() {
  happyCat = document.getElementById("img1");
  console.log(equation);
  winMusic.play();
  setTimeout(() => {
    happyCat.style.display = "none";
    equation.style.display = "block";
  }, 3000);
  happyCat.style.display = "block";
  equation.style.display = "none";
  math();
}

function loose() {
  sadCat = document.getElementById("img2");
  // for (let i = 0; i < options.length; i++) {
  //   options[i].innerText = "";
  // }
  looseMusic.play();
  setTimeout(() => {
    sadCat.style.display = "none";
    equation.style.display = "block";
  }, 3000);
  sadCat.style.display = "block";
  equation.style.display = "none";

  math();
}

function operation(operator) {
  currentOperation = operator;
  document.getElementById("operation").innerText = currentOperation;
  console.log("index=", index);
  let list = document.getElementsByTagName("li");
  console.log(list);
  for (let i = 0; i < list.length; i++) {
    list[i].style.transform = "scale(1)";
    list[i].style.textDecoration = "none";
  }

  switch (currentOperation) {
    case "+":
      index2 = 0;
      break;
    case "-":
      index2 = 1;
      break;
    case "×":
      index2 = 2;
      break;
    case "÷":
      index2 = 3;
      break;
    default:
      break;
  }
  list[index2].style.transform = "scale(1.5)";
  // list[index2].style.textDecoration = "underline";
  math();
}

function math() {
  switch (currentOperation) {
    case "+":
      num1 = Math.floor(Math.random() * 14 + 1);
      num2 = Math.floor(Math.random() * 14 + 1);
      answer = num1 + num2;
      break;
    case "-":
      num1 = Math.floor(Math.random() * 14 + 1);
      num2 = Math.floor(Math.random() * 14 + 1);
      answer = num1 - num2;
      break;
    case "×":
      num1 = Math.floor(Math.random() * 11 + 1);
      num2 = Math.floor(Math.random() * 9 + 1);
      answer = num1 * num2;
      break;
    case "÷":
      num1 = Math.floor(Math.random() * 14 + 1);
      num2 = Math.floor(Math.random() * 9 + 1);
      answer = Math.floor(num1 / num2);
      break;
    default:
      break;
  }
  index = Math.floor(Math.random() * options.length);

  document.getElementById("number1").innerText = num1;
  document.getElementById("number2").innerText = num2;
  options[index].innerHTML = answer;

  if (index === 0) {
    options[1].innerHTML = Math.floor(Math.random() * 29 + 1);
    options[2].innerHTML = Math.floor(Math.random() * 29 + 1);
  } else if (index === 1) {
    options[0].innerHTML = Math.floor(Math.random() * 29 + 1);
    options[2].innerHTML = Math.floor(Math.random() * 29 + 1);
  } else {
    options[0].innerHTML = Math.floor(Math.random() * 29 + 1);
    options[1].innerHTML = Math.floor(Math.random() * 29 + 1);
  }
}

operation("+");
