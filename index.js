import currentDate from './modules/time.js';
import { bookList } from './modules/books.js';

const date = document.getElementById('date');
currentDate(date);

const form = document.querySelector('form');

const list = document.getElementById('list');
const newbooks = document.getElementById('newbooks');
const contact = document.getElementById('contact');

const listbtn = document.querySelector('#listbtn');
const addlistbtn = document.querySelector('#addlistbtn');
const contactbtn = document.querySelector('#contactbtn');

window.addEventListener('load', () => {
    if (localStorage.getItem('jsonLibrary')) {
        bookList.insertHtml();
    }
    list.style.display = 'flex';
    newbooks.style.display = 'none';
    contact.style.display = 'none';
  });

form.addEventListener('submit', (event) => {
  event.preventDefault();
  bookList.addBook();
  form.reset();
});

listbtn.onclick = () => {
  list.style.display = 'flex';
  newbooks.style.display = 'none';
  contact.style.display = 'none';
  listbtn.style.color = '#375e81';
  addlistbtn.style.color = 'inherit';
  contactbtn.style.color = 'inherit';
};

addlistbtn.onclick = () => {
  list.style.display = 'none';
  newbooks.style.display = 'flex';
  contact.style.display = 'none';
  addlistbtn.style.color = '#375e81';
  contactbtn.style.color = 'inherit';
  listbtn.style.color = 'inherit';
};

contactbtn.onclick = () => {
  list.style.display = 'none';
  newbooks.style.display = 'none';
  contact.style.display = 'flex';
  contactbtn.style.color = '#375e81';
  listbtn.style.color = 'inherit';
  addlistbtn.style.color = 'inherit';
};
