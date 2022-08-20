const throttle = require('lodash.throttle');
const STORAGE_KEY = 'feedback-form-state';
const refs = {
  form: document.querySelector('.feedback-form'),
  email: document.querySelector('[name="email"]'),
  textarea: document.querySelector('[name="message"]'),
};
// console.log(refs)
fullData();
refs.form.addEventListener('input', onFormEmail)
let formData = {}
function onFormEmail(evt) {
    // console.log(evt.target.name)
    formData[evt.target.name] = evt.target.value
    // console.log(formData)
    const stringData = JSON.stringify(formData)
    localStorage.setItem(STORAGE_KEY, stringData)
}
function fullData() {
    const fullDataForm = JSON.parse(localStorage.getItem(STORAGE_KEY))
    
    if (fullDataForm === null) {
        return
    }
    refs.email.value = fullDataForm['email'] || null;
    refs.textarea.value = fullDataForm['message'] || null;
}

refs.form.addEventListener('submit', onSubmitForm)

function onSubmitForm(evt) {
    console.log(evt)
    evt.preventDefault();
    
}