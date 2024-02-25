function inputNumber() {
    // Get the input value from the user
    var number = document.getElementById("inputNumber").value.trim();

    // Convert the input to a number
    number = parseInt(number);
    
    // Check if the input is empty and if the input is contain any letters.
    if(number === "" || isNaN(number)) {
        alert("Please enter a valid number");
        return;

     // Check if the number is even or odd 
    } else if(number % 2 === 0) {
        document.getElementById("result").innerHTML = "The number is even";
    } else {
        document.getElementById("result").innerHTML = "The number is odd"; 
    }  
}