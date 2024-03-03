function factorial(number) {
    if(number === 0 || number === 1) {
        return 1;
    } else {
        return number * factorial(number - 1);
    }
}

function calculateFactorial() {
    var fact;
    var number = parseInt(document.getElementById("factorial").value.trim());

    if(isNaN(number)) {
        alert("Please enter a valid number");
    } else if(number < 0) {
        alert("Factorial is not defined for negative numbers");
    } else {
        fact = factorial(number);
        document.getElementById("result").innerHTML = `Factorial of ${number} = ${fact}`; 
    }
}

