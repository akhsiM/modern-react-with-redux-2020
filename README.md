- [General](#general)
- [Projects](#projects)
  - [`jsx/`](#jsx)
  - [`components/`](#components)
  - [`seasons/`](#seasons)
  - [`pics/`](#pics)
  - [`pics-v2/`](#pics-v2)
  - [`widgets/`](#widgets)
  - [`videos/`](#videos)
  - [`videos-hook/`](#videos-hook)
  - [`songs/`](#songs)
  - [`blog/`](#blog)
  - [`streams/`:](#streams)
- [Exercise Snippets](#exercise-snippets)
  - [`useState` Exercise](#usestate-exercise)
  - [`useState` and `useEffect` exercise using axios to fetch data](#usestate-and-useeffect-exercise-using-axios-to-fetch-data)
- [Progress](#progress)

# General

This repository stores source codes that are written and used as I learn React & Redux from Stephen Grider's course on Udemy.

As I go through the course, notes will be taken here:

https://akhsim.github.io/learning/Modern-React-with-Redux.html

# Projects

## `jsx/`
  ![](./code_img/README-2020-10-05-13-53-51.png)
  - A simple project, just to display some Javascript variables

## `components/`
  ![](./code_img/README-2020-10-05-13-53-11.png)
  - A simple comment project with mainly function-based components
  - Llearn JSX and introduces the React **props** system

## `seasons/`
  ![](./code_img/README-2020-10-05-23-06-50.png)
  - A simple silly project that detects user geolocation latitude and display some text.
  - Learn **Class-base component** and more importantly, **React state system**.
  - Learn **simple state init** without `constructor()`.
  - Learn **Lifecycle methods**.
  - Learn **ternary expression**.
  - Learn to add **loading spinner**.

## `pics/`
  ![](./code_img/README-2020-10-07-14-41-34.png)
  - A simple Image Lookup app
  - Learn Event Handler and alternate syntax
  - Learn **controlled v. uncontrolled React Component**.
  - Learn `event.preventDefault()`.
  - Learn `this` object.
  - Learn **how to deal with context problem** and how to use Arrow Function that allow **lexical scoping**.
  - Learn how to communicate **from Child to Parent component** using `props` to generate a callback to pass the information.
  - Learn `axios`.
    - Learn `async` / `await` function.
    - Learn custom AJAX Client.
  - Learn how to render list of records.
    - Learn Javascript array object and map statement.
    - The purpose of keys in List

## `pics-v2/`
  ![](./code_img/README-2020-10-07-16-38-51.png)
  - A continuation of `pics` with images being displayed in a nicely orientated Grid.
  - Learn CSS Grid system and limitation.
  - Learn React **Ref** system and use it to dynamically style our component.
  - Learn issue with **Order of Operation**.

## `widgets/`
  - Hooks!
  - Multiple components include
    - `Accordion` component
      - Learn `useState` hook.
      - Getting the **index value** with `map()`.
    - A Wikipedia API `Search` component
      - Learn `useEffect` hook and its cleanup function
      - `dangerouslySetInnerHTML` and XSS Attack
      - Learn API throttling with `setTimeout()` and how to cancel a timer.
      - Learn React dependency error in `useEffect()` and solving it using **debounced** state.
    - `Dropdown` item selection component
      - Event Bubbling
      - Order of Event Handler invocations
      - `useRef` hook
    - `Translate` component
      - Uses Google Translate API
    - `Route` component
      - URL Routings
    - A Navigation bar component
      - Build Navigation **from sratch** using vanilla React to learn basic component routing.
      - Handle Navigation the React way by
        - Using `Route`, `Link`, and `Header` components
        - Manipulating URL using `window.history.pushState()`
        - Create and dispatch a custom `popstate` event using `dispatchEvent()`
        - Create an `EventListener` to handle the custom `popstate` event
        - Handling expected `Ctrl/Cmd + Click` behaviour by keeping browser normal behaviour


## `videos/`
  - Simple Youtube videos search app.

## `videos-hook/`
  - Refactor of `videos` but now with Hooks

## `songs/`
  - Simple App to introduce Redux into the world of React
  - `React-Redux`
  - The Redux app project structure
  - Named vs Default Exports
  - Introduction of `Provider` and `Connect` special components
  - The general structure of a React component with a react-redux `connect` function, which will be repeated a million times.
  - Calling action creators within a component, via the `connect` function

## `blog/`
  - Simple App that shows a list of blog posts and users from https://jsonplaceholder.typicode.com/
  - Why simple? Because our main goals are:
    - Crystal clear understanding the purpose of reducers
    - Total understanding making API requests with Redux
      - Get familiar with the general steps of how external data is fetched within a Redux application
    - Start to understanding the purpose of `redux-thunk`, a middleware within Redux.
  - How to **not** fetch data using an action creator and more on asynchronous action creators
  - **Rules of Reducers** and equality/ comparison of arrays/objects in JS
  - Switch Statements inside reducer
  - Dispatching the correct data values in action creator
  - `ownProps`
  - Solving the problem of ovefetching issue 
    - Using memoization
    - By using an action creator with another action creator within
  - `_.chain()`

## `streams/`:
  - Two applications within a project directory
  - Navigation in React using React Router
    - **IMPORTANT**: How paths get matched in React Routers
    - How to *not* nagivate in React using the anchor tag.
    - How to **properly** navigate in React using the `Link` component.
  - Different types of React Router and how they work (`BrowserRouter`, `HashRouter`, `MemoryRouter`)
  - Components that are always visible
  - How to implement Google OAuth, with and without Redux
  - Fixed Action Types *(kinda like environment variables)*
  - Redux Dev Tools
  - Redux Form
  


# Exercise Snippets

## `useState` Exercise
![](./code_img/README-2020-10-07-23-37-53.png)

Increment current count by one every time user clicks on the button.

```js
import React from 'react';
// Don't modify this line. It is here to make React
// work correctly in this exercise environment.****
const useState = React.useState;

// don't change the Component name "App"
export default function App() {
    
    const[activeCount, setActiveCount] = useState(0);
    
        setActiveCount(activeCount+1);
    };
    
    return (
        <div>
            <button onClick={onButtonClick}>Click Me!</button>
            
            <h1>Current Count: {activeCount}</h1>
        </div>
    );
}
```

## `useState` and `useEffect` exercise using axios to fetch data
![](./code_img/README-2020-10-19-18-13-27.png)

Fetch a list of users by calling a remote API and display them using a combination of `useEffect()` and `useState`

```js
import React from 'react';
import {axios} from './axios';
const { useState, useEffect } = React;

const URL = 'https://jsonplaceholder.typicode.com/users';

const App = () => {
    const [users, setUsers] = useState([]);
    
    useEffect(() => {

        const getUsers = async () => {
            const { data } = await axios.get(URL);
            setUsers(data);
        };
        
        getUsers();
    }, []);
     
    const renderedUsers = users.map((user) => {
        return <li key={user.id}>{user.name}</li>;
    });
    
    return (
        <ul>
            {renderedUsers}
        </ul>
    );
}

export default App;
```


# Progress

- [X] Session 1
- [X] Session 2
- [X] Session 3
- [X] Session 4
- [X] Session 5
- [X] Session 6
- [X] Session 7
- [X] Session 8
- [X] Session 9
- [X] Session 10
- [X] Session 11
- [X] Session 12
- [X] Session 13
- [X] Session 14
- [ ] Session 15
- [X] Session 16
- [X] Session 17
- [X] Session 18
- [X] Session 19
- [X] Session 20
- [X] Session 21
- [X] Session 22
- [X] Session 23
- [ ] Session 24
- [ ] Session 25
- [ ] Session 26
- [ ] Session 27
- [ ] Session 28
- [ ] Session 29
- [ ] Session 30
- [ ] Session 31
- [ ] Session 32
- [ ] Session 33
- [ ] Session 34
- [ ] Session 35
- [ ] Session 36
- [ ] Session 37
