let userscore=0
let computerscore=0;

let choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userscorepara=document.querySelector("#user-score")
const compscorepara=document.querySelector("#comp-score")

const drawgame=()=>{
    console.log("game was draw");
    msg.innerText="😐 Game was Draw. Try again!"
    msg.style.backgroundColor = "gray";
}

const showWinner=(userwin,userchoice,compchoice)=>{
    if (userwin) {
        userscore++;
        userscorepara.innerText=userscore;
         
        msg.innerText = `🎉 You Win! Your ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor = "green";
    } else {
         computerscore++;
         compscorepara.innerText=computerscore;
        msg.innerText = `❌ You Lose! ${compchoice} beats your ${userchoice}`;
        msg.style.backgroundColor = "red";
    }

}

const gencompchoice=()=>{
    const options=["rock","paper","scissors"];
    const randind=Math.floor(Math.random()*3);
    return options[randind];

}


const playgame=(userchoice)=>{
    console.log("user choice =",userchoice)
    const compchoice=gencompchoice();
    console.log("computer choice =",compchoice)

    if(userchoice===compchoice){
        drawgame();
        return;
    }
    else{
        let userwin=true;
        if(userchoice==="rock"){
            // comp choice-papper or scissor
            userwin=compchoice==="paper"?false:true;
        }
        else if(userchoice==="paper"){
            userwin=compchoice==="rock"?true:false;
        }
        else{
            userwin=compchoice==="rock"?false:true;
        }
        showWinner(userwin,userchoice,compchoice);
    }
}



choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userchoice=choice.getAttribute("id");
         
        playgame(userchoice);
    })


})