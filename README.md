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
    git clone https://github.com/yourusername/book-management-system.git
    cd bookManagement
    ```

2. Create a virtual environment and activate it:

    ```bash
    python -m venv .venv
    source venv/bin/activate  # On Windows use `venv\Scripts\activate`
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

## Project Structure

bookManagement/
│
├── api/
│ ├── init.py
│ ├── admin.py
│ ├── apps.py
│ ├── models.py
│ ├── serializers.py
│ ├── tests.py
│ ├── urls.py
│ └── views.py
│
├── bookManagement/
│ ├── init.py
│ ├── asgi.py
│ ├── settings.py
│ ├── urls.py
│ └── wsgi.py
│
├── static/
│ ├── css
│ └── js
│
├── templates/
│ └── index.html
│
├── manage.py
├── db.sqlite3
└── requirements.txt

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
