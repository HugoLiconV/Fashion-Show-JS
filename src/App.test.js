import { 
  // reverseString, isPalindrome, maxCharacter, fizzBuzz,
  // firstNotRepeatingCharacter, rotateImage,
  // sudoku2, HashTable, called, hash
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


/* describe('reverseString', () => {
  it('should reverseString', () => {
    expect(reverseString('Hola')).toBe('aloH');
    expect(reverseString('Hello World!')).toBe('!dlroW olleH');
  });
});


describe('isPalindrome', () => {
  it('should return true if palindrome', () => {
    expect(isPalindrome('orejero')).toBeTruthy()    
    expect(isPalindrome('aerea')).toBeTruthy() 
    expect(isPalindrome('Malayalam')).toBeTruthy();   
    expect(isPalindrome('A but tuba')).toBeTruthy();   
  });

  it('should return false if palindrome', () => {
    expect(isPalindrome('Hello Medium')).toBeFalsy();
  });
});

describe('MaxCharacter', () => {
  it('should return the character that is most common in a string', () => {
    expect(maxCharacter('Hola como estas hoy')).toBe('o');
  });

  it('should return empty string if tehre is not a most commont character', () => {
    expect(maxCharacter('Murcielago')).toBe('');
  });
});


describe('FizzBuzz', () => {
  let outputData = "";
  let storeLog = inputs => (outputData += inputs);
  // it('should print all the numbers from 1 to 100', () => {
  //   console["log"] = jest.fn(storeLog);
  //   fizzBuzz()
  //   expect(outputData).toContain(1);
  //   // expect().toBe();
  // });

  it('should print "Fizz" for multiples of 3', () => {
    console["log"] = jest.fn(storeLog);
    fizzBuzz()
    expect(outputData).toContain('12Fizz');
    expect(outputData).toContain('78Fizz');
    expect(outputData).toContain('98Fizz');
  });

  it('should print "Buzz" for multiples of 5', () => {
    console["log"] = jest.fn(storeLog);
    fizzBuzz()
    expect(outputData).toContain('Buzz11');
    expect(outputData).toContain('BuzzFizz22');
  });

  it('should print "FizzBuzz" for multiples of both 3 and 5', () => {
    console["log"] = jest.fn(storeLog);
    fizzBuzz()
    expect(outputData).toContain('FizzBuzz31');
    expect(outputData).toContain('FizzBuzz61');
    expect(outputData).toContain('FizzBuzz91');
  });
});


describe('firstNotRepeatingCharacter', () => {
  it('should return the first instance of a non repeating character', () => {
    expect(firstNotRepeatingCharacter('abacabad')).toBe('c');
    expect(firstNotRepeatingCharacter('z')).toBe('z');
    expect(firstNotRepeatingCharacter('bcb')).toBe('c');
    expect(firstNotRepeatingCharacter('abcdefghijklmnopqrstuvwxyziflskecznslkjfabe')).toBe('d');
  });

  it('should return _ if there is no such character', () => {
    expect(firstNotRepeatingCharacter('abacabaabacaba')).toBe('_');
    expect(firstNotRepeatingCharacter('bcccccccb')).toBe('_');

  });
});

test('should rotateImage', () => {
  const expectedOutput = [[7,4,1], 
                          [8,5,2], 
                          [9,6,3]];
  let a = [[1,2,3], 
           [4,5,6], 
           [7,8,9]]     
  expect(rotateImage(a)).toEqual(expectedOutput);
});

test('should check if it is a valid sudoku puzzle', () => {
  let input = 
[[".",".","4",".",".",".","6","3","."], 
 [".",".",".",".",".",".",".",".","."], 
 ["5",".",".",".",".",".",".","9","."], 
 [".",".",".","5","6",".",".",".","."], 
 ["4",".","3",".",".",".",".",".","1"], 
 [".",".",".","7",".",".",".",".","."], 
 [".",".",".","5",".",".",".",".","."], 
 [".",".",".",".",".",".",".",".","."], 
 [".",".",".",".",".",".",".",".","."]]

 expect(sudoku2(input)).toBe(false);
});

describe('Hash Table', () => {
  it('should create a Hash Table', () => {
    var hashTable = false; 
      if (typeof HashTable !== 'undefined') { 
        hashTable = new HashTable() 
    }; 
    expect(typeof hashTable).toBe('object')
  });

  it('The hashTable has an add method', () => {
    var hashTable = false; 
    if (typeof HashTable !== 'undefined') { 
      hashTable = new HashTable() 
    }; 
    expect(typeof hashTable.add).toBe('function')
  });

  it('the HashTable has a remove method', () => {
    var hashTable = false; 
    if (typeof HashTable !== 'undefined') { 
      hashTable = new HashTable() 
    }; 
    expect(typeof hashTable.remove).toBe('function')
  });

  it('The hashTable has a lookup method', () => {
    var hashTable = false; 
    if (typeof HashTable !== 'undefined') { 
      hashTable = new HashTable() 
    }; 
    expect(typeof hashTable.lookup).toBe('function')
  });

  it('The add method adds key value pairs and and the lookup method returns the values associated with a given key."', () => {
    var hashTable = false; 
    if (typeof HashTable !== 'undefined') { 
      hashTable = new HashTable() 
    }; 
    hashTable.add('key', 'value'); 
    expect(hashTable.lookup('key')).toBe('value');
  });

  it('it should remove the associated key value pair', () => {
      var hashTable = false; 
      if (typeof HashTable !== 'undefined') {
         hashTable = new HashTable() 
      }; 
      hashTable.add('key', 'value'); 
      hashTable.remove('key'); 
      expect(hashTable.lookup('key')).toBeNull
  });

  it('Items are added using the hash function.', () => {
      var hashTable = false; 
      if (typeof HashTable !== 'undefined') { 
        hashTable = new HashTable() 
      }; 
      let cont = called; 
      hashTable.add('key1','value1'); 
      hashTable.add('key2','value2'); 
      hashTable.add('key3','value3'); 
      expect(called).toBe(cont + 3);
  });

  it('should handles collisions', () => {
    var hashTable = false; 
    if (typeof HashTable !== 'undefined') { 
      hashTable = new HashTable() 
    }; 
    hashTable.add('key1','value1'); 
    hashTable.add('1key','value2'); 
    hashTable.add('ke1y','value3'); 
    expect(hashTable.lookup('key1')).toBe('value1'); 
    expect(hashTable.lookup('1key')).toBe('value2');
    expect(hashTable.lookup('ke1y')).toBe('value3');
  });
}); */

// desc→	describe
// it  → it
// tb  → toBe
// tbf → toBeFalsy
// tbt → toBeTruthy
// tbu → toBeUndefined
// tc  → toContain
// te  → toEqual
// thl → toHaveLength
