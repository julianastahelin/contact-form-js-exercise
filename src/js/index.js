let mandatoryInputs = document.querySelectorAll('.mandatory-input');
let mandatoryMessage = document.querySelectorAll('.mandatory-message');
const submitBtn = document.querySelector('.submit');

submitBtn.addEventListener('click', function (event) {
    mandatoryInputs.forEach((input, index) => {
        if (input.value === "") {
            input.classList.add('alert');
            mandatoryMessage[index].classList.add('alert');
            event.preventDefault();
        } else {
            input.classList.remove('alert');
            mandatoryMessage[index].classList.remove('alert');
        }
    });
}
)

mandatoryInputs.forEach((input, index) => {
    input.addEventListener("change", () => {
        if (input.value === "") {
            input.classList.remove('green');
            input.classList.add('alert');
            mandatoryMessage[index].classList.add('alert');
        } else {
            input.classList.remove('alert');
            input.classList.add('green');
            mandatoryMessage[index].classList.remove('alert');
        }
    })
})
