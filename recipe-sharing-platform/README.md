# Building React projects with Tailwind CSS

![ui design of a food recipe app](/src/assets/food-recipe-app.jpg)

In the “Building React Projects with Tailwind CSS” project, you will learn how to create a responsive and visually appealing Recipe Sharing Platform using React and Tailwind CSS.

By the time you are done with this project, you will cover essential concepts for integrating Tailwind CSS with React, allowing you to build and style web applications efficiently.

NB: Feel free to search for resources or learning material that will enable you to complete this project successfully.

# Learning Objectives

By the end of this project, you will be able to:

### 1.Set Up a React Application with Tailwind CSS:

- Create a new React project and configure it to use Tailwind CSS for utility-first styling.

### 2.Build and Style a Responsive Home Page:

- Develop the Home Page of the Recipe Sharing Platform to display a list of recipes using Tailwind CSS for a responsive and user-friendly layout.

### 3.Create and Style a Recipe Detail Page:

- Implement a Recipe Detail Page that provides comprehensive information about each recipe, ensuring it is styled consistently with the Home Page using Tailwind CSS.

### 4.Implement a Responsive Form for Adding New Recipes:

- Build a form that allows users to submit new recipes, including validation and responsive design, styled with Tailwind CSS.

By completing these tasks, you will gain practical experience in using Tailwind CSS with React, enabling you to build modern, responsive web applications with ease.

# TASKS

### 0. Setting Up a React Application for a Recipe Sharing Platform with Tailwind CSS `MANDATORY`

**Objective:** Begin building a Recipe Sharing Platform using React and Tailwind CSS. This task focuses on setting up the project foundation, including the creation of the React app, installing Tailwind CSS, and preparing a clean workspace for further development.

## Project Overview:

The Recipe Sharing Platform will allow users to browse, add, and share recipes. It will feature multiple pages including a home page with a list of recipes, a detailed view for individual recipes, and a form to submit new recipes.

## Task Description:

Start by setting up a new React project integrated with Tailwind CSS. This initial setup lays the groundwork for developing a responsive and visually appealing application.

## Step 1: Create a New React Project

- React Project Setup:
  - Open your terminal and set up a new React application:

```
npm create vite@latest recipe-sharing-platform -- --template react
cd recipe-sharing-platform
```

## Step 2: Install and Configure Tailwind CSS

- Tailwind CSS Installation:
  - Add Tailwind CSS and its dependencies to your project:

```
npm install -D tailwindcss postcss autoprefixer
```

- Set up Tailwind CSS using the Tailwind CLI:

```
npx tailwindcss init -p
```

- Modify the `tailwind.config.js` to enable purging of unused styles in production builds:

```
module.exports = {
      purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
      darkMode: false,
      theme: {
        extend: {},
      },
      plugins: [],
    };
```

- Configure your project to include Tailwind in your CSS. Add this to `src/index.css`:

```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## Step 3: Verify Tailwind CSS Integration

- Test Tailwind CSS Setup:
  - Run your React application to ensure Tailwind CSS is integrated correctly:

```
npm run dev
```

- Check the browser to see if the app loads without any errors and Tailwind’s styles are applied (you can test by adding a Tailwind utility class like `text-blue-500` to a component).

### Repo:

- GitHub repository: `alx-fe-reactjs`
- Directory: `recipe-sharing-platform`
