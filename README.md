🚀 Technology Showcase
Explore Modern Web Technologies

Technology Showcase is a React-based project that displays different web technologies in a clean and interactive interface. The project was built to practice React components, asynchronous JSON data loading, Suspense, TypeScript, and Tailwind CSS.

🛠️ Technologies Used
⚛️ React
📘 TypeScript
🎨 Tailwind CSS
⚡ Vite
📄 JSON
🔔 React Toastify
✨ Features
1. 💻 Technology Showcase

Users can explore different technologies through a dedicated technology section.

2. 📂 JSON Data Loading

Technology information is loaded dynamically from a JSON file using an asynchronous fetch function.

3. 🎨 Modern UI

The project uses Tailwind CSS with custom brand colors and a gradient design to create a modern interface.

📚 React Questions & Answers
1. What is JSX, and why is it used in React?

JSX is a syntax that allows us to write HTML-like code inside JavaScript or TypeScript.

It makes React UI code easier to write and understand.

2. What is the difference between props and state?

Props are used to pass data from a parent component to a child component.

State is data managed inside a component that can change over time.




3. What does the useState hook do, and where did you use it in this project?

useState is used to create and manage changing data inside a React component.

The provided project files do not show any useState usage, so I cannot identify a specific place where it was used in this project.

4. What does the useEffect hook do, and why did you need it to load the JSON data?

useEffect is commonly used to run code after a React component renders, such as fetching data.

However, this project does not use useEffect for loading the JSON data.

Instead, the project uses an asynchronous technologyFetch() function to fetch /technologies.json, then passes the resulting Promise to TechnologySection through Suspense.

5. Why does every item in a .map() list need a unique key prop?

React uses a unique key to identify each item in a list.

It helps React understand which items have changed, been added, or removed.




6. What is conditional rendering? Show one place you used it.

Conditional rendering means displaying something only when a specific condition is true.




7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

A parent component passes data to a child through props.

In this project, App passes the technology Promise to TechnologySection:

🧠 React Concepts Practiced
React Components
JSX
TypeScript
Props
Asynchronous Data Fetching
Promise
Suspense
JSON Data
Tailwind CSS
React Toastify
📁 Data Flow

The basic data flow of this project is:

technologies.json
       ↓
technologyFetch()
       ↓
Promise<TechType[]>
       ↓
App
       ↓
TechnologySection
       ↓
Technology UI

The App component creates the Promise and passes it to TechnologySection through the technologyPromise prop.

🎨 Styling

The project uses Tailwind CSS and defines custom brand colors:

🟠 Brand Orange
💗 Brand Pink
🟣 Brand Violet

It also includes a reusable brand gradient class.

⚡ Getting Started
1. Clone the repository
git clone YOUR_REPOSITORY_URL
2. Go to the project directory
cd your-project-name
3. Install dependencies
npm install
4. Start the development server
npm run dev
👨‍💻 Author

Jewel Rana

Built with ❤️ using React, TypeScript & Tailwind CSS.
