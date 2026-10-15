// Pega todos os pads da página de uma vez
const pads = document.querySelectorAll('.pad');

// Para cada pad, fica ouvindo o clique
pads.forEach((pad) => {
  pad.addEventListener('click', () => {
    console.log(`Tocou: ${pad.dataset.sound}`);
  });
});
