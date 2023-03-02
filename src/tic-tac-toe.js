const PLAYER_X ='X';
const PLAYER_O = 'O';
const SIZE = 3;

class TicTacToe {
    board;
    player;
    winner;
    resultMessage;

    constructor(){
        this.board = this.createGameBoard();
        this.player = PLAYER_X;
    }

    createGameBoard(){
        return Array(SIZE).fill().map(() => Array(SIZE).fill(''));
    }

    getNextEmptyLocation(){
        let [newRow,newCol] = this.getNewRandomLocation();
        while(this.board[newRow][newCol] !== ''){
            [newRow,newCol] = this.getNewRandomLocation();
        }

        return [newRow,newCol];
    }
    getNewRandomLocation(){
        return [Math.floor(Math.random() * SIZE),Math.floor(Math.random() * SIZE)];
    }

    markPosition(){
        this.board[row][col] = this.player;
        
    }

}

module.exports = {
    TicTacToe,
    PLAYER_X,
    PLAYER_O,
    SIZE
}