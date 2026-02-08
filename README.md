# Netland - Full-Stack Movie & Series Manager
# NOTE: still in progress

A dynamic web application designed to manage a movie and series database. This project is built as a **Single Page Application (SPA)** featuring a custom-built **REST API** backend in PHP.

## 🚀 Key Features

- **Single Page Application (SPA):** The UI updates dynamically via JavaScript without browser refreshes, providing a fluid user experience.
- **Custom REST API:** A modular backend built in PHP that handles requests through a centralized router.
- **Dynamic Templating:** HTML components are generated on-the-fly based on JSON data fetched from the database.
- **Interactive Functionalities:**
  - Overview of all Movies & Series.
  - Client-side sorting based on Title, Rating, or Duration.
  - Detailed view pages with integrated YouTube trailer embeds.
  - Dynamic Edit mode to update database records in real-time.

## 🛠️ Tech Stack

- **Frontend:** Vanilla JavaScript, CSS3, HTML5.
- **Backend:** PHP (Object-Oriented), PDO for secure database transactions.
- **Database:** MySQL.
- **Architecture:** Modular structure utilizing the **Singleton Design Pattern** for efficient database connection management.

## 📁 Project Structure

- `api/router.php`: The central controller for all incoming API requests.
- `api/netland.php`: Core logic class for database interactions (CRUD).
- `js/main.js`: Application initialization and first data load.
- `js/helperFunction.js`: Reusable `fetch()` wrappers for GET and PUT requests.
- `js/eventlistner.js`: Centralized event delegation for all UI interactions.
- `js/MainTemplate.js` & `js/Descriptiontemplates.js`: Logic for rendering UI components.

## 🔧 Installation

1. Clone this repository to your local server environment (e.g., XAMPP, MAMP, or Laragon).
2. Import the database schema (`netland.sql`) into your MySQL environment.
3. Configure your database credentials in `api/config_files/config.php`:
   ```php
   $user = 'your_username';
   $pw = 'your_password';
