const dots = document.getElementById("dots");
const moreText = document.getElementById("more");
function myFunction() {
    moreText.style.display = "none";
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      moreText.style.display = "inline";
    }
  }
