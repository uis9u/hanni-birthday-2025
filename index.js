const license = document.getElementById("license");
const licenseWindow = document.getElementById("licenseWindow");
license.addEventListener("click", () => {
  licenseWindow.style.display = "block";
});

document.querySelectorAll("#closeButton").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const windowEl = e.target.closest(
      "#licenseWindow, #sonmulWindow, #hanniWindow, #hbdWindow"
    );
    if (windowEl) {
      windowEl.style.display = "none";
    }
  });
});

const sonmul = document.getElementById("sonmul");
const sonmulWindow = document.getElementById("sonmulWindow");
sonmul.addEventListener("click", () => {
  sonmulWindow.style.display = "block";
});

const hbd = document.getElementById("hbd");
const hbdWindow = document.getElementById("hbdWindow");
hbd.addEventListener("click", () => {
  hbdWindow.style.display = "block";
});
