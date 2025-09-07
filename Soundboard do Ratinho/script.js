//Parei no tempo: 28:10

let audios = [
    {caminho: 'audios/baby-laughing-meme.mp3', legenda: 'Bebe Rindo'},
    {caminho: 'audios/cavalo-ratinho.mp3', legenda: 'CAVALO'},
    {caminho: 'audios/comedy-male-yelling-yee-ha-sound-effects-free-download-mp3cut.mp3', legenda: 'IIIHHHÁÁÁ!'},
    {caminho: 'audios/ele-gosta-vai-dar-namoro-2022.mp3', legenda: 'ELE GOOSTA!'},
    {caminho: 'audios/head-shake-1.mp3', legenda: 'Som de cabeça negando'},
    {caminho: 'audios/projeto_ratinho_audios_grito.mp3', legenda: 'GRITO!'},
    {caminho: 'audios/projeto_ratinho_audios_jesus.mp3', legenda: 'JEEESUS!'},
    {caminho: 'audios/projeto_ratinho_audios_nao-e-o-pai.mp3', legenda: 'Ele não é o pai'},
    {caminho: 'audios/projeto_ratinho_audios_uepa.mp3', legenda: 'UEEPAA!'},
    {caminho: 'audios/projeto_ratinho_audios_vixi-ratinho.mp3', legenda: 'VIXE!'},
    {caminho: 'audios/projeto_ratinho_audios_xaropinho.mp3', legenda: 'RAPAZ!'},
    {caminho: 'audios/vine-boom.mp3', legenda: 'BOOM!'},
];

let botoes = document.querySelectorAll('.botao');
let legendas = document.querySelectorAll('p');

for (let i = 0; i < 12; i++) {
    legendas[i].textContent = audios[i].legenda;
    botoes[i].setAttribute('data-item', i);
}

let audioTag = document.querySelector('audio');

botoes.forEach(botao => {
    botao.addEventListener('click', () => {
        let som = audios[botao.getAttribute('data-item')];
        audioTag.setAttribute('src', som.caminho);
        audioTag.addEventListener('loadeddata', () => {
            audioTag.play();   
        });
    });
});
