import { player1, player2 } from './DataObjects';
import { Character } from './Character';

var playerData = [];

function getPlayerData(player){
  Object.keys(player).map(key => {
    playerData.push(player[key].textContent);
  });

  console.log(player)
}







var player1Attack1 = document.getElementById("player1Attack1");
player1Attack1.addEventListener("click", () =>{
  getPlayerData(player1);
  playerData = [];
});
var player1Attack2 = document.getElementById("player1Attack2");
player1Attack2.addEventListener("click", () =>{
  console.log("player1Attack2");
});
var player2Attack1 = document.getElementById("player2Attack1");
player2Attack1.addEventListener("click", () =>{
  console.log("player2Attack1");
});
var player2Attack2 = document.getElementById("player2Attack2");
player2Attack2.addEventListener("click", () =>{
  console.log("player2Attack2");
});


