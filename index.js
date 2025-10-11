const license = document.getElementById("license");
const licenseWindow = document.getElementById("licenseWindow");
license.addEventListener("click", () => {
  licenseWindow.style.display = "block";
});

document.querySelectorAll(".title-bar").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const windowEl = e.target.closest("#licenseWindow, #sonmulWindow");
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
