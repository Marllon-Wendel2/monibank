export default function maiorIdd(camp) {
    const dataNascimento = new Date(camp.value);
    if(!validaIdade(dataNascimento)) {
        camp.setCustomValidity("Usuario não é maior de idade")
    }
}

function validaIdade(data) {
    const dataAtual = new Date();
    const dataMais18 = new Date(data.getUTCFullYear() + 18, data.getUTCMonth(), data.getUTCDate());

    return dataAtual >=dataMais18
}