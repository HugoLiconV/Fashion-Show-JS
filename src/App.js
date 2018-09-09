const fs = require("fs");
const lines = fs.readFileSync("./inputs/D-small-practice.in", "utf8").split("\n");
const outputFilePath = './output.txt'
const numberOfCases = parseInt(lines.shift());

let grid;
let gridSize;
let fashionPoints;
let modifications = new Array();
let results
let modelsInGrid;

/* ------ FAHION SHOW ------ */
export let testGrid = [
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
}

/** 
 * Get Diagonals in a N x N Matrix
 */
export const getDiagonals = (row, col, length, grid) => {
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
}

const fillRange = (start, end) => {
	return Array(end - start + 1).fill().map((_, index) => start + index);
};

export const solveRooks = (_grid) => {
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

function cleanOutputFile() {
	fs.writeFile(outputFilePath, '', (err) => {
		if (err) throw err;
	});
}


export function removeElemFromArray(array, elem) {
	return array.splice(array.indexOf(elem), 1);
}

function zip(a, b) {
	let arr = [];
	for (let key in a) arr.push([a[key], b[key]]);
	return arr;
}

function printMatrix(matrix) {
	matrix.map(row =>console.log(row.toString()));
}

export const fashionShow = () => {
	cleanOutputFile();
	for (let i = 0; i < 1; i++) {
		// grid = new Array();
		const line = lines.shift().split(' ')
		let [N, M] = line;
		N = parseInt(N);
		M = parseInt(M);
		fashionPoints = 0;
		modifications = new Array();
		results = new Array();

		// Create the Matrix
		let matrix = Array(N).fill().map(() => Array(N).fill('.'))
		let freeRows = fillRange(0, N - 1);
		let freeCols = fillRange(0, N - 1);
		let freePositiveDiag = fillRange(0, (2 * N) - 1);
		let freeNegativeDiag = fillRange(-(N - 1), N - 1);
		let modelsPlaced = new Array();

		for (let i = 0; i < M; i++) {
			const line = lines.shift().split(' ');
			let [model, R, C] = line;
			R = parseInt(R) - 1;
			C = parseInt(C) - 1;
			if (model === 'x' || model === 'o') {
				matrix[R][C] = model;
				removeElemFromArray(freeRows, R);
				removeElemFromArray(freeCols, C)
			}
			if (model === '+' || model === 'o') {
				matrix[R][C] = model;
				removeElemFromArray(freePositiveDiag, (R + C));
				removeElemFromArray(freeNegativeDiag, (R - C));
			}
		}
		for (let [R, C] of zip(freeRows, freeCols)) {
			if (matrix[R][C] == "+") {
				matrix[R][C] = "o"
				modelsPlaced.push([R, C])
			} else if (matrix[R][C] == ".") {
				matrix[R][C] = "x"
				modelsPlaced.push([R, C])
			}
		}
		printMatrix(matrix);
	}
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
