import throttle from 'lodash.throttle';

const contactFormEl = document.querySelector('.feedback-form');
const userInfo = {};

const fillFormsFieds = () => {
const formDataFormLS = JSON.parse(localStorage.getItem('userInfo'));
if(formDataFormLS === null) {
    return;
}
for(const prop in formDataFormLS) {
    if(formDataFormLS.hasOwnProperty(prop)) {
        contactFormEl.elements[prop].value = formDataFormLS[prop];  
    }
}
console.log(formDataFormLS)
}

fillFormsFieds()

const onFormChange = event => {
    const {target} = event;
    const fieldName = target.name;
    const fieldValue = target.value;
    userInfo[fieldName] = target.value;
    localStorage.setItem('userInfo', JSON.stringify(userInfo))
};

const onFormSubmit = event => {
    event.preventDefault();
    localStorage.removeItem('userInfo');
    contactFormEl.reset();
}

contactFormEl.addEventListener('input', throttle(onFormChange, 500));
contactFormEl.addEventListener('submit', onFormSubmit);
