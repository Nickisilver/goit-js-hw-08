import throttle from 'lodash.throttle';

const SAVED_KEY = "feedback-form-state";
const refs = {
  form: document.querySelector('.feedback-form'),
  email: document.querySelector("[ name='email']"),
  message: document.querySelector("[ name='message']"),
};
let formData = JSON.parse(localStorage.getItem(SAVED_KEY)) || {};

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(onFormInput, 500));


function onFormSubmit(e) {
  e.preventDefault();
 
  if(refs.email.value.length < 5 ){
    alert("you should to input email")
  }
  if(refs.message.value.length < 5 ){
    alert("you should to input message")
  }
  
  e.target.reset();
  localStorage.removeItem(SAVED_KEY);
  formData = {}
  
}

function onFormInput(e) {
 formData[e.target.name] = e.target.value
 localStorage.setItem(SAVED_KEY, JSON.stringify(formData))
}

function populateInputText() {
  const savedText = JSON.parse(localStorage.getItem(SAVED_KEY));
 
  if(savedText){
    refs.email.value = savedText.email || ""
    refs.message.value = savedText.message || ""
  }
 
  
}
populateInputText();


