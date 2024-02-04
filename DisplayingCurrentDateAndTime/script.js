function displayDateTime() {
    var dateTime = document.getElementById("displayDateTime");
    /*
     * Date() function will be called, and the current date and time will be 
       displayed in the paragraph with the id "displayDateTime". 
     *** Keep in mind 🤔 that the time displayed will be based on the user's local time zone. ***
    */
    dateTime.innerHTML = "Current local date and time now: " + Date();
    dateTime.style.color = "#00A2E3";
    dateTime.style.fontSize = "19px";
    dateTime.style.fontFamily = "Arial, Helvetica, sans-serif";

    var buttonStyle = document.getElementById("dateTimeStyle");
    buttonStyle.style.marginLeft = "30%";
}