function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const spanColorRef = document.querySelector('.color');
const buttonChangeColorRef = document
.querySelector('.change-color')
.addEventListener('click', onBtnChangeColorClick );

function onBtnChangeColorClick () {
  const color = getRandomHexColor();
  document.body.style.backgroundColor = color;
};

