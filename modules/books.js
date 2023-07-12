
const bookSection = document.querySelector('#library');
const titleText = document.querySelector('#title');
const authorText = document.querySelector('#author');

export default class Book {
    constructor() {
      this.bookLibrary = JSON.parse(localStorage.getItem('jsonLibrary')) || [];
    }
  
    insertHtml() {
      bookSection.innerHTML = '';
      this.bookLibrary.forEach((n) => {
        bookSection.innerHTML += `<div class='book'>
          <div class='bookDetail'>
            <p>"${n.title}"</p>
            <p>by</p>
            <p>${n.author}</p>
          </div>    
            <button id='${n.id}' class='remove' type='button'>Remove</button>
        </div>`;
        });
        document.querySelectorAll('.remove').forEach(node => {
          node.addEventListener('click', () => {
            this.remove(node.id);
          });
        });
    }

    addBook() {
      const bookObject = {};
      bookObject.title = titleText.value;
      bookObject.author = authorText.value;
      bookObject.id = (titleText.value + authorText.value).replace(/\s/g, '');
      this.bookLibrary.push(bookObject);
      localStorage.setItem('jsonLibrary', JSON.stringify(this.bookLibrary));
      this.insertHtml();
    }
  
    remove(idParameter) {
      this.bookLibrary = this.bookLibrary.filter((book) => book.id !== idParameter);
      localStorage.setItem('jsonLibrary', JSON.stringify(this.bookLibrary));
      this.insertHtml();
    }
}
let bookList = new Book();
export { bookList };