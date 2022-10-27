import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';
formEl = document.querySelector('.feedback-form');
inputEl = document.querySelector('.feedback-form input');
textAreaEl = document.querySelector('.feedback-form textarea');
formEl.addEventListener('submit', onFormSubmit);
formEl.addEventListener('input', throttle(onInputsChange, 500));

let Obj = {};

checkStorage();

function checkStorage() {
  const storageObj = localStorage.getItem(STORAGE_KEY);

  if (storageObj) {
    Obj = JSON.parse(storageObj);

    for (let key in Obj) {
      formEl.elements[key].value = Obj[key];
    }
  }
}

function onInputsChange(e) {
  Obj[e.target.name] = e.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(Obj));
}

function onFormSubmit(e) {
  e.preventDefault();

  const {
    elements: { email, message },
  } = e.currentTarget;
  if (email.value === '' || message.value === '') {
    return alert(`Все поля должны быть заполнены`);
  }

  console.log(Obj);
  localStorage.removeItem(STORAGE_KEY);
  e.currentTarget.reset();
}
