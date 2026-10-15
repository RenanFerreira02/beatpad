// Pega todos os pads da página de uma vez
const pads = document.querySelectorAll('.pad');

// Para cada pad, prepara o som e fica ouvindo o clique
pads.forEach((pad) => {
  const sound = new Audio(`sounds/${pad.dataset.sound}.wav`);

  pad.addEventListener('click', () => {
    // Volta o som para o começo, mesmo que ele ainda esteja tocando
    sound.currentTime = 0;
    sound.play();

    // Acende o pad
    pad.classList.add('playing');
  });
});

// Quando uma tecla é apertada, procura o pad daquela tecla e clica nele
document.addEventListener('keydown', (event) => {
  const key = event.key.toLowerCase();

  pads.forEach((pad) => {
    if (pad.dataset.key === key) {
      pad.click();
    }
  });
});
