const contentGrid = document.querySelector("#grid");
let textArray = new Array("X","O","X","O","X","O","X","O","X");

for (let i=0; i<9; i++)
{
    let newButton = document.createElement("button");
    newButton.textContent = textArray[i];
    newButton.classList.add("cell");
    contentGrid.appendChild(newButton);
}