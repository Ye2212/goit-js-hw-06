const inputRef = document.getElementById('name-input');
const spanRef = document.getElementById('name-output');

// console.log(inputRef);
// console.log(spanRef);

inputRef.addEventListener('input', onInputChange)

function onInputChange  (event) {
    if (event.currentTarget.value === '') {
        spanRef.textContent = "Anonymous";
    } else {
        spanRef.textContent = event.currentTarget.value;
    }
};
