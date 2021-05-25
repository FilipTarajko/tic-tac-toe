let display = document.querySelector('#display')
let startMessage = "Press any cell to start!"
let turn = 1;
let gameOver = false;
let player1cells = Array[5];
let player2cells = Array[4];
let player1Message = "Player1's turn!"
let player2Message = "Player2's turn!"
display.textContent = startMessage
const contentGrid = document.querySelector("#grid");
cells = document.querySelectorAll('.cell')
cells.forEach((cell)=>{
    cell.addEventListener('click', buttonPress);
});

function buttonPress(e){
    console.log("17")
    console.log("textcontent? "+e.target.textContent)
    console.log("gameover? "+gameOver)
    if(e.target.textContent=="" && !(gameOver))
    {
        console.log("20")
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
}

function testForWin(char){
    console.log(turn);
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
        console.log("54")
        tieGame();
    }
    turn+=1;
}

function winGame()
{
    display.textContent = (turn%2==1 ? 'Player1' : 'Player2') + " won!";
    console.log("winGame")
    gameOver = true;
}

function tieGame()
{
    display.textContent = "Tie!";
    console.log("tieGame")
    gameOver = true;
}

function resetGame(){
    cells.forEach((cell)=>
    {
        cell.textContent = " ";
    })
}