# To-Do List Application

A modern and user-friendly **To-Do List Application** built with **React (Vite)** and **Tailwind CSS**. This app allows users to efficiently manage their daily tasks with features like adding, editing, deleting, and marking tasks as completed. Tasks are also persisted using **Local Storage**, so your data remains even after refreshing the page.

---

## Live Repository

 GitHub Repo: https://github.com/mcajoydeb/todo-app

---

## Features

* Add new tasks
* Delete tasks
* Edit existing tasks
* Mark tasks as completed (with checkbox)
* Persistent storage using LocalStorage
* Beautiful and responsive UI using Tailwind CSS
* Fully responsive design
* Clean component-based architecture

---

## Tech Stack

* React (with Vite)
* Tailwind CSS
* JavaScript (ES6+)
* LocalStorage API

---

## Project Structure

```
todo-app/
│── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   ├── ToDoList.jsx
│   │   ├── ToDoItem.jsx
│   ├── App.jsx
│   ├── main.jsx
│   ├── index.css
│── index.html
│── package.json
│── vite.config.js
```

---

## Installation & Setup

Follow these steps to run the project locally:

```bash
# Clone the repository
git clone https://github.com/mcajoydeb/todo-app.git

# Navigate into the project folder
cd todo-app

# Install dependencies
npm install

# Run the development server
npm run dev
```

---

##  How It Works

* Tasks are managed using **React state (useState)**
* Data is passed between components using **props**
* Tasks are stored in **LocalStorage** using `useEffect`
* UI updates dynamically using **map()**
* Each task has a unique ID for efficient rendering

---


## Assignment Requirements Covered

✔ Created using Vite
✔ Used functional components
✔ Implemented state and props
✔ Rendered list using map()
✔ Unique key for each item
✔ Add / Delete / Edit / Complete functionality
✔ Event handling implemented
✔ Styled using Tailwind CSS
✔ LocalStorage integration

---

##  Git Commits

The repository includes multiple meaningful commits demonstrating step-by-step development of the application.

---

## Author

**Joy (mcajoydeb)**
GitHub: https://github.com/mcajoydeb

---

## Acknowledgement

This project was developed as part of a React assignment to demonstrate understanding of core React concepts and modern UI practices.

---

## License

This project is open-source and free to use.
