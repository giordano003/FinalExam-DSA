// Prompting the user to input arrays
let namesInput = prompt("Please enter a list of names(e.g., Genevieve, Juan, Luna, Gabriel, Elise):");
let agesInput = prompt("Please enter a list of ages(e.g., 24, 65, 21, 5, 9)");

// Parsing input strings into arrays
let names = namesInput ? namesInput.split(",").map(name => name.trim()) : [];
let ages = agesInput ? agesInput.split(",").map(Number) : [];

// Restructuring into a multi-dimensional array
let restructuredArray = names.map((name, index) => [name, ages[index]]);

// Logging the restructured array per line
console.log("Restructured Array:");
restructuredArray.forEach(pair => console.log(pair));
