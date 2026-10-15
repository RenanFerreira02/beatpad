// Pega todos os pads da página de uma vez
const pads = document.querySelectorAll('.pad');

// Para cada pad, prepara o som e fica ouvindo o clique
pads.forEach((pad) => {
  const sound = new Audio(`sounds/${pad.dataset.sound}.wav`);

  pad.addEventListener('click', () => {
    // Volta o som para o começo, mesmo que ele ainda esteja tocando
    sound.currentTime = 0;
    sound.play();
  });
});
