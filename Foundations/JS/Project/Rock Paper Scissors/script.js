function getComputerChoice(){
    let choice= Math.floor(Math.random() * 3)
    let message = (choice===0) ? "Rock" : 
    (choice === 1) ? "Scissor" : 
    (choice ===2) ? "Paper" : 
    "Invalid choice";
    return message 
}


function getHumanChoice(){
    let choice = prompt("Rock Paper Scissor Set Shoot: ");
    let choice_l = choice.toLowerCase();
    let actual_choice = choice_l.charAt(0).toUpperCase() + choice_l.slice(1);
    if (actual_choice != "Scissor" && actual_choice !="Rock" && actual_choice !="Paper"){
        return "Invalid choice"
    }
    return actual_choice
}

let humanScore = 0;
let computerScore=0;

function playRound(humanChoice, computerChoice){
    if(humanChoice == computerChoice){
        return `Tie! Both choices were ${humanChoice}`;
    } else if (humanChoice == "Scissor" && computerChoice=="Paper"){
        humanScore++;
        return `You Win! ${humanChoice} beats ${computerChoice}`;
    } else if (humanChoice == "Paper" && computerChoice=="Scissor"){
        computerScore++;
        return `You Lose. ${humanChoice} loses to ${computerChoice}`;
    } else if (humanChoice == "Rock" && computerChoice=="Scissor"){
        humanScore++;
        return `You Win! ${humanChoice} beats ${computerChoice}`;
    } else if (humanChoice == "Scissor" && computerChoice=="Rock"){
        computerScore++;
        return `You Lose. ${humanChoice} loses to ${computerChoice}`;
    } else if (humanChoice == "Paper" && computerChoice=="Rock"){
        humanScore++;
        return `You Win! ${humanChoice} beats ${computerChoice}`;
    } else if (humanChoice == "Rock" && computerChoice=="Paper"){
        computerScore++;
        return `You Lose. ${humanChoice} loses to ${computerChoice}`;
    } else{
        return `${humanChoice} is an invalid choice`;
    }
}

function playGame(){
    for(i=0; i<5; i++){
        let outcome= playRound(getHumanChoice(), getComputerChoice())
        console.log(outcome);
        console.log ("Computer Score: " + computerScore);
        console.log("Your Score: " + humanScore)
   }
}