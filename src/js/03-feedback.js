import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const textarea = document.querySelector('.feedback-form textarea ');
const input = document.querySelector('.feedback-form input ');
const FEEDBACK_KEY = 'feedback-form-state';

form.addEventListener('submit', onSubmit);
textarea.addEventListener('input', throttle(onTextarea, 500));
input.addEventListener('input', onInput);

function onSubmit(evt) {
  evt.preventDefault();

  const { email, message } = evt.currentTarget.elements;

  const obj = {
    email: email.value,
    message: message.value,
  };
  localStorage.setItem(FEEDBACK_KEY, JSON.stringify(obj));

  if (email.value.trim() === '' || message.value.trim() === '') {
    alert(`все поля должны быть заполнены`);
  } else console.log(obj);

  form.reset();
  evt.currentTarget.reset();
  localStorage.removeItem(FEEDBACK_KEY);
  return obj;
}

function onTextarea(evt) {
  const message = evt.target.value;

  localStorage.setItem(FEEDBACK_KEY, message);
}

function onInput(evt) {
  const inputValue = evt.target.value;

  localStorage.setItem(FEEDBACK_KEY, inputValue);
}

function showTextarea() {
  const savedMessage = localStorage.getItem(FEEDBACK_KEY);

  if (savedMessage) {
    textarea.value = savedMessage;
    // input.value = savedMessage;
  }
}

showTextarea();
