let boxes=document.querySelectorAll(".box");
let re=document.querySelector("#reset");
let newg=document.querySelector("#newg");
let msgclass=document.querySelector(".msgclass");
let msg=document.querySelector("#msg");

let t="O";
const arr=[[0,1,2],[0,3,6],[0,4,8],[1,4,7],
            [2,5,8],[2,4,6],[3,4,5],[6,7,8]
];

const resetgame=()=>{
    t="O";
    enable();
    msgclass.classList.add("hide");
}

const enable=()=>{
    for(let i of boxes){
        i.disabled=false;
        i.innerText="";
    }
}

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        box.innerText=t;
        if(t=="O"){
            t="X";
        }
        else{
            t="O";
        }
        box.disabled=true;
        checkwinner()
    });
});

const showWinner=(w)=>{
   msg.innerText=`Congratulations!, Winner is ${w}`;
    msgclass.classList.remove("hide");
    for(let i of boxes){
        i.disabled=true;
    }
}

const checkwinner=()=>{
    for(let i of arr){
        let p1=boxes[i[0]].innerText;
        let p2=boxes[i[1]].innerText;
        let p3=boxes[i[2]].innerText;
        if(p1!="" && p2!="" && p3!=""){
            if(p1==p2 && p2==p3){
               // console.log("Player ",p1," won");
                showWinner(p1);
            }
        }
    }
}

re.addEventListener("click", resetgame);
newg.addEventListener("click", resetgame);