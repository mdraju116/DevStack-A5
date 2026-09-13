#  DevStack

A modern and responsive developer technology stack application built with React and TypeScript. DevStack allows users to explore different technologies, view technology details, and build their own personalized stack.

##  Live Demo

👉 [DevStack Live Demo](https://devstack-gamma-virid.vercel.app/)

## Technology Stack

* React
* TypeScript
* Tailwind CSS
* Vite
* JSON
* HTML5
* CSS3

##  Key Features

*  **Explore Technologies** — Browse different technologies and view their information.
*  **Build Your Stack** — Add technologies to your personal stack and manage your selected technologies.
*  **Responsive Design** — Fully responsive layout that works across desktop, tablet, and mobile devices.

## 📂 Project Structure

```text
DevStack/
│
├── public/
│   └── data.json
│
├── src/
│   ├── components/
│   │   ├── Nav.tsx
│   │   ├── Banner.tsx
│   │   ├── Technologies.tsx
│   │   ├── TechnologyCard.tsx
│   │   ├── YourStack.tsx
│   │   └── Footer.tsx
│   │
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
│
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

## 👨‍💻 Author
**Md. Raju Ahammed**

GitHub: https://github.com/mdraju116






# ⚛️ React Questions & Answers

## 1. What is JSX, and why is it used in React?

**JSX** is a syntax that allows us to write HTML-like code inside JavaScript.

React uses JSX because it makes the UI easier to write and understand.





## 2. What is the difference between props and state?

**Props** are data passed from a parent component to a child component. They are read-only.

**State** is data that a component manages, and it can change when the user interacts with the application.





## 3. What does the `useState` hook do, and where did you use it in this project?

`useState` is a React Hook that creates and manages changing data inside a component.
It lets a React component remember a value and update the screen when that value changes.

For example:

```jsx
const [search, setSearch] = useState("");
```

In **DevStack**, I used `useState` to manage changing UI data such as search/filter values and selected or changing information in components.

When the state changes, React updates the UI automatically.



## 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?

`useEffect` is used to perform side effects in a React component.
It performs actions after a component loads or when certain data changes.

I used it to load data from the JSON file when the component starts.

For example:

```jsx
useEffect(() => {
  fetch("/data.json")
    .then((res) => res.json())
    .then((data) => setData(data));
}, []);
```

The empty `[]` means the effect runs when the component is loaded.



## 5. Why does every item in a `.map()` list need a unique `key` prop?

React needs a unique `key` to identify each item in a list.

It helps React understand which items have changed, been added, or removed.

Example:

```jsx
{technologies.map((technology) => (
  <div key={technology.id}>
    {technology.name}
  </div>
))}
```

The `key` should be unique for each item.



## 6. What is conditional rendering? Show one place you used it.

**Conditional rendering** means displaying different UI depending on a condition.

For example, in DevStack, when there are no items in the stack, I can show an empty-stack message:

```jsx
{stack.length === 0 ? (
  <p>Your stack is empty.</p>
) : (
  <StackItems />
)}
```

If the stack is empty, the message is shown. Otherwise, the stack items are displayed.



## 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

A parent sends data to a child using **props**.

```jsx
function Parent() {
  return <Child name="DevStack" />;
}

function Child({ name }) {
  return <h2>{name}</h2>;
}
```

The child can send something back to the parent by receiving a **function through props** and calling that function.

```jsx
function Parent() {
  const handleData = (data) => {
    console.log(data);
  };

  return <Child sendData={handleData} />;
}

function Child({ sendData }) {
  return (
    <button onClick={() => sendData("Hello Parent")}>
      Send
    </button>
  );
}
```

Here, the parent passes a function to the child, and the child calls that function to send data back.

---


