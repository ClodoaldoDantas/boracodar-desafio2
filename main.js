import "./main.css";

const assetsPath = "/assets";
const previewButton = document.getElementById("preview-button");
const previewImage = document.getElementById("preview");
let active = false;

function handlePreview() {
  if (!active) {
    previewButton.querySelector("img").src = `${assetsPath}/close.svg`;
    previewImage.src = `${assetsPath}/sofa.gif`;
  } else {
    previewButton.querySelector("img").src = `${assetsPath}/rotate.svg`;
    previewImage.src = `${assetsPath}/sofa.png`;
  }

  active = !active;
}

previewButton.addEventListener("click", handlePreview);
