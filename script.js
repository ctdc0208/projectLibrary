let myLibrary = [
  {
    title : "The Hobbit",
    author : "JRR Martin",
    pages: 123,
    read : true,
  }
];

function Book() {
  constructor(title, author, pages, status)
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;
}

function addBookToLibrary() {
  var book = new Book (title, author, pages, status);
  myLibrary.push(book);
  showBooksofLibrary();
}


function showBooksofLibrary() {
  var bookList = document.querySelector('#tableBody');
  bookList.testContent();
  for (let i = 0; i < myLibrary.length; i++) {
    var bookTable = document.createElement('tr');
    bookTable.classList.add('bookInfo');
    bookList.appendChild(bookTable;

    var bookTitle = document.createElement('td');
    bookTitle.textContent = myLibrary[i].title;
    bookTable.appendChild(bookTitle);

    var bookAuthor = document.createElement('td');
    bookAuthor.textContent = myLibrary[i].author;
    bookTable.appendChild(bookAuthor);

    var bookPages = document.createElement('td');
    bookPages.textContent = myLibrary[i].pages;
    bookTable.appendChild(bookPages);
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

function showInfoLibrary {
  var booksRead = document.querySelector('#books-read');
  var booksUnread = document.querySelector('#books-unread');
  var totalBooks = document.querySelector('#total-books');
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
