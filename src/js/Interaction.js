import { Character } from './Character.js';

// get data from inputs
const inputs = {
  'name': document.getElementById('charName'),
  'village': document.getElementById('villageSelect'),
  'player': document.getElementById('playerSelect'),
  'health': document.getElementById('health'),
  'shield': document.getElementById('shield'),
  'mana': document.getElementById('mana')
}
const player1 = {
  'name': document.getElementById('name1'),
  'health': document.getElementById('health1'),
  'shield': document.getElementById('shield1'),
  'mana': document.getElementById('mana1'),
}
const player2 = {
  'name': document.getElementById('name2'),
  'health': document.getElementById('health2'),
  'shield': document.getElementById('shield2'),
  'mana': document.getElementById('mana2'),
}

function clearForm(){
  for(let item in inputs){
    inputs[item].value = '';
  } 
}

function generateCharacter(){
  let player = new Character();
  player.createCharacter(Object.keys(inputs).map(key => inputs[key].value));
  changePlayerState();
}

function changePlayerState(){
  if(inputs.player.value == 'player 1'){
    for(let item in Object.keys(player1)){
      let key = Object.keys(player1)[item];
      player1[key].innerHTML = inputs[key].value;
    }
  }else{
    for(let item in Object.keys(player2)){
      let key = Object.keys(player2)[item];
      player2[key].innerHTML = inputs[key].value;
    }
  }

}
// create character
var buttonCreateCharacter = document.getElementById('buttonCreateCharacter');
buttonCreateCharacter.addEventListener('click', () => {
  generateCharacter();
  changePlayerState();
  clearForm();
});

// add character to the game
  




