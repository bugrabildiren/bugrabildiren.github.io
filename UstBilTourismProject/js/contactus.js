$(document).ready(function() {
    $("#birthday").datepicker();
});

const form = document.querySelector('form');
const inputs = document.querySelectorAll('.form-input');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    let hasError = false;

    inputs.forEach(input => {
        if (input.value.trim() === '') {
            input.classList.add('error');
            hasError = true;
        } else {
            input.classList.remove('error');
        }
    });

    if (hasError) {
        alert('Lütfen tüm alanları doldurun!');
    } else {
        
    }
});
