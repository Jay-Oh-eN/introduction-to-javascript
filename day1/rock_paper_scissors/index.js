var user_move = "rock";
var computer_move = "scissor";

if (user_move === "paper") {
    console.log("user entered paper");
    
    if (computer_move === "paper") {
        console.log("draw");
    } else if (computer_move === "rock") {
        console.log("user wins!");
    } else if (computer_move === "scissor") {
        console.log("user loses :(");
    }
    
} else if (user_move === "rock") {
    console.log("user entered rock");
    
    if (computer_move === "paper") {
        console.log("user loses :(");
    } else if (computer_move === "rock") {
        console.log("draw");
    } else if (computer_move === "scissor") {
        console.log("user wins!");
    }
} else if (user_move === "scissors") {
    console.log("user entered scissors");
    
    if (computer_move === "paper") {
        console.log("user wins!");
    } else if (computer_move === "rock") {
        console.log("user loses :(");
    } else if (computer_move === "scissor") {
        console.log("draw");
    }
}

