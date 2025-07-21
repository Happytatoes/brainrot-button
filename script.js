var random;
var audio;

function playSound() {
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

document.addEventListener('DOMContentLoaded', () => {
	// All your fetches and event listeners go here
  
	const textElement = document.getElementById("subtext");
	const button = document.getElementById("brainrotbutton");
  
	function updateClickText(count) {
	  textElement.textContent = `has been clicked ${count} times`;
	}
  
	button.addEventListener("click", () => {
	  playSound();
	  fetch("https://brainrot-button-backend.onrender.com/increment", {
		method: 'POST',
	  })
		.then(res => res.json())
		.then(data => updateClickText(data.count));
	});
  
	fetch("https://brainrot-button-backend.onrender.com/count")
	  .then(res => res.json())
	  .then(data => updateClickText(data.count))
	  .catch(err => console.error("Count fetch error:", err));
  
	// Increment visitor
	fetch("https://brainrot-button-backend.onrender.com/addvisitor", {
	  method: 'POST'
	})
	  .then(res => res.json())
	  .then(data => {
		console.log("Visitor increment response:", data);
	  })
	  .catch(err => console.error("Visitor increment error:", err));
  
	// Fetch and display total visits
	fetch('https://brainrot-button-backend.onrender.com/visitors')
	  .then(res => res.json())
	  .then(data => {
		console.log("Visitors fetch:", data); // Debug log
		document.getElementById("visit-count").textContent = data.visitors;
	  })
	  .catch(err => console.error("Visitor fetch error:", err));
  });

/*
// Update the text with the current count
function updateClickText(count) {
	textElement.textContent = `has been clicked ${count} times`;
}

// When the button is clicked, increment and update
button.addEventListener("click", () => {
	playSound();
	fetch("https://brainrot-button-backend.onrender.com/increment", {
		method: 'POST',
	})
		.then(res => res.json())
		.then(data => updateClickText(data.count));
});

// Get the current count when page loads
fetch("https://brainrot-button-backend.onrender.com/count")
	.then(res => res.json())
	.then(data => {
	  console.log("Count response:", data); // <- check this
	  updateClickText(data.count);
	})
	.catch(err => console.error("Count fetch error:", err));
  

//incriment visitor count
fetch("https://brainrot-button-backend.onrender.com/addvisitor", {
	method: 'POST',
});

//fetch and display visit count
fetch('https://brainrot-button-backend.onrender.com/visitors')
	.then(res => res.json())
	.then(data => {
	document.getElementById("visit-count").textContent = data.visitors;
});
*/