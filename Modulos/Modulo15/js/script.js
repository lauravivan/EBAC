document.getElementById('form').addEventListener('submit', function (event) {
    event.preventDefault();

    let form = new FormData(this);

    validationOfForm(form);
    
    let inputs = document.querySelectorAll('input');
    let flag;

    for (let input of inputs) {
        if (input.classList.contains('invalid')) {
            flag = 0;
        } else {
            flag = 1;
        }
    }

    if (flag == 1) {
        alert('Formulário enviado com sucesso! Agradecemos a sua participação 😊');
        setTimeout(function() {
            document.getElementById("form").submit();
        }, 500);
    } else {
        event.preventDefault();
    }
});

document.getElementById('form').addEventListener('focusout', function (event) {
    event.preventDefault();

    let form = new FormData(this);

    validationOfForm(form);
});

document.getElementById('birth').addEventListener('keypress', function (event) {
    if (event.key.match(/^\D$/) && !(event.key.match(/^\/|-$/))) {
        event.preventDefault();
    } 
});

document.getElementById('age').addEventListener('keypress', function (event) {
    if (event.key.match(/^\D$/)) {
        event.preventDefault();
    } 
});

document.getElementById('cpf').addEventListener('keypress', function (event) {
    if (event.key.match(/^\D$/) && !(event.key.match(/^\.|-$/))) {
        event.preventDefault();
    } 
});

document.getElementById('rg').addEventListener('keypress', function (event) {
    if (event.key.match(/^\D$/) && !(event.key.match(/^\.|-$/))) {
        event.preventDefault();
    } 
});

document.getElementById('home-number').addEventListener('keypress', function (event) {
    if (event.key.match(/^\D$/)) {
        event.preventDefault();
    } 
});

document.getElementById('uf').addEventListener('keypress', function (event) {
    if (event.key.match(/^\d|\W$/)) {
        event.preventDefault();
    } 
});

document.getElementById('cellnumber').addEventListener('keypress', function (event) {
    if (event.key.match(/^\D$/) && !(event.key.match(/^\(|\)|-$/))) {
        event.preventDefault();
    } 
});

document.getElementById('birth').addEventListener('focusout', function (event) {
    event.preventDefault();
    event.stopPropagation();

    let birthValue = this.value;
    let regex = /^([0][1-9]|[1-2][0-9]|[3][0-1])(-|\/)([0][1-9]|[1][0-2])(-|\/)([1][9][2-9][0-9]|[2][0][0-1][0-9]|[2][0][2][0-2]|[0]{4})$/;
    let errorMsg = 'Exemplo: 03/10/2020 ou 03-10-2020';

    validationOfSpecificFields(this, birthValue, regex, errorMsg);
});

document.getElementById('cpf').addEventListener('focusout', function (event) {
    event.preventDefault();
    event.stopPropagation();

    let cpfValue = this.value;
    let regex = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
    let errorMsg = 'Exemplo: 789.805.463-00';

    validationOfSpecificFields(this, cpfValue, regex, errorMsg);
});

document.getElementById('rg').addEventListener('focusout', function (event) {
    event.preventDefault();
    event.stopPropagation();

    let rgValue = this.value;
    let regex = /^\d{1}\.\d{3}-\d{3}$/;
    let errorMsg = 'Exemplo: 7.805-463';

    validationOfSpecificFields(this, rgValue, regex, errorMsg);
});

document.getElementById('uf').addEventListener('focusout', function (event) {
    event.preventDefault();
    event.stopPropagation();

    let ufValue = this.value;
    let regex = /^\D{2}$/;
    let errorMsg = 'Exemplo: SC';

    validationOfSpecificFields(this, ufValue, regex, errorMsg);
});

document.getElementById('email').addEventListener('focusout', function (event) {
    event.preventDefault();
    event.stopPropagation();

    let emailValue = this.value;
    let regex = /^\w+\@\w+\.\D+$/;
    let errorMsg = 'Exemplo: meuemail@exemplo.com';

    validationOfSpecificFields(this, emailValue, regex, errorMsg);
});

document.getElementById('cellnumber').addEventListener('focusout', function (event) {
    event.preventDefault();
    event.stopPropagation();

    let ufValue = this.value;
    let regex = /^\(\d{2}\)\d{5}-\d{4}$/;
    let errorMsg = 'Exemplo: (48)98974-6362';

    validationOfSpecificFields(this, ufValue, regex, errorMsg);
});

document.getElementById('age').addEventListener('focusout', function (event) {
    event.preventDefault();
    event.stopPropagation();

    let ageValue = this.value;

    if (ageValue.length > 0) {
        if ((ageValue >= 12) && (ageValue <= 110)) {
            isValid(this);
            validMsg(this);
        } else {
            isInvalid(this);
            invalidMsg(this, 'Idade inválida!');
        }
    } else {
        isInvalid(this);
        invalidMsg(this, 'Campo obrigatório!');
    }
});

document.getElementById('home-number').addEventListener('focusout', function (event) {
    event.preventDefault();
    event.stopPropagation();

    let homeNumberValue = this.value;

    if (homeNumberValue.length > 0) {
        if ((homeNumberValue > 0) && (homeNumberValue <= 10000)) {
            isValid(this);
            validMsg(this);
        } else {
            isInvalid(this);
            invalidMsg(this, 'Número inválido!');
        }
    } else {
        isInvalid(this);
        invalidMsg(this, 'Campo obrigatório!');
    }
});

function validationOfForm(form) {
    for (let key of form.keys()) {
        let element = document.getElementById(key);
        let elementValue = form.get(key);

        if (elementValue.length > 0) {
            isValid(element);
            validMsg(element);
        } else {
            isInvalid(element);
            invalidMsg(element, 'Campo obrigatório!');
        }
    }
}

function validationOfSpecificFields(element, value, regex, errorMsg) {
    if (value.length > 0) {
        if (value.match(regex)) {
            isValid(element);
            validMsg(element);
        } else {
            isInvalid(element);
            invalidMsg(element, errorMsg);
        }
    } else {
        isInvalid(element);
        invalidMsg(element, 'Campo obrigatório!');
    }
}

function isValid(element) {
    element.classList.add('valid');
    element.classList.remove('invalid');
}

function isInvalid(element) {
    element.classList.add('invalid');
    element.classList.remove('valid');
}

function validMsg(element) {
    const msg = 'Tudo certo!';
    showMsg(element, msg, 'valid-msg');
}

function invalidMsg(element, msg) {
    showMsg(element, msg, 'invalid-msg');
}

function showMsg(element, msg, className) {
    let tagOfTheMsg = document.createElement("span");
    let tagText = document.createTextNode(msg);

    tagOfTheMsg.appendChild(tagText);
    tagOfTheMsg.classList.add(className);
    
    if (element.nextElementSibling) {
        element.nextElementSibling.remove();
    }

    element.insertAdjacentElement("afterend", tagOfTheMsg);
}