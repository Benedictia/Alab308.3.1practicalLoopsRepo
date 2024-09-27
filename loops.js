Part 1: Fizz Buzz
//Loop through all numbers from 1 to 100.
for (let num= 1; num <= 100; num++) {
   
    console.log(num);
  }
  //If a number is divisible by 3, log “Fizz.”
  for (let num = 1; num <= 100; num++) {
    if (num % 3 === 0) {
        console.log("Fizz");
    } else {
        console.log(num);
    }
 }
// // If a number is divisible by 5, log “Buzz.”
for (let num = 1; num <= 100; num++){ 
    if (num % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(num);
    }
}
// // If a number is divisible by both 3 and 5, log “Fizz Buzz.”
for (let num = 1; num <= 100; num++){ 
    if (num % 3 === 0 || num % 5 === 0) {
        console.log("Fizz Buzz");
    } else {
        console.log(num);
    }
 }
// // If a number is not divisible by either 3 or 5, log the number.
for (let num = 1; num <= 100; num++){ 
    if (num % 3  !== 0 && num % 5 !== 0) {
      
        console.log(num);
    }
 }
// part 2 : Prime time
let n = 9; 
let number = n;

while (true) {
    let isPrime = true;
    if (number <= 1) isPrime = false;

    for (let i = 2; i <= number / 2; i++) {
        if (number % i === 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        console.log(number);
        break;
    }
    number++;
}

//4.	Advanced Guessing Game with Do...While Loop

// let targetNumber = 98; // The number to guess
// let randomNumber = 55; // Guess

// if (randomNumber > 100) {
//     console.log("Guess is too high");
// } else if (randomNumber <= 10) {
//     console.log("Guess is too low");
// } else if (randomNumber ===targetNumber) {
//     console.log("Correct!");
// } else {
//     console.log("Please guess again.");
// }

//5.	Nested Loop Pattern for right triangle asterisks pattern
// let height = 5; // user can input any desired height here

// // Loop for each row
// for (let i = 1; i <= height; i++) {
//     let row = ""; // Initialize an empty string for the current row

//     // Loop to add asterisks for the current row
//     for (let j = 1; j <= i; j++) {
//         row += "*"; // Add an asterisk for each column
//     }

//     console.log(row); // Print the current row
// }

//Labeled Statement with Break
// CSV string data
// const csvStringData = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";

// let targetCell = "";
// let cell1, cell2, cell3, cell4; // Storing each “cell” of data in a variable.
// let rowIndex = 0;

// // Loop through the characters in the CSV string
// for (let i = 0; i < csvStringData.length; i++) {
//     const stringElement = csvStringData[i];

    if (stringElement === ',') {
//         // Move to the next cell
//         switch (rowIndex) {
//             case 0: cell1 = targetCell.trim(); break;
//             case 1: cell2 = targetCell.trim(); break;
//             case 2: cell3 = targetCell.trim(); break;
//             case 3: cell4 = targetCell.trim(); break;
        }
        targetCell = ""; // Reset current cell
        rowIndex++; // Move to the next cell
    } else if (stringElement === '\n') {
        // Log the current row and reset for the next one
        switch (rowIndex) {
            case 0: cell1 = targetCell.trim(); break;
            case 1: cell2 = targetCell.trim(); break;
            case 2: cell3 = targetCell.trim(); break;
            case 3: cell4 = targetCell.trim(); break;
        }
        console.log(cell1, cell2, cell3, cell4);
        // Reset for the next row
        targetCell = "";
        rowIndex = 0; // Reset row index for the next row
    } else {
        // Accumulate characters in the current cell
        targetCell += stringElement;
    }
}

// // Handle the last row if there's no newline at the end
if (targetCell && rowIndex === 4) {
    switch (rowIndex) {
        case 0: cell1 = targetCell.trim(); break;
        case 1: cell2 = targetCell.trim(); break;
        case 2: cell3 = targetCell.trim(); break;
        case 3: cell4 = targetCell.trim(); break;
    }
    console.log(cell1, cell2, cell3, cell4);
}



let mess =0
mess1 ={index:"1", Mass:"0.00", Spring1: "0.050", Spring2: "0.050"}
 mess2 ={index:"2", Mass:"0.49", Spring1: "0.066", Spring2: "0.066"}
 mess3 ={index:"3", Mass:"0.98", Spring1: "0.087", Spring2: "0.080"}
 mess4 ={index:"4", Mass:"1.47", Spring1: "0.116", Spring2: "0.108"}
// Second CSV string data
const csvStringData = "Index,Mass (kg),Spring 1 (m),Spring 2 (m)\n1,0.00,0.050,0.050\n2,0.49,0.066,0.066\n3,0.98,0.087,0.080\n4,1.47,0.116,0.108\n5,1.96,0.142,0.138\n6,2.45,0.166,0.158\n7,2.94,0.193,0.174\n8,3.43,0.204,0.192\n9,3.92,0.226,0.205\n10,4.41,0.238,0.232";

// Function to parse CSV data
function parseCSV(csvString) {
    let targetCell = "";
    let cell1, cell2, cell3, cell4; // Storing each “cell” of data in a variable.
    let rowIndex = 0;

    // Loop through the characters in the CSV string
    for (let i = 0; i < csvString.length; i++) {
        const stringElement = csvString[i];

        if (stringElement === ',') {
            // Move to the next cell
            switch (rowIndex) {
                case 0: cell1 = targetCell.trim(); break;
                case 1: cell2 = targetCell.trim(); break;
                case 2: cell3 = targetCell.trim(); break;
                case 3: cell4 = targetCell.trim(); break;
            }
            targetCell = ""; // Reset current cell
            rowIndex++; // Move to the next cell
        } else if (stringElement === '\n') {
            // Log the current row and reset for the next one
            switch (rowIndex) {
                case 0: cell1 = targetCell.trim(); break;
                case 1: cell2 = targetCell.trim(); break;
                case 2: cell3 = targetCell.trim(); break;
                case 3: cell4 = targetCell.trim(); break;
            }
            console.log(cell1, cell2, cell3, cell4);
            // Reset for the next row
            targetCell = "";
            rowIndex = 0; // Reset row index for the next row
        } else {
            // Accumulate characters in the current cell
            targetCell += stringElement;
        }
    }

    // Handle the last row if there's no newline at the end
    if (targetCell && rowIndex === 4) {
        switch (rowIndex) {
            case 0: cell1 = targetCell.trim(); break;
            case 1: cell2 = targetCell.trim(); break;
            case 2: cell3 = targetCell.trim(); break;
            case 3: cell4 = targetCell.trim(); break;
        }
        console.log(cell1, cell2, cell3, cell4);
    }
}

// Test with the second string
console.log("Parsing second CSV string:");
parseCSV(csvStringData);
