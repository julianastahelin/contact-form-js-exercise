let mandatoryInputs = document.querySelectorAll('.mandatory-input');
let telephone = document.querySelector('#telephone');
let mandatoryMessage = document.querySelectorAll('.mandatory-message');
const submitBtn = document.querySelector('.submit');

submitBtn.addEventListener('click', function (event) {
    for (let i = 0; i < mandatoryInputs.length; i++) {
        if (mandatoryInputs[i].value === "") {
            mandatoryInputs[i].classList.add('alert');
            mandatoryMessage[i].classList.add('alert');
            event.preventDefault();
        }
        if (mandatoryInputs[i].value !== "") {
            mandatoryInputs[i].classList.remove('alert');
            mandatoryMessage[i].classList.remove('alert');
        }
    }
    if (telephone.value.length < 10) {
        telephone.classList.remove('green');
        telephone.classList.add('alert');
        alert('Insira um número de telefone válido');
        event.preventDefault();
    } else if (telephone.value.length >= 10 && telephone.value.length <= 13) {
        telephone.classList.remove('alert');    
        telephone.classList.add('green');
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