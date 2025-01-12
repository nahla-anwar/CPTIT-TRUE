const navBtn = document.getElementById("navBtn");
const trialBtn = document.getElementById("trialBtn");
const lightBox = document.getElementById("lightBox");
const lightBoxBtn = document.getElementById("lightBoxBtn");

function showLightBox() {
  lightBox.classList.replace("d-none", "d-flex");
}

function hideLightBox() {
  lightBox.classList.replace("d-flex", "d-none");
}

navBtn.addEventListener("click", showLightBox);
trialBtn.addEventListener("click", showLightBox);

lightBoxBtn.addEventListener("click", hideLightBox);

lightBox.addEventListener("click", function (e) {
  if (e.target === lightBox) {
    hideLightBox();
  }
});
