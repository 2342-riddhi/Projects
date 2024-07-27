let boxes=document.querySelectorAll(".box");
let rstbtn=document.querySelector("#rstbtn");
let newgamebtn=document.querySelector("#newgame");
let msg=document.querySelector("#msg");
let msgcontainer=document.querySelector(".msg-container");

let turno=true;//player1


const winpatterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

const resetgame=()=>{
    turno=true;
    enableboxes();
    msgcontainer.classList.add("hide");
}

const disableboxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
};

const enableboxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
};

const showwinner= (winner)=>{
    msg.innerText=`And The Winner Is ${winner}`;
    msgcontainer.classList.remove("hide");
    disableboxes();

};

boxes.forEach((box) => {
   box.addEventListener("click" ,() => {
        if (turno==true){
            box.innerText="x";
            box.classList.add("x");
            turno=false;
        }else{
            box.innerText="o";
            box.classList.add("o");
            turno=true;
        }
        box.disabled=true;
        checkwinner();
   }) 
});

const checkwinner= () =>{
    for(pattern of winpatterns){
        let pos1=boxes[pattern[0]].innerText;
        let pos2=boxes[pattern[1]].innerText;
        let pos3=boxes[pattern[2]].innerText;

        if(pos1!="" && pos2!="" && pos3!=""){
        if(pos1===pos2 && pos2===pos3){
            showwinner(pos1);
        }}
    }
};

newgamebtn.addEventListener("click",resetgame);

rstbtn.addEventListener("click",resetgame);