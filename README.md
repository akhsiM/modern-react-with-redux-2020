- [General](#general)
- [Projects](#projects)
  - [`jsx/`](#jsx)
  - [`components/`](#components)
  - [`seasons/`](#seasons)
  - [`pics/`](#pics)
  - [`pics-v2/`](#pics-v2)
  - [`widgets/`](#widgets)
- [Exercise Snippets](#exercise-snippets)
  - [`useState` Exercise](#usestate-exercise)

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
    - An Accordion component
      - Learn `useState` hook.
      - Getting the **index value** with `map()`.
    - A Wikipedia API search component
      - Learn `useEffect` hook and its cleanup function
      - `dangerouslySetInnerHTML` and XSS Attack
      - Learn API throttling with `setTimeout()` and how to cancel a timer.
      - Learn React dependency error in `useEffect()` and solving it using **debounced** state.
    - A Dropdown item selection component
      - Event Bubbling
      - Order of Event Handler invocations
      - `useRef` hook
    - A Google Translate API component
  - Learn `React.Fragment`.
  - 


# Exercise Snippets

## `useState` Exercise
![](./code_img/README-2020-10-07-23-37-53.png)

Increment current count by one every time user clicks on the button.

```js
import React from 'react';
// Don't modify this line. It is here to make React
// work correctly in this exercise environment.
const useState = React.useState;

// don't change the Component name "App"
export default function App() {
    
    const[activeCount, setActiveCount] = useState(0);
    
    const onButtonClick = () => {
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