const rotators = document.querySelectorAll('.rotator');

rotators.forEach(function (rotator) {
  const cases = rotator.querySelectorAll('.rotator__case');
  let currentIndex = 0;

  cases.forEach(function (item, index) {
    if (item.classList.contains('rotator__case_active')) {
      currentIndex = index;
    }
  });

  setInterval(function () {
    cases[currentIndex].classList.remove('rotator__case_active');

    currentIndex = currentIndex + 1;

    if (currentIndex >= cases.length) {
      currentIndex = 0;
    }

    cases[currentIndex].classList.add('rotator__case_active');
  }, 1000);
});