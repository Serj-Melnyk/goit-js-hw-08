import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const textarea = document.querySelector('.feedback-form textarea ');
const input = document.querySelector('.feedback-form input ');
const FEEDBACK_KEY = 'feedback-form-state';

form.addEventListener('submit', onSubmit);

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
  formData.email = '';
  formData.message = '';
}

const formData = {};

form.addEventListener('input', throttle(saveData, 500));

function saveData(evt) {
  formData[evt.target.name] = evt.target.value;
  localStorage.setItem(FEEDBACK_KEY, JSON.stringify(formData));

  // console.log(formData.email);
  // console.log(formData.message);
}

function showTextarea() {
  try {
    const savedMessage = JSON.parse(localStorage.getItem(FEEDBACK_KEY)) || '';
    // console.log(savedMessage);

    formData.email = savedMessage.email || '';
    formData.message = savedMessage.message || '';
    input.value = savedMessage.email || '';
    textarea.value = savedMessage.message || '';
  } catch (error) {}
}
showTextarea();
