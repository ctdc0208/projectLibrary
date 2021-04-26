let myLibrary = [];

function Book() {
  constructor(title, author, pages, status)
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;
  }
}

function addBookToLibrary() {
  var book = new Book (title, author, pages, status);
  myLibrary.push(book);
  showBooksofLibrary();
}


function showBooksofLibrary() {
  var bookList = document.querySelector('table');
  bookList.testContent();
  for (let i = 0; i < myLibrary.length; i++) {
    var bookTable = document.createElement('bookTable');
    bookTable.classList.add('bookInfo');
    bookList.appendChild(bookTable;

    var bookTitle = document.createElement('bookTitle');
    bookTitle.textContent = myLibrary[i].title;
    bookTable.appendChild(bookTitle);

    var bookAuthor = document.createElement('bookAuthor');
    bookAuthor.textContent = myLibrary[i].author;
    bookTable.appendChild(bookAuthor);

    var bookPages = document.createElement('bookPages');
    bookPages.textContent = myLibrary[i].pages;
    bookTable.appendChild(bookPages);

    var bookStatus = document.createElement('bookStatus');
    bookStatus.textContent = myLibrary[i].status;
    bookTable.appendChild(bookStatus);
  }
}

function newBook() {
  var form = document.querySelector('form');
  var titleInput = document.querySelector('#titleInput');
  var titleError = document.querySelector('.titleError');
  var authorInput = document.querySelector('#authorInput');
  var authorError = document.querySelector('.authorError');
  var pagesInput = document.querySelector('#pagesInput');
  var pagesError = document.querySelector('.pagesError');
  var checkStatus = document.querySelector('input[name="checkbox"]');

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
  }
}
