// * HTML elements
const navbar = document.getElementById("navbar");
const navBtn = document.getElementById("navBtn");
const trialBtn = document.getElementById("trialBtn");
const lightBox = document.getElementById("lightBox");
const lightBoxBtn = document.getElementById("lightBoxBtn");
const chatBoxIcon = document.getElementById("chatBoxIcon");
const closeChatBtn = document.getElementById("closeChatBtn");
const chatBox = document.getElementById("chatBox");

// * functions
function changeNavbar() {
  if (window.scrollY > 20) {
    navbar.classList.add("navbarChange");
  } else {
    navbar.classList.remove("navbarChange");
  }
}

function showLightBox() {
  lightBox.classList.replace("d-none", "d-flex");
}

function hideLightBox() {
  lightBox.classList.replace("d-flex", "d-none");
}

function showHideChatBox() {
  chatBox.classList.toggle("show");
}

function hideChatBox() {
  chatBox.classList.remove("show");
}

// * events
window.addEventListener("scroll", changeNavbar);

navBtn.addEventListener("click", showLightBox);
trialBtn.addEventListener("click", showLightBox);

lightBoxBtn.addEventListener("click", hideLightBox);

lightBox.addEventListener("click", function (e) {
  if (e.target === lightBox) {
    hideLightBox();
  }
});

chatBoxIcon.addEventListener("click", showHideChatBox);
closeChatBtn.addEventListener("click", hideChatBox);
