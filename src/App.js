// // REVERSE A STRING CHALLENGE
// // Return string in reverse
// export const reverseString = (str) => str =  str.split('').reverse().join('')


// // PALINDROME CHALLENGE
// // Return true if palindrome and false if not
// export const isPalindrome = (str) => {
//   str = str.toLowerCase()
//   str = str.replace(/\s/g, '')
//   const reverseString = str.split('').reverse().join('')
//   return reverseString === str;
// }

// // MAX CHARACTER CHALLENGE
// // Return the character that is most common in a string
// export const maxCharacter = (str) => {}

// // FIZZBUZZ CHALLENGE
// // Write a program that prints all the numbers from 1 to 100. 
// // For multiples of 3, instead of the number, print "Fizz", 
// // for multiples of 5 print "Buzz". 
// // For numbers which are multiples of both 3 and 5, print "FizzBuzz".
// export const fizzBuzz = () => {
//   for(let i = 1; i < 101; i++ ){
//     if (i%3===0 && i%5===0)
//       console.log('FizzBuzz');
//     else if(i%3==0)
//       console.log('Fizz');
//     else if (i%5==0)
//       console.log('Buzz');
//     else
//       console.log(i);
//   }
// }

// /* 
//   Note: Write a solution that only iterates over the string
//   once and uses O(1) additional memory, since this is what 
//   you would be asked to do during a real interview.

//   Given a string s, find and return the first instance of a 
//   non-repeating character in it. If there is no such character, 
//   return '_'.
//  */
// export const firstNotRepeatingCharacter = (s) => {
//   for (let index = 0; index < s.length; index++) {
//     let character = s[index]
//     let slicedString = s.slice(0,index) + s.slice(index+1);
//     if(!slicedString.includes(character)) 
//       return character   
//   }
//   return '_' 
// }

// firstNotRepeatingCharacter('abacabad')


// /* 
// Note: Try to solve this task in-place (with O(1) additional memory), 
// since this is what you'll be asked to do during an interview.

// You are given an n x n 2D matrix that represents an image. 
// Rotate the image by 90 degrees (clockwise).
//  */
// export const rotateImage = (a) => {
//   const length = a.length
//   const result = [];
//   for (let i = 0; i < length; i++){
//     const tempArray = []
//     for (let j = 0; j < length; j++) {
//       const data = a[j][i];
//       tempArray.push(data)
//     }
//     result.push(tempArray.reverse())
//   }
//   return result
// }

// let a = [[1,2,3], 
//          [4,5,6], 
//          [7,8,9]]
// rotateImage(a);


// /* 
// Implement an algorithm that will check whether the given grid of 
// numbers represents a valid Sudoku puzzle according to the layout 
// rules described above. Note that the puzzle represented by grid 
// does not have to be solvable.
// */
// export const sudoku2 = (grid) =>  {
//   // grid
// // grid.length
//   for (let i = 0; i < grid.length; i++) {
//     const row = grid[i];
//     let rowSet = new Set();
//     let columnSet = new Set();
//     for (let j = 0; j < row.length; j++) {
//       const elementRow = row[j];
//       const elementColumn = grid[j][i]
//       console.log(elementColumn !== '.' ? 'hola' : ' ');
//       columnSet
//       j
//       if(elementRow !== '.'){
//         if(rowSet.has(elementRow)){
//           return false
//         }
//         rowSet.add(elementRow)
//       } 
//       if (elementColumn !== '.'){
//         elementColumn
//         j
//         console.log(columnSet.has(elementColumn));
//         if(columnSet.has(elementColumn)){
//           return false
//         }
//         columnSet.add(elementColumn)
//       }
//     }
//   }

//   for (let index = 0; index < 3; index++) {
//     for (let k = 0; k < 3; k++) {
//       let i = (k * 3)
//       let limitI = i + 3
//       console.log(index%3);
//       i
//       limitI
//       let gridSet = new Set();
//           // recorremos rows de 3 x 3
//       for (i; i < limitI; i++) {
//         let j = (index * 3)
//         let limitJ = j + 3
//         for (j; j < limitJ; j++) {
//           console.log(j);
//           let elem = grid[i][j]
//           console.log(elem);
//           if(elem !== '.'){
//             elem
//             if(gridSet.has(elem)){
//               return false
//             }
//             gridSet.add(elem)
//           }
//         }
//       }
//     }
//   }
//   return true
// }

// let input = 
// [[".",".","4",".",".",".","6","3","."], 
//  [".",".",".",".",".",".",".",".","."], 
//  ["5",".",".",".",".",".",".","9","."], 
//  [".",".",".","5","6",".",".",".","."], 
//  ["4",".","3",".",".",".",".",".","1"], 
//  [".",".",".","7",".",".",".",".","."], 
//  [".",".",".",".",".",".",".",".","."], 
//  [".",".",".",".",".",".",".",".","."], 
//  [".",".",".",".",".",".",".",".","."]]


// let isvalid = sudoku2(input)

// export var called = 0;
// export var hash = (string) => {
//   called++;
//   var hash = 0;
//   for (var i = 0; i < string.length; i++) {
//     hash += string.charCodeAt(i);
//   }
//   return hash;
// };
// export var HashTable = function () {
//   this.collection = {};
//   // change code below this line
//   this.add = function (key, value) {
//     let hashedKey = hash(key)
//     console.log(this.collection[hashedKey]);
//     // console.log(this.lookup(key));
//     if (this.collection[hashedKey]) {
//       console.log('ya existe');
//       //regresa un  objeto
//       let newObject = new Object();
//       newObject[hashedKey] = {};
//       newObject[hashedKey][key] = {key, value}
//       // this.collection[hashedKey] = {}
//       this.collection[hashedKey] = {
//         ...this.collection[hashedKey],
//         ...newObject[hashedKey]
//       }
//       return (this.collection[hashedKey][key].value);
//     } else {
//       this.collection[hashedKey] = {};
//       this.collection[hashedKey][key] = {
//         key,
//         value
//       };
//       return (this.collection[hashedKey][key].value)
//     }
//   }

//   this.remove = function (key) {
//     let hashedKey = hash(key)
//     delete this.collection[hashedKey]
//   }

//   this.lookup = function (key) {
//     let hashedKey = hash(key)
//     let result = null
//     if (this.collection[hashedKey]) {
//       if (this.collection[hashedKey][key]) {
//         result = this.collection[hashedKey][key].value
//       } else {
//         result = this.collection[hashedKey]
//       }
//     }
//     return result;
//   }
//   // change code above this line
// };

// let hashTable = new HashTable();
// console.log(hashTable.add('key1', 'value1'))
// console.log(hashTable.add('1key', 'value2'))
// console.log(hashTable.add('ke1y', 'value3'))
// console.log(hashTable.add('hoola', 'jaja'))
// console.log(hashTable.lookup('key1'));
// console.log(hashTable.lookup('1key'));
// console.log(hashTable.lookup('ke1y'));

// test cases, 
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
	const sum = Math.abs(bRow + bCol);
	sum
	if (bRow <= bCol) {
		bRow = 0;
		bCol = sum;
	} else {
		bRow = sum;
		bCol = 0;
	}
	const max = Math.max(bRow, bCol);
	for(let i = 0; i < (length - max) ; i++){
		console.log(`${bRow + i} ${bCol + i}`);
	}
}

// NO ocupan la misma diagonal
export const solveBishops = (_grid) => {
	let grid = _grid.map(row => [...row]);
	// console.log(grid[1][2])
	getDiagonals(3, 1, 4);
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
