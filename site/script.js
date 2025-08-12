const resumeBtn = document.querySelector(".resume");
const modal = document.getElementById("resume-modal");
const closeModal = document.getElementById("close-modal");

resumeBtn.addEventListener("click", function (e) {
  e.preventDefault();
  
  // Verifica se é dispositivo móvel
  if (window.innerWidth <= 1024) {
    // Em dispositivos móveis, inicia o download direto
    window.location.href = "assets/curriculo.pdf";
  } else {
    // Em desktop, abre o modal
    modal.style.display = "block";
  }
});

closeModal.addEventListener("click", function () {
  modal.style.display = "none";
});

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
