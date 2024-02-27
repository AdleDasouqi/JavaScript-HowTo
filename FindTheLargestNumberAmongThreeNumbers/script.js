function findValue() {
    var largestNumber;
    var firstNumber = document.getElementById("firstNumber").value.trim();
    var secondNumber = document.getElementById("secondNumber").value.trim();
    var thirdNumber = document.getElementById("thirdNumber").value.trim();

    // Check if input values are valid number
    if(isNaN(firstNumber) || isNaN(secondNumber) || isNaN(thirdNumber)) {
        alert("Please enter valid number");
        return;
    }

    if(firstNumber >= secondNumber && firstNumber >= thirdNumber) {
        largestNumber = firstNumber;
    } else if(secondNumber >= firstNumber && secondNumber >= thirdNumber) {
        largestNumber = secondNumber;
    } else {
        largestNumber = thirdNumber;
    }
    
    document.getElementById("result").innerHTML = `The largest number is ${largestNumber}`;
}