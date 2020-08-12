### CONTENT
### [1. Introduction to ReactJS](#1-intro-to-reactjs-1)
### [2. React Components](#1-react-components-1)

# 1. Introduction to React.js
1. React Overview
2. Installation
3. JSX Syntax
4. Composition

## 1. Overview
React is a JavaScript library for building user interfaces (UI)
Focused on creating reusable components
Developed by Facebook
```js
const HelloMessage = (props) => (
  <div>Hello {props.name}</div>
);
ReactDOM.render(
  <HelloMessage name="Maria" />,
  document.getElementById('root')
);

```
### 1.1 Features
- Open-source
- Declarative
- Design simple views for each state in your app
- Easier to debug
- Component-Based
- Encapsulated components that manage their own state
- Keep state out of the DOM
- Isomorphic
    - JavaScript that runs on both client & server
    - Better user experience 
- Native support
    - Compose rich mobile UI in Android, iOS
### 1.2. Advantages
    - Easy to learn
    - Fast performance
    - Use all ES6 features
    - Promises, Classes and Modules
    - Compatible with other libraries
    - Great error reporting

## 2. React Installation
- Less to learn - instant reloads help you focus on development
- Only one dependency - no complicated version mismatches
- No Lock-In - under the hood Webpack, Babel, ESLint
- Install the React app creator (one-time global install)

### 2.1. Install and Run the React App Creator
- Run the React app creator
```js
npx create-react-app my-app
```
- Starts your React app from the command line
```js
cd my-app
```
```js
npm start

```
- Browse your app from http://localhost:3000

- Visit the official website
```js
https://reactjs.org/
```
- Documentation
```js
https://reactjs.org/docs/installation.html
```
- Online sandbox
```js
https://codesandbox.io/
```
- package.json - project configuration
Module name, dependencies, build actions
- index.html
App main HTML file
- index.js
App main JS file (startup script)
- App.js, App.css, App.test.js
React component "App"

## 3. JSX Syntax

### 3.1. JSX Overview
JSX is React's JavaScript superset language
Has all of JavaScript's features and more
Unique approach to mixing HTML and JS
Compiles to plain JavaScript
```js
<div className="red">Children Text</div>
```

```js
React.createElement("div",
  { className: "red" },
  "Children Text"
);
```
```js
let gameScores = {
  player1: 2,
  player2: 5
};
<DashboardUnit index="2" onClick={() => {}>
  <h1>Scores</h1>
  <Scoreboard className="results" scores={gameScores} />
</DashboardUnit>

```

### 3.2. JSX Rules and Principles
Standard elements use lowercase names
div, span, form, input, …
Custom components always use Pascal case
MyCustomComponent, Greeting, ScoreBoard, …
Component name cannot be an expression 
Use a variable instead
There must be a root element
More info at: https://reactjs.org/docs/jsx-in-depth.html

### 3.3. Compilation
JSX compiles to function calls

### 4. Composition
- React components can be nested, like DOM elements
```js
function Welcome() {
  return <h1>Hello, from React</h1>; 
}
function Cya() {
  return <h1>C ya, from React</h1>;
}
function ComponentBlender() { 
  return (
    <div>
      <Welcome />
      <Cya />
    </div>
  );
} 

```

```js
ReactDOM.render(<ComponentBlender />,
    document.getElementById('root'));
```

Names always start with uppercase
Tags must be closed
If there are no children - use self-closing tags
Information is passed via props
```js
<Dropdown> A dropdown list <UserHead name='homeHeader' />
  <Menu> 
    <MenuItem>Do Something</MenuItem>
    <MenuItem>Do Something Fun!</MenuItem> 
    <MenuItem>Do Something Else</MenuItem> 
  </Menu> 
</Dropdown>

```

### 4.1. Advantages

- Encapsulate logic
- Separate your code
    - Easier to maintain and debug
    - Allows reusability
- Components are neat


---

# 2. React Components

1. Components Overview
Functional vs Class Components
2. Props
3. State
4. Handling DOM Events
5. Conditional Rendering
6. Lists & Keys


## 2.1. Components Overview
- Components let you
Split the UI into independent and reusable pieces
Think about isolation
- React let you define components as
Functions
Classes

### 2.1.1. Functional Component
Functional component is a JS function which
Accepts single argument called props (object with data)
Returns a React Element

```js
function Person(props){
  return <div>My name is {props.name}</div>
}

```

