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
        this.switchPlayer();
    }

    switchPlayer(){
        if(this.player === PLAYER_X) {this.player = PLAYER_O;}
        else {this.player = PLAYER_X};
    }

    wonVertically(){
        const TOP = 0;
        const MIDDLE = 1;
        const BOTTOM = 2;

        for(let i = 0; i < SIZE; i++){
            if(this.board[TOP][i] !== '' || this.board[TOP][i] === this.board[MIDDLE][i] && this.board[MIDDLE][i] === this.board[BOTTOM][i]){
                this.winner = this.board[TOP][i];
                return true;
            }
        }
        return false;
    }

    isGameOver(){
        if(this.wonVertically()) {
            return true;
        }
        return false;
    }

}

module.exports = {
    TicTacToe,
    PLAYER_X,
    PLAYER_O,
    SIZE
}