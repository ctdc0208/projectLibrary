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

function createBook(event) {
  const form = document.querySelector('form')
  const titleInput = document.querySelector('#title');
  const nameInput = document.querySelector('#author');
  const numberInput = document.querySelector('#pages');
  const checkbox = document.querySelector('input[name="checkbox"]');
    if (titleInput.value !== '' && nameInput.value !== '' && numberInput.value !== '' && numberInput.value > 0) {
      if (checkbox.checked) {
        addBookToLibrary(titleInput.value, nameInput.value, numberInput.value, true);
      } else {
        addBookToLibrary(titleInput.value, nameInput.value, numberInput.value, false);
      }
      form.reset();
    }
  }


function listenClicks() {
    document.addEventListener('click', (event) => {
      const { target } = event;
      const tr = target.parentNode.parentNode.rowIndex - 1;
      if (target.id === 'addButton') {
        createBook(event);
      } else if (target.classList.contains('delete_icon')) {
        myLibrary.splice(tr, 1);
      } else if (target.classList.contains('checkmark_true')) {
        target.classList.remove('checkmark_true');
        target.classList.add('checkmark_false');
        myLibrary[tr].status = false;
      } else if (target.classList.contains('checkmark_false')) {
        target.classList.remove('checkmark_false');
        target.classList.add('checkmark_true');
        myLibrary[tr].status = true;
      }
      displayBooks();
    });
}



addBookToLibrary("Atomic Habits","James Clear", 320, false);
addBookToLibrary("The Hobbit","J.R.R. Tolkien", 295, true);
addBookToLibrary("No Longer Human","Osamu Dazai", 271, false);
addBookToLibrary("American Psycho","Bret Easton Ellis", 399, true);


displayBooks();
listenClicks();
