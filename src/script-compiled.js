"use strict";

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var fs = require("fs");
var lines = fs.readFileSync("./inputs/D-small-practice.in", "utf8").split("\n");
var outputFilePath = './output.txt';
var numberOfCases = parseInt(lines.shift());

var grid = void 0;
var gridSize = void 0;
var fashionPoints = void 0;
var modifications = new Array();
var results = void 0;
var modelsInGrid = void 0;

/* ------ FAHION SHOW ------ */
/* export let testGrid = [
	['+', '.', '.'],
	['+', '.', 'o'],
	['x', '.', '.']
]

// Alfil +
export const getBishops = (_grid) => {
	let grid = _grid.map(row => [...row]);
	let gridSize = grid.length;
	for (let i = 0; i < gridSize; i++) {
		for (let j = 0; j < gridSize; j++) {
			const cell = grid[i][j];
			if (cell === 'o') {
				grid[i][j] = '+'
			} else if (cell === 'x') {
				grid[i][j] = '.';
			}
		}
	}
	return grid;
}
// Torre x
export const getRooks = (_grid) => {
	let grid = _grid.map(row => [...row]);
	let gridSize = grid.length;
	for (let i = 0; i < gridSize; i++) {
		for (let j = 0; j < gridSize; j++) {
			const cell = grid[i][j];
			if (cell === 'o') {
				grid[i][j] = 'x'
			} else if (cell === '+') {
				grid[i][j] = '.';
			}
		}
	}
	return grid;
} */

/** 
 * Get Diagonals in a N x N Matrix
 */
/* export const getDiagonals = (row, col, length, grid) => {
	// let grid = _grid.map(row => [...row]);

	function clockWiseDiagonal() {
		let bRow = row;
		let bCol = col;
		const sum = Math.abs(bRow - bCol);
		if (bRow <= bCol) {
			bRow = 0;
			bCol = sum;
		} else {
			bRow = sum;
			bCol = 0;
		}
		const max = Math.max(bRow, bCol);
		for (let i = 0; i < (length - max); i++) {
			// console.log(`${bRow + i} ${bCol + i}`);
			const tempRow = bRow + i;
			const tempCol = bCol + i;
			if (tempRow !== row && tempCol !== col) {
				grid[tempRow][tempCol] = '-';
			}
		}
	}

	function anticlockwise() {
		let bRow = row;
		let bCol = col;
		let repeticiones = length - (Math.abs(length - (bRow + bCol + 1)));
		const suma = bRow + bCol;
		if (suma < length) {
			bRow = suma;
			bCol = 0
		} else {
			const resta = (length - 1) - bRow;
			bRow += resta
			bCol -= resta;
		}
		for (let i = 0; i < repeticiones; i++) {
			let tempRow;
			let tempCol;
			if (suma < length) {
				// console.log(`[${bRow - (bCol + i)},${bCol + i}]`);
				tempRow = bRow - (bCol + i);
				tempCol = bCol + i;
				if (tempRow !== row && tempCol !== col) {
					grid[tempRow][tempCol] = '-';
				}
			} else {
				// console.log(`[${bRow - i},${bCol + i}]`);
				tempRow = bRow - i;
				tempCol = bCol + i;
				if (tempRow !== row && tempCol !== col) {
					grid[tempRow][tempCol] = '-';
				}
			}
		}
	}
	clockWiseDiagonal();
	anticlockwise();
	return grid;
}

// NO ocupan la misma diagonal
export const solveBishops = (_grid) => {
	let grid = _grid.map(row => [...row]);
	let gridSize = grid.length;
	for (let i = 0; i < gridSize; i++) {
		for (let j = 0; j < gridSize; j++) {
			const cell = grid[i][j];
			if (cell === '+') {
				getDiagonals(i, j, gridSize, grid);
			}
		}
	}
	let i = (gridSize - 1);
	while (i >= 0) {
		let j = (gridSize - 1);
		while (j >= 0) {
			const cell = grid[i][j];
			if (cell === '.') {
				// console.log(`[${i} ${j}]`);
				grid[i][j] = '+';
				getDiagonals(i, j, gridSize, grid);
				j = (gridSize - 1);
				i = (gridSize - 1)
			}
			j--;
		}
		i--;
	}
	return grid;
} */

var fillRange = function fillRange(start, end) {
	return Array(end - start + 1).fill().map(function (_, index) {
		return start + index;
	});
};

