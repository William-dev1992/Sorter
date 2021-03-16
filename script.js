/*Elementos DOM*/
const inputElement = document.querySelector('#addInput');
const amountOfConcurrents = document.querySelector('#amount');
var winnerList = document.querySelector('#winnerList');

const names = []

const sort = {
  AddConcurrent(){
    names.push(inputElement.value);
    Screen.AttAmountOfConcurrents();
    inputElement.value = ''
  },

  Sort(){
    for (var i = names.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [names[i], names[j]] = [names[j], names[i]];
    }
    this.ChooseName(names)

    new Audio('./assets/notification.mp3').play()

  },

  ChooseName(sortedNames){
    const randomName = Math.floor(Math.random() * (sortedNames.length));
    
    const winner = sortedNames[randomName]
    Screen.ShowWinner(winner)
  },
}

const Screen = {
  AttAmountOfConcurrents(){
    amountOfConcurrents.innerText = '';
    amountOfConcurrents.innerText += names.length;
  },

  ShowWinner(winner){
    let liElement = 
    `
      <li>${winner}</li>
    `;
    winnerList.innerHTML += liElement;
  }
}