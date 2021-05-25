let display = document.querySelector('#display')
let mainContainer = document.querySelector('#mainContainer')
let startMessage = "Press any cell to start!"
let turn = 1;
let gameOver = false;
let player1cells = Array[5];
let player2cells = Array[4];
let player1Message = "Player1's turn!"
let player2Message = "Player2's turn!"
let restartInfoMessage = "Press any cell to restart."
display.textContent = startMessage
const contentGrid = document.querySelector("#grid");
cells = document.querySelectorAll('.cell')
cells.forEach((cell)=>{
    cell.addEventListener('click', buttonPress);
});

function buttonPress(e){
    if(e.target.textContent=="" && !(gameOver))
    {
        if(turn%2==1)
        {
            e.target.textContent = ('X');
            display.textContent = player2Message
            testForWin('X')
        }
        else
        {
            e.target.textContent = ('O');
            display.textContent = player1Message
            testForWin('O')
        }
    }
    else if(gameOver)
    {
        resetGame();
    }
}

function testForWin(char){
    for(let i=0;i<3;i++)
    {
        if(cells[3*i+0].textContent==char&&cells[3*i+1].textContent==char&&cells[3*i+2].textContent==char ||
            cells[i+0].textContent==char&&cells[i+3].textContent==char&&cells[i+6].textContent==char)
        {
            winGame();
            return;
        }
    }
    if(cells[0].textContent==char&&cells[4].textContent==char&&cells[8].textContent==char ||
        cells[2].textContent==char&&cells[4].textContent==char&&cells[6].textContent==char)
    {
        winGame(char);
        return;
    }
    if(turn==9)
    {
        tieGame();
    }
    turn+=1;
}

function winGame()
{
    display.textContent = (turn%2==1 ? 'Player1' : 'Player2') + " won! "+restartInfoMessage;
    gameOver = true;
    mainContainer.id = 'mainContainerBigger'
}

function tieGame()
{
    display.textContent = "Tie! "+restartInfoMessage;
    gameOver = true;
    mainContainer.id = 'mainContainerBigger'
}

function resetGame(){
    cells.forEach((cell)=>
    {
        cell.textContent = "";
    })
    turn = 1;
    gameOver = false;
    mainContainer.id = 'mainContainer'
    display.textContent = startMessage;
}