/* export const solveRooks = (_grid) => {
	let grid = _grid.map(row => [...row]);
	const length = grid.length;
	let columnAvailable = fillRange(0, length - 1);
	let rowAvailable = [...columnAvailable];

	for (let i = 0; i < length; i++) {
		const row = grid[i];
		const index = row.indexOf('x')
		if (index > -1) {
			rowAvailable[i] = Infinity;
			columnAvailable[index] = Infinity;
		}
	}
	rowAvailable = rowAvailable.filter(val => isFinite(val));
	columnAvailable = columnAvailable.filter(val => isFinite(val));
	for (let i = 0; i < columnAvailable.length; i++) {
		const j = rowAvailable[i];
		const k = columnAvailable[i];
		grid[j][k] = 'x';
	}
	grid
	return grid;
}

export const mergeGrids = (solvedRoocks, solveBishop, grid) => {
	const length = solvedRoocks.length;
	const mergedGrid = Array(length).fill().map(() => Array(length).fill())
	for (let i = 0; i < length; i++) {
		for (let j = 0; j < length; j++) {
			const roockCell = solvedRoocks[i][j];
			const bishopCell = solveBishop[i][j];
			if (roockCell === '.' && bishopCell === '+') {
				fashionPoints++;
				mergedGrid[i][j] = bishopCell;
				if (mergedGrid[i][j] !== grid[i][j]) {
					modifications.push(`${bishopCell} ${i+1} ${j+1}`);
				}
			} else if (roockCell === 'x' && bishopCell !== '+') {
				mergedGrid[i][j] = roockCell;
				fashionPoints++;
				if (mergedGrid[i][j] !== grid[i][j]) {
					modifications.push(`${roockCell} ${i+1} ${j+1}`);
				}
			} else if (roockCell === 'x' && bishopCell === '+') {
				mergedGrid[i][j] = 'o'
				if (mergedGrid[i][j] !== grid[i][j]) {
					modifications.push(`o ${i+1} ${j+1}`);
				}
				fashionPoints += 2;
			} else {
				mergedGrid[i][j] = '.';
			}
		}
	}
	return mergedGrid
}
 */
function cleanOutputFile() {
	fs.writeFile(outputFilePath, '', function (err) {
		if (err) throw err;
	});
}

function removeElemFromArray(array, elem) {
	return array.splice(array.indexOf(elem), 1);
}

function zip(a, b) {
	var arr = [];
	for (var key in a) {
		arr.push([a[key], b[key]]);
	}return arr;
}

function printMatrix(matrix) {
	matrix.map(function (row, i) {
		return console.log(i + "\t" + row.toString());
	});
}

