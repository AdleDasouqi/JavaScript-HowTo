// Function that sets the content of the "todayMode" element
function dayMode(mode) {
    var selectYourMode = document.getElementById('todayMode');
    selectYourMode.innerHTML = mode;
    selectYourMode.style.color = '#9D4EDD';
    selectYourMode.style.textAlign = 'center';
    selectYourMode.style.fontSize = '25px';
}