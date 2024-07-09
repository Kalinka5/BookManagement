document.addEventListener("DOMContentLoaded", () => {
  const bookForm = document.getElementById("bookForm");
  const bookIdInput = document.getElementById("bookId");
  const titleInput = document.getElementById("title");
  const authorInput = document.getElementById("author");
  const publishedDateInput = document.getElementById("published_date");
  const isbnInput = document.getElementById("isbn");
  const pagesInput = document.getElementById("pages");

  // Function to get list of all books
  function fetchBooks() {
    // Send GET request to /api/books/ url
    fetch("/api/books/")
      .then((response) => response.json())
      .then((books) => {
        // Get element of our list of books
        const bookList = document.querySelector("#book-list ul");
        bookList.innerHTML = "";
        books.forEach((book) => {
          // Create <li> element for each book
          // Then used classes to display elements more beautiful in bootstrap5
          const li = document.createElement("li");
          li.className = "list-group-item";
          const divRow = document.createElement("div");
          divRow.className = "row";
          const divRowColumn1 = document.createElement("div");
          // Add cursor-pointer to display pointer when hover over the text
          divRowColumn1.className = "col-auto me-auto cursor-pointer";
          const spanText = document.createElement("span");
          spanText.textContent = `${book.title} by ${book.author}`;
          spanText.role = "button";
          spanText.tabIndex = "0";
          divRowColumn1.appendChild(spanText);
          divRow.appendChild(divRowColumn1);

          // Add delete button for each book
          const divRowColumn2 = document.createElement("div");
          divRowColumn2.className = "col-auto";
          const deleteButton = document.createElement("button");
          deleteButton.textContent = "Delete";
          deleteButton.className = "btn btn-danger ms-3";
          deleteButton.addEventListener("click", () => deleteBook(book.id));
          divRowColumn2.appendChild(deleteButton);
          divRow.appendChild(divRowColumn2);
          li.appendChild(divRow);

          // Add event listener on each book element to display Book's data in Form field when I need update it
          li.addEventListener("click", () => {
            bookIdInput.value = book.id;
            titleInput.value = book.title;
            authorInput.value = book.author;
            publishedDateInput.value = book.published_date;
            isbnInput.value = book.isbn;
            pagesInput.value = book.pages;
          });

          bookList.appendChild(li);
        });
      });
  }

  // Function to delete book
  function deleteBook(id) {
    // Send request to delete book with parameter id
    fetch(`/api/books/${id}/`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => {
      fetchBooks();
    });
  }

  // Function to UPDATE or PUT data to database (Submit button)
  bookForm.addEventListener("submit", (event) => {
    event.preventDefault();
    // Get all data from form
    const bookData = {
      title: titleInput.value,
      author: authorInput.value,
      published_date: publishedDateInput.value,
      isbn: isbnInput.value,
      pages: pagesInput.value,
    };
    const bookId = bookIdInput.value;
    // Choose url and method (PUT or POST) depending whether bookID exists
    const url = bookId ? `/api/books/${bookId}/` : "/api/books/";
    const method = bookId ? "PUT" : "POST";

    // Send request
    fetch(url, {
      method: method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bookData),
    }).then(() => {
      fetchBooks();
      bookForm.reset();
    });
  });

  // Call function to fetch all books
  fetchBooks();
});
