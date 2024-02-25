// create varible to get the input value from the user.
var inputNumber;

function checkNumber() {

    // Create regular expression object to validate the input
    var regex = /^-?\d+$/

    // Get the input value from the user
    inputNumber = document.getElementById("inputNumber").value;
    // Check if the input value is not a number and if the number is positive, negative, or zero
    if(!regex.test(inputNumber)) {
        alert("Please enter a valid number");
        return;
    } else if(inputNumber > 0) {
        document.getElementById("result").innerHTML = `The number ${inputNumber} is positive`;
    } else if(inputNumber < 0) {
        document.getElementById("result").innerHTML = `The number ${inputNumber} is negative`;
    } else {
        document.getElementById("result").innerHTML = `The number is zero`;
    }
}