const refreshBtn = document.querySelector(".refresh-btn");
const hexValue = document.querySelectorAll(".hex-value");
const color = document.querySelectorAll(".color");
const reactBox = document.querySelectorAll(".rect-box");
const container = document.querySelector(".container");

const maxPaletteBoxes = 100;

const generatePallet = () => {
  //  container.innerHTML = "";
  for (let i = 0; i < maxPaletteBoxes; i++) {
    let randomHex = Math.floor(Math.random() * 0xffffff).toString(16);
    randomHex = `#${randomHex.padStart(6, "0")}`;

    reactBox[i].style.backgroundColor = `${randomHex}`;
    hexValue[i].innerHTML = `${randomHex}`;
    color[i].addEventListener("click", () => copyColor(color, randomHex));
  }
};



const copyColor = (elem, hexVal) => {
//   console.log(color, randomHex);
  const colorElement = hexValue;

  navigator.clipboard.writeText(hexVal).then(() => {
      colorElement.innerHTML = "copied";
      setTimeout(() => colorElement.innerText = hexVal, 1000);
    }).catch(() => alert("Failed to copy the color code!!"));
};

refreshBtn.addEventListener("click", generatePallet);

generatePallet();
