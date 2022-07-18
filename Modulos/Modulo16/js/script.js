document.getElementById('form').addEventListener('submit', function(event) {
    
    event.preventDefault()

    let form = new FormData(this)
    validation(form)

    let inputs = document.querySelectorAll('.form-control');
    let flag = 0;

    for (let input of inputs) {
        if (input.classList.contains('is-invalid')) {
            flag = 1;
        } 
    }

    if (flag == 0) {
        alert('Formulário enviado com sucesso! 😊');
        setTimeout(function() {
            document.getElementById('form').submit();
        }, 500);
    } else {
        event.preventDefault();
    }
})

document.getElementById('form').addEventListener('focusout', function(event) {
    
    event.preventDefault()

    let form = new FormData(this)
    validation(form)
})

function validation(form) {

    for (let key of form.keys()) {
        let element = document.getElementById(key)
        let value = form.get(key)

        if (element.required) {
            isInvalid(element)

            if (value.length > 0) {
                isValid(element)

                if (key == 'email') {
                    if (value.match(/^\w+\@\w+\.\D+$/)) {
                        isValid(element);
                    } else {
                        isInvalid(element);
                        document.getElementById("invalid-feedback-email").innerText = 'Exemplo: meuemail@mail.com';
                    }
                }
            } else {
                isInvalid(element)

                if (key == 'email') {
                    document.getElementById('invalid-feedback-email').innerText = 'Campo obrigatório!';
                }
            }
        } else {
            isValid(element)
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