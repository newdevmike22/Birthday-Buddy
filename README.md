# Birthday Buddy App

A simple birthday reminder application built with React, Vite, and Tailwind CSS. This project was created as a practice exercise to improve my understanding of React fundamentals, especially the `useState` hook, component communication, and managing state.

## Overview

The application displays a list of people with their profile images, names, and ages. The user can see the number of birthdays currently displayed and clear the entire list by clicking the "Clear All" button.

The purpose of this project was to practice building a small React application while working with state, components, props, and styling with Tailwind CSS.

## Purpose and Learning Goals

This project was created to practice:

* Using the React `useState` hook to manage changing data
* Understanding how state updates affect the user interface
* Passing data between components using props
* Creating reusable React components
* Separating data from UI components
* Styling components with Tailwind CSS
* Using Vite as a React development environment

## Features

* Displays a list of people with:

  * Profile images
  * Names
  * Ages
* Shows the number of birthdays currently displayed
* Allows the user to clear all birthday entries with a button click
* Updates the UI automatically when the state changes

## Technologies Used

* React
* Vite
* JavaScript (ES6+)
* Tailwind CSS
* HTML5

## React Concepts Practiced

### useState Hook

The application uses the `useState` hook to store the birthday data:

```javascript
const [people, setPeople] = useState(data);
```

When the user clicks the "Clear All" button, the state is updated:

```javascript
setPeople([]);
```

React then re-renders the components that depend on this state. The list disappears because the `List` component receives an empty array and has no items to display.

### Props and Component Communication

The project practices passing data from a parent component to a child component.

The state is managed in `App.jsx`:

```jsx
<List people={people} />
```

The `List` component receives the data through props:

```javascript
const List = ({ people }) => {
  ...
};
```

This allows the parent component to control the data while keeping the child component focused on displaying the list.

## Project Structure

```text
src
│
├── App.jsx
│
├── components
│   ├── List.jsx
│   └── data.js
│
├── main.jsx
│
└── index.css
```

## Installation and Setup

Clone the repository:

```bash
git clone <repository-url>
```

Navigate into the project directory:

```bash
cd birthday-reminder
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

The application will run through the Vite development server.

## Summary

This project provided practice with React state management, component structure, props, and styling with Tailwind CSS. It helped reinforce how data flows through React applications and how state changes update the user interface.


