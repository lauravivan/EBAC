document.getElementById("form").addEventListener("submit", function (event) {
    event.preventDefault();

    let form = new FormData(this);
    let errorColor = "#a83232";
    let sucessColor = "rgb(74, 168, 50)";

    validateFields(form, errorColor, sucessColor);
});

function validateFields(form, errorColor, sucessColor) {
    for (let key of form.keys()) {
        let value = form.get(key);
        let element = document.getElementById(key);

        if (value == "") {
            createAlert(key, "Campo obrigatório", errorColor);
            element.classList.remove("input_sucess");
        } else {
            createAlert(key, "", sucessColor);
            element.classList.add("input_sucess");

            validateSpecificFields(form, errorColor);
        }
    }

    formSucess(sucessColor);
}

function validateSpecificFields(form, errorColor) {
    let birthKey = "birth";
    let ageKey = "age";
    let cpfKey = "cpf";
    let rgKey = "rg";
    let homeNumberKey = "home-number";
    let ufKey = "uf";
    let emailKey = "email";
    let cellNumberKey = "cellnumber";

    let birthKeyValue = form.get(birthKey);
    let ageKeyValue = form.get(ageKey);
    let cpfKeyValue = form.get(cpfKey);
    let rgKeyValue = form.get(rgKey);
    let homeNumberKeyValue = form.get(homeNumberKey);
    let ufKeyValue = form.get(ufKey);
    let emailKeyValue = form.get(emailKey);
    let cellNumberKeyValue = form.get(cellNumberKey);

    validateBirthField(birthKey, birthKeyValue, errorColor);
    validateAgeField(ageKey, ageKeyValue, errorColor);
    validateCpfField(cpfKey, cpfKeyValue, errorColor);
    validateRgField(rgKey, rgKeyValue, errorColor);
    validateHomeNumberField(homeNumberKey, homeNumberKeyValue, errorColor);
    validateUfField(ufKey, ufKeyValue, errorColor);
    validateEmailField(emailKey, emailKeyValue, errorColor);
    validateCellNumberField(cellNumberKey, cellNumberKeyValue, errorColor);
}

function validateBirthField(key, birthValue, errorColor) {
    if (!(birthValue.match(/^([0][1-9]|[1-2][0-9]|[3][0-1])\/?|-?([0][1-9]|[1][0-2])\/?|-?([1][9][2-9][0-9]|[2][0][0-1][0-9]|[2][0][2][0-2])$/))) {
        createAlert(key, "Informe uma data válida", errorColor);
        document.getElementById(key).classList.remove("input_sucess");
    }
}

function validateAgeField(key, ageValue, errorColor) {
    if (!(ageValue.match(/^\d+$/))) {
        createAlert(key, "Informe uma idade válida", errorColor);
        document.getElementById(key).classList.remove("input_sucess");

        if (ageValue < 0 || ageValue > 110) {
            createAlert(key, "Informe uma idade válida", errorColor);
            document.getElementById(key).classList.remove("input_sucess");
        }
    }
}

function validateCpfField(key, cpfValue, errorColor) {
    if (!(cpfValue.match(/^\d{11}$/))) {
        createAlert(key, "Exemplo: 00000000000", errorColor);
        document.getElementById(key).classList.remove("input_sucess");
    }
}

function validateRgField(key, rgValue, errorColor) {
    if (!(rgValue.match(/^\d{7}$/))) {
        createAlert(key, "Exemplo: 0000000", errorColor);
        document.getElementById(key).classList.remove("input_sucess");
    }
}

function validateHomeNumberField(key, homeNumberValue, errorColor) {
    if (!(homeNumberValue.match(/^\d+$/))) {
        createAlert(key, "Número inválido", errorColor);
        document.getElementById(key).classList.remove("input_sucess");
    }
}

function validateUfField(key, ufValue, errorColor) {
    if (!(ufValue.match(/^\D{2}$/))) {
        createAlert(key, "Exemplo: AA", errorColor);
        document.getElementById(key).classList.remove("input_sucess");
    }
}

function validateEmailField(key, emailValue, errorColor) {
    if (!(emailValue.match(/^\w+\@\w+\.\D+$/))) {
        createAlert(key, "Exemplo: meuemail@exemplo.com", errorColor);
        document.getElementById(key).classList.remove("input_sucess");
    }
}

function validateCellNumberField(key, cellNumberValue, errorColor) {
    if (!(cellNumberValue.match(/^\d{11}$/))) {
        createAlert(key, "Exemplo: 48999999999", errorColor);
        document.getElementById(key).classList.remove("input_sucess");
    }
}

function createAlert(key, msg, color) {
    let element = document.getElementById(key);
    let tagAlert = document.createElement("span");
    let tagText = document.createTextNode(msg);

    tagAlert.appendChild(tagText);
    tagAlert.style.marginTop = "5px";
    tagAlert.style.fontSize = "12px";
    element.style.border = `2px solid ${color}`;

    if (element.nextElementSibling) {
        element.nextElementSibling.remove();
    }

    element.insertAdjacentElement("afterend", tagAlert);
}

function formSucess(sucessColor) {
    let inputs = document.querySelectorAll("input");
    let flag = 1;

    for (let input of inputs) {
        if (!(input.style.borderColor == sucessColor)) {
            flag = 0;
        }
    }

    if (flag == 1) {
        document.getElementById("container").innerHTML += `<div id="form-sucess-msg">
                                                                <span>
                                                                    Formulário enviado com sucesso!
                                                                    Agradecemos a sua participação 😊
                                                                </span>
                                                            </div>`;
        setTimeout(function() {
            document.getElementById("form").submit();
        }, 1200);
    }
}