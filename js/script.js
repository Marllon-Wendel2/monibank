import ehUmCPF from "./valida-cpf.js";
import maiorIdd from "./valida-idd.js";
import { mensagens } from "./erroMassege.js";

const camposDoFormulario = document.querySelectorAll('[required]')
const formulario = document.querySelector("[data-formulario]");

formulario.addEventListener("submit", (e) => {
    e.preventDefault();

    const listaResposta = {
        "nome" : e.target.elements["nome"].value,
        "email" : e.target.elements["email"].value,
        "rg" : e.target.elements["rg"].value,
        "cpf" : e.target.elements["cpf"].value,
        "aniversario" : e.target.elements["aniversario"].value
    }

    localStorage.setItem("cadastro", JSON.stringify(listaResposta))
    window.location.href = './abrir-conta-form-2.html'
})

camposDoFormulario.forEach((campo) => {
    campo.addEventListener("blur", () => verificaCampo(campo));
    campo.addEventListener("invalid", event => event.preventDefault())
})

const tiposDeErro = [
    'valueMissing',
    'typeMismatch',
    'patternMismatch',
    'tooShort',
    'customError'
]

function verificaCampo(campo) {
    let mensagem = "";
    if (campo.name == "cpf" && campo.value.length >= 11) {
        ehUmCPF(campo);
    }

    if (campo.name == "aniversario" && campo.value != "") {
        maiorIdd(campo)
    }
    tiposDeErro.forEach(erro => {
        if(campo.validity[erro]) {
            mensagem = mensagens[campo.name][erro];
            console.log(mensagem)
        }
    })
    const mensagemErro =  campo.parentNode.querySelector('.mensagem-erro');
    const validadorInput = campo.checkValidity();

    if(!validadorInput) {
        mensagemErro.textContent = mensagem
    } else {
        mensagemErro.textContent = ""
    }

}