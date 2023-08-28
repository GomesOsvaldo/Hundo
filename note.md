NOTE: GITHUB:

1. CREATE A REPO
2. FIND IT ON GITHUB DESKTOP
3. CAN CREATE SUB-BRANCH TO DO THE WORK AND ADD LATER TO THE MAIN BRANCH.
4. CHOOSE A PATH
5. CLONE IT
6. OPEN THE FOLDER ON VSCODE

NOTE: LINKING JS TO SITE.JS SHEET: </script>

<script src="/js/site.js"></script>

NOTE: TO FILL HEIGHT OF THE BROWSER:

  <body class="d-flex flex-column h-100"> THIS ASSURE THAT IS 100% OF VIEWPORT NO MATTER THE SCREEN SITE.

NOTE: CONTAINER BOOTSTRAPP IS CENTERED IN THE PAGE WITH PADDING.

NOTE: PAGE STRUCTURE:

1. BODY
2. NAVBAR
3. MAIN(CONTAINER WITH ROWS AND COLS)
4. FOOTER

NOTE: RESPONSIVINESS:

1. START WITH MOBILE FIRST
2. STICK THEM ON TOP OF EACH OTHER - ROW-COLS-1
3. ORDER THEM USING BREAK POINT ORDER-LAST ORDER-FIRST-LG
4. USE JUSTIFY-CONTENT TO ALIGN THEM WITH BREAK POINT. JUSTIFY-CONTENT-START JUSTIFY-CONTENT-LG-END

NOTE: FAVICON:

1. FAVICON.COM --> GO TO FAVICON.COM --> IMPORT IMG PNG --> GRAB AND DROP IMG --> TAKE IMG FROM DOWNLOAD TO THE IMG FILE --> BRAND NAVBAR BETWEEN ANCHOR TAG --> WIDTH-30 AND HEIGHT-24 AN D-INLINE-BLOCK ALIGN-ITEMS-CENTER

Note: Javascript:

1. Function to get element from the page:

function getValues() {
let startValue = document.getElementById("startValue").value;
let endValue = document.getElementById("endValue").value;
}

2. Before that, you have to add eventlistner from HTML page:
<script>
    document
      .getElementById("buttonSubmit")
      .addEventListener("onClick", getValue);
  </script>

JS:

1. GET THE VALUE FROM UI:
   FUNCTION getValue() {
   Get the value from the UI
   a) let startValue = document.getElementById("startValue").value
   b) let endValue = document.getElementById("endValue").value

We need to validate our input
Parse into integers
startValue = parseInt(startValue)
endValue = parseInt(endValue)

if(Number.isInteger(startVlue) && Number.isInteger(endValue)) {
We call let numbers = generateNumber(startValue, endValue)

    We call displayNumbers(numbers)

} else {
alert("You must enter numbers")
}

}

2. Generate values fro Start Value to the End Value
   Logic Function

function generateNumbers(sValue, eValue) {

let numbers = [];

We want to get all valuee from the start to the end
for(let index = sValue; index < eValue; index++) {
this will execute in a loop until index = evalue
numbers.push(index)
}
return numbers --- the generateNumbers will be called in getValue function
}

3. Display numbers and mark them Bold
   Display or View fucntion

funtion display(numbers) {

let className;

let templateRows = ""

for(let index = 0; index < length.numbers; index++) {

    let number = numbers[index];

    if(number % 2 == 0) {

      className = "even";
    } else {
      className = "odd";
    }
    templateRows += `<tr class="${className}"><td>${number}</td><tr>`

}
document.getElementById("results").innerHTML = templateRows;

}

Note: Configuring debuger: click debuger --> choose the debuger(chrome) --> click launcher at the top --> choose chrome --> configure it by adding the chrome url:
{
// Use IntelliSense to learn about possible attributes.
// Hover to view descriptions of existing attributes.
// For more information, visit: https://go.microsoft.com/fwlink/?linkid=830387
"version": "0.2.0",
"configurations": [
{
"name": "Launch Chrome",
"request": "launch",
"type": "chrome",
"url": "http://127.0.0.1:5500/",
"webRoot": "${workspaceFolder}"
},
]
}

The Code Documentation
This code snippet represents a simple web application that takes two integer inputs, generates an array of numbers within the specified range, and displays those numbers on the webpage while marking even numbers as bold. The code is organized into functions to perform specific tasks, enhancing readability and maintainability.

getValues()
This function is responsible for retrieving values from input fields in a webpage, validating those values as integers, and then initiating further processing if the input is valid. Retrieve the values from the input fields on the page with IDs "startValue" and "endValue". Convert the retrieved values to integers using parseInt() function. Check if both startValue and endValue are valid integers using Number.isInteger(). If both values are integers: Call the generateNumbers() function with startValue and endValue as arguments to get an array of numbers. Call the displayNumbers() function with the obtained array of numbers to display them. If either startValue or endValue is not a valid integer, show an alert with the message "You must enter integers!".

generateNumbers(sValue, eValue)
This function takes two integer parameters (sValue and eValue) and generates an array of numbers from sValue (inclusive) to eValue (exclusive). Initialize an empty array named numbers. Use a loop to iterate over the range from sValue to eValue - 1: For each iteration, push the current value of index into the numbers array. Return the numbers array containing the generated numbers.

displayNumbers(numbers)
This function takes an array of numbers (numbers) as input and displays them on the webpage while marking even numbers as bold. Initialize an empty string named templateRows to store the HTML content. Use a loop to iterate over each number in the numbers array: Determine if the current number is even or odd using the modulo operator (%). If the number is even, set the className variable to "even", otherwise set it to "odd". Append the current number to the templateRows string. Set the innerHTML of the HTML element with the ID "results" to the templateRows, rendering the displayed numbers.

©2023 Osvaldo Gomes | nunziapt76@gmail.com
Osvaldo Gomes Logo
