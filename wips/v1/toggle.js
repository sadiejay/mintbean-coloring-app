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
