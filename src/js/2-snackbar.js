// Описаний у документації
import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';

const formElem = document.querySelector('.form');
formElem.addEventListener('submit', e => {
  e.preventDefault();
  const selectedDelay = +formElem.elements.delay.value;
  const selectedType = formElem.elements.state.value;
  const isActive = selectedType == 'fulfilled';
  createPromise(selectedDelay, isActive)
    .then(delay => {
      iziToast.success({
        message: `✅ Fulfilled promise in ${delay}ms`,
      });
    })
    .catch(delay => {
      iziToast.error({
        message: `❌ Rejected promise in ${delay}ms`,
      });
    });
});

function createPromise(delay, isActive) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (isActive) {
        resolve(delay);
      } else {
        reject(delay);
      }
    }, delay);
  });
}
