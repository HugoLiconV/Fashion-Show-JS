import { 
  reverseString, isPalindrome
} from './App'


describe('reverseString', () => {
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



// it('should return true if palidrome', () => {
// });
// desc→	describe
// it  → it
// tb  → toBe
// tbf → toBeFalsy
// tbt → toBeTruthy
// tbu → toBeUndefined
// tc  → toContain
// te  → toEqual
// thl → toHaveLength
// 