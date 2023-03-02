const {TicTacToe, PLAYER_X, PLAYER_O, SIZE} = require('../src/tic-tac-toe.js');

describe('TicTacToe', () => {
    beforeEach(() => {
        game = new TicTacToe();
    });
    describe('Game Start', () => {
        test('Board should be created with 3x3', () => {
            const ROWS = game.board.length;
            const COLUMNS = game.board[0].length;
            expect(ROWS).toEqual(SIZE);
            expect(COLUMNS).toEqual(SIZE); 
        });
        test('Game should start with Player X', () => {
            expect(game.player).toBe(PLAYER_X);
        });
    });
    describe('Game Play', () => {
        beforeEach(() => {
            [row,col] = game.getNextEmptyLocation();
        });
        test('should generate next empty location', () => {
            expect(game.board[row][col]).toBe('');
        });
        test('should place current player-s symbol in new found location', () => {
            const currentPlayer = game.player;
            game.markPosition(row,col);
            expect(game.board[row][col]).toBe(currentPlayer); 
            expect(game.player).not.toEqual(currentPlayer);
        });
    });

    describe('Game Win', () => {
        describe('Vertical win for Player X', () => {
            beforeEach(() => {
                game.markPosition(1,1);
                game.markPosition(0,0);
                game.markPosition(0,1);
                game.markPosition(1,0);
                game.markPosition(2,0);
            });
            test('Return true when Player X won vertically', () => {
                expect(game.wonVertically()).toBe(true);
            });
            test('Should return true if game is over', () => {
                expect(game.isGameOver()).toBe(true);
            });
        });
        describe('Vertical win for Player O', () => {
            beforeEach(() => {
                game.markPosition(0,0);
                game.markPosition(1,1);
                game.markPosition(0,1);
                game.markPosition(1,0);
                game.markPosition(2,2);
                game.markPosition(2,0);
            });
            test('Return true when Player O wins vertically', () => {
                expect(game.wonVertically()).toBe(true);
            });
            test('Should return true when game is over',() => {
                expect(game.isGameOver()).toBe(true);
            });
        });
    });
});