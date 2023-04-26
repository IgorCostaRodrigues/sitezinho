// Selecionando o elemento do rodapé
const footer = document.querySelector('footer');

// Criando a animação para o rodapé
function animateFooter() {
  footer.style.animation = 'fadeInUp 1s forwards';
}

// Selecionando as imagens dos canais
const channelImages = document.querySelectorAll('.channel-img');

// Criando a animação para as imagens dos canais
function animateChannelImages() {
  channelImages.forEach(image => {
    image.style.animation = 'fadeIn 1s forwards';
  });
}

// Esperando o carregamento da página
window.addEventListener('load', () => {
  // Chamando as funções de animação
  animateFooter();
  animateChannelImages();
});
