var img_velho = document.getElementById('img-velho')
var som_velho = document.getElementById('som-velho')

img_velho.addEventListener('click', function(){
  if(som_velho.paused) {
    som_velho.play();
  } else {
    som_velho.pause();
    som_velho.currentTime = 0
    som_velho.play();
  }
});