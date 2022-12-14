export default function createErrorBlock() {
  const divError = document.createElement('div');
  divError.className = 'container_error';

  const header = document.createElement('header');
  header.className = 'error_header';

  const p = document.createElement('p');
  p.className = 'error_title';
  p.textContent = 'Popover title';

  header.appendChild(p);

  const section = document.createElement('section');
  section.className = 'error_content';

  const pSect = document.createElement('p');
  pSect.className = 'error_text';
  pSect.textContent = "And here's some amazing content. It's very engaging. Right?";

  section.appendChild(pSect);
  divError.appendChild(header);
  divError.appendChild(section);

  return divError;
}
