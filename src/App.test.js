import { 
  fashionShow, testGrid, getBishops, getRooks, solveBioshops, solveRooks
} from './App'


describe('firstNotRepeatingCharacter', () => {
	const _testGrid = Array.from(testGrid);
  it('should get Bishops', () => {
    const bishopGrid = [
			['+', '.', '.'],
			['+', '.', '+'],
			['.', '.', '.'],
		]
		expect(getBishops(_testGrid)).toEqual(bishopGrid);
  });

	it('should get Roocks', () => {
    const rookGrid = [
			['.', '.', '.'],
			['.', '.', 'x'],
			['x', '.', '.'],
		]
		expect(getRooks(_testGrid)).toEqual(rookGrid);
  });

	it('should solve Bishops', () => {
    const bishopGrid = [
			['+', '.', '.'],
			['+', '.', '+'],
			['.', '.', '.'],
		]

		const result = [
			['+', '.', '.'],
			['+', '.', '+'],
			['+', '.', '.'],
		]
		expect(solveBioshops(bishopGrid)).toEqual(result);
  });

	it('should solve Rooks', () => {
    const rooksGrid = [
			['.', '.', '.'],
			['.', '.', 'x'],
			['x', '.', '.'],
		]

		const result = [
			['.', 'x', '.'],
			['.', '.', 'x'],
			['x', '.', '.'],
		]
		expect(solveRooks(rooksGrid)).toEqual(result);
  });

	it('should get Diagonal', () => {
		
	});
});

// desc→	describe
// it  → it
// tb  → toBe
// tbf → toBeFalsy
// tbt → toBeTruthy
// tbu → toBeUndefined
// tc  → toContain
// te  → toEqual
// thl → toHaveLength
