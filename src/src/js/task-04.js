const decrementBtnRef = document.querySelector('button[data-action="decrement"]');
const incrementBtnRef = document.querySelector('button[data-action="increment"]');

let counterValue = 0;

console.log(decrementBtnRef);
console.log(incrementBtnRef);

console.log(counterValue);


decrementBtnRef.addEventListener('click', () => {
counterValue -= 1;
document.querySelector('#value').innerHTML = counterValue;
});

incrementBtnRef.addEventListener('click', () => {
counterValue += 1;
document.querySelector('#value').innerHTML = counterValue;
});
