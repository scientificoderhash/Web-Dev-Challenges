let userScore = 0;
let compScore = 0;
let msg = document.querySelector("#msg")
let myScore = document.body.querySelector("#user-score")
let CompScore = document.body.querySelector("#comp-score")

const choices = document.body.querySelectorAll(".choice")

const getCompChoice = () =>{
    options = ["rock", "paper", "scissor"]
    randomIdx = Math.floor(Math.random() * 3)
    return options[randomIdx]
}

const showWinner = (userWin, userChoice, compChoice) =>{
    if(userWin === true){
        userScore++;
        myScore.innerText = userScore;
        msg.innerHTML = `You win! Your ${userChoice} beats ${compChoice}`
        msg.style.backgroundColor = "green"
    }
    else{
        compScore++;
        CompScore.innerText = compScore;
        msg.innerHTML = `You lose! ${compChoice} beats your ${userChoice}`
        msg.style.backgroundColor = "red"
    }
}


const playGame = (userChoice) =>{
    console.log("User Choice is : ", userChoice)
    //Generate Comp Choice
    const compChoice = getCompChoice();
    console.log("Comp Choice is : ", compChoice)

    if(userChoice === compChoice){
        console.log("Match is Draw") //Draw Game
        msg.innerHTML = `Math is Draw! You chose ${userChoice} and computer chose ${compChoice}`
        msg.style.backgroundColor = "black"
    }
    else{
        let userWin = true
        if(userChoice === "rock"){
            userWin = compChoice === "paper" ? false : true;
            console.log(userWin)
        }
        else if(userChoice === "paper"){
            userWin = compChoice === "scissor" ? false : true;
            console.log(userWin)
        }
        else if(userChoice === "scissor"){
            userWin = compChoice === "rock" ? false : true;
            console.log(userWin)
        }
        showWinner(userWin, userChoice, compChoice);
        
    }
}

choices.forEach((choice)=>{
    // console.log(choice)
    choice.addEventListener("click", ()=>{
        const userChoice = choice.getAttribute("id")
        playGame(userChoice);
    })
})

