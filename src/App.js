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
				grid[tempRow][tempCol] = Infinity;
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
	grid
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

export const fashionShow = () => {
	cleanOutputFile();
	for (let i = 0; i < numberOfCases; i++) {
		grid = new Array();
		const line = lines.shift().split(' ')
		fashionPoints = 0;
		modifications = new Array();
		results = new Array();
		gridSize = parseInt(line[0])
		modelsInGrid = parseInt(line[1]);

		grid = Array(gridSize).fill().map(() => Array(gridSize).fill('.'))
		for (let i = 0; i < modelsInGrid; i++) {
			const line = lines.shift().split(' ');
			const figure = line.shift();
			const x = line.shift();
			const y = line.shift();
			grid[x - 1][y - 1] = figure;
		}
		const bishops = getBishops(grid);
		const roocks = getRooks(grid);
		const solvedRoocks = solveRooks(roocks);
		solvedRoocks
		const solvedBishop = solveBishops(bishops);
		const mergedGrid = mergeGrids(solvedRoocks, solvedBishop, grid);
		// console.log('------RESULT-----');
		// console.log(mergedGrid);
		// console.log(`Case #${(i + 1)}: ${fashionPoints} ${modifications.length}\n`)
		fs.appendFile(outputFilePath, `Case #${(i + 1)}: ${fashionPoints} ${modifications.length}\n`,  (err) => {
		  if (err) throw err;
		});
		modifications.reverse();
		for (let modification of modifications) {
		  fs.appendFile(outputFilePath, `${modification}\n`, (err) => {
		    if (err) throw err;
		  });
		}
	}
	// return mergedGrid;
};

fashionShow();
