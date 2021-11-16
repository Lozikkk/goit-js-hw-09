const refs = {
  btnStart: document.querySelector('button[data-start]'),
  btnStop: document.querySelector('button[data-stop]'),
};
let intervalId = null;

refs.btnStart.addEventListener('click', onStartClick);
refs.btnStop.addEventListener('click', onStopClick);

defaultBtn();

function defaultBtn() {
  refs.btnStop.disabled = true;
  refs.btnStart.disabled = false;
}
function reversedBtn() {
  refs.btnStop.disabled = false;
  refs.btnStart.disabled = true;
}

function onStartClick() {
  intervalId = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor();
  }, 500);
  reversedBtn();
}
function onStopClick() {
  clearInterval(intervalId);
  defaultBtn();
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