### 2.1.2. Class Component

- To define a React component class, you need to extendReact.Component
```js
class Person extends React.Component {
  render() {
    return <h1>My name is {this.props.name}</h1>
  }
}

```
- The only method you must define is called render()

### 2.1.3. Component Syntax
- Names always start with UpperCase
- Tags always must be closed
- Information is passed via props
```js
<Dropdown> A dropdown list
  <UserHead name="homeHeader" />
  <Menu>
    <MenuItem>Do Something</MenuItem>
    <MenuItem>Do Something Fun!</MenuItem>
  </Menu>
</Dropdown>

```

## 2.3. Component Props and State

### 2.3.1. Props and State Overview
In React this.props and this.state represent the rendered values
Both are plain JavaScript objects
Both hold information that influences the outputof render

### 2.3.2. Props and State Overview
They are different in one important way
props get passed to the component(like function params)
state is managed within the component(like local variables)

## 2.4. Component Props
props is short for properties
are received from above (parent)
immutable as far as the component receiving them isconcerned
A component cannot change its own props, but it is responsible for putting together the props of its child components

ReactJS component example:
```js
import React from "react";
import "./styles.css";

export default function App() {
  return (
    < BookList/>
  );
}

const BookList = () => {
  return ( 
    <ul>
      <Book 
  	title="IT" 
  	author="Stephen King"
	price="20" 
      />
      <Book 
  	title="The Hunger Games"
	author="Suzanne Collins"
	price="10"
      />
    </ul>
  );};


class Book extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <li className="book">
        <div>{this.props.title}</div>
        <div>{this.props.author}</div>
        <div>{this.props.price}</div>
      </li>
    );
}}

```

result:
```
-         
IT
        
Stephen King
        
20
      
-               
The Hunger Games
        
Suzanne Collins
        
10
      
```

## 2.5. Storing and Modifying Data

### 2.5.1. Component State Overview
The heart of every React component is its "state"
It determines how the component rendersand behaves
State allows you to create components that are dynamic and interactive

### 2.5.2. State
State starts with default value when a component mounts
after mounts, suffers from mutations in time
its serializable
 Component manages its own state internally

### 2.5.2. Component State Example

State holds information that can change over time
Usually as a result of user input or system events
```js
class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    this.updateCount = this.updateCount.bind(this);
  }
  updateCount() {
    this.setState((prevState) => { count: prevState.count + 1 });
  }
  render() {
    return (<button onClick={this.updateCount}>
      Clicked {this.state.count} times</button>);
  }}

```
### 2.5.3. Working with States
State is used only with class-based components
Default state can be set in the constructor
To access state
State must never be directly modified
Use this.setState instead
New state will be merged with old state
setState()
schedules an update to a component's state object
when state changes, component response by re-rendering
Calls to setState are asynchronous
inside event handlers
don't rely on this.state to reflect the new value immediately

### 2.5.4. Stateless component
Stateless Components 
only props, no state
there's no much going on besides the render() 
easy to follow and test
```js
function Show(props) {
  return (
    <p>{props.value}</p>
  )
}

```

### 2.5.5. Stateful Component
Stateful Components (State Managers)
Both - props and state
They are in charge or client-server communications,processing data and responding to user events
Has methods

```js
class Input extends React.Component {
  constructor(props) { 
    super(props);
    this.state = { 
      value: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) { 
    this.setState({ value: event.target.value });
  }
    
  render() {...
}

```

```js
constructor(props) { ...
handleChange(event) { ...
render() { 
  return (
    <div>
      <input
        name="firstName"
        type="text"
        value={this.state.value}
        onChange={this.handleChange}
      />
      <Show value={this.state.value} />
    </div>
  );
}

```

## 3. Handling Events
Handling events with React elements is verysimilar to handling event on DOM elements
The syntactic differences are:
React events are named using camelCase
With JSX you pass a function as the event handler

When using React you should generally
Not need to call addEventListener to add listeners to aDOM element after it is created
Just provide a listener when the element is initially rendered

```js
<button onClick={this.clickHandler}
  Click me! I'm a counter
</button>

```

There are two ways to passing arguments to event handlers
using arrow functions
```js
<button onClick={(e) => this.deleteRow(id, e)}>
  Delete Row
</button>

```

using bind
```js
<button onClick={this.deleteRow.bind(this, id)}>
  Delete Row
</button>

```