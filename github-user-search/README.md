# Working with APIs

![an image indicating working with APIs](./src/assets/8ed5604ecf8f9594467d3a41751c8a246ff8d141.png)

In the “Working with APIs” project, you will develop a GitHub User Search Application using React. This project will guide you through integrating with the GitHub API, handling user authentication, and deploying your application to a web hosting platform. You will gain hands-on experience in API interactions, advanced HTTP networking, and deploying web applications.

# Learning Objectives

By the end of this project, you will be able to:

### 1. Set Up a React Project for API Integration:

- Create and configure a new React application for integrating with external APIs, specifically the GitHub API.

### 2. Develop Basic and Advanced Search Features Using GitHub API:

- Implement basic search functionality to fetch and display GitHub user data.

- Enhance the search functionality to include advanced filtering criteria, such as location and repository count.

### 3. Improve User Interface and Experience:

- Utilize Tailwind CSS to style your application, ensuring a responsive and visually appealing design.

### 4. Deploy the Application to a Web Hosting Platform:

- Deploy your application to Vercel, making it publicly accessible and ensuring it performs well under real-world conditions.

# Tasks

# 0. Setting Up a React Project for GitHub User Search Application `mandatory`

**Objective**: Begin building a GitHub User Search Application using React. This task focuses on setting up the project foundation, including creating the React app, installing necessary packages, and preparing the environment for further development.

### Project Overview:

The GitHub User Search Application will allow users to search for GitHub profiles using the GitHub API. It will feature a search input, display results including basic user information, and link to their GitHub profiles.

### Task Description:

Start by setting up a new React project and preparing it for integration with the GitHub API. This involves setting up the basic project structure and ensuring that all necessary tools and packages are installed.

### Step 1: Create a New React Project

- React Project Setup:
  - Open your terminal and set up a new React application using Create React App:

```
npm create vite@latest github-user-search -- --template react
cd github-user-search
```

### Step 2: Install Necessary Packages

- Dependencies Installation:
  - Install Axios for making HTTP requests, which will be used to interact with the GitHub API:

```
npm install axios
```

### Step 3: Prepare the Application Structure

- Basic Application Structure:
  - Create a simple structure for your application:
  - `components/`: Directory to hold all React components.
  - `services/`: Directory for services such as API calls.
  - `App.jsx`: Modify this file to include basic routing and a simple layout.

### Step 4: Configure Environment for API Calls

- Environment Setup:
  - Set up environment variables to store sensitive information such as API keys (if necessary for GitHub API):
  - Create a `.env` file in the root directory.
  - Add environment variables like `REACT_APP_GITHUB_API_KEY` if needed.
  - Use `process.env.REACT_APP_GITHUB_API_KEY` in your API service files.

### Step 5: Initial Test Run

- Run the Application:
  - Ensure that your setup works by running the application:

```
npm run dev
```

- The application should load without errors, displaying a basic setup ready for further development.
  Name of the github repo: `github-user-search`

**Repo:**

- GitHub repository: `alx-fe-reactjs`
- Directory: `github-user-search`
