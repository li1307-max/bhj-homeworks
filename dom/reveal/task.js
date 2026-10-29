const reveals = document.querySelectorAll('.reveal');

function checkReveal() {
  reveals.forEach(function (reveal) {
    const revealPosition = reveal.getBoundingClientRect();

    if (revealPosition.top < window.innerHeight && revealPosition.bottom > 0) {
      reveal.classList.add('reveal_active');
    }
  });
}

window.addEventListener('scroll', checkReveal);

checkReveal();