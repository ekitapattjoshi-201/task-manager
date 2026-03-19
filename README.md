# 📝 Task Manager App

A modern Task Manager application built using **React, TypeScript, and Redux Toolkit**.
This project demonstrates clean state management, CRUD operations, and persistent storage using localStorage.

---

## 🚀 Features

* ➕ Add new tasks
* ❌ Delete tasks
* ✅ Mark tasks as completed / pending
* ✏️ Edit existing tasks (inline editing)
* 🔍 Filter tasks:

  * All
  * Completed
  * Pending
* 💾 Persistent storage using **localStorage**
* 🎨 Clean and responsive UI with SCSS Modules

---

## 🛠️ Tech Stack

* **React**
* **TypeScript**
* **Redux Toolkit**
* **SCSS Modules**
* **Vite**

---

## 📁 Folder Structure

```
src/
├── app/                # Redux store
├── features/           # Redux slices & selectors
│   └── tasks/
├── components/         # UI components
│   ├── TaskForm/
│   ├── TaskList/
│   ├── TaskItem/
│   ├── TaskFilter/
├── services/           # (reserved for API integration)
├── utils/              # helper functions (localStorage)
├── styles/             # global styles
```

---

## ⚙️ Installation & Setup

```bash
# Clone the repository
git clone <your-repo-link>

# Navigate into the project
cd task-manager

# Install dependencies
npm install

# Start development server
npm run dev
```

---

## 💡 Key Learnings

* Implemented full **CRUD operations** using Redux Toolkit
* Managed global state using slices and selectors
* Used **derived state** for filtering tasks
* Persisted application state using **localStorage**
* Built reusable and modular components
* Applied SCSS Modules for scoped styling

---

## 🔮 Future Enhancements

* 🌐 API integration using Redux Thunk
* 🔐 Authentication system
* 🎯 Drag and drop task management
* 📱 Mobile responsiveness improvements

---


## 🙌 Acknowledgements

This project was built to practice modern frontend development using React, TypeScript, and Redux.

---
