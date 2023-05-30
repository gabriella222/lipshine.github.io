const btnLogin = document.querySelector(".link-login");
const form = document.querySelector(".modal");

function openForm() {
  const displayForm = form.style.display;

  console.log;
  if (displayForm == "block") {
    form.style.display = "none";
  } else {
    form.style.display = "block";
  }
}

btnLogin.addEventListener("click", openForm);

const btnfecharForm = document.querySelector(".fechar");

function fecharForm() {
  form.style.display = "none";
}
btnfecharForm.addEventListener("click", fecharForm);
