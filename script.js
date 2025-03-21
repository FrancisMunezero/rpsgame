function getComputerChoice(){
    const randomNum = Math.random();
    if(randomNum < 1/3) return "rock";
    else if(randomNum < 2/3) return "paper";
    else return "scissors";
}

function getHumanChoice(){
    let choice=prompt('Enter rock, paper or scissors:').toLowerCase();
    return choice;
}

function playround(humanchoice,computerchoice){
    console.log(`You chose ${humanchoice} and computer chose ${computerchoice}`);

    if(humanchoice === computerchoice){
        console.log("It's a tie!");
        return "tie";
    }

    if((humanchoice === "rock" && computerchoice === "scissors") || (humanchoice === "paper" && computerchoice === "rock") || (humanchoice === "scissors" && computerchoice === "paper")){
        console.log('You win!');
        return 'human';
    }
    else{
        console.log('Computer wins!');
        return 'computer';
    }
}

function playgame(){
    let humanscore = 0;
    let computerscore = 0;

    for(let i = 0; i < 5; i++){
        console.log(`Round ${i+1}`);
        let humanchoice = getHumanChoice();
        let computerchoice = getComputerChoice();
        let winner = playround(humanchoice,computerchoice);

        if(winner === 'human') humanscore++;
        else if(winner === 'computer') computerscore++;

        console.log(`Score -> You: ${humanscore} - Computer ${computerscore}`);
        console.log('_______________________________________');
    }

    if (humanscore > computerscore) console.log('You win the game!');
    else if(computerscore > humanscore) console.log('Computer wins! Better luck next time :/');
    else console.log("It's a tie!");
}
playgame();