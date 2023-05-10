const spinner = document.createElement('div');
spinner.className = 'spinner';

export function show(parent) {
  return parent.appendChild(spinner);
}

export function hide(parent) {
  return parent.removeChild(spinner);
}
