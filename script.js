var random; 
var audio;

function playSound () {
    random = Math.random();
    if (random < 0.9) {
        audio = document.getElementById("audio1"); 
    }
    else if (random < 0.99) {
        audio = document.getElementById("audio2"); 
    }
    else {
        audio = document.getElementById("audio3"); 
    }
    
    audio.play(); 
    audio.currentTime = 0;
}

const textElement = document.getElementById("subtext");
const button = document.getElementById("brainrotbutton");

// Update the text with the current count
function updateClickText(count) {
  textElement.textContent = `This button has been clicked ${count} times`;
}

// Get the current count when page loads
fetch("https://brainrot-button-backend.onrender.com/count")
  .then(res => res.json())
  .then(data => updateClickText(data.count));

// When the button is clicked, increment and update
button.addEventListener("click", () => {
    playSound();
    fetch("https://brainrot-button-backend.onrender.com/increment", {
    method: 'POST',
  })
    .then(res => res.json())
    .then(data => updateClickText(data.count));
});