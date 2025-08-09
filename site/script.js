const resumeBtn = document.querySelector(".resume");
const modal = document.getElementById("resume-modal");
const closeModal = document.getElementById("close-modal");

resumeBtn.addEventListener("click", function (e) {
  e.preventDefault();
  modal.style.display = "block";
});

closeModal.addEventListener("click", function () {
  modal.style.display = "none";
});

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
