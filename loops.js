// Assignment: Loops and Iterations in JavaScript

// Objective:
// Enhance your understanding of loops and iterations in JavaScript through a series of challenging exercises. This assignment will help you develop problem-solving skills using various loop constructs.
//
// Part 1: Loop Concepts Overview
// 1.	Research
// Write a brief overview of the following types of loops in JavaScript:
// ○	for loop
// A for loop repeats until a specified condition evaluates to false. It comprises of the initializing expression, the condition, the statement using a block statement {()} to group the statements and the afterthought.

// while loop
// A while statement executes its statements as long as a specified condition evaluates to true.
// The condition test occurs before the statement in the loop is executed. If the condition returns true, the statement is executed, and the condition is tested again. If the condition returns false, execution stops, and control is passed to the statement following while.
// Example: Here the loop iterates as long as n is less than 7.
// let n = 0;
// let x = 0;
// while (n < 7) {
//   n++;
//   x += n;
// }


// ○	do...while loop 
// The do...while statement repeats until a specified condition evaluates to false.
// do
//   statement
// while (condition);
// The statement is always executed once before the condition is checked. To execute multiple statements, the block statement ({ }) is used to group the statements.
// Example;
// let i = 0;
// do {
//   i += 1;
//   console.log(i);
// } while (i < 10);

// 2.	For each type, include:
// ○	Definition
// ○	Syntax

// JavaScript syntax refers to the rules and conventions dictating how code is structured and arranged within the JavaScript programming language. This includes statements, expressions, variables, functions, operators, and control flow constructs.
// There are two types of values defined in syntax: Fixed values and Variable values. 
// A simple example
// Declaring variables; let x=5; const PI =3.142; var = 12;
// Conditional statements:
//  if (age >= 18) { 
// console.log(" Adult."); 
// } else { console.log(" Minor."); }


	// 1. Multiplication Table with For Loop
// for (let i = 1; i <= 10; i++) { 
//     console.log("Multiplication Table for " + i + ":");
//      for (let j = 1; j <= 10; j++) { 
//     console.log(i + " x " + j + " = " + (i * j)); 
//     } console.log("");
//     }
    
//2.	Sum of Odd and Even Numbers with While Loop
// let evenNum = 0; 
// let oddNum = 0;
//  let num = 1; 
// while (num <= 50) {
//  if (num % 2 == 0) {
//  evenNum += num; 
// } else {
//  oddNum +=num; 
// } num++; 
// } 
// console.log("Even num: " + evenNum); 
// console.log("Odd num: " + oddNum);


//3.	Countdown with Condition using While Loop
//("enter starting number");
// let n = 15;              
// let countdown = n;

// while (countdown > 0) {
//     if (countdown === 5) {
//         console.log("Almost there!");
//     } else {
//         console.log(countdown);
//     }
//     countdown--; // Decrease countdown by 1
// }

// console.log("Liftoff!");


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

//     if (stringElement === ',') {
//         // Move to the next cell
//         switch (rowIndex) {
//             case 0: cell1 = targetCell.trim(); break;
//             case 1: cell2 = targetCell.trim(); break;
//             case 2: cell3 = targetCell.trim(); break;
//             case 3: cell4 = targetCell.trim(); break;
//         }
//         targetCell = ""; // Reset current cell
//         rowIndex++; // Move to the next cell
//     } else if (stringElement === '\n') {
//         // Log the current row and reset for the next one
//         switch (rowIndex) {
//             case 0: cell1 = targetCell.trim(); break;
//             case 1: cell2 = targetCell.trim(); break;
//             case 2: cell3 = targetCell.trim(); break;
//             case 3: cell4 = targetCell.trim(); break;
//         }
//         console.log(cell1, cell2, cell3, cell4);
//         // Reset for the next row
//         targetCell = "";
//         rowIndex = 0; // Reset row index for the next row
//     } else {
//         // Accumulate characters in the current cell
//         targetCell += stringElement;
//     }
// }

// // Handle the last row if there's no newline at the end
// if (targetCell && rowIndex === 4) {
//     switch (rowIndex) {
//         case 0: cell1 = targetCell.trim(); break;
//         case 1: cell2 = targetCell.trim(); break;
//         case 2: cell3 = targetCell.trim(); break;
//         case 3: cell4 = targetCell.trim(); break;
//     }
//     console.log(cell1, cell2, cell3, cell4);
// }



// let mess =0
// mess1 ={index:"1", Mass:"0.00", Spring1: "0.050", Spring2: "0.050"}
// mess2 ={index:"2", Mass:"0.49", Spring1: "0.066", Spring2: "0.066"}
// mess3 ={index:"3", Mass:"0.98", Spring1: "0.087", Spring2: "0.080"}
// mess4 ={index:"4", Mass:"1.47", Spring1: "0.116", Spring2: "0.108"}
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
