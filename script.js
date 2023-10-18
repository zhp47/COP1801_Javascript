// External JavaScript document linked to the page
var isRasmussenStudent = true;

// Conditional statement that writes some type of variable text on an HTML page
if (isRasmussenStudent) {
    document.getElementById("message").innerHTML = "Welcome, Rasmussen Students!";
}

// Switch statement that displays a message
var dayOfWeek = new Date().getDay();
switch (dayOfWeek) {
    case 0:
        alert("Happy Sunday!");
        break;
    case 1:
        alert("It's Monday again...");
        break;
    case 2:
        alert("Tuesday is just another word for Monday.");
        break;
    case 3:
        alert("Hump day! It's all downhill from here.");
        break;
    case 4:
        alert("Almost there, it's Thursday!");
        break;
    case 5:
        alert("TGIF! Let's party!");
        break;
    case 6:
        alert("Saturday is for relaxing!");
        break;
}

// Random statement that displays a message depending on the time of day
var hourOfDay = new Date().getHours();
if (hourOfDay < 12) {
    document.getElementById("message").innerHTML = "Good morning!";
} else if (hourOfDay < 18) {
    document.getElementById("message").innerHTML = "Good afternoon!";
} else {
    document.getElementById("message").innerHTML = "Good evening!";
}

// Show the message element
document.getElementById("message").style.display = "block";
