function getComputerChoice(){
    let choice= Math.floor(Math.random() * 3)
    let message = (choice===0) ? "Rock" : 
    (choice === 1) ? "Scissor" : 
    (choice ===2) ? "Paper" : 
    "Invalid choice";
    return message 
}

// no longer needed b/c we use buttons as input
// function getHumanChoice(){
//     let choice = prompt("Rock Paper Scissor Set Shoot: ");
//     let choice_l = choice.toLowerCase();
//     let actual_choice = choice_l.charAt(0).toUpperCase() + choice_l.slice(1);
//     if (actual_choice != "Scissor" && actual_choice !="Rock" && actual_choice !="Paper"){
//         return "Invalid choice"
//     }
//     return actual_choice
// }

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
    const doc_body = document.querySelector("body");
    const display_div = document.createElement("div");
    doc_body.appendChild(display_div)

    //create 3 btns, one for each selection
    const r_btn= document.createElement("button");
    const s_btn= document.createElement("button");
    const p_btn= document.createElement("button");

    r_btn.setAttribute("id", "Rock");
    s_btn.setAttribute("id", "Scissor");
    p_btn.setAttribute("id", "Paper")

    r_btn.textContent="Rock"
    s_btn.textContent="Scissor"
    p_btn.textContent="Paper"

    doc_body.appendChild(r_btn)
    doc_body.appendChild(s_btn)
    doc_body.appendChild(p_btn)

    let result_p = document.createElement("p");

    const all_btn= document.querySelectorAll("button");
    all_btn.forEach((button) => {
        button.addEventListener("click", () => {
            
            result_p.textContent=playRound(button.id,getComputerChoice());
            display_div.appendChild(result_p);
            let running_score = document.createTextNode(`| The score is You:${humanScore}, Computer:${computerScore}`);
            result_p.appendChild(running_score);
        });
    });
            // console.log(button.id)});  //add event listener click that triggers play round


// function playGame(){

//     //remove logic that plays exactly 5 rounds
//     for(i=0; i<5; i++){
//         let outcome= playRound(getHumanChoice(), getComputerChoice())
//         console.log(outcome);
//         console.log ("Computer Score: " + computerScore);
//         console.log("Your Score: " + humanScore)
//    }
// }