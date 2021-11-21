const canvas = document.getElementById("canvas");
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

const ctx = canvas.getContext("2d");

let prevX = null;
let prevY = null;

ctx.lineWidth = 5;

let draw = false;

let clrs = document.querySelectorAll(".clr");
clrs = Array.from(clrs);
clrs.forEach(clr => {
    clr.addEventListener("click", () => {
        ctx.strokeStyle = clr.dataset.clr
    })
});

let clearBtn = document.querySelector(".clear");
clearBtn.addEventListener("click", () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
});

let saveBtn = document.querySelector(".save");
saveBtn.addEventListener("click", () => {
    let data = canvas.toDataURL("imag/png");
    let a = document.createElement("a");
    a.href = data;
    a.download = "sketch.png";
    a.click();
});

window.addEventListener("mousedown", (e) => draw = true);
window.addEventListener("mouseup", (e) => draw = false);

window.addEventListener("mousemove", (e) => {
    if(prevX == null || prevY == null || !draw){
        prevX = e.clientX;
        prevY = e.clientY;
        return;
    }

    let currentX = e.clientX;
    let currentY = e.clientY;

    ctx.beginPath();
    ctx.moveTo(prevX, prevY);
    ctx.lineTo(currentX, currentY);
    ctx.stroke();

    prevX = currentX;
    prevY = currentY;
})

// Add toggle list
// florin pop dark/light theme toggle

const chk = document.getElementById('chk');

chk.addEventListener('change', () => {
	document.body.classList.toggle('dark');
});


// I want to add user preferences
// I thought I needed to add an explict "light" class to the code
// so that the js has something to latch on to
// i was thinking to do !dark but I think that has potential to create issues
// I'm glad this worked!

function getUserPreference() {
  return localStorage.getItem('theme') || 'system';
}
function saveUserPreference(userPreference) {
  localStorage.setItem('theme', userPreference);
}

function getAppliedMode(userPreference) {
  if (userPreference === 'light') {
    return 'light';
  }
  if (userPreference === 'dark') {
    return 'dark';
  }
  // system
  if (matchMedia('(prefers-color-scheme: light)').matches) {
    return 'light';
  }
  return 'dark';
}

const colorScheme = document.querySelector('meta[name="color-scheme"]');
function setAppliedMode(mode) {
  document.body.className = mode;
//! 	commented out because no 'content' but will need it.
  // colorScheme.content = mode;
}
function rotatePreferences(userPreference) {
  if (userPreference === 'system') {
    return 'light'
  }
  if (userPreference === 'light') {
    return 'dark';
  }
  if (userPreference === 'dark') {
    return 'system';
  }
  // for invalid values, just in case
  return 'system';
}

const themeDisplay = document.getElementById('mode');
const themeToggler = document.getElementById('theme-toggle');

let userPreference = getUserPreference();
setAppliedMode(getAppliedMode(userPreference));
//! will need this too
themeDisplay.innerText = userPreference;

themeToggler.onclick = () => {
  const newUserPref = rotatePreferences(userPreference);
  userPreference = newUserPref;
  saveUserPreference(newUserPref);
  themeDisplay.innerText = newUserPref;
  setAppliedMode(getAppliedMode(newUserPref));
}
