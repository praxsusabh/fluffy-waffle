const machineChoice = document.getElementById("machine-choice");
const userChoice = document.getElementById("user-choice");
const result = document.getElementById("result");
const possibleChoices = document.querySelectorAll('button');

let userChose;
let machineChose;
let final;

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
  userChose = e.target.id;
  userChoice.innerHTML = userChose;
  generateMachineChoice();
  getResult();
  console.log(final);
}))

function generateMachineChoice() {
  const randomNumber = Math.floor(Math.random() * 3);
  if (randomNumber === 0){
    machineChose = "Rock";
  }
  if (randomNumber === 1){
    machineChose = "Paper";
  }
  if (randomNumber === 2){
    machineChose = "Scissors";
  }
  machineChoice.innerHTML = machineChose;
}

function getResult() {
  if (machineChose === userChose){
    final = "Draw";
  }
  if (machineChose === "Rock" && userChose === "Paper"){
    final = "Won";
  }
  if (machineChose === "Rock" && userChose === "Scissors"){
    final = "Lost";
  }
  if (machineChose === "Paper" && userChose === "Rock"){
      final = "Lost";
  }
  if (machineChose === "Paper" && userChose === "Scissors"){
    final = "Won";
  }
  if (machineChose === "Scissors" && userChose === "Rock"){
   final = "Won";
 }
  if (machineChose === "Scissors" && userChose === "Paper"){
   final = "Lost";
 }
 result.innerHTML = final;
 }
