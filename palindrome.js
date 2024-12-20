// Function to reverse a string
function reverseString(str) {
    return str.split('').reverse().join('');
}

// Prompt the user for two words
let word1 = prompt("Enter the first word (e.g., RACECAR):");
let word2 = prompt("Enter the second word (e.g., RECORDER):");

// Log the original strings
console.log("Original String 1:", word1);
console.log("Original String 2:", word2);

// Reverse the strings
let reversedWord1 = reverseString(word1);
let reversedWord2 = reverseString(word2);

// Log the reversed strings
console.log("Reversed String 1:", reversedWord1);
console.log("Reversed String 2:", reversedWord2);

// Check if the original strings are palindromes
let isPalindrome1 = word1 === reversedWord1;
let isPalindrome2 = word2 === reversedWord2;

// Log the truth values
console.log("Is the first string a palindrome?", isPalindrome1);
console.log("Is the second string a palindrome?", isPalindrome2);