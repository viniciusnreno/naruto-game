import { Character } from './Character.js';
import { inputs, player1, player2 } from './DataObjects.js';
// get data from inputs

// check if inputs are empty
function checkInputs(){
  for(let item in inputs){
    if(inputs[item].value == ''){
      return false;
    }
  }
  return true;
}



// clear form after submit
function clearForm(){
  for(let item in inputs){
    inputs[item].value = '';
  } 
}

// create character object and add it to the game
function generateCharacter(){
  var player = new Character();
  player.createCharacter(Object.keys(inputs).map(key => inputs[key].value));
  changePlayerState();
}

// change player state 
function changePlayerState(){
  if(inputs.player.value == 'player 1'){
    // change player 1 state
    for(let item in Object.keys(player1)){
      let key = Object.keys(player1)[item];
      player1[key].innerHTML = inputs[key].value;
    }
    const image1 = document.getElementById('image1');
    image1.src = `./assets/images/${inputs.village.value}.gif`;
    
  }else{
    // change player 2 state
    for(let item in Object.keys(player2)){
      let key = Object.keys(player2)[item];
      player2[key].innerHTML = inputs[key].value;
    }
    const image2 = document.getElementById('image2');
    image2.src = `./assets/images/${inputs.village.value}.gif`;
  }

}
// create character button event
var buttonCreateCharacter = document.getElementById('buttonCreateCharacter');
buttonCreateCharacter.addEventListener('click', () => {
  if(!checkInputs()){
    alert('Please fill all inputs');
    return;
  } 
  generateCharacter();
  changePlayerState();
  clearForm();
});

export { player1, player2 }

  




