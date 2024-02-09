function findSquareRoot() {

    // Get the input value from the user
    var inputNumber = document.getElementById("number").value;

    // Create regular expression object to validate the input
    var regex = /^\d+$/;

    /*
     * Check if the input is a valid number
     * test() is a method used with regular expressions to check if a string 
       matches the pattern defined by the regular expression.
       The test() method returns 'true' if the pattern is found in the string, and 'false' otherwise.
    */
    if(!regex.test(inputNumber)) {
        alert("Please enter a valid number without any letter");
        return;
    }

    // Convert the input string to a number
    parseInt(inputNumber);

    // Calculate the square root
    var squareRoot = Math.sqrt(inputNumber);
    document.getElementById("result").innerHTML = `The square root of ${inputNumber} is ${squareRoot}`;
}