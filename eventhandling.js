let goingRight;
let goingLeft;
let goingUp;
let goingDown;
addEventListener("keydown" , function(e){
    if(playing && playAgain_phase != true){

        if(e.code == "ArrowRight"){
            goingDown = false;
            goingUp = false;
            goingRight = true;
            if(goingLeft != true){
                vy = 0
                vx = 1
            }
        }

        if(e.code == "ArrowLeft"){
            goingDown = false;
            goingUp = false;
            goingLeft = true;
            if(goingRight != true){
                vy = 0
                vx = -1
            }
        }

        if(e.code == "ArrowUp"){
            goingLeft = false;
            goingRight = false;
            goingUp = true;
            if(goingDown != true){
                vx = 0
                vy = -1
            }
        }

        if(e.code == "ArrowDown"){
            goingLeft = false;
            goingRight = false;
            goingDown = true;
            if(goingUp != true){
                vx = 0
                vy = 1
            }
        }

    }
    if(!playing && playAgain_phase != true){
        if(e.code == "Enter"){
            Snakefood();
            update();
            play.hidden = true;
            playing = true;
        }
        
    }else if(playAgain_phase){
        if(e.code == "Enter"){
            this.location.reload();
        }
    }
})


playAgain_div.addEventListener("click", ()=>{
    if(playAgain_phase){
        location.reload();
    }
})