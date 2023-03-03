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

export { inputs, player1, player2 };