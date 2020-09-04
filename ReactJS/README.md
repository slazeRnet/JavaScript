### CONTENT
### [1. Introduction to ReactJS](#1-introduction-to-reactjs-1)
### [2. React Components](#2-react-components-1)
### [3. React Components – Deep Dive] () // provide link to section starting from this header 

### [11. Errors](#11-errors) 

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

## 2.3. Handling Events
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
```js
<button className="counter"
  onClick={props.clickHandler}>
    Click me! I'm a counter [{props.clicks}]
</button>

```
```js
<Button clickHandler={() => this.clickHandler()}  clicks={this.state.clicks}/>

```
```js
<button className="counter"
  onClick={props.clickHandler}>
    Click me! I'm a counter [{props.clicks}]
</button>


```

### SyntheticEvent
Event handlers will be passed instances of SyntheticEvent
It has the same interface as the browser's native event
Including stopPropagation() and preventeDefault()
Except the events work identically across all browsers
```js
function onClick(event) {
  console.log(event);
  console.log(event.type);
  const eventType = event.type;
}

```

### Event Pooling
Event pooling
SyntheticEvent object will be reused and all propertieswill be nullified after the event callback has been invoked
cannot access the event in async way
It's possible by using event.persist()
React Supported Events

## 2.4. Conditional Rendering
Conditional rendering in React works the sameway conditions work in JavaScript using:
operators like if
conditional (ternary) operators

### 2.4.1. Using if operator
```js
function UserGreeting(props) {
  return <h1>Welcome back!</h1>;
}

function GuestGreeting(props) {
  return <h1>Please sign up.</h1>;
}

function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
      return <UserGreeting />;
    }
  return <GuestGreeting />
}

```

### 2.4.2. using ternary operator
```js
function UserGreeting(props) {
  return <h1>Welcome back!</h1>;
}

function GuestGreeting(props) {
  return <h1>Please sign up.</h1>;
}

function Greeting(props) {  return (
    <div>
      { props.isLoggedIn ? < UserGreeting /> : <GuestGreeting /> }
    </div>
  )}

```

## 2.5. Lists and Keys
Using map() we can build collections of elements and include them in JSX using {}
Keys should be given to the elements inside the array to give the elements a stable identity
Keys help React identify which items have changed, are added, or are removed

Using map() to take an array of numbers and double their values
Rendering Multiple Components
```js
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map((number) => number * 2);
console.log(doubled); // [2, 4, 6, 8, 10]

const numbers = [1, 2, 3, 4, 5];
const listItems = numbers.map((number) =>
  <li>{number}</li>
);

```

Result
```
1
2
3
4
5
```

### 2.5.1. Basic List Component
Basic List Component looks like
```js
function NumberList(props) {
    const numbers = props.numbers;
    const listItems = numbers.map((number) =>
        <li>{number}</li>
    );
    return (
        <ul>{listItems}</ul>
    );
}

```

You can build collections of elements and include them in JSX using {}
```js
function NumberList(props) {
    const numbers = props.numbers;
    const listItems = numbers.map((number) =>
        <li>{number}</li>
    );
    return <ul>{listItems}</ul>;
}

```
Usually lists are rendered inside a component

When you render an array of elements, React needs a key prop to identify elements for optimization purposes
If they don't have it, you will get
:x:
> Each child in list should have unique "key" prop

It won't stop your work

### 2.5.2. Picking a Key
The best way to pick a key is to use a string that uniquely identifies a list item among its siblings
Most often you would use ID's from your data as keys
```js
const todoItems = todos.map((todo) =>
  <li key={todo.id}>
    {todo.text}
  </li>
);

```

### 2.5.3. Extracting Components with Keys
Keys only make sense in the context of the surrounding array
```js
function NumberList(props) {
    const numbers = props.numbers;
    const listItems = numbers.map((number) =>
        <ListItem key={number.toString()} value={number} />
    );
    return (
        <ul>
            {listItems}
        </ul>
    );
}

```

