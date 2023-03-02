class Character{
	constructor(character){
		this.character = []
	}

	createCharacter(character){
		this.character.push({
			name: character.name,
			village: character.village,
			health: character.health,
			shield: character.shield,
			mana: character.mana
		});
	}

	attack(value, price){
		this.health -= value;
		this.mana -= price;
	}

	reciveAttack(value){
		if(this.shield > 0)
			this.shield -= value;
		else
			this.health -= value;
	}
}

export { Character };



// class ContactBook{
//   constructor(contactList){
//     this.contactList = []
//   }
  
//   validateName(users){
//     return users.length == 0 ? false : true 
//   }
  
//   addContact(contact){
//     this.contactList.push({
//       name: contact.name,
//       surname: contact.surname,
//       cellphone : contact.cellphone,
//       email: contact.email
//     })
//   }

//   updateContact(name, surname, newcontact){
//     let user = this.contactList.filter(item => (item.name == name && item.surname == surname))
//     if(!this.validateName(user)){
//       return console.log('error')
//     }
//     user.map(item => {
//       item.name = newcontact.name; 
//       item.surname = newcontact.surname; 
//       item.cellphone = newcontact.cellphone; 
//       item.email = newcontact.email;
//     })
//   }
  
//   deleteContact(name, surname){
//     let user = this.contactList.filter(item => (item.name == name && item.surname == surname))
//     if(!this.validateName(user)){
//       return console.log('error')
//     }
//     let index = this.contactList.indexOf(user[0])
//     this.contactList.splice(index, 1)
//   }

//   searchContact(name, surname){
//     let user = this.contactList.filter(item => (item.name == name && item.surname == surname))
//     if(!this.validateName(user)){
//       return console.log('error')
//     }
//     user.map(item => {
//       console.log(item)
//       return item;
//     })
//   }

//   showContactBook(){
//     return this.contactList
//   }
// }



