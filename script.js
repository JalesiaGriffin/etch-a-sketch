/*
1. Create the grid (16x16)
2. Set up "hover" effect
3. Clear grid
4. Ask user for number of squares
*/

const gameContainer = document.getElementById('game-container')

function makeCells(numCells) {
    for (let d = 0; d < numCells; d++) {
        const cells = document.createElement('div')
        gameContainer.appendChild(cells).className = 'cells'
         
    }
}
    
makeCells(256);

