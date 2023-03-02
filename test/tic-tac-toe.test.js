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
});