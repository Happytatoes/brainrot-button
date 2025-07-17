const subtext = document.getElementById("subtext");
var number = 0;
var random; 
var audio;

function increment () {
    number++;
    subtext.innerHTML = "has been clicked " + number + " times";
    
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