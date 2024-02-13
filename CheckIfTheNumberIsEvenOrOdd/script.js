function inputNumber() {
    // Get the input value from the user
    var number = document.getElementById("inputNumber").value.trim();

    
    // Check if the input is empty
    if(number === "") {
        alert("Please enter a number");
        return;
    }

    if(isNaN(number)) {
        alert("Please enter a valid number");
        return;
    }

    // Convert the input to a number
    number = parseInt(number);

    // Check if the number is even or odd 
    if(number % 2 === 0) {
        document.getElementById("result").innerHTML = "The number is even";
    } else {
        document.getElementById("result").innerHTML = "The number is odd";        
    }
}