const btnStartCam = document.querySelector("[data-video-botao]");
const campoCam = document.querySelector("[data-camera]");
const video = document.querySelector("[data-video]");
const btnTirarFoto = document.querySelector("[data-tirar-foto");
const canvas =  document.querySelector("[data-video-canvas");
const mensagemOk =  document.querySelector("[data-mensagem");
const btnEnviarFoto = document.querySelector("[data-enviar]");

btnStartCam.addEventListener("click", async function () {
    const startCam =  await navigator.mediaDevices
    .getUserMedia({video: true, audio: false})

    btnStartCam.style.display = "none";
    campoCam.style.display = "block"

    video.srcObject = startCam;
})

btnTirarFoto.addEventListener("click", function() {
    canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);

    imagemIRL =  canvas.toDataURL("imagem/jpeg");

    campoCam.style.display = "none";
    mensagemOk.style.display = "block";

})

btnEnviarFoto.addEventListener("click", () => {
    const dadosExistente =  localStorage.getItem("cadastro");
    const converteRetorno = JSON.parse(dadosExistente);

    converteRetorno.imagem = imagemURL;

    localStorage.setItem('cadastro', JSON.stringify(converteRetorno));

    window.location.href = '../pages/abrir-conta-form-3.html';
})