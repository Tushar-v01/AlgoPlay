let gameContainer=document.querySelector(".game-container");
let scoreContainer=document.querySelector(".score-container");

let foodX,foodY,headX=12,headY=12;
let velocityX=0,velocityY=0;
let snake=[[]];
let score=0;

function generateFood()
{
     foodX=Math.floor((Math.random()*25)+1);
     foodY=Math.floor((Math.random()*25)+1);
     for(let i=0;i<snake.length;i++)
     {
        if(snake[i][1]==foodY&&snake[i][0]==foodX)
        {
            generateFood();
        }
     }
     
}

function gameOver()
{
    headY=12;
    headX=12;
    velocityX=0;
    velocityY=0;
    score=0;
    scoreContainer.innerHTML=`Score: ${score}`;
    alert("Game Over");
    
    generateFood();
    snake=[[]];

}
function renderGame()
{
    let updateGame=`<div class="food" style="grid-area:${foodY}/${foodX};"></div>`;
    
    if(foodX==headX&&foodY==headY)
        {
            snake.push([headX,headY]);
            score+=10;
            scoreContainer.innerHTML=`Score: ${score}`;
            generateFood();
        }
        headX+=velocityX;
        headY+=velocityY;
        snake.pop();
        snake.unshift([headX,headY]);
        console.log(4);
    if(headX==0||headY==0||headX==26||headY==26)
    {
        gameOver();
    }
    for(let i=1;i<snake.length;i++)
        {
            console.log(5);
            console.log(snake);
           if((snake[i][1]==snake[0][1])&&(snake[i][0]==snake[0][0]))
           {
              console.log(snake[i][1]);
              console.log(snake[i][0]);
              gameOver();
           }
        }
    for(let i=0;i<snake.length;i++)
    {
       updateGame+=`<div class="snake" style="grid-area:${snake[i][1]}/${snake[i][0]};"></div>`;
    }
    
    gameContainer.innerHTML=updateGame;
}

generateFood();
setInterval(renderGame,150);

document.addEventListener("keydown",(e)=>{
    // console.log(e.key);
    if(e.key=="ArrowUp"&&!velocityY)
    {
        velocityY=-1;
        velocityX=0;
    }
    else  if(e.key=="ArrowDown"&&!velocityY)
        {
            velocityY=1;
            velocityX=0;
        }
    else  if(e.key=="ArrowLeft"&&!velocityX)
        {
            velocityY=0;
            velocityX=-1;
        }
    else if(e.key=="ArrowRight"&&!velocityX)
        {
            velocityY=0;
            velocityX=1;
        }

})