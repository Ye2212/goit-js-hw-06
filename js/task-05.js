const inputRef = document.getElementById('name-input');
const spanRef = document.getElementById('name-output');

function onInputChange  (event) {
    if (event.currentTarget.value.trim() === '') {
        spanRef.textContent = "Anonymous";
    } else {
        spanRef.textContent = event.currentTarget.value.trim();
    }
};

inputRef.addEventListener('input', onInputChange);
