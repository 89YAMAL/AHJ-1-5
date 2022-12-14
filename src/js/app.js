import check from './check';

const button = document.querySelector('.button');

button.addEventListener('click', (event) => {
  event.preventDefault();
  check(button);
});
