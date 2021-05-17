const addButton = document.querySelector('#addButton');
addButton.addEventListener('click', addBookToLibrary);

const newBook = document.querySelector('#newBook');
newBook.addEventListener('click', () => popUpForm.style.display = 'block');

const popUpForm = document.getElementById('popUp');

const closePopUp = document.getElementsByTagName('span')[0];
closePopUp.addEventListener('click', () => popUpForm.style.display = 'none');


let myLibrary = [];

class Book {
  constructor(title, author, pages, status){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;
  }
}

function addBookToLibrary() {
  event.preventDefault();
  popUpForm.style.display = 'none';

  const book = new Book(title, author, pages, status);
  myLibrary.push(book);
  showBooks();
}

function showBooksInTable() {

}
