let speedShow = document.getElementById("actualSpeed");
let speedInput = document.getElementById("speed");
let player = document.getElementById("player");
let chooseButton = document.getElementById("chooseBut");
let submitButton = document.getElementById("submitBut");
let inputBox = document.getElementById("nameInput");
let clearButton = document.getElementById("clearBut");
let applyButton = document.getElementById("apply");

var playerName;
var name_choosing = false;
var name_choosed = false;

if(localStorage.getItem("speed")){
    speedShow.innerHTML = `Speed: ${speed}`;
}else{
    speedShow.innerHTML = `Speed: 2`;
}

submitBut.hidden = true;
inputBox.hidden = true;
clearButton.hidden = true;


if(localStorage.getItem("playerName")){
    name_choosed = true;
    playerName = localStorage.getItem("playerName")
    afterName();
}


chooseButton.addEventListener(("click"), ()=>{
    name_choosing = true;

    if(name_choosing == true){
        inputBox.hidden = false;
        chooseButton.hidden = true;
        submitBut.hidden = false;
        
        submitBut.addEventListener("click", ()=>{
            if(inputBox.value){
                playerName = inputBox.value;
                localStorage.setItem("playerName", `${playerName}`)
                player.innerHTML = `Player: ${playerName}`;
                name_choosed = true;
                afterName();
            }
        })
    }
})

function afterName(){
    if(name_choosed == true){
        chooseButton.hidden = true;
        inputBox.hidden = true;
        submitBut.hidden = true;
        clearButton.hidden = false;
        player.innerHTML = `Player: ${playerName}`;

        clearButton.addEventListener("click", ()=>{
            name_choosed = false;
            localStorage.clear("playerName");
            clearButton.hidden = true;
            chooseButton.hidden = false;
            player.innerHTML = "Player: "
        })
    }
}

applyButton.addEventListener("click", ()=>{
    localStorage.setItem("speed", speedInput.value);
    speed = localStorage.getItem("speed");
    speedShow.innerHTML = `Speed: ${speed}`;
})
