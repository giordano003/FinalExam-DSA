// Prompting the user to input arrays using prompt()
let numbersInput = prompt("Please enter list of numbers(e.g., 24, 65, 21, 5, 9, 32, 42, 80, 57");
let namesInput = prompt("Please enter a list of names(e.g. Zenvo, Erica, Jordie, Alicia, Redon):");

// Parsing input strings into arrays
let numbers = numbersInput ? numbersInput.split(",").map(Number) : [];
let names = namesInput ? namesInput.split(",").map(name => name.trim()) : [];

// Merging both arrays into a single array
let mergedArray = [...numbers, ...names];
console.log("Merged Array:", mergedArray);

// Sorting numbers numerically in reverse order
let sortedNumbers = numbers.sort((a, b) => b - a);
console.log("Sorted Numbers in Reverse:", sortedNumbers);

// Sorting names alphabetically
let sortedNames = names.sort();
console.log("Sorted Names Alphabetically:", sortedNames);
