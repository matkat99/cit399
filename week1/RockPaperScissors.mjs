/*
introduce game with instructions
add three buttons to the UI
when user clicks a button:
    get a random number--map number to rock/paper/scissors
    figure out which button was clicked
    compare the choice with the random
    output the appropriate message

*/

import { qs, random } from "./utils.mjs";

export default class RockPaperScissors {
  constructor(outputEl) {
    this.outputEl = outputEl;
    this.playerChoice = -1;
    this.computerChoice = -1;
    buildUI(this.outputEl);
    qs("#rock", this.outputEl).addEventListener("click", this.compareChoices);
    qs("#paper", this.outputEl).addEventListener("click", this.compareChoices);
    qs("#scissors", this.outputEl).addEventListener(
      "click",
      this.compareChoices
    );
  }

  getComputerChoice() {
    // get random number
    this.computerChoice = random(3);
    // convert to paper/rock or scissors
  }
  getUserChoice(el) {
    console.dir(el);
    this.playerChoice = el.dataset.choice;
  }
  compareChoices(ev) {
    // get the usser choice
    this.getUserChoice(ev.target);
    // get the computer choice
    this.getComputerChoice();
    // compare
    if (this.playerChoice == this.computerChoice) {
      console.log("tie");
    } else if (this.playerChoice == 0 && this.computerChoice == 1) {
      console.log("computer wins");
    } else if (this.playerChoice == 1 && this.computerChoice == 2) {
      console.log("computer wins");
    } else if (this.playerChoice == 2 && this.computerChoice == 0) {
      console.log("computer wins");
    } else {
      console.log("player wins");
    }
    let message = "temp";
    // output correct message
    outputMessage(message);
  }
}

function outputMessage(outcome) {}
function buildUI(element) {
  const html = `<button id="rock" data-choice="0">Rock</button>
    <button id="paper" data-choice="1">Paper</button>
    <button id="scissors" data-choice=2>Scissors</button>
    <div id="output"></div>`;
  element.innerHTML = html;
}
