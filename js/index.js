const imagens = document.querySelectorAll('.minha-imagem')
const imagem = document.getElementById('hero_cup')
const miau1 = document.getElementById('miau1')
const miau2 = document.getElementById('miau2')

let contadorCliques = 0

let audioAtual

imagens.forEach(function (imagem, index) {
  const audio = document.getElementById('audio' + (index + 1))

  imagem.addEventListener('click', function () {
    audio.play()
  })
})

imagem.addEventListener('click', function () {
  contadorCliques++;
  if (contadorCliques <= 3) {
    miau1.play()
  } else {
    miau2.play()
    contadorCliques = 0
  }
})
