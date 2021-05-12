const addButton = document.querySelector('#addButton');
addButton.addEventListener('click', addBookToLibrary);

const newBook = document.querySelector('#newBook');
newBook.addEventListener('click', () => popUpForm.style.display = 'block');

const popUpForm = document.getElementById('popUp');

const closePopUp = document.getElementsByTagName('span')[0];
closePopUp.addEventListener('click', () => popUpForm.style.display = 'none');


let myLibrary = [
];

class Book {
  constructor(title, author, pages, status){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;
  }
}

function addBookToLibrary(title, author, pages, status) {
  event.preventDefault();
  popUpForm.style.display = 'none';

  const book = new Book(title, author, pages, status);
  myLibrary.push(book);
  showBooks();
  form.reset();
}

function showBooks() {
  // SAVE TO LOCAL STORAGE
  localStorage.setItem('books', JSON.stringify(myLibrary));
  showLibraryInfo();
  const bookList = document.querySelector('#tableBody');
  bookList.textContent = '';
  for (let i = 0; i < myLibrary.length; i += 1) {
    const bookRow = document.createElement('tableHead');
    bookRow.classList.add('book-info');
    bookList.appendChild(bookRow);
    // BOOK TITLE
    const bookTitle = document.createElement('th');
    bookTitle.textContent = myLibrary[i].title;
    bookRow.appendChild(bookTitle);
    // BOOK AUTHOR
    const bookAuthor = document.createElement('th');
    bookAuthor.textContent = myLibrary[i].author;
    bookRow.appendChild(bookAuthor);
    // BOOK PAGES
    const bookPages = document.createElement('th');
    bookPages.textContent = myLibrary[i].pages;
    bookRow.appendChild(bookPages);
    // BOOK STATUS BUTTON
    const bookStatus = document.createElement('th');
    const statusSymbol = document.createElement('i');
    if (myLibrary[i].status === false) {
      statusSymbol.classList.add('fas', 'fa-times');
    } else {
      statusSymbol.classList.add('fas', 'fa-check');
    }
    bookStatus.appendChild(statusSymbol);
    bookRow.appendChild(bookStatus);
    // BOOK REMOVAL BUTTON
    const bookDelete = document.createElement('th');
    const deleteSymbol = document.createElement('i');
    deleteSymbol.classList.add('fas', 'fa-trash-alt');
    bookDelete.appendChild(deleteSymbol);
    bookRow.appendChild(bookDelete);
  }
}

function showLibraryInfo() {
  
}
