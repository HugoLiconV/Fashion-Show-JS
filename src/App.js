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
export const getDiagonals = (row, col, length) => {
	// let bRow = row;
	// let bCol = col;
	// const sum = Math.abs(bRow  - bCol);
	// if (bRow <= bCol) {
	// 	bRow = 0;
	// 	bCol = sum;
	// } else {
	// 	bRow = sum;
	// 	bCol = 0;
	// }
	// const max = Math.max(bRow, bCol);
	// for(let i = 0; i < (length - max) ; i++){
	// 	console.log(`${bRow + i} ${bCol + i}`);
	// }
	let bRow = row;
	let bCol = col;
	let repeticiones = length - (Math.abs(length - (bRow + bCol + 1)));
	const suma = bRow + bCol;
	if (suma < 5) {
		const resta = (length - 1) - bCol;
		bRow = suma;
		bCol = 0
	} else {
		const resta = (length - 1) - bRow;
		bRow += resta
		bCol -= resta;
	}
	
	for(let i = 0; i < repeticiones ; i++){
		console.log(`[${bRow - (bCol + i)},${bCol + i}]`);
	}
}

// NO ocupan la misma diagonal
export const solveBishops = (_grid) => {
	let grid = _grid.map(row => [...row]);
	// console.log(grid[1][2])
	getDiagonals(1, 3, 5);
	// const length = grid.length;
	// let columnAvailable = fillRange(0, length - 1);
	// let rowAvailable = [...columnAvailable];

	// for (let i = 0; i < length; i++) {
	// 	if(grid.indexOf(''))
	// 	// for (let j = 0; j < length; j++) {

	// 	// }
	// }
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
		if (index > -1){
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
export const fashionShow = () => {
	const bishops = getBishops(testGrid);
	const roocks = getRooks(testGrid);
	const solvedRoocks = solveRooks(roocks);
	const solveBishop = solveBishops(bishops);
};

fashionShow();
