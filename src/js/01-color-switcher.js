function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const body = document.querySelector('body');
const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');
let timerId = null;

startBtn.addEventListener('click', onStartBtnClick);
stopBtn.addEventListener('click', onStopBtnClick);

function onStartBtnClick() {
  timerId = setInterval(
    () => (body.style.backgroundColor = getRandomHexColor()),
    1000
  );
  startBtn.disabled = true;
}

function onStopBtnClick() {
  clearInterval(timerId);
  startBtn.disabled = false;
}
