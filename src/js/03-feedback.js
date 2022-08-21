const throttle = require('lodash.throttle');
const STORAGE_KEYS = 'feedback-form-state';
const refs = {
  form: document.querySelector('.feedback-form'),
  email: document.querySelector('[name="email"]'),
  textarea: document.querySelector('[name="message"]'),
};

fullData();
refs.form.addEventListener('input', throttle(onFormEmail, 500))

let formData = {}
function onFormEmail(evt) {
    
    formData[evt.target.name] = evt.target.value
   
    const stringData = JSON.stringify(formData)
    localStorage.setItem(STORAGE_KEYS, stringData)
}
function fullData() {
    const fullDataForm = JSON.parse(localStorage.getItem(STORAGE_KEYS))
    
    if (fullDataForm === null) {
        return
    }
    refs.email.value = fullDataForm['email'] || null;
    refs.textarea.value = fullDataForm['message'] || null;
}
refs.form.addEventListener('submit', onSubmitForm);
function onSubmitForm(evt) {
  
  evt.preventDefault();

  const savedData = localStorage.getItem(STORAGE_KEYS);
  console.log(savedData);
  evt.currentTarget.reset();
localStorage.removeItem(STORAGE_KEYS);
}



