document.addEventListener('click', async function (event) {
  const button = event.target.closest('[data-copy-prompt]');
  if (!button) return;
  const code = button.parentElement.querySelector('code');
  if (!code) return;
  try {
    await navigator.clipboard.writeText(code.textContent);
    button.textContent = 'Copiado';
  } catch (_) {
    const selection = window.getSelection();
    const range = document.createRange();
    range.selectNodeContents(code);
    selection.removeAllRanges();
    selection.addRange(range);
    const copied = document.execCommand && document.execCommand('copy');
    button.textContent = copied ? 'Copiado' : 'Texto seleccionado: usa Copiar';
  }
  window.setTimeout(() => { button.textContent = 'Copiar prompt'; }, 3000);
});
