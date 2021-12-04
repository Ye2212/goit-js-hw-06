function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const refs = {
inputRef: document.querySelector('#controls input'),
btnCreateRef: document.querySelector('[data-create]'),
btnDestroyRef: document.querySelector('[data-destroy]'),
divRef: document.querySelector('#boxes'),
}

refs.inputRef.addEventListener('input', onInputChange);
refs.btnCreateRef.addEventListener('click', onBtnCreateClick);
refs.btnDestroyRef.addEventListener('click', onbtnDestroyClick);

let inputValue = 0;
function onInputChange (event) {
  inputValue = event.currentTarget.value;
  console.log(inputValue);
};
let width = 30;
let height = 30;
function onBtnCreateClick (event){

  for (let i = 1; i <= refs.inputRef.value; i += 1 ) {

  refs.divRef.insertAdjacentHTML('beforeend', `<div style="width: ${width}px; height: ${height}px;
   background-color: ${getRandomHexColor()};"></div >`)
width += 10;
height += 10;
  }
};
function onbtnDestroyClick (event){
  refs.divRef.innerHTML = '';
  refs.inputRef.value = '';
  width = 30;
  height = 30;
};

