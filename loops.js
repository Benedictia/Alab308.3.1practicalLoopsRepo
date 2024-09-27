
//Part 3: Feeling Loopy

const csvStringData = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";
const rows = [];
    let currentRow = [];
    let currentCell = '';

    for (const stringElement of csvStringData) {
        if (stringElement === ',') {
            currentRow.push(currentCell);
            currentCell = ''; // Reset for the next cell
        } else if (stringElement === '\r' || stringElement === '\n') {
            currentRow.push(currentCell); // Add last cell to the row
            rows.push(currentRow); // Add the completed row to rows
            currentRow = []; // Reset for the next row
            currentCell = ''; // Reset for the next cell
        } else {
            currentCell += stringElement; // Build the current cell
        }
    }

    // Log each row of data
    rows.forEach(row => console.log(row));



// Test with the second string
// // Test with the second string
    const csvString = "Index,Mass (kg),Spring 1 (m),Spring 2 (m)\n1,0.00,0.050,0.050\n2,0.49,0.066,0.066\n3,0.98,0.087,0.080\n4,1.47,0.116,0.108\n5,1.96,0.142,0.138\n6,2.45,0.166,0.158\n7,2.94,0.193,0.174\n8,3.43,0.204,0.192\n9,3.92,0.226,0.205\n10,4.41,0.238,0.232";

    
    
    for (const stringElement of csvString) {
        if (stringElement === ',') {
            currentRow.push(currentCell);
            currentCell = ''; // Reset for the next cell
        } else if (stringElement === '\r' || stringElement === '\n') {
            currentRow.push(currentCell); // Add last cell to the row
            rows.push(currentRow); // Add the completed row to rows
            currentRow = []; // Reset for the next row
            currentCell = ''; // Reset for the next cell
        } else {
            currentCell += stringElement; // Build the current cell
        }
    }
     
    // Log each row of data
    rows.forEach(row => console.log(row));
    

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
let 
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






