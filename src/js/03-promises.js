import { Notify } from 'notiflix/build/notiflix-notify-aio';

const refs = {
  delay: document.querySelector('input[name="delay"]'),
  step: document.querySelector('input[name="step"]'),
  amount: document.querySelector('input[name="amount"]'),
  button: document.querySelector('button[type="submit"]'),
};
refs.button.addEventListener('click', onBtnClick);

function onBtnClick(event) {
  event.preventDefault();

  const { delay, step, amount } = refs;
  if (!delay.value || !step.value || !amount.value) {
    Notify.failure(`Error: all fields must be filled in !`);
    return;
  }
  const amountEl = +amount.value;
  const stepEl = +step.value;
  let delayEl = +delay.value;

  for (let i = 0; i < amountEl; i += 1) {
    const position = i + 1;
    createPromise(position, delay)
      .then(({ position, delay }) => {
        Notify.success(`Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notify.failure(`Rejected promise ${position} in ${delay}ms`);
      });
    delayEl += stepEl;
  }
}

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}
