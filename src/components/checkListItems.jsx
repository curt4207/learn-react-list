export const checklistItems = [
    {
      title: "Core JavaScript Skills",
      items: [
        {
          title: "let, const",
          description: "These are used to declare variables. let allows you to reassign the variable later, while const does not."
        },
        {
          title: "Arrow functions",
          description: "A shorter way to write functions using =>. For example, (x) => x + 1 is an arrow function that adds 1 to x."
        },
        {
          title: "Template literals",
          description: "These allow you to embed variables inside strings using backticks ` ` and ${}. For example, `Hello, ${name}!`."
        },
        {
          title: "Destructuring",
          description: "A way to unpack values from arrays or properties from objects into distinct variables. For example, const [a, b] = [1, 2] assigns 1 to a and 2 to b."
        },
        {
          title: "Rest and spread operators",
          description: "... is used to expand or collect elements. For example, const [a, ...rest] = [1, 2, 3] puts 1 in a and [2, 3] in rest."
        },
        {
          title: "Promises and async/await",
          description: "Tools to handle asynchronous operations. Promises represent a value that may be available now or in the future. async/await makes asynchronous code look synchronous and easier to read."
        },
      ]
    },
    {
      title: "Fundamentals",
      items: [
        {
          title: "Variables and data types",
          description: "Variables store data, which can be numbers, strings, arrays, objects, etc."
        },
        {
          title: "Functions and scope",
          description: "Functions are reusable blocks of code. Scope determines the accessibility of variables."
        },
        {
          title: "Control flow (loops, conditionals)",
          description: "Control flow structures like for loops and if statements control the execution of code."
        },
        {
          title: "DOM manipulation",
          description: "Changing HTML elements using JavaScript."
        },
        {
          title: "Event handling",
          description: "Responding to user actions like clicks or key presses."
        },
      ]
    },
    {
      title: "React Basics",
      items: [
        {
          title: "Components (functional and class)",
          description: "Building blocks of React. Functional components are simple functions, while class components are ES6 classes."
        },
        {
          title: "JSX",
          description: "A syntax extension for JavaScript that looks like HTML and is used in React."
        },
        {
          title: "Props",
          description: "Short for properties, props are inputs to components that allow data to be passed from one component to another."
        },
        {
          title: "State",
          description: "A way to manage data within a component that can change over time."
        },
        {
          title: "Lifecycle methods (for class components)",
          description: "Functions that get called at different stages of a component’s life (mounting, updating, unmounting)."
        },
      ]
    },
    {
      title: "Hooks",
      items: [
        {
          title: "useState",
          description: "A hook that lets you add state to functional components."
        },
        {
          title: "useEffect",
          description: "A hook that lets you perform side effects (like fetching data) in functional components."
        },
        {
          title: "useContext",
          description: "A hook that lets you access context data without passing props manually."
        },
      ]
    },
    {
      title: "Component Composition",
      items: [
        {
          title: "Parent-child relationships",
          description: "How components nest inside each other."
        },
        {
          title: "Component reusability",
          description: "Writing components that can be reused in different parts of your app."
        },
        {
          title: "Props drilling",
          description: "Passing data through multiple levels of components via props."
        },
      ]
    },
    {
      title: "CRUD Operations",
      items: [
        {
          title: "Create",
          description: "Adding new data, like submitting a form."
        },
        {
          title: "Read",
          description: "Fetching and displaying existing data from an API."
        },
        {
          title: "Update",
          description: "Modifying existing data, like editing a form."
        },
        {
          title: "Delete",
          description: "Removing data, like deleting a record."
        },
      ]
    },
    {
      title: "Styling",
      items: [
        {
          title: "Flexbox",
          description: "A layout model for aligning items in a container."
        },
        {
          title: "Grid",
          description: "A layout model for creating complex, responsive grid layouts."
        },
        {
          title: "Responsive design",
          description: "Making web pages look good on different devices."
        },
        {
          title: "CSS Modules or styled-components",
          description: "Tools for styling components with scoped CSS to avoid conflicts."
        },
      ]
    },
    {
      title: "State Management",
      items: [
        {
          title: "Local component state",
          description: "State that is managed within a single component."
        },
        {
          title: "Lifting state up",
          description: "Moving state to a common ancestor component to share it among multiple components."
        },
        {
          title: "Context API for simple state management",
          description: "A way to share state across the app without passing props manually."
        },
      ]
    },
    {
      title: "Routing",
      items: [
        {
          title: "React Router",
          description: "A library for handling routing in React applications."
        },
        {
          title: "Setting up routes",
          description: "Defining URLs for different components in your app."
        },
        {
          title: "Navigation between routes",
          description: "Moving between different pages in your app."
        },
        {
          title: "Route parameters",
          description: "Passing data through URLs."
        },
        {
          title: "Nested routes",
          description: "Defining routes within other routes."
        },
      ]
    },
    {
      title: "API Interaction",
      items: [
        {
          title: "Using fetch or Axios",
          description: "Tools for making HTTP requests to get data from APIs."
        },
        {
          title: "Handling asynchronous data",
          description: "Managing data that comes from API requests, which can take time."
        },
        {
          title: "Error handling",
          description: "Dealing with errors that may occur during data fetching."
        },
      ]
    },
    {
      title: "Data Structures",
      items: [
        {
          title: "Arrays and array methods (map, filter, reduce)",
          description: "Structures to hold multiple values, and methods to manipulate them."
        },
        {
          title: "Objects and object manipulation",
          description: "Structures to hold key-value pairs and ways to modify them."
        },
        {
          title: "Understanding JSON and how to work with it",
          description: "JSON is a format for structuring data, often used in API responses."
        },
      ]
    },
    {
      title: "Tooling and Ecosystem",
      items: [
        {
          title: "npm/yarn",
          description: "Package managers to install and manage project dependencies."
        },
        {
          title: "Webpack or Create React App",
          description: "Tools for bundling JavaScript files for deployment."
        },
        {
          title: "Babel",
          description: "A tool to convert ES6+ JavaScript into a backward-compatible version."
        },
      ]
    },
    {
      title: "Version Control",
      items: [
        {
          title: "Git basics",
          description: "A system to track changes in your code."
        },
        {
          title: "Branching and merging",
          description: "Creating separate versions of your code and combining them."
        },
        {
          title: "Pull requests",
          description: "A way to propose changes to a codebase."
        },
      ]
    },
    {
      title: "Testing",
      items: [
        {
          title: "Unit testing with Jest",
          description: "Testing individual units of code."
        },
        {
          title: "Testing components with React Testing Library",
          description: "Tools to test how React components render and behave."
        },
      ]
    },
    {
      title: "Debugging",
      items: [
        {
          title: "Browser DevTools",
          description: "Tools in the browser for inspecting and debugging web pages."
        },
        {
          title: "React DevTools",
          description: "Tools for inspecting and debugging React components."
        },
      ]
    },
    {
      title: "Best Practices",
      items: [
        {
          title: "Writing clean and maintainable code",
          description: "Writing code that is easy to read and understand."
        },
        {
          title: "Understanding and applying coding standards",
          description: "Following best practices and conventions."
        },
        {
          title: "Basic understanding of performance optimization",
          description: "Making your app run efficiently."
        },
      ]
    },
    {
      title: "Soft Skills",
      items: [
        {
          title: "Ability to explain code and concepts clearly",
          description: "Being able to describe what your code does."
        },
        {
          title: "Willingness to ask for help and seek feedback",
          description: "Collaborating and improving through feedback."
        },
        {
          title: "Collaboration with team members",
          description: "Working effectively with others."
        },
      ]
    },
    {
      title: "Projects",
      items: [
        {
          title: "To-Do List",
          description: "Practice CRUD operations and state management by creating a simple task manager."
        },
        {
          title: "Weather App",
          description: "Fetch and display weather data from an API."
        },
        {
          title: "Blog",
          description: "Create a platform to write, read, edit, and delete blog posts."
        },
        {
          title: "E-commerce Product Page",
          description: "List products, add to a shopping cart, and view product details."
        },
        {
          title: "Portfolio Website",
          description: "Showcase your projects with navigation and responsive design."
        },
      ]
    },
    {
      title: "Additional Skills (Nice to Have)",
      items: [
        {
          title: "TypeScript",
          description: "Basic understanding and use of TypeScript in React projects: A type-safe language that adds static types to JavaScript."
        },
        {
          title: "State Management Libraries",
          description: "Introduction to Redux or other state management libraries: Tools for managing more complex state."
        },
        {
          title: "Build and Deployment",
          description: "Basic CI/CD understanding: Continuous Integration/Continuous Deployment practices."
        },
        {
          title: "Deployment to platforms like Vercel, Netlify, or GitHub Pages",
          description: "Hosting your projects online."
        },
      ]
    }
  ];
  