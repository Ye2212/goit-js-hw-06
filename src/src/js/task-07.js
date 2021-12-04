const inputRef = document.querySelector('#font-size-control');
const spanRef = document.querySelector('#text');


// function onRangeChange (event) {
// spanRef.style.fontSize = `${event.currentTarget.value}px`;
// };
// стрелочная функция вызывается только полсе обьявления
const onRangeChange = (event) =>spanRef.style.fontSize = `${event.currentTarget.value}px`;

inputRef.addEventListener('input', onRangeChange);
// inputRef.addEventListener('input', (event) =>spanRef.style.fontSize = `${event.currentTarget.value}px`);