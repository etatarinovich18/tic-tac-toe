class TicTacToe {
    constructor() {
        this.currentPlayerSymbol = 'x';
        this.unoccupiedMarks = 0;
        this.playerWinner = null;
        this.board = [];
        var row = 3,
            col = 3;
        for (var i = 0; i < row; i++) {
            this.board[i] = [];
            for (var j = 0; j < col; j++) {
                this.board[i][j] = null;
                this.unoccupiedMarks++;
            }
        }
    }

    getCurrentPlayerSymbol() {
        return this.currentPlayerSymbol;
    }

    nextTurn(rowIndex, columnIndex) {
        this.rowIndex = rowIndex;
        this.columnIndex = columnIndex;

        if (this.currentPlayerSymbol == 'x') {
            if (this.board[this.rowIndex][this.columnIndex] == null) {
                this.board[this.rowIndex][this.columnIndex] = 'x';
                this.currentPlayerSymbol = 'o';
                this.unoccupiedMarks--;
            } else {
                this.currentPlayerSymbol = 'x';
            }
        } else { 
            if (this.board[this.rowIndex][this.columnIndex] == null) {
                this.board[this.rowIndex][this.columnIndex] = 'o';
                this.currentPlayerSymbol = 'x';
                this.unoccupiedMarks--;
            } else {
                this.currentPlayerSymbol = 'o';
            }
        }

        //added lookingForWinner (if he exists) because the nextTurn method without it was enormous 
        this.lookingForWinner(); 

    }

    isFinished() {
        if (this.unoccupiedMarks == 0 || this.playerWinner != null) {
            return true;
        } else {
            return false;
        }
    }
    
    getunoccupiedMarks() {
        return this.unoccupiedMarks;
    }
    
    getWinner() {
        return this.playerWinner;
    }

    noMoreTurns() {
        if (this.unoccupiedMarks == 0) {
            return true;
        } else {
            return false;
        }
    }

    isDraw() {
        if (this.unoccupiedMarks != 0 || this.playerWinner != null) {
            return false;
        } else {
            return true;
        }
    }

    getFieldValue(rowIndex, colIndex) {
        this.rowIndex = rowIndex;
        this.colIndex = colIndex;

        return this.board[this.rowIndex][this.colIndex];
    }

    lookingForWinner() {
        if ((this.board[0][0] == "x" && this.board[0][1] == "x" && this.board[0][2] == "x") ||
            (this.board[1][0] == "x" && this.board[1][1] == "x" && this.board[1][2] == "x") ||
            (this.board[2][0] == "x" && this.board[2][1] == "x" && this.board[2][2] == "x") ||
            (this.board[0][0] == "x" && this.board[1][0] == "x" && this.board[2][0] == "x") ||
            (this.board[0][1] == "x" && this.board[1][1] == "x" && this.board[2][1] == "x") ||
            (this.board[0][2] == "x" && this.board[1][2] == "x" && this.board[2][2] == "x") ||
            (this.board[0][0] == "x" && this.board[1][1] == "x" && this.board[2][2] == "x") ||
            (this.board[2][0] == "x" && this.board[1][1] == "x" && this.board[0][2] == "x")) {
                this.playerWinner = 'x';
        }  else if ((this.board[0][0] == "o" && this.board[0][1] == "o" && this.board[0][2] == "o") ||
                    (this.board[1][0] == "o" && this.board[1][1] == "o" && this.board[1][2] == "o") ||
                    (this.board[2][0] == "o" && this.board[2][1] == "o" && this.board[2][2] == "o") ||
                    (this.board[0][0] == "o" && this.board[1][0] == "o" && this.board[2][0] == "o") ||
                    (this.board[0][1] == "o" && this.board[1][1] == "o" && this.board[2][1] == "o") ||
                    (this.board[0][2] == "o" && this.board[1][2] == "o" && this.board[2][2] == "o") ||
                    (this.board[0][0] == "o" && this.board[1][1] == "o" && this.board[2][2] == "o") ||
                    (this.board[2][0] == "o" && this.board[1][1] == "o" && this.board[0][2] == "o")) {
                        this.playerWinner = 'o';
        } else {
            this.playerWinner = null;
        }
    }

}

module.exports = TicTacToe;
