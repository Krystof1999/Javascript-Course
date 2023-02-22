// Book Constructor
function Book(title, author, isbn) {
  this.title = title;
  this.author = author;
  this.isbn = isbn;
}

// UI Constructor
function UI() {}

// Add Book to list
UI.prototype.addBookToList = function (book) {
  const list = document.getElementById("book-list");
  // Create tr element
  const row = document.createElement("tr");
  // Insert columns
  row.innerHTML = `
  <td>${book.title}</td>
  <td>${book.author}</td>
  <td>${book.isbn}</td>
  <td><a href="#" class="delete">X<a></td>
  `;
  list.appendChild(row);
};

// Delete books
UI.prototype.deleteBooks = () => {
  document.addEventListener("click", (e) => {
    if (e.target.className === "delete") {
      e.target.parentElement.parentElement.remove();
      // Instatiate UI
      const ui = new UI();
      // Show alert
      ui.showAlert("Book has been removed", "success");
    }
  });
};

// Clear fields
UI.prototype.clearFields = () => {
  document.getElementById("title").value = "";
  document.getElementById("author").value = "";
  document.getElementById("isbn").value = "";
};

// Error alert
UI.prototype.showAlert = (message, className) => {
  // Create div
  const div = document.createElement("div");
  // Add classes
  div.className = `alert ${className}`;
  // Add text
  div.appendChild(document.createTextNode(message));
  // Get parent
  const container = document.querySelector(".container");
  const form = document.querySelector("#book-form");

  // Insert alert
  container.insertBefore(div, form); // what we want to insert | what we want the new element insert before

  // Timeout after 3 sec
  setTimeout(() => {
    document.querySelector(".alert").remove();
  }, 3000);
};

// Event Listeners
document.getElementById("book-form").addEventListener("submit", (e) => {
  // Form values
  const title = document.getElementById("title").value,
    author = document.getElementById("author").value,
    isbn = document.getElementById("isbn").value;

  // Instantiate book
  const book = new Book(title, author, isbn);

  // Instatiate UI
  const ui = new UI();

  // Validate
  if (title === "" || author === "" || isbn === "") {
    // Error alert
    ui.showAlert("Please fill in all fields", "error");
  } else {
    // Add book to list
    ui.addBookToList(book);

    // Show alert
    ui.showAlert("You have added a book", "success");

    // Clear fields
    ui.clearFields();
  }

  e.preventDefault();
});

// Delete books

// Instatiate UI
const ui = new UI();
ui.deleteBooks();
