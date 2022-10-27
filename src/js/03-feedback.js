import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';
const formEl = document.querySelector('.feedback-form');
const inputEl = document.querySelector('.feedback-form input');
const textAreaEl = document.querySelector('.feedback-form textarea');

formEl.addEventListener('submit', onFormSubmit);
formEl.addEventListener('input', throttle(onInputsChange, 500));

let saveObj = {};

checkStorage();

function checkStorage() {
  const commingObj = localStorage.getItem(STORAGE_KEY);

  if (commingObj) {
    saveObj = JSON.parse(commingObj);

    for (let key in saveObj) {
      formEl.elements[key].value = saveObj[key];
    }
  }
}

function onInputsChange(e) {
  saveObj[e.target.name] = e.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(saveObj));
}

function onFormSubmit(e) {
  e.preventDefault();

  const {
    elements: { email, message },
  } = e.currentTarget;
  if (email.value === '' || message.value === '') {
    return alert(`Все поля должны быть заполнены`);
  }

  console.log(saveObj);
  localStorage.removeItem(STORAGE_KEY);
  e.currentTarget.reset();
}
