function getComputerChoice(){
    //  Random number between 1 and 3 (both inclusive)
    const randNum = Math.floor(Math.random() * 3) + 1;
    if (randNum === 1){return "Rock"}
    if (randNum === 2){return "Paper"}
    if (randNum === 3){return "Scissors"}
}

function capitalize(str) {
    const lower = str.toLowerCase();
    return str.charAt(0).toUpperCase() + lower.slice(1);
}

function playRound(playerSelection, computerSelection){
    const player = playerSelection.toLowerCase()
    const computer = computerSelection.toLowerCase()


    if (player === computer){
        return "Tie. No one wins."
    }

    else if (player === "paper" && computer === "rock"){
        return "You Win! Paper beats Rock"
    }
    else if (player === "scissors" && computer === "paper"){
        return "You Win! Scissors beats Paper"
    }
    else if (player === "rock" && computer === "scissors"){
        return "You Win! Rock beats Scissors"
    }
    else {return `You Lose! ${capitalize(computer)} beats ${capitalize(player)}`}
}

function game(){
    let player_record = 0
    let computers_record = 0
    let i = 0

    //  5 rounds: get playerSelection, get computerSelection, log the winner of each round
    for (; i < 5; i++){
        let playerSelection = prompt("Choose Rock, Paper, or Scissors").toLowerCase()
        console.log(playerSelection)
        if (playerSelection !== "rock" && playerSelection !== "scissors" && playerSelection !== "paper"){
            console.log("Invalid Entry. Must enter Rock, Paper, or Scissors")
            continue
        }
        let computerSelection = getComputerChoice()
        console.log(`Your Choice: ${capitalize(playerSelection)}`)
        console.log(`Computer Choice: ${computerSelection}`)
        let curr_game_result = playRound(playerSelection, computerSelection)
        console.log(`Result: ${curr_game_result}`)
        // console.log(curr_game_result.search("Tie. No one"))

        //  Counting Wins
        if (curr_game_result.search("You Win!") !== -1){
            player_record += 1
        }
        else if (curr_game_result.search("Tie. No one") !== -1){
            i -= 1
        }
        else {computers_record += 1}
        console.log("\n")
    }
    //  Announcing best of 5
    if (player_record > computers_record){console.log(`Best of 5 goes to: Player!`)}
    else if (computers_record === player_record){console.log(`Best of 5 goes to: Computer!`)}
    else {console.log("An error occurred during the game, a proper record hasn't been recorded")}
}

function main() {
    game()
}

main()