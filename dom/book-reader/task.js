const book = document.getElementById('book');
const fontSizes = document.querySelectorAll('.font-size');

fontSizes.forEach(function (fontSize) {
  fontSize.addEventListener('click', function (event) {
    event.preventDefault();

    fontSizes.forEach(function (item) {
      item.classList.remove('font-size_active');
    });

    fontSize.classList.add('font-size_active');

    book.classList.remove('book_fs-small');
    book.classList.remove('book_fs-big');

    if (fontSize.dataset.size === 'small') {
      book.classList.add('book_fs-small');
    }

    if (fontSize.dataset.size === 'big') {
      book.classList.add('book_fs-big');
    }
  });
});
