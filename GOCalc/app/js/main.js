const inputText = document.querySelector('.input-text');
const outputText = document.querySelector('.output-text');
const numpadText = document.querySelector('.numpad-buttons');

const numpad = ['7', '8', '9', '4', '5', '6', '1', '2', '3', '0', ',', '='];
numpad.map(i => numpadText.insertAdjacentHTML('beforeend', `<button value="${i}">${i}</button>`));