var fashionShow = function fashionShow() {
	cleanOutputFile();

	var _loop = function _loop(i) {
		// grid = new Array();
		var line = lines.shift().split(' ');

		var _line = _slicedToArray(line, 2),
		    N = _line[0],
		    M = _line[1];

		N = parseInt(N);
		M = parseInt(M);
		fashionPoints = 0;
		modifications = new Array();
		results = new Array();

		// Create the Matrix
		var matrix = Array(N).fill().map(function () {
			return Array(N).fill('.');
		});
		var freeRows = fillRange(0, N - 1);
		var freeCols = fillRange(0, N - 1);
		var freePositiveDiag = fillRange(0, 2 * N - 2);
		var freeNegativeDiag = fillRange(-(N - 1), N - 1);
		var modelsPlaced = new Array();
		var freeDiag = new Array();

		for (var _i = 0; _i < M; _i++) {
			var _line2 = lines.shift().split(' ');

			var _line3 = _slicedToArray(_line2, 3),
			    model = _line3[0],
			    R = _line3[1],
			    C = _line3[2];

			R = parseInt(R) - 1;
			C = parseInt(C) - 1;
			if (model === 'x' || model === 'o') {
				matrix[R][C] = model;
				removeElemFromArray(freeRows, R);
				removeElemFromArray(freeCols, C);
			}
			if (model === '+' || model === 'o') {
				matrix[R][C] = model;
				removeElemFromArray(freePositiveDiag, R + C);
				removeElemFromArray(freeNegativeDiag, R - C);
			}
		}
		var _iteratorNormalCompletion = true;
		var _didIteratorError = false;
		var _iteratorError = undefined;

		try {
			for (var _iterator = zip(freeRows, freeCols)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
				var _ref = _step.value;

				var _ref2 = _slicedToArray(_ref, 2);

				var _R = _ref2[0];
				var _C = _ref2[1];

				if (matrix[_R][_C] == "+") {
					matrix[_R][_C] = "o";
					modelsPlaced.push([_R, _C]);
				} else if (matrix[_R][_C] == ".") {
					matrix[_R][_C] = "x";
					modelsPlaced.push([_R, _C]);
				}
			}
		} catch (err) {
			_didIteratorError = true;
			_iteratorError = err;
		} finally {
			try {
				if (!_iteratorNormalCompletion && _iterator.return) {
					_iterator.return();
				}
			} finally {
				if (_didIteratorError) {
					throw _iteratorError;
				}
			}
		}

		for (var _R2 = 0; _R2 < N; _R2++) {
			for (var _C2 = 0; _C2 < N; _C2++) {
				if (!freeDiag.hasOwnProperty(_R2 + _C2)) {
					freeDiag[_R2 + _C2] = [[_R2, _C2]];
				} else {
					var arr = freeDiag[_R2 + _C2];
					arr.push([_R2, _C2]);
					freeDiag[_R2 + _C2] = arr;
				}
			}
		}

		var sortedIndex = orderByLength(freeDiag);
		console.log(sortedIndex.toString());
		for (var index = 0; index < sortedIndex.length; index++) {
			var _i2 = sortedIndex[index];
			var length = freeDiag[_i2].length - 1;
			if (!freePositiveDiag.includes(_i2)) {
				continue;
			}
			for (var j = length; j >= 0; j--) {
				var _freeDiag$_i2$j = _slicedToArray(freeDiag[_i2][j], 2),
				    _R3 = _freeDiag$_i2$j[0],
				    _C3 = _freeDiag$_i2$j[1];

				console.log("[" + _i2 + ", " + j + "]");
				if (freeNegativeDiag.includes(_R3 - _C3)) {
					if (matrix[_R3][_C3] === 'x') {
						matrix[_R3][_C3] = 'o';
						if (!containsSubArray(modelsPlaced, [_R3, _C3])) {
							modelsPlaced.push([_R3, _C3]);
						}
					} else if (matrix[_R3][_C3] === '.') {
						matrix[_R3][_C3] = '+';
						modelsPlaced.push([_R3, _C3]);
					}
					removeElemFromArray(freePositiveDiag, _R3 + _C3);
					removeElemFromArray(freeNegativeDiag, _R3 - _C3);
				}
				break;
			}
		}
		printMatrix(matrix);
	};

	for (var i = 0; i < 1; i++) {
		_loop(i);
	}

	function orderByLength(matrix) {
		var len = matrix.length;
		var indices = fillRange(0, len - 1);
		indices.sort(function (a, b) {
			var A = matrix[a].length;
			var B = matrix[b].length;
			if (A < B) {
				return -1;
			} else if (A > B) {
				return 1;
			} else {
				// a must be equal to b
				if (a < b) {
					return -1;
				} else if (a > b) {
					return 1;
				}
			}
			return 0;
		});
		console.log(indices.toString());
		return indices;
	}

	function containsSubArray(array, subArray) {
		return array.some(function (elem) {
			return elem.toString() === subArray.toString();
		});
	}
	// function
	// 	let bishops = getBishops(grid);
	// 	let roocks = getRooks(grid);
	// 	let solvedRoocks = solveRooks(roocks);
	// 	let solvedBishop = solveBishops(bishops);
	// 	console.log('------GRID-----');
	// 	grid.map(row => {
	// 		console.log(row.toString());
	// 	})


	// 	console.log('------BISHOP +-----');
	// 	solvedBishop.map(row => {
	// 		console.log(row.toString());
	// 	})


	// 	console.log('------ROOCKS X-----');
	// 	solvedRoocks.map(row => {
	// 		console.log(row.toString());
	// 	})

	// 	let mergedGrid = mergeGrids(solvedRoocks, solvedBishop, grid);
	// 	console.log('------RESULT-----');
	// 	mergedGrid.map(row => {
	// 		console.log(row.toString());
	// 	})
	// 	console.log(`Case #${(i + 1)}: ${fashionPoints} ${modifications.length}\n`)
	// 	fs.appendFile(outputFilePath, `Case #${(i + 1)}: ${fashionPoints} ${modifications.length}\n`,  (err) => {
	// 	  if (err) throw err;
	// 	});
	// 	// modifications.reverse();
	// 	for (let modification of modifications) {
	// 	  fs.appendFile(outputFilePath, `${modification}\n`, (err) => {
	// 	    if (err) throw err;
	// 	  });
	// 	}
	// }
	// return mergedGrid;
};

fashionShow();
