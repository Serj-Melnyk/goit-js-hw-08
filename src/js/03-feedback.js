import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const email = document.querySelector('input');
const message = document.querySelector('textarea');
const submitButoon = document.querySelector('button');
const FEEDBACK_KEY = 'feedback-form-state';
const data = { email: '', message: '' };

email.addEventListener('input', addData);
message.addEventListener('input', addData);
submitButoon.addEventListener('click', sendData);

checkData();

function checkData() {
  const localData = JSON.parse(localStorage.getItem(FEEDBACK_KEY));
  if (localData) {
    email.value = localData.email;
    message.value = localData.message;
    data.email = localData.email;
    data.message = localData.message;
  }
}

const saveData = throttle(function () {
  localStorage.setItem(FEEDBACK_KEY, JSON.stringify(data));
}, 500);

function addData(event) {
  data[this.name] = event.target.value;
  saveData();
}

function sendData(event) {
  event.preventDefault();
  const localData = JSON.parse(localStorage.getItem(FEEDBACK_KEY));
  if (!email.value.trim() || !message.value.trim()) {
    alert(`все поля должны быть заполнены`);
  } else console.log(localData);

  form.reset();
  localStorage.removeItem(FEEDBACK_KEY);
}
