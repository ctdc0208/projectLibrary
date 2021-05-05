const newBook = document.querySelector('#newBook');
newBook.addEventListener('click', () => popUpForm.style.display = 'block');

const addButton = document.querySelector('#addButton');
addButton.addEventListener('click', addBookToLibrary);

const popUpForm = document.getElementById('popUp-form');
const closePopUp = document.getElementsByTagName('span')[0];
closePopUp.addEventListener('click', () => popUpForm.style.display = 'none');

let myLibrary = [
  {
    title : "The Hobbit",
    author : "JRR Martin",
    pages: 123,
    read : true,
  }
];
let book;

class Book {
  constructor(title, author, pages, status){
    this.title = form.title;
    this.author = form.author;
    this.pages = form.pages;
    this.status = form.status;
  }
}

function addBookToLibrary() {
  event.preventDefault();
  popUpForm.style.display = 'none';
  const book = new Book (title, author, pages, status);
  myLibrary.push(book);
  showBooksofLibrary();
  setData();
  render();
  form.reset();
}


function showBooksofLibrary() {
  const bookList = document.querySelector('#tableBody');
  bookList.testContent();
  for (let i = 0; i < myLibrary.length; i++) {
    const bookTable = document.createElement('tr');
    bookTable.classList.add('bookInfo');
    bookList.appendChild(bookTable);

    const bookTitle = document.createElement('td');
    bookTitle.textContent = myLibrary[i].title;
    bookTable.appendChild(bookTitle);

    const bookAuthor = document.createElement('td');
    bookAuthor.textContent = myLibrary[i].author;
    bookTable.appendChild(bookAuthor);

    const bookPages = document.createElement('td');
    bookPages.textContent = myLibrary[i].pages;
    bookTable.appendChild(bookPages);
  }
}

function createNewBook() {
  event.preventDefault();
  const form = document.querySelector('form');
  const titleInput = document.querySelector('#titleInput');
  const titleError = document.querySelector('.titleError');
  const authorInput = document.querySelector('#authorInput');
  const authorError = document.querySelector('.authorError');
  const pagesInput = document.querySelector('#pagesInput');
  const pagesError = document.querySelector('.pagesError');
  const checkStatus = document.querySelector('input[name="checkbox"]');

  if (titleInput.value === '') {
    titleError.style.display = 'block';
  } else {
    titleError.style.display = 'none';
  }
  if (authorInput.value === '') {
    authorError.style.display = 'block';
  } else {
    authorError.style.display = 'none';
  }
  if (pagesInput.value === '' || pagesInput.value.match(/[^1-9])/) || pagesInput.value <= 0) {
    pagesError.style.display = 'block';
  } else {
    pagesError.style.display = 'block';
  }

  if (titleInput.value !== '' && authorInput.value !== '' && pagesInput.value !== '' && numberInput.value > 0) {
    if (checkStatus.checked) {
      addBookToLibrary(titleInput.value, authorInput.value, pagesInput.value, true);
    } else {
      addBookToLibrary(titleInput.value, authorInput.value, pagesInput.value, false);
    }
    form.reset
  }
}

function showInfoLibrary {
  const booksRead = document.querySelector('#books-read');
  const booksUnread = document.querySelector('#books-unread');
  const totalBooks = document.querySelector('#total-books');
  let readCounter = 0;
  let unreadCounter = 0;
  booksRead.textContent = 0;
  booksUnread.textContent = 0;
  for (let i = 0; i < myLibrary.length; i += 1) {
    if (myLibrary[i].status === true) {
      readCounter += 1;
      booksRead.textContent = readCounter;
    } else if (myLibrary[i].status === false) {
      unreadCounter += 1;
      booksUnread.textContent = unreadCounter;
    }
  }
  totalBooks.textContent = myLibrary.length;
}

function setData() {
 localStorage.setItem(`myLibrary`, JSON.stringify(myLibrary));
}
