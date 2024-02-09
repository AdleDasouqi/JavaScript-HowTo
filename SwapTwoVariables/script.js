function swapVariables() {

    // Get the inputs from the user 
    var valueOne = document.getElementById("valueOne").value;
    var valueTwo = document.getElementById("valueTwo").value;

    if(valueOne.trim() === "" || valueTwo.trim() === "") {
        alert("Please enter values for both fields 😒");
        return;
    }

    // Display the original values
    document.getElementById("originalVaule").innerHTML = `Before Swap: <br>First value: ${valueOne}, Second value: ${valueTwo}`;

    // Swap the values and create a temporary variable
    var temp = valueOne;
    valueOne = valueTwo;
    valueTwo = temp;

    // Display the swapped values
    document.getElementById("swapVariable").innerHTML = `After Swap: <br>First value: ${valueOne}, Second value: ${valueTwo}`;
}