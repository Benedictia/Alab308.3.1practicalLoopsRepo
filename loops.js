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
Part 3: Feeling Loopy

// CSV string data
 const csvStringData = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";

 let targetCell = "";
let cell1, cell2, cell3, cell4; // Storing each “cell” of data in a variable.
 let rowIndex = 0;

// // Loop through the characters in the CSV string
 for (let i = 0; i < csvStringData.length; i++) {
  const stringElement = csvStringData[i];

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

//Part 2: Expanding Functionality

let rows = [];
let numberOfColumns = 0;

const csvString = "ID,Name,Occupation,Age\r\n42,Bruce,Knight,41\r\n57,Bob,Fry Cook,19\r\n63,Blaine,Quiz Master,58\r\n98,Bill,Doctor’s Assistant,26";

// Split the CSV string into rows
rows = csvString.split('\r\n');

// Create a two-dimensional array
let dataArray = [];

// // Populate the two-dimensional array
for (let i = 0; i < rows.length; i++) {
    // Split each row into columns
    let columns = rows[i].split(',');
    dataArray.push(columns);
}

// // Count the number of columns from the first row (headers)
 numberOfColumns = dataArray[0].length;

console.log(`Number of columns: ${numberOfColumns}`);
console.log('Two-dimensional array:', dataArray);

///// convert headers to lowercase
const headers = dataArray[0].map(header => header.toLowerCase());
// // Create an array of objects for each row of data (excluding headers)
const resultArray = dataArray.slice(1).map(row => {
    let obj = {};
    for (let i = 0; i < headers.length; i++) {
        obj[headers[i]] = row[i];
    }
    return obj;
});
console.log( resultArray);

// //Part 4: Sorting and Manipulating Data
// //1 Remove the last element from the sorted array.
dataArray.pop();
console.log( dataArray);

//2. Insert object at index 1:
const newArray = [{ id: "48", name: "Barry", occupation: "Runner", age: "25" }]
 resultArray.splice(1,0, ...newArray);
 console.log('Array after inserting at index 1:', resultArray);

 //Add  object to the end of the array:
 resultArray.splice(4);
resultArray.push ({ id: "7", name: "Bilbo", occupation: "None", age: "111" })
console.log('Array after adding object at the end of the array:', resultArray);

// //calculating average age using a loop
let ageRange = [41, 25, 19, 58,111];
let sum =0;
let i= 0;
while(i< ageRange.length){
    sum += ageRange[i];
    i++;
}
let average = sum / ageRange.length;
console.log(average);

//Part 5: Full Circle
// transform the final set of data back into CSV format.
people = [
    { id: "42", name: "Bruce", occupation: "Knight", age: "41" },
    { id: "48", name: "Barry", occupation: "Runner", age: "25" },
    { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },
    { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },
    { id: "7", name: "Bilbo", occupation: "None", age: "111" }
];
let csvContent = "id,name,occupation,age\n"
people.forEach((person) =>{
    let row = person.id +"," +person.name +"," + person.occupation +"," + person.age +"," + "\n"

csvContent += row;
});
console.log(csvContent);






