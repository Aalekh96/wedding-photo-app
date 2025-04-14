# 💍 Wedding Photo Upload & Gallery App

This is a simple Node.js web application that allows guests to upload their wedding photos and view them in an organized online gallery. The app is styled with a soft and elegant UI, perfect for weddings.

---

## 🧾 Features

- Upload multiple photos with guest name
- View uploaded photos grouped by guest
- Download all photos as a single ZIP
- Responsive design with a clean, pastel-themed interface

---

## 🔧 Requirements

Before running this project, make sure you have the following installed:

- [Node.js](https://nodejs.org/) (version 18.x or later)
- A web browser (e.g., Chrome)

---

## 🚀 Getting Started

Follow these steps to set up the project on your local machine:

### 1. **Clone the repository**

git clone https://github.com/Aalekh96/wedding-photo-app.git
cd wedding-photo-app

### Install dependencies
Copy code
npm install

### Create the uploads folder
  Create a folder named uploads in the root directory. This folder is used to store all uploaded images.
  mkdir uploads

### Run the application
Start the server with: node server.js

### Access the app in your browser
Open your browser and go to:

arduino
Copy code
http://localhost:3000


wedding-photo-app/
│
├── public/                # Frontend files (HTML, CSS, JS)
│   ├── index.html
│   ├── gallery.html
│   ├── script.js
│   ├── style.css
│   └── assets/
│       ├── logo.png
│       └── background.png
│
├── uploads/               # Uploaded images (must be created manually)
├── server.js              # Main backend server file
├── package.json           # Node.js dependencies and metadata
├── package-lock.json
├── .gitignore
└── README.md
