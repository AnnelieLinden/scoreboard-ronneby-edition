import ScoreBoard from "./components/scoreBoard.js";

const playerAmount = document.querySelector("#playerAmount")
const scoreboard =document.querySelector('#scoreboard')
let playerList = ["player1", "player2"]
const nameList = []
if (scoreboard != null) {
  scoreboard.appendChild(ScoreBoard(playerList))
}

const button = document.querySelector('button')

function getInput() {
  for (let i = 0; i < playerAmount.valueAsNumber; i++) {
    nameList.push(document.getElementById(i).value)

  }
  console.log(nameList)
}
const form = document.createElement('form')
document.body.appendChild(form);

// Event Listeners_____________________________________________________

function playerInput() {
  form.innerHTML = ""
  
  for (let i = 0; i < playerAmount.valueAsNumber; i++) {
    const label = document.createElement('label')
    form.appendChild(label)
    label.innerText = "Player " + (i + 1) + " Name: "
    const input = document.createElement('input')
    input.id = i
    form.appendChild(input)
    const br = document.createElement('br')
    form.appendChild(br)
  }
}
playerInput()
playerAmount.addEventListener("change", (event) => {
  event.preventDefault()
  
  if (event.target.valueAsNumber <= Number(event.target.max)
    && event.target.valueAsNumber >= Number(event.target.min)) {
    playerList = []

    for (let i = 1; i <= event.target.valueAsNumber; i++) {
      playerList.push("player " + i)
    }
    playerInput()
    //document.querySelector('form').replaceWith(playerInput())    
    //document.querySelector("main").replaceWith(ScoreBoard(playerList))
  
  } else {
    event.target.value = playerList.length;
  }
})
button.addEventListener('click', getInput())