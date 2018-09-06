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
	let isFinished = true;
	let i = (gridSize - 1);
	while (i >= 0) {
		let j = (gridSize - 1);
		while (j >= 0) {
			const cell = grid[i][j];
			if (cell === '.') {
				grid[i][j] = '+';
				getDiagonals(i, j, gridSize, grid);
				j = 0;
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

export const mergeGrids = (solvedRoocks, solveBishop) => {
	const length = solvedRoocks.length;
	const mergedGrid = Array(length).fill().map(()=>Array(length).fill())
	for (let i = 0; i < length; i++) {
		for (let j = 0; j < length; j++) {
			const roockCell = solvedRoocks[i][j];
			const bishopCell = solveBishop[i][j];
			if(roockCell === '.' && bishopCell === '+'){
				mergedGrid[i][j] = bishopCell;
			} else if (roockCell === 'x' && bishopCell !== '+') {
				mergedGrid[i][j] = roockCell;
			} else if (roockCell === 'x' && bishopCell === '+') {
				mergedGrid[i][j] = 'o'
			}else {
				mergedGrid[i][j] = '.';
			}
		}
	}
	return mergedGrid
}
export const fashionShow = () => {
	const bishops = getBishops(testGrid);
	const roocks = getRooks(testGrid);
	const solvedRoocks = solveRooks(roocks);
	const solveBishop = solveBishops(bishops);
	const mergedGrid = mergeGrids(solvedRoocks, solveBishop);
	console.log('------RESULT-----');
	console.log(mergedGrid);
	return mergedGrid;
};

fashionShow();
