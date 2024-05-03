$(document).ready(function() {
  $("#birthday").datepicker();
});

$(document).ready(function() {
  var langs = ["ActionScript", "AppleScript", "Asp", "JavaScript", "Lisp", 
                                                  "Perl", "Python", "C++"];
  $("#proglang").autocomplete({source: langs}); 
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
