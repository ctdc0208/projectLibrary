const addButton = document.querySelector('#addButton');
addButton.addEventListener('click', addBookToLibrary);

const newBook = document.querySelector('#newBook');
newBook.addEventListener('click', () => popUpForm.style.display = 'block');

const popUpForm = document.getElementById('popUp');

const closePopUp = document.getElementsByTagName('span')[0];
closePopUp.addEventListener('click', () => popUpForm.style.display = 'none');


let myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title
  this.author = author
  this.pages = pages
  this.status = status
}

function addBookToLibrary(title, author, pages, read){
  const book = new Book(title, author, pages, status);
  myLibrary.push(book);
  console.log(title + " by " + author + ", " +  pages + " pages" +", " + read);
}


addBookToLibrary("The Hobbit","J.R.R. Tolkien", 295," not read yet");
console.log(addBookToLibrary);
