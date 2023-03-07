import throttle from 'lodash.throttle'

const noteForm = document.querySelector('form');
const noteInput = document.querySelector('input');
const noteTextarea = document.querySelector('textarea');
const LOCAL_STORAGE_KEY = 'feedback-form-state';


noteForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const formInput = {
        email: noteInput.value,
        message: noteTextarea.value,
    };
    console.log(formInput);
    localStorage.removeItem(LOCAL_STORAGE_KEY);
    noteForm.reset();
})

const getFormInput = () => {
    const formInput = {
        email: noteInput.value,
        message: noteTextarea.value,
    };
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(formInput));
};

noteForm.addEventListener('input', throttle(getFormInput, 500));

let notes = localStorage.getItem(LOCAL_STORAGE_KEY) || '';
if (notes !== '') {
    let parsedNotes = JSON.parse(notes);
    noteInput.value = parsedNotes.email;
    noteTextarea.value = parsedNotes.message;
};

