function primeNumber() {
    var inputNumber = document.getElementById("primeNumber").value.trim();
    var isPrime = true;

    if(isNaN(inputNumber) || inputNumber === "") {
        alert("Please enter a vaild number");
        return;
    }

    inputNumber = Number(inputNumber);

    if(inputNumber === 1) {
        alert("1 is neither prime nor composite number");
        return;
    }

    if(inputNumber > 1) {
        for(var i = 2; i < inputNumber; i++) {
            if(inputNumber % i == 0) {
                isPrime = false;
                break;
            }
        }
    }

    if(isPrime) {
        document.getElementById("isPrime").innerHTML = `${inputNumber} is a prime number`;
        console.log(isPrime);
    } else {
        document.getElementById("isPrime").innerHTML = `${inputNumber} is not prime number`;
        console.log(isPrime);
    }
}