function update() {
    scoreBoard.innerHTML = `Score: ${score}`
    setTimeout(() => {
        ctx_snake.clearRect(0, 0, snakeCanvas.width, snakeCanvas.height);
        ctx_snake.fillStyle = "green"; 
        pos_x += vx * speed;
        pos_y += vy * speed;


        for(let i=snakeBody.length-1; i>0; i--){
            snakeBody[i] = {...snakeBody[i-1]};
        }
        snakeBody[0] = {x: pos_x, y: pos_y}


        for(let segment of snakeBody){
            ctx_snake.fillRect(segment.x, segment.y, 12, 12);
        }
        for(let i=1; i<snakeBody.length; i++){
            if( pos_x == snakeBody[i].x && pos_y == snakeBody[i].y){
                scoreBoard.hidden = true;
                gameOver();
                playAgain_phase = true;
                return;
                }
        }


    scoreBoard.hidden = false;


        requestAnimationFrame(update);
    }, 1000 / 60);


    if( pos_x < f_w_x + 12 &&
        f_w_x < pos_x + 12 &&
        pos_y < f_w_y + 12 &&
        f_w_y < pos_y + 12   ){
            Eaten = true;
            Snakefood();
            score += 1*speed;
        }
    
    if(pos_x < 0 || pos_y < 0 ||
        pos_x > 490 || pos_y > 490){
            gameOver();
            playAgain_phase = true;
    }
}
