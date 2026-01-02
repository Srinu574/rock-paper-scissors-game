let userscore = 0;
let compscore = 0;
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userSc = document.querySelector("#user-score");
const compSc = document.querySelector("#comp-score");
const getcompchoice = () => {
    const options = ["rock","paper","scissors"];
    const ranIdx = Math.floor(Math.random()*3);
    return options[ranIdx];
}
const drawgame =()=>{
    // console.log("game is draw");
    msg.innerText = "Game is draw!";
    msg.style.backgroundColor="#081b31";
}
const showWinner=(userwin,userchoice,compChoice)=>{
    if(userwin){
        // console.log("user wins");
        userscore++;
        userSc.innerText=userscore;
        msg.innerText = `Hurray,You Win!${userchoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
    }
    else{
        // console.log("comp wins");
        compscore++;
        compSc.innerText = compscore;
        msg.innerText = `You Lose!${compChoice} beats ${userchoice}`;
        msg.style.backgroundColor="red";
    }
}
const playgame = (userchoice)=>{
    // console.log("userchoice",userchoice);
    const compChoice = getcompchoice();
    // console.log("compchoice",compChoice);
    if(userchoice==compChoice){
        drawgame();
    }
    else{
        let userwin = true;
        if(userchoice==="rock"){
            userwin =compChoice==="paper"?false:true;
        }
        else if(userchoice==="paper"){
            userwin =compChoice==="scissors"?false:true;
        }
        else{
            userwin = compChoice==="rock"?false:true;
        }
        showWinner(userwin,userchoice,compChoice);
    }
}
choices.forEach((choice)=>{
    console.log(choice);
    choice.addEventListener("click",()=>{
        const userchoice = choice.getAttribute("id");
        playgame(userchoice);
    });
});
