// // grid = [
// // 	['1', '.', '.', '.', '.', '.', '.', '.', '.', '.', '+', '.', '.', 'o', '.', '+', '.', '.', '.', '.'],
// // 	['2', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.'],
// // 	['3', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.'],
// // 	['4', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.'],
// // 	['5', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.'],
// // 	['6', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.'],
// // 	['7', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.'],
// // 	['8', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.'],
// // 	['9', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.'],
// // 	['10', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.'],
// // 	['11', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.'],
// // 	['12', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.'],
// // 	['13', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.'],
// // 	['14', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.'],
// // 	['15', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.'],
// // 	['16', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.'],
// // 	['17', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.'],
// // 	['18', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.'],
// // 	['19', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.'],
// // 	['20', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.'],
// // ]

// let grid = [
// 	['+', '-', '.'],
// 	['+', '-', '.'],
// 	['+', '-', '.']
// ]

// function transform(ar) {
// 	var result = [],
// 		i, x, y, row;
// 	for (i = 0; i < ar.length; i++) {
// 		row = [];
// 		for (x = 0, y = i; y >= 0; x++, y--) {
// 			row.push(ar[y][x]);
// 		}
// 		result.push(row);
// 	}
// 	for (i = 1; i < ar[0].length; i++) {
// 		row = [];
// 		for (x = i, y = ar[0].length - 1; x < ar[0].length; x++, y--) {
// 			row.push(ar[y][x]);
// 		}
// 		result.push(row);
// 	}
// 	return result;
// }

// grid = transform(grid);

// grid.map(row => {
// 	console.log(row.toString() +' '+ row.length);
// })
// console.log(grid.length)

let array = [[1, 0], [2, 1], [3, 2], [4, 3], [5, 4], [6, 5], [7, 6], [8, 7], [9, 8], [10, 9], [11, 10], [12, 11], [13, 12], [14, 14], [15, 15], [16, 16], [17, 17], [18, 18], [19, 19]]

function containsArray(array, subArray) {
	return array.some(elem => elem.toString() === subArray.toString())
}
