import createErrorBlock from './createError';

export default function check(button) {
  const parent = button.offsetParent;
  const blockError = document.querySelector('.container_error');
  if (blockError === null) {
    const errorBlock = createErrorBlock();
    parent.appendChild(errorBlock);
    errorBlock.style.bottom = `${errorBlock.offsetHeight / 2}px`;
  } else {
    blockError.remove();
  }
}
