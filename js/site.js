//1. Get the value from the UI(page)
// Start or Controller Function

function getValues() {
  //Get the value from the page
  let startValue = document.getElementById("startValue").value;
  let endValue = document.getElementById("endValue").value;

  //We need to validate our input
  //Converting(parse) values into integers
  startValue = parseInt(startValue);
  endValue = parseInt(endValue);

  if (Number.isInteger(startValue) && Number.isInteger(endValue)) {
    // We call generateNumbers
    let numbers = generateNumbers(startValue, endValue);
    // We call displayNumbers
    displayNumbers(numbers);
  } else {
    alert("You must enter integers!");
  }
}

//2. Generate numbers from the startValue to the endValue
//Logic Function(s)
function generateNumbers(sValue, eValue) {
  let numbers = [];

  //We want to gel all numbers from the start to end
  for (let index = sValue; index < eValue; index++) {
    // This will execute in a loop until index = eValue

    numbers.push(index);
  }
  return numbers;
}

// 3. Display the even numbers and mark them bold.
//Display or view fuctions
function displayNumbers(numbers) {
  let templateRows = "";
  for (let index = 0; index < numbers.length; index++) {
    let className;

    let number = numbers[index];

    if (number % 2 == 0) {
      className = "even";
    } else {
      className = "odd";
    }
    templateRows += `<tr><td class="${className}">${number}</td></tr>`;
  }
  document.getElementById("results").innerHTML = templateRows;
}
