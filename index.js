const form = document.getElementById("form");
const user = document.getElementById("name");
const email = document.getElementById("email");
const password = document.getElementById("password");
const checkPassword = document.getElementById("confirmPassword");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  checkInputs();
});

function checkInputs() {
  const userValue = user.value;
  const emailValue = email.value;
  const passwordValue = password.value;
  const checkPasswordValue = checkPassword.value;
  const pattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

  if (userValue === "") {
    setErrorFor(user, "O campo nome é obrigatório!");
  } else {
    setSuccessFor(user);
  }

  if (emailValue === "") {
    setErrorFor(email, "O campo e-mail é obrigatório");
  } else {
    setSuccessFor(email);
  }

  if (passwordValue === "") {
    setErrorFor(password, "Informe uma senha para seu usuário");
  } else if (passwordValue.length < 8) {
    setErrorFor(password, "A senha deve ter no minimo 8 caracteres.");
  } else {
    setSuccessFor(password);
  }

  if (checkPasswordValue != passwordValue) {
    setErrorFor(checkPassword, "As senhas devem ser correspondentes.");
  } else if (checkPasswordValue === "") {
    setErrorFor(checkPassword, "Informe uma senha para seu usuário");
  } else if (checkPasswordValue.length < 8) {
    setErrorFor(checkPassword, "A senha deve ter no minimo 8 caracteres.");
  } else {
    setSuccessFor(checkPassword);
  }

  if (emailValue.match(pattern)) {
    setSuccessFor(email);
  } else {
    setErrorFor(email, "Digite um e-mail válido.");
  }

   const formControls = form.querySelectorAll(".form-control");

   const formValid = [...formControls].every((formControl) => {
     return (formControl.className === "form-control success");
   });

   if (formValid) {
     alert("Cadastro efetuado com sucesso!");
   }
}

function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const errorMsg = formControl.querySelector("small");

  // Mensagem de erro
  errorMsg.innerText = message;

  // Adicionar a classe de erro
  formControl.className = "form-control error";
}

function setSuccessFor(input) {
  const formControl = input.parentElement;

  // Adicionar a classe de Sucesso
  formControl.className = "form-control success";
}
