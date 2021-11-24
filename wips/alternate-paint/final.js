const colorCircle = document.querySelectorAll(".color-circle");

let penSize = 10;
let isDrawing;
let x;
let y;

const canvas = document.querySelector("canvas");

c = canvas.getContext("2d");

canvas.addEventListener("mousedown", (e) => {
  isDrawing = true;
  x = e.offsetX;
  y = e.offsetY;
});

canvas.addEventListener("mouseup", () => {
  isDrawing = false;
  x = undefined;
  y = undefined;
});

canvas.addEventListener("mousemove", (e) => {
  draw(e.offsetX, e.offsetY);
});

c.fillStyle = "hotpink";
c.strokeStyle =c.fillStyle;

function draw(x2, y2) {
  if (isDrawing) {
    c.beginPath();
    c.arc(x2, y2, penSize, 0, Math.PI * 2);
    c.closePath();
    c.fill();

    drawLine (x,y,x2,y2);
  }
 x = x2;
 y = y2;
}

function drawLine(x1,y1,x2,y2){
    c.beginPath();
    c.moveTo(x1,y1);
    c.lineTo(x2,y2);
    c.strokeStyle = c.fillStyle;
    c.lineWidth = penSize *2;
    c.stroke();
}

document.querySelector(".fa-trash").addEventListener("click",function(){
  c.clearRect(0,0, canvas.width,canvas.height)
})
const selectColor = (elem) =>{
  removeActiveCircleColor()
  c.fillStyle = elem.getAttribute("data-color")
  elem.classList.add("active");
  
}
const removeActiveCircleColor= ()=>{
  colorCircle.forEach((circle)=>{
    circle.classList.remove("active");
  })
}
function penSizeChange(pensize){
  penSize = pensize
}
const favColor = (elem) =>{
  removeActiveCircleColor();
  c.fillStyle = elem.value;
}
document.querySelector("a").addEventListener("click", (e)=>{
  e.target.href= canvas.toDataURL()
})

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
