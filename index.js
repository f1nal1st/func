
function getYear(){
    let userInput = document.getElementById("user-year");
    let userYear = userInput.value;
    let resultYear = 2025 - userYear;
    let userSelect = document.getElementById("user-month");
    let userMonth = userSelect.value;
    let result = resultYear;
    if (userMonth !== "month1"){
        result = result - 1;
}
return result;
}
function displayResult(){
    let display = getYear();
    alert("Your age is " + display)
}