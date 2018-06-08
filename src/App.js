// REVERSE A STRING CHALLENGE
// Return string in reverse
export const reverseString = (str) => str =  str.split('').reverse().join('')


// PALINDROME CHALLENGE
// Return true if palindrome and false if not
export const isPalindrome = (str) => {
  str = str.toLowerCase()
  str = str.replace(/\s/g, '')
  const reverseString = str.split('').reverse().join('')
  str
  reverseString
  return reverseString === str;
}

isPalindrome('A but tuba')