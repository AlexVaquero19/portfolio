class Board {
    constructor() {
        this.board = Array(9).fill(null);
        this.currentPlayer = 'X';
    }

    render() {
        const boardElement = document.createElement('div');
        boardElement.className = 'board';

        this.board.forEach((cell, index) => {
            const cellElement = document.createElement('div');
            cellElement.className = 'cell';
            cellElement.innerHTML = cell;
            cellElement.addEventListener('click', () => this.handleClick(index));
            boardElement.appendChild(cellElement);
        });

        return boardElement;
    }

    handleClick(index) {
        if (!this.board[index]) {
            this.board[index] = this.currentPlayer;
            this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X';
            this.render();
        }
    }
}

class Game {
    constructor() {
        this.board = new Board();
        this.currentPlayer = 'X';
        this.gameOver = false;
        this.isComputer = false;
        this.xWins = 0;
        this.oWins = 0;
        this.draws = 0;
        this.init();
    }

    init() {
        document.getElementById('play-friend').addEventListener('click', () => this.startGame(false));
        document.getElementById('play-computer').addEventListener('click', () => this.startGame(true));
        this.startGame(false); // Set "Play with Friend" as default
    }

    startGame(isComputer) {
        this.isComputer = isComputer;
        this.resetGame();
        this.board.render();
        this.addEventListeners();
        this.updateModeDisplay();
        this.updateCurrentPlayerDisplay();
    }

    resetGame() {
        this.board = new Board();
        this.currentPlayer = 'X';
        this.gameOver = false;
        document.getElementById('message').textContent = '';
        document.querySelectorAll('.cell').forEach(cell => cell.innerHTML = '');
        this.updateCurrentPlayerDisplay();
    }

    addEventListeners() {
        const cells = document.querySelectorAll('.cell');
        cells.forEach(cell => {
            cell.addEventListener('click', (event) => this.handleCellClick(event));
        });
    }

    handleCellClick(event) {
        if (this.gameOver) return;

        const cell = event.target;
        if (cell.innerHTML === '') {
            cell.innerHTML = this.currentPlayer === 'X' ? '<i class="fas fa-times"></i>' : '<i class="far fa-circle"></i>';
            if (this.checkWin()) {
                this.showMessage(`${this.currentPlayer} wins!`, 'win');
                this.updateScore(this.currentPlayer);
                this.gameOver = true;
            } else if (this.checkDraw()) {
                this.showMessage("It's a draw!", 'draw');
                this.updateScore('draw');
                this.gameOver = true;
            } else {
                this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X';
                this.updateCurrentPlayerDisplay();
                if (this.isComputer && this.currentPlayer === 'O') {
                    this.computerMove();
                }
            }
        }
    }

    computerMove() {
        const emptyCells = Array.from(document.querySelectorAll('.cell')).filter(cell => cell.innerHTML === '');
        const randomCell = emptyCells[Math.floor(Math.random() * emptyCells.length)];
        randomCell.innerHTML = this.currentPlayer === 'X' ? '<i class="fas fa-times"></i>' : '<i class="far fa-circle"></i>';
        if (this.checkWin()) {
            this.showMessage(`${this.currentPlayer} wins!`, 'win');
            this.updateScore(this.currentPlayer);
            this.gameOver = true;
        } else if (this.checkDraw()) {
            this.showMessage("It's a draw!", 'draw');
            this.updateScore('draw');
            this.gameOver = true;
        } else {
            this.currentPlayer = 'X';
            this.updateCurrentPlayerDisplay();
        }
    }

    showMessage(message, type) {
        const messageElement = document.getElementById('message');
        messageElement.textContent = message;
        messageElement.className = `mt-6 text-xl font-semibold ${type === 'win' ? 'text-green-500' : type === 'lose' ? 'text-red-500' : 'text-gray-800'}`;
    }

    updateModeDisplay() {
        const modeElement = document.getElementById('mode');
        modeElement.textContent = `Mode: ${this.isComputer ? 'Play with Computer' : 'Play with Friend'}`;
        document.getElementById('play-friend').classList.toggle('bg-blue-700', !this.isComputer);
        document.getElementById('play-computer').classList.toggle('bg-green-700', this.isComputer);
    }

    updateCurrentPlayerDisplay() {
        const currentPlayerElement = document.getElementById('current-player');
        currentPlayerElement.textContent = `Current Player: ${this.currentPlayer}`;
    }

    updateScore(winner) {
        if (winner === 'X') {
            this.xWins++;
            document.getElementById('x-wins').textContent = `X Wins: ${this.xWins}`;
        } else if (winner === 'O') {
            this.oWins++;
            document.getElementById('o-wins').textContent = `O Wins: ${this.oWins}`;
        } else {
            this.draws++;
            document.getElementById('draws').textContent = `Draws: ${this.draws}`;
        }
    }

    checkWin() {
        const winningCombinations = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];
        const cells = Array.from(document.querySelectorAll('.cell')).map(cell => cell.innerHTML);
        return winningCombinations.some(combination => {
            return combination.every(index => cells[index].includes(this.currentPlayer === 'X' ? 'fa-times' : 'fa-circle'));
        });
    }

    checkDraw() {
        const cells = Array.from(document.querySelectorAll('.cell')).map(cell => cell.innerHTML);
        return cells.every(cell => cell !== '');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new Game();
});