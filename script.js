const moodSlider = document.getElementById("moodSlider");
const moodMessage = document.getElementById("moodMessage");
const body = document.body;

function updateMood() {
    const value = moodSlider.value;
    let message = "";
    let color = "";

    if (value < 30) {
        message = "Feeling Sad...";
        color = "#4a90e2"; 
    } else if (value >= 30 && value < 50) {
        message = "Feeling Angry";
        color = "#FF0000"; 
    } else if (value >= 50 && value < 70) {
        message = "Feeling Okay!";
        color = "#f5a623"; 
    } else {
        message = "So Happy!";
        color = "#7ed321"; 
    }

    moodMessage.textContent = message;


    body.style.backgroundColor = color;
}

moodSlider.addEventListener("input", updateMood);

updateMood();
