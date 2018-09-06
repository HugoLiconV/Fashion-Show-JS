'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

/* ------ FAHION SHOW ------ */
var testGrid = exports.testGrid = [['+', '.', '.'], ['+', '.', 'o'], ['x', '.', '.']];

// Alfil +
var getBishops = exports.getBishops = function getBishops(_grid) {
	var grid = _grid.map(function (row) {
		return [].concat(_toConsumableArray(row));
	});
	var gridSize = grid.length;
	for (var i = 0; i < gridSize; i++) {
		for (var j = 0; j < gridSize; j++) {
			var cell = grid[i][j];
			if (cell === 'o') {
				grid[i][j] = '+';
			} else if (cell === 'x') {
				grid[i][j] = '.';
			}
		}
	}
	return grid;
};
// Torre x
var getRooks = exports.getRooks = function getRooks(_grid) {
	var grid = _grid.map(function (row) {
		return [].concat(_toConsumableArray(row));
	});
	var gridSize = grid.length;
	for (var i = 0; i < gridSize; i++) {
		for (var j = 0; j < gridSize; j++) {
			var cell = grid[i][j];
			if (cell === 'o') {
				grid[i][j] = 'x';
			} else if (cell === '+') {
				grid[i][j] = '.';
			}
		}
	}
	return grid;
};

/** 
 * Get Diagonals in a N x N Matrix
 */
var getDiagonals = exports.getDiagonals = function getDiagonals(row, col, length, grid) {
	// let grid = _grid.map(row => [...row]);

	function clockWiseDiagonal() {
		var bRow = row;
		var bCol = col;
		var sum = Math.abs(bRow - bCol);
		if (bRow <= bCol) {
			bRow = 0;
			bCol = sum;
		} else {
			bRow = sum;
			bCol = 0;
		}
		var max = Math.max(bRow, bCol);
		for (var i = 0; i < length - max; i++) {
			// console.log(`${bRow + i} ${bCol + i}`);
			var tempRow = bRow + i;
			var tempCol = bCol + i;
			if (tempRow !== row && tempCol !== col) {
				grid[tempRow][tempCol] = Infinity;
			}
		}
	}

	function anticlockwise() {
		var bRow = row;
		var bCol = col;
		var repeticiones = length - Math.abs(length - (bRow + bCol + 1));
		var suma = bRow + bCol;
		if (suma < length) {
			bRow = suma;
			bCol = 0;
		} else {
			var resta = length - 1 - bRow;
			bRow += resta;
			bCol -= resta;
		}
		for (var i = 0; i < repeticiones; i++) {
			var tempRow = void 0;
			var tempCol = void 0;
			if (suma < length) {
				// console.log(`[${bRow - (bCol + i)},${bCol + i}]`);
				tempRow = bRow - (bCol + i);
				tempCol = bCol + i;
				if (tempRow !== row && tempCol !== col) {
					grid[tempRow][tempCol] = Infinity;
				}
			} else {
				// console.log(`[${bRow - i},${bCol + i}]`);
				tempRow = bRow - i;
				tempCol = bCol + i;
				if (tempRow !== row && tempCol !== col) {
					grid[tempRow][tempCol] = Infinity;
				}
			}
		}
	}
	clockWiseDiagonal();
	anticlockwise();
	return grid;
};

// NO ocupan la misma diagonal
var solveBishops = exports.solveBishops = function solveBishops(_grid) {
	var grid = _grid.map(function (row) {
		return [].concat(_toConsumableArray(row));
	});
	var gridSize = grid.length;
	for (var _i = 0; _i < gridSize; _i++) {
		for (var j = 0; j < gridSize; j++) {
			var cell = grid[_i][j];
			if (cell === '+') {
				getDiagonals(_i, j, gridSize, grid);
			}
		}
	}
	var isFinished = true;
	var i = gridSize - 1;
	while (i >= 0) {
		var _j = gridSize - 1;
		while (_j >= 0) {
			var _cell = grid[i][_j];
			if (_cell === '.') {
				grid[i][_j] = '+';
				getDiagonals(i, _j, gridSize, grid);
				_j = 0;
				i = gridSize - 1;
			}
			_j--;
		}
		i--;
	}
	return grid;
};

var fillRange = function fillRange(start, end) {
	return Array(end - start + 1).fill().map(function (_, index) {
		return start + index;
	});
};

var solveRooks = exports.solveRooks = function solveRooks(_grid) {
	var grid = _grid.map(function (row) {
		return [].concat(_toConsumableArray(row));
	});
	var length = grid.length;
	var columnAvailable = fillRange(0, length - 1);
	var rowAvailable = [].concat(_toConsumableArray(columnAvailable));

	for (var i = 0; i < length; i++) {
		var row = grid[i];
		var index = row.indexOf('x');
		if (index > -1) {
			rowAvailable[i] = Infinity;
			columnAvailable[index] = Infinity;
		}
	}
	rowAvailable = rowAvailable.filter(function (val) {
		return isFinite(val);
	});
	columnAvailable = columnAvailable.filter(function (val) {
		return isFinite(val);
	});
	for (var _i2 = 0; _i2 < columnAvailable.length; _i2++) {
		var j = rowAvailable[_i2];
		var k = columnAvailable[_i2];
		grid[j][k] = 'x';
	}
	grid;
	return grid;
};

var mergeGrids = exports.mergeGrids = function mergeGrids(solvedRoocks, solveBishop) {
	var length = solvedRoocks.length;
	var mergedGrid = Array(length).fill().map(function () {
		return Array(length).fill();
	});
	for (var i = 0; i < length; i++) {
		for (var j = 0; j < length; j++) {
			var roockCell = solvedRoocks[i][j];
			var bishopCell = solveBishop[i][j];
			if (roockCell === '.' && bishopCell === '+') {
				mergedGrid[i][j] = bishopCell;
			} else if (roockCell === 'x' && bishopCell !== '+') {
				mergedGrid[i][j] = roockCell;
			} else if (roockCell === 'x' && bishopCell === '+') {
				mergedGrid[i][j] = 'o';
			} else {
				mergedGrid[i][j] = '.';
			}
		}
	}
	return mergedGrid;
};
var fashionShow = exports.fashionShow = function fashionShow() {
	var bishops = getBishops(testGrid);
	var roocks = getRooks(testGrid);
	var solvedRoocks = solveRooks(roocks);
	var solveBishop = solveBishops(bishops);
	var mergedGrid = mergeGrids(solvedRoocks, solveBishop);
	console.log('------RESULT-----');
	console.log(mergedGrid);
	return mergedGrid;
};

fashionShow();