```js
function ListItem(props) {
    return <li>{props.value}</li>;
}

```

Don't use indexes for keys if the order may change
Keys serve as a hint to React, but they don't get passed to your component
If you need the same value, pass it explicitly as prop with adifferent name
```js
const content = posts.map((post) =>
  <Post
    key={post.id} id={post.id} title={post.title}
  />
);

```
- Keys don't need to be globally unique (only among their siblings)

---
## 3. React Components – Deep Dive

### 3.1. Component Lifecycle
A component has "lifecycle methods" that can be overridden to run code at times in the process
A component has 3 lifecycle phases
- Mounting  - where the component and all its children are mounted (created and inserted to the DOM)
- Updating Updating - component is re-rendered because changes are made to its props or state
- Unmounting - occurs when a component instance isunmounted (removed from the DOM)

#### 3.1.1. Component Mounting
After preparing with basic needs, state and props a Component is ready to mount in the browser DOM
- constructor
- static getDerivedStateFromProps
- render
- componentDidMount

#### 3.1.2. Component Updating
This phase starts with the beginning of the react component and expand by receiving new updates
- static getDerivedStateFromProps
- shouldCompoentUpdate
- render 
- getSnapshotBeforeUpdate
- componentDidUpdate

#### 3.1.3. Component Unmounting

The component is not needed, and the component will get unmounted
componentWillUnmount
- Here React does all the cleanups related to the component
- Invalidating timers
- Canceling network requests
- Cleaning up any subscriptions

### 3.2. Higher-Order Components
A higher-order component (HOC) is an advancedtechnique in React for reusing component logic
HOCs are not part of the React API
HOC is a function that takes a component andreturns a new component

**Example: Reducer Function**
A reducer applies a function over a sequence of elements toproduce a single result
```js
function reduce(arr, func) {
    let result = arr[0];
    for (let nextElement of arr.slice(1))
        result = func(result, nextElement);
    return result;
}
reduce([5, 10, 20], (a, b) => a + b); // 35
reduce([5, 10, 20], (a, b) => a * b); // 1000

```

#### 3.2.1. Higher-Order Functions 
Components are the primary unit of code reuse
Some patterns aren't straightforward for traditionalcomponents
Whereas as component transforms props into UI
HOC component transform a component into anothercomponent
```js
const EnhancedComponent = higherOrderComponent(WrappedComponent);

```

- Logging of component lifecycle events
```js
function logged(WrappedComponent) {
    return class extends React.Component {
        componentDidMount() {
            console.log(`${WrappedComponent.displayName} mounted`);
        }
        render() {
            return <WrappedComponent {...this.props} />;
        }
    };
}


```

#### 3.2.2. Advantages
- Greater code reuse
- Reduced boilerplate
- Easily handle cross-cutting concerns
*Cross-cutting concerns are parts of a program that rely on or must affect many other parts of the system. They form the basis for the development of aspects. Such cross-cutting concerns do not fit cleanly into object-oriented programming or procedural programming.*
- Commonly used for
- Managing form input
- Binding component props to business logic
- Automating repetitive tasks

#### 3.3. CSS Modules
CSS files in which all class names and animationnames are scoped locally by default
All URLs and imports are relative
Importing CSS Module from a JS Module
Exports an object with all mapping from localnames to global names

React supports CSS Modules alongside regular stylesheet usingthe [name].module.css file naming convention
```cs
.App {
  text-align: center;
}
.btn {
  background-color: green;
  color: white;
  border-radius: 15px;
  margin: 2%;
  padding: 0.5%;
  font-size: 24px;
  cursor: pointer;
}

```
- CSS Modules let you use the same CSS class name in differentfile without worrying about naming clashes

CSS File called Button.module.css
```css
.error {
  background-color: white;
  color: red;
}
```

Importing all styles
Using error class from the css file

```js
import React, { Component } from 'react';
import styles from './Button.module.css';
class Button extends Component {
  render() {
    return <button className={styles.error}>Error Button</button>;
  }
}

```

