let play = document.getElementById("play");
let scoreBoard = document.getElementById("score");
let playAgain = document.getElementById("play_again");
let playAgain_div = document.getElementById("button");

let snakeCanvas = document.getElementById("snakeCanvas");
let ctx_snake = snakeCanvas.getContext("2d");

let foodCanvas = document.getElementById("foodCanvas");
let ctx_food = foodCanvas.getContext("2d");

play.hidden = false;
let playing = false;
let Eaten = true;
let playAgain_phase;

var pos_x = 0;
var pos_y = 0;
var vx = 0;
var vy = 0;
var f_w_x = 0;
var f_w_y = 0;

let snakeBody = [];
let score = 0;

snakeCanvas.width = 500;
snakeCanvas.height = 500;
foodCanvas.width = 500;
foodCanvas.height = 500;

if(localStorage.getItem("speed")){
    var speed = Number(localStorage.getItem("speed"));
}else{
    var speed = 2;
}

function Snakefood() {
    if(Eaten){
        ctx_food.clearRect(f_w_x, f_w_y, 12, 12);
        snakeBody.push({x: pos_x, y: pos_y});
        Eaten = false;
    }
    f_w_x = Math.floor(Math.random() * 490);
    f_w_y = Math.floor(Math.random() * 490);

    for(let segment of snakeBody){
        if( segment.x < f_w_x + 12 &&
            f_w_x < segment.x + 12 &&
            segment.y < f_w_y + 12 &&
            f_w_y < segment.y + 12){
            Snakefood();
            return;
        }else{
            ctx_food.fillStyle = "red"; 
            ctx_food.strokeStyle = "blue"; 
            ctx_food.fillRect(f_w_x, f_w_y, 12, 12);
            Eaten = false;
        }
    }

}


function gameOver(){
    scoreBoard.hidden = true;
    playing = false;
    play.innerHTML = `Score:${score}`;
    play.hidden = false;
    playAgain.disabled = false;
    playAgain.hidden = false;
}