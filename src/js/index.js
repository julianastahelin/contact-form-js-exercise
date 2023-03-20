const mandatoryInputs = document.querySelectorAll('.mandatory-input');
let mandatoryMessage = document.querySelectorAll('.mandatory-message');
const submitBtn = document.querySelector('.submit');

submitBtn.addEventListener('click', function () {
    for (let i = 0; i < mandatoryInputs.length; i++) {
        if (mandatoryInputs[i].value === "") {
            mandatoryInputs[i].classList.add('alert');
            mandatoryMessage[i].classList.add('alert');
        } 
        if (mandatoryInputs[i].value !== "") {
            mandatoryInputs[i].classList.remove('alert');
            mandatoryMessage[i].classList.remove('alert');
        }
    }
}
)

for (let i = 0; i < mandatoryInputs.length; i++) {
    mandatoryInputs[i].addEventListener("change", function () {
        if (mandatoryInputs[i].value === "") {
            mandatoryInputs[i].classList.remove('green');
            mandatoryInputs[i].classList.add('alert');
        }
        if (mandatoryInputs[i].value !== "") {
            mandatoryInputs[i].classList.add('green');
            mandatoryMessage[i].classList.remove('alert');
        }
    })
}