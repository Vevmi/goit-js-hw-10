// Описаний в документації
import flatpickr from 'flatpickr';
// Описаний у документації
import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';

// Додатковий імпорт стилів
import 'flatpickr/dist/flatpickr.min.css';
let userDate;
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
    userDate = selectedDates[0];
    if (userDate < Date.now()) {
      startButtonElem.disabled = true;
      iziToast.error({
        message: 'Please choose a date in the future',
      });
    } else startButtonElem.disabled = false;
  },
};

flatpickr('#datetime-picker', options);

const startButtonElem = document.querySelector('[data-start]');
startButtonElem.addEventListener('click', e => {
  startButtonElem.disabled = true;
  const id = setInterval(() => {
    const currentTime = Date.now();
    const chosenDate = userDate - currentTime;
    const timeObject = convertMs(chosenDate);
    renderTime(timeObject);
    if (chosenDate <= 1000) clearInterval(id);
  }, 1000);
});
function renderTime({ days, hours, minutes, seconds }) {
  const fieldElem = document.querySelectorAll('.field');
  fieldElem[0].firstElementChild.textContent = padStart(days);
  fieldElem[1].firstElementChild.textContent = padStart(hours);
  fieldElem[2].firstElementChild.textContent = padStart(minutes);
  fieldElem[3].firstElementChild.textContent = padStart(seconds);
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function padStart(num) {
  return num.toString().padStart(2, '0');
}
