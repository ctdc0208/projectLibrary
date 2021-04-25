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

}