### 3.4. Using Fetch API
The Fetch API provides an interface for accessingand manipulating requests and responses
fetch() function which provides easy way tofetch resources asynchronously
functionality like this was previously achievedusing XMLHttpRequest
fetch() takes one mandatory argument (the path to theresource you want to fetch)
second argument is optionally (init options - object) 
returns a promise
once response is retrieved, there are several methodsthat defines what and how should be handled
- Fetch API with then/catch example
```js
fetch('https://api.github.com/users/k1r1L')
    .then((response) => response.json())
    .then((myJson) => console.log(myJson))
    .catch((myErr) => console.error(myErr));

```

- Fetch API with async/await example
```js
(async () => {
  try {
    const response = await fetch('https://api.github.com/users/k1r1L');
    const myJson = await response.json();
    console.log(myJson);
  } catch (myErr) {
    console.error(myErr);
  }
})();

```
#### 3.4.1. Fetch Services
The basic idea is to isolate the concern of fetching data inside components
Fetching data logic should separated as service
```js
const apiUrl = '...';
export const getData = () => {
    return fetch(apiUrl)
        .then(res => res.json())
        .then(data => data.results)
        .catch(error => console.error(error))
};

```

```js
import { getData } from'./services/fetching-data-service'; // Import the service


class App extends Component {
  state = {
    data: ...
  };
  componentDidMount() { // Using the service
    getData().then((data) => {
      this.setState({ data })
    });
  }
  render() {    return ...;
  }
}

```


### 3.5. Context
Context provides way to pass data through the component tree without passing the props manually
- Context API
  - React.createContext
  - Context.Provider
  - Class.contextType
  - Context.Consumer
  - Context.displayName
Context is designed to share data that can be considered global
Current authenticated user
Theme
Preferred language
Using context, we can avoid passing props through intermediate elements

**Without Using Context**
```js
class App extends React.Component {
  render() {
    return <Toolbar theme="dark" />;
  }
}
function Toolbar(props) {
  return (
    <div>
      <ThemedButton theme={props.theme} />
    </div>
  );
}
class ThemedButton extends React.Component {
  render() {
    return <Button theme={this.props.theme} />;
  }
}

```

**Using Context**
```js
const ThemeContext = React.createContext('light');
class App extends React.Component {
  render() {
    return (
      <ThemeContext.Provider value="dark">
        <Toolbar />
      </ThemeContext.Provider>
    );}
}


function Toolbar(props) {
  return (
    <div>
      <ThemedButton />
    </div>
  );}

class ThemedButton extends React.Component {
  static contextType = ThemeContext;
  render() {
    return <Button theme={this.context} />;
  }
}

```

Context is primarily used when
Some data needs to be accessible by many components at different nesting levels
Apply it sparingly because it makes component reuse more difficult
Using Context only the top-most Page Component know about your data

- React.createContext
```js
const someContext = React.createContext(defaultValue);
```
- Creates a Context object
- While rendering will read the current context value from the closest matching Provider above it in the tree
- The default value is used only when a component does not have a matching Provider above it in the tree

- > Class.contextType
Property that can be assigned a Context object created by React.createContext
Lets you consume the nearest current value of that Context type using this.context
You can reference this in any of the lifecycle methods including the render function

- > Context.Consumer
A React component that subscribes to context changes
Lets you subscribe to a context within a function component
Requires a function as a child
Receives the current context value
Return a React node
Value will be equal to the value prop of the closest Provider

- > Context.displayName
String property
React DevTools uses this string to determine what to display for the context
```js
const MyContext = React.createContext(/* some value */);
MyContext.displayName = 'MyDisplayName';

<MyContext.Provider> // "MyDisplayName.Provider" in DevTools
<MyContext.Consumer> // "MyDisplayName.Consumer" in DevTools

```

# 11. Errors

### 11.1 TypeError: this.handleClick is not a function
a function handleClick is called but never defined.

