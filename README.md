# Book Management System

A simple Book Management System that allows users to perform CRUD (Create, Read, Update, Delete) operations on books. The application consists of three tiers:

1. **Database Tier**: Using SQLite for data storage.
2. **Application Tier**: Using Python and Django to handle business logic and data processing.
3. **Presentation Tier**: Using a simple web interface with HTML, CSS, and JavaScript to interact with the system.

## Features

- View the list of all books
- Add a new book
- Update an existing book
- Delete a book

## Technologies Used

- Python
- Django
- SQLite
- HTML
- CSS
- JavaScript

## Setup

### Prerequisites

- Python 3.x
- pip (Python package installer)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Kalinka5/BookManagement.git
   cd bookManagement
   ```

2. Create a virtual environment and activate it:

   ```bash
   python -m venv .venv
   source .venv/bin/activate  # On Windows use `.venv\Scripts\activate`
   ```

3. Install the required packages:

   ```bash
   pip install -r requirements.txt
   ```

4. Apply migrations to create the database:

   ```bash
   python manage.py makemigrations
   python manage.py migrate
   ```

5. Run the development server:

   ```bash
   python manage.py runserver
   ```

6. Open your browser and go to `http://127.0.0.1:8000` to see the application.

## Django App Details

### Models

#### `Book`

- `title`: CharField with max length of 200
- `author`: CharField with max length of 200
- `published_date`: DateField
- `isbn`: CharField with max length of 13
- `pages`: IntegerField

### Views

#### `index`

Renders the main HTML template.

#### `BookViewSet`

Provides CRUD actions for the Book model using Django REST framework's ModelViewSet.

### URLs

- `/`: Renders the main page with the book management interface.
- `/api/books/`: API endpoint for managing books.

## Static Files and Templates

- Static files (CSS and JavaScript) are stored in the `static` directory.
- HTML templates are stored in the `templates` directory.

## Improvements

### 1. Use AJAX Requests to Avoid Page Reloads

To improve the user experience, AJAX requests can be used instead of traditional form submissions and page reloads. This will make the application more dynamic and responsive by updating the content without reloading the entire page. JavaScript libraries like jQuery or vanilla JavaScript `fetch` API can be utilized for this purpose.

### 2. Using Frontend Web Frameworks like React.js or Vue.js

For a more modern and scalable frontend, frameworks like React.js or Vue.js can be used. These frameworks provide powerful tools for building complex and interactive user interfaces. They enable component-based architecture, which helps in managing the UI in a more organized and efficient way.
