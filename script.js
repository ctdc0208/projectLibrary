let myLibrary = [];

function Book() {
  constructor(title, author, pages, status){
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


functions showBooksofLibrary() {
  for (let i == 0; i < myLibrary.length; i++) {
    var bookTitle = document.createElement('bookTitle');
    bookTitle.textContent = myLibrary[i].title;
    bookTitle.appendChild(bookTitle);

    var bookAuthor = document.createElement('bookAuthor');
    bookAuthor.textContent = myLibrary[i].author;
    bookAuthor.appendChild(bookAuthor);

    var bookPages = document.createElement('bookPages');
    bookPages.textContent = myLibrary[i].pages;
    bookPages.appendChild(bookPages);

    var bookStatus = document.createElement('bookStatus');
    bookStatus.textContent = myLibrary[i].status;
    bookStatus.appendChild(bookStatus);
  }
}
