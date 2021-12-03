const decrementBtnRef = document.querySelector('button[data-action="decrement"]');
const incrementBtnRef = document.querySelector('button[data-action="increment"]');

let counterValue = 0;

const onDecrementClick = () => {
    counterValue -= 1;
document.querySelector('#value').innerHTML = counterValue;  
}
const onIncrementClick = () => {
    counterValue += 1;
document.querySelector('#value').innerHTML = counterValue;
}

decrementBtnRef.addEventListener('click', onDecrementClick);
incrementBtnRef.addEventListener('click', onIncrementClick);
