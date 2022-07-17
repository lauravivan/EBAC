document.getElementById('form').addEventListener('submit', function (event) {
    event.preventDefault();

    let form = new FormData(this);
    validationForm(form);

    let inputs = document.querySelectorAll('input');
    let flag = 0;

    for (let input of inputs) {
        if (input.classList.contains('is-invalid')) {
            flag = 1;
        } 
    }

    if (flag == 0) {
        document.getElementById('promo-msg').classList.remove('is-valid');
        alert('Formulário enviado com sucesso! Agradecemos a sua participação 😊');
        setTimeout(function() {
            document.getElementById('form').submit();
        }, 500);
    } else {
        event.preventDefault();
    }
});

document.getElementById('form').addEventListener('focusout', function (event) {
    event.preventDefault();

    let form = new FormData(this);
    validationForm(form);
});

document.getElementById('home-number').addEventListener('keypress', function (event) {
    validationKeyboardOnlyNumbers(event);
});

document.getElementById('CEP').addEventListener('keypress', function (event) {
    validationKeyboardOnlyNumbers(event);
});

document.getElementById('cellphone').addEventListener('keypress', function (event) {
    validationKeyboardOnlyNumbers(event);
});

document.getElementById('phone').addEventListener('keypress', function (event) {
    validationKeyboardOnlyNumbers(event);
});

document.getElementById('UF').addEventListener('keypress', function (event) {
    
    if (event.key.match(/^\d|\W$/)) {
        event.preventDefault();
    } 

});

function validationForm(form) {
    for (let key of form.keys()) {
        let element = document.getElementById(key);
        let value = form.get(key);

        if (element.required) {
            if (value.length > 0) {
                isValid(element);

                if (key == 'email') {
                    if (value.match(/^\w+\@\w+\.\D+$/)) {
                        isValid(element);
                    } else {
                        isInvalid(element);
                        document.getElementById("invalid-feedback-email").innerText = 'Exemplo: meuemail@mail.com';
                    }
                } else if (key == 'CEP') {
                    if (value.length < 8) {
                        isInvalid(element);
                        document.getElementById('invalid-feedback-cep').innerText = 'Exemplo: 88503546';
                    }
                } else if (key == 'UF') {
                    if (value.length < 2) {
                        isInvalid(element);
                        document.getElementById('invalid-feedback-uf').innerText = 'Exemplo: SC';
                    }
                } else if (key == 'cellphone') {
                    if (value.length < 11) {
                        isInvalid(element);
                        document.getElementById('invalid-feedback-cellphone').innerText = 'Exemplo: 48999573231';
                    }
                }
            } else {
                isInvalid(element);

                if (key == 'email') {
                    document.getElementById('invalid-feedback-email').innerText = 'Campo obrigatório!';
                } else if (key == 'CEP') {
                    document.getElementById('invalid-feedback-cep').innerText = 'Campo obrigatório!';
                } else if (key == 'UF') {
                    document.getElementById('invalid-feedback-uf').innerText = 'Campo obrigatório!';
                } else if (key == 'cellphone') {
                    document.getElementById('invalid-feedback-cellphone').innerText = 'Campo obrigatório!';
                }
            }
        } else {
            isValid(element);

            if (key == 'phone') {
                if (value.length > 0 && value.length < 10) {
                    isInvalid(element);
                    document.getElementById('invalid-feedback-phone').innerText = 'Exemplo: 4833040102';
                }
            }
        }  
    }
}

function isInvalid(element) {
    element.classList.add('is-invalid');
    element.classList.remove('is-valid');
}

function isValid(element) {
    element.classList.add('is-valid');
    element.classList.remove('is-invalid');
}

function validationKeyboardOnlyNumbers(event) {
    if (event.key.match(/^\D|\W$/)) {
        event.preventDefault();
    }
}