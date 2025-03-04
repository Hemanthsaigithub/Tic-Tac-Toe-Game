let boxes=document.querySelectorAll(".box"); // selects all tic-tac-toe boxes
let re=document.querySelector("#reset"); // selects reset button
let newg=document.querySelector("#newg"); // selects new game button
let msgclass=document.querySelector(".msgclass"); // selects the message container
let msg=document.querySelector("#msg"); // selects the message text

let t="O"; // initializes turn with 'O'
const arr=[[0,1,2],[0,3,6],[0,4,8],[1,4,7], // winning combinations
            [2,5,8],[2,4,6],[3,4,5],[6,7,8]
];

// function to reset the game
const resetgame=()=>{
    t="O"; // resets turn to 'O'
    enable(); // enables all boxes
    msgclass.classList.add("hide"); // hides the winner message
}

// function to enable all boxes and clear text
const enable=()=>{
    for(let i of boxes){
        i.disabled=false; // enables button clicks
        i.innerText=""; // clears box text
    }
}

// adding event listeners to each box
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        box.innerText=t; // sets box text to current turn
        if(t=="O"){ 
            t="X"; // switches turn to 'X'
        }
        else{
            t="O"; // switches turn to 'O'
        }
        box.disabled=true; // disables clicked box
        checkwinner() // checks if there is a winner
    });
});

// function to display winner message
const showWinner=(w)=>{
   msg.innerText=`Congratulations!, Winner is ${w}`; // updates message with winner
    msgclass.classList.remove("hide"); // displays message container
    for(let i of boxes){
        i.disabled=true; // disables all boxes after game ends
    }
}

// function to check if a player has won
const checkwinner=()=>{
    for(let i of arr){
        let p1=boxes[i[0]].innerText; // first box in winning combination
        let p2=boxes[i[1]].innerText; // second box in winning combination
        let p3=boxes[i[2]].innerText; // third box in winning combination
        if(p1!="" && p2!="" && p3!=""){ // ensures boxes are not empty
            if(p1==p2 && p2==p3){ // checks if all three boxes have the same value
               // console.log("Player ",p1," won");
                showWinner(p1); // calls function to display winner
            }
        }
    }
}

// adding event listeners to reset and new game buttons
re.addEventListener("click", resetgame); // resets game when reset button is clicked
newg.addEventListener("click", resetgame); // resets game when new game button is clicked
