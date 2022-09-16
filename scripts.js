const form = document.getElementById("form");
const nome = document.getElementById("name");
const cpf = document.getElementById("cpf");
const idade = document.getElementById("idade");
const tel = document.getElementById("tel");
const email = document.getElementById("email");
const password = document.getElementById("password");
const passwordConfirmation = document.getElementById("password-confirmation");


form.addEventListener("submit", (e) => {
    e.preventDefault();

    checandoCampos();
});

function checandoCampos() {
    const nomeValue = nome.value;
    const cpfValue = cpf.value;
    const idadeValue = idade.value;
    const telValue = tel.value
    const emailValue = email.value;
    const passwordValue = password.value;
    const passwordConfirmationValue = passwordConfirmation.value;
    const items = document.querySelector(".items");

    const li = document.createElement("li");

    if (nomeValue === "") {
        setErrorFor(nome, "O nome de usuário é obrigatório.");
    } else {
        setSuccessFor(nome);
    }

    if (cpfValue === "") {
        setErrorFor(cpf, "O cpf é obrigatório.");
    } else {
        setSuccessFor(cpf);
    }

    if (idadeValue === "") {
        setErrorFor(idade, "A idade é obrigatória.");
    } else {
        setSuccessFor(idade);
    }

    if (telValue === "") {
        setErrorFor(tel, "O telefone é obrigatório.");
    } else {
        setSuccessFor(tel);
    }

    if (emailValue === "") {
        setErrorFor(email, "O email é obrigatório.");
    } else if (!checkEmail(emailValue)) {
        setErrorFor(email, "Por favor, insira um email válido.");
    } else {
        setSuccessFor(email);
    }

    if (passwordValue === "") {
        setErrorFor(password, "A senha é obrigatória.");
    } else if (passwordValue.length < 7) {
        setErrorFor(password, "A senha precisa ter no mínimo 7 caracteres.");
    } else {
        setSuccessFor(password);
    }

    if (passwordConfirmationValue === "") {
        setErrorFor(passwordConfirmation, "A confirmação de senha é obrigatória.");
    } else if (passwordConfirmationValue !== passwordValue) {
        setErrorFor(passwordConfirmation, "As senhas não conferem.");
    } else {
        setSuccessFor(passwordConfirmation);
    }

    const formControls = form.querySelectorAll(".form-control");

    const formIsValid = [...formControls].every((formControl) => {
        return formControl.className === "form-control success";
    });

    if (formIsValid) {
        console.log("O formulário está 100% válido!");
    }

    li.classList = "item";
    li.innerHTML = `Nome: ${nomeValue}<br> CPF: ${cpfValue} <br> Idade: ${idadeValue} <br> Telefone: ${telValue} <br> Email: ${emailValue}`;

    //adiciona <li>
    items.appendChild(li);
}

function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector("small");

    small.innerText = message;

    formControl.className = "form-control error";
}

function setSuccessFor(input) {
    const formControl = input.parentElement;

    formControl.className = "form-control success";
}

function checkEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        email
    );
}