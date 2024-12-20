// Create an empty array to hold grocery items
let groceryStack = [];

// Function to check if the stack is empty and return the top item
function peek() {
    if (groceryStack.length === 0) {
        console.log("The stack is empty.");
        return null; // Return null if the stack is empty
    } else {
        console.log("Top item:", groceryStack[groceryStack.length - 1]);
        return groceryStack[groceryStack.length - 1]; // Return the top item
    }
}

// Function to add an item to the stack
function push(item) {
    groceryStack.push(item); // Add the item to the end of the array
    console.log(`Added: ${item}`);
    peek(); // Check the top item after pushing
    printStack(); // Print the current stack
}

// Function to remove the last added item from the stack
function pop() {
    if (peek() !== null) { // Only pop if the stack is not empty
        const removedItem = groceryStack.pop(); // Remove the last item
        console.log(`Removed: ${removedItem}`);
        peek(); // Check the top item after popping
        printStack(); // Print the current stack
    }
}

// Function to print the current state of the stack
function printStack() {
    console.log("Current Stack:", groceryStack.join(", "));
}

// Prompt the user to enter grocery items
for (let i = 0; i < 5; i++) {
    let item = prompt(`Enter grocery item ${i + 1}:`);
    if (item) {
        push(item); // Push the item onto the stack
    } else {
        console.log("No item entered. Please try again.");
        i--; // Decrement i to repeat the prompt for the same index
    }
}

// Example usage of pop function
let removeItem = prompt("Do you want to remove the last added item? (yes/no)");
if (removeItem.toLowerCase() === 'yes') {
    pop(); // Call pop to remove the last item
}