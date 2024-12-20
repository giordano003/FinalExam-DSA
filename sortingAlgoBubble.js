// Create an empty array to hold the numbers
let numbers = [];

// Function to prompt user for input and populate the array
function populateArray() {
    for (let i = 0; i < 10; i++) {
        let input = prompt(`Enter number ${i + 1} (e.g. 42, 25, 12, ...):`);
        if (input) {
            let number = Number(input.trim());
            if (!isNaN(number)) {
                numbers.push(number); // Add the number to the array
            } else {
                console.log("Invalid input. Please enter a valid number.");
                i--; // Decrement i to repeat the prompt for the same index
            }
        } else {
            console.log("No input provided. Please try again.");
            i--; // Decrement i to repeat the prompt for the same index
        }
    }
}

// Function to implement the Bubble Sort Algorithm
function bubbleSort(arr) {
    let n = arr.length;
    let swapped;

    // Outer loop for each pass
    for (let i = 0; i < n - 1; i++) {
        swapped = false; // Track if a swap occurred

        // Inner loop for comparing adjacent elements
        for (let j = 0; j < n - 1 - i; j++) {
            console.log(`Comparing ${arr[j]} and ${arr[j + 1]}`); // Log the comparison

            if (arr[j] > arr[j + 1]) {
                // Swap if the current element is greater than the next
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                swapped = true; // Set swapped to true
                console.log(`Swapped ${arr[j]} and ${arr[j + 1]}`); // Log the swap
            }
        }

        // If no swaps occurred, the array is sorted
        if (!swapped) {
            console.log("No swaps occurred, the array is sorted.");
            break;
        }
    }
    return arr; // Return the sorted array
}

// Main execution
populateArray(); // Populate the array with user input
let sortedNumbers = bubbleSort(numbers); // Call the bubble sort function
console.log("Sorted Array:", sortedNumbers); // Log the sorted array