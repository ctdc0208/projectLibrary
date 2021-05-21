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
  this.read = read
}

function addBookToLibrary(title, author, pages, read){
  popUpForm.style.display = 'none';

  const book = new Book(title, author, pages, read);
  myLibrary.push(book);
  displayBooks();
}

function displayBooks() {
  const bookList = document.querySelector('#table-body');
  bookList.textContent = '';
  for (let i = 0; i < myLibrary.length; i += 1) {
    const bookRow = document.createElement('tr');
    bookRow.classList.add('book-info');
    bookList.appendChild(bookRow);

    const bookTitle = document.createElement('th');
    bookTitle.textContent = myLibrary[i].title;
    bookRow.appendChild(bookTitle);

    const bookAuthor = document.createElement('th');
    bookAuthor.textContent = myLibrary[i].author;
    bookRow.appendChild(bookAuthor);

    const bookPages = document.createElement('th');
    bookPages.textContent = myLibrary[i].pages;
    bookRow.appendChild(bookPages);

    const bookRead = document.createElement('th');
    const readSymbol = document.createElement('i');
    if (myLibrary[i].read === true) {
      readSymbol.classList.add('checkmark_true');
    } else {
      readSymbol.classList.add('checkmark_false');
    }
    bookRead.appendChild(readSymbol);
    bookRow.appendChild(bookRead);

    const bookDelete = document.createElement('td');
    const deleteSymbol = document.createElement('i');
    deleteSymbol.classList.add('delete_icon');
    bookDelete.appendChild(deleteSymbol);
    bookRow.appendChild(bookDelete);
  }
}

function newBook(event) {
  const form = document.querySelector('form')
  const titleInput = document.querySelector('#title');
  const authorInput = document.querySelector('#author');
  const pagesInput = document.querySelector('#pages');
  const checkbox = document.querySelector('input[name="checkbox"]');
  if (titleInput.value !== "" && authorInput.value !== "" && pagesInput.value !== ""){
    if (checkbox.checked) {
      addBookToLibrary(titleInput.value, authorInput.value, pagesInput.value, true);
    } else {
      addBookToLibrary(titleInput.value, authorInput.value, pagesInput.value, false);
    }
    form.reset;
  }
}

function listenClick() {
  document.addEventListener('click', (event) => {
  const { target } = event;
  const tr = target.parentNode.parentNode.rowIndex - 1;
  if (target.id === 'addButton') {
    newBook(event);
    }
  });
}



addBookToLibrary("Atomic Habits","James Clear", 320, false);
addBookToLibrary("The Hobbit","J.R.R. Tolkien", 295, true);
addBookToLibrary("No Longer Human","Osamu Dazai", 271, false);
addBookToLibrary("American Psycho","Bret Easton Ellis", 399, true);


displayBooks();
