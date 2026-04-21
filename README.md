# 📌 Project Tracker

A lightweight project management tool built to practice and demonstrate core React concepts, including state management, component architecture, and full CRUD functionality.

## Live Demo

https://alicia-buelow-project-tracker.vercel.app/

---

## Overview

This application allows users to create projects and manage tasks within each project. It was built as a self-directed learning project to deepen my understanding of React beyond structured tutorials, with a focus on working with nested state, reusable components, and real user interactions.

Each project contains its own set of tasks, with features for adding, editing, completing, deleting, and filtering tasks. The app persists data using localStorage, allowing projects to remain after refresh without requiring a backend.

The goal was to build something both technically meaningful and practically usable — a simple, intuitive tracker without unnecessary complexity or onboarding friction.

---

## Features

- Full CRUD functionality for projects and tasks  
- Add, edit, complete, and delete tasks within each project  
- Task filtering (all / active / completed)  
- Inline task editing with real-time UI updates  
- Persistent data using localStorage  
- Component-based architecture with clear parent → child data flow  

---

## Tech Stack

- React (Vite)  
- JavaScript  
- CSS3  
- localStorage (browser persistence)  

---

## Challenges / Learning

- Managing **nested state (projects → tasks)** was a key challenge. Updating a single task required mapping through both the projects array and the tasks array while maintaining immutability, which strengthened my understanding of how React tracks and updates state.

- Implementing **full CRUD functionality** without relying on external libraries required careful thinking around data structure and update logic, particularly for editing and deleting items within nested data.

- Structuring the app around **props and data flow** was a major learning point. I centralized state in the top-level component and passed data down, while handling user interactions through callback functions passed back up.

- Building **inline editing functionality** introduced complexity around managing local UI state (such as edit modes and temporary input values) alongside global application state.

- Persisting data with **localStorage** helped me understand how frontend applications can maintain state across sessions without a backend, and how to sync state changes effectively.

- This project was built **independently, outside of a guided course**, requiring problem-solving, debugging, and revisiting concepts until I could confidently understand and explain the implementation.

- From a design perspective, I focused on creating a **low-friction, intuitive interface**, prioritizing clarity over feature-heavy complexity to ensure immediate usability.

---

## Final Note

This project represents a shift from guided learning to independent development, and reflects my focus on building a strong foundational understanding of React through practical application.
