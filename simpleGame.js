console.log('Hi, this is a vicious battle of rock, paper and scissors between a human and a robot: ');
const getUserChoice = (userInput) =>{
  userInput = userInput.toLowerCase();
  if(userInput ==='rock'){
    return userInput;
  }else if(userInput ==='paper'){
    return userInput;
  }else if(userInput ==='scissors'){
    return userInput;
  }
  else{
    console.log('Error');
  }
}
let getComputerChoise = ()=>{
  let randIndex = Math.floor(Math.random()*3);
  switch(randIndex){
    case 0:
    return 'rock';
    break;
    case 1:
    return 'paper';
    break;
    case 2:
    return 'scissors';
    default:
    console.log('err');
  }
}


let determineWinner = (userChoise,computerChoise)=>{
  if(userChoise === computerChoise){
    return 'Draw';
  }
  if(userChoise ==='rock'){
    if(computerChoise ==="paper"){
        return 'The computer won';
    }else{
      return 'The human won';
    }
  }
  if(userChoise ==='paper'){
    if(computerChoise ==="scissors"){
        return 'The computer won';
    }else{
      return 'The human won';
    }
  }
  if(userChoise ==='scissors'){
    if(computerChoise ==="rock"){
        return 'The computer won';
    }else{
      return 'The human won';
    }
  }
}
let playGame = () => {
  const userChoice = getUserChoice('rock');
  const computerChoice = getComputerChoise();
 
  console.log(determineWinner(userChoice, computerChoice));
}


playGame();
