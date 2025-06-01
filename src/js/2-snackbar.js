import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

// Formu seç
const form = document.querySelector('.form');

form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const delay = Number(form.elements.delay.value);
  const state = form.elements.state.value;

  // Promise oluştur
  createPromise(delay, state)
    .then(result => {
      iziToast.success({
        title: '✅ Success',
        message: `Fulfilled promise in ${result}ms`,
        position: 'topRight',
      });
    })
    .catch(error => {
      iziToast.error({
        title: '❌ Error',
        message: `Rejected promise in ${error}ms`,
        position: 'topRight',
      });
    });

  form.reset(); // Formu sıfırla
}

function createPromise(delay, state) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (state === 'fulfilled') {
        resolve(delay);
      } else {
        reject(delay);
      }
    }, delay);
  });
}
