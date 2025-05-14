// var btn1 = document.querySelector("#btn");

// // btn1.onclick = () =>{
// //   console.log("button is clicked");
// // }

// // var div1 = document.querySelector("div");

// // div1.onmouseover = () =>{
// //   console.log("you are inside the div");
// // }


// btn1.onclick = (Evt) =>{
//   console.log("the button is clicked");
//   console.log(Evt);
//   console.log(Evt.target);
//   console.log(Evt.clientX , Evt.clientY);
// }


// var btn1 = document.getElementById("toggleButton")

// btn1.addEventListener("click",() => {
//   document.body.classList.toggle("dark-mode");
// })

// var toggle1 = document.querySelector("#toggleButton");
// let currMode = "light";
// var body = document.querySelector("body") ;

// toggle1.addEventListener("click" ,() =>{
// if (currMode === "light"){
//   currMode = "dark";
//   body.style.backgroundColor = "black";
// }else{
//   currMode = "light";
//   body.style.background = "white";
// }
//  console.log(currMode);
// });


const board = document.getElementById("game-board");
const cells = document.querySelectorAll(".cell");
const status = document.getElementById("status");
const resetButton = document.getElementById("reset");

let currentPlayer = "X";
let gameActive = true;
let gameState = ["", "", "", "", "", "", "", "", ""];

const checkWinner = () => {
  const winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  for (const pattern of winPatterns) {
    const [a, b, c] = pattern;
    if (gameState[a] && gameState[a] === gameState[b] && gameState[a] === gameState[c]) {
      gameActive = false;
      status.textContent = `${currentPlayer} wins!`;
      return;
    }
  }

  if (!gameState.includes("")) {
    gameActive = false;
    status.textContent = "It's a tie!";
  }
};

const handleClick = (e) => {
  const cell = e.target;
  const index = cell.getAttribute("data-index");

  if (gameState[index] !== "" || !gameActive) {
    return;
  }

  gameState[index] = currentPlayer;
  cell.textContent = currentPlayer;

  checkWinner();
  currentPlayer = currentPlayer === "X" ? "O" : "X";
};
  
const resetGame = () => {
  gameState = ["", "", "", "", "", "", "", "", ""];
  cells.forEach(cell => cell.textContent = "");
  currentPlayer = "X";
  gameActive = true;
  status.textContent = "";
};

cells.forEach(cell => cell.addEventListener("click", handleClick));
resetButton.addEventListener("click", resetGame);
