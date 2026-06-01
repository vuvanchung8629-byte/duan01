const interactiveBox = document.getElementById("interactive-box");
const mainTitle = document.getElementById("main-title");
const bottomHint = document.getElementById("bottom-hint");
const coverContent = document.getElementById("cover-content");
const letterContent = document.getElementById("letter-content");
const closeBtn = document.getElementById("close-btn");
const bgMusic = document.getElementById("bg-music");

interactiveBox.addEventListener("click", function (e) {
  if (this.classList.contains("expanded-mode")) return;
  mainTitle.classList.add("transparent");
  bottomHint.classList.add("transparent");
  coverContent.classList.add("hidden");
  this.classList.add("expanded-mode");
  setTimeout(() => {
    letterContent.classList.remove("hidden");
    closeBtn.classList.remove("hidden");
  }, 500);
  if (bgMusic && bgMusic.getAttribute("src") !== "") {
    bgMusic.play().catch((err) => console.log("Autoplay blocked: ", err));
  }
});

closeBtn.addEventListener("click", function (e) {
  e.stopPropagation();
  letterContent.classList.add("hidden");
  closeBtn.classList.add("hidden");
  interactiveBox.classList.remove("expanded-mode");
  setTimeout(() => {
    coverContent.classList.remove("hidden");
    mainTitle.classList.remove("transparent");
    bottomHint.classList.remove("transparent");
  }, 500);
  if (bgMusic) {
    bgMusic.pause();
    bgMusic.currentTime = 0;
  }
});
