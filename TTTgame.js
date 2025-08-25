let boxes=document.querySelectorAll(".box")
let resetbtn=document.querySelector("#reset")
let newgamebtn=document.querySelector("#newbtn")
let messagecontainer=document.querySelector(".message-container")
let msg=document.querySelector("#msg")
let turnO=true;
 
 
const winpattern=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
     

]
const resetgame=()=>{
    turnO=true;
    enabledboxes();
    messagecontainer.classList.add("hide")

}

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("box was clicked")
        if(turnO==true){
            box.innerText="O";
            box.style.color="rgba(231, 22, 22, 1)";
            turnO=false;
            

        }
        else{
            box.innerText="X";
            box.style.color="rgba(60, 22, 231, 1)";
            turnO=true;
        }
        box.disabled=true;
        checkwinner();
        
    })
})

const disabledboxes=()=>{
    for(let box of boxes){
        box.disabled=true

    }


}
const enabledboxes=()=>{
    for(let box of boxes){
        box.disabled=false
        box.innerText=""

    }


}
const showWinner=(winner)=>{
    msg.innerText=`Congratulation, Winner is ${winner}`;
    messagecontainer.classList.remove("hide")
    disabledboxes();

}
const checkwinner=()=>{
    for(let pattern of winpattern){
        let pos1=boxes[pattern[0]].innerText;
        let pos2=boxes[pattern[1]].innerText;
        let pos3=boxes[pattern[2]].innerText;
        if(pos1!=""&&pos2!=""&&pos3!=""){
            if(pos1==pos2&&pos2==pos3){
                console.log("winner",pos1);
                showWinner(pos1);
            }

        }
        
    }

}


newgamebtn.addEventListener("click",resetgame)
resetbtn.addEventListener("click",resetgame)