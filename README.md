# React interview prepration session - EA25
## Day - 1 
### Q1. What is SPA ( Single Page Application) 
SPA stands for "Single Page Application." It is a type of web application or website that interacts with the user by dynamically rewriting the current web page rather than loading entire new pages from the server. In a traditional multi-page application, when a user clicks on a link or performs an action, the browser fetches an entirely new HTML page from the server. In contrast, an SPA loads a single HTML page and dynamically updates its content as the user interacts with the application.

 :- characteristics of SPAs include:

Dynamic Loading: SPAs use client-side scripting (typically JavaScript) to load and render content dynamically, without requiring full page reloads.

Fluid User Experience: SPAs provide a smoother and more fluid user experience because the application can update specific sections of the page in response to user interactions.

Smooth Transitions: They often employ smooth transitions and animations between different views or states of the application.

### Q2. What is Virtual DOM?
Virtual DOM is a lightweight JavaScript object which is an in-memory
representation of real DOM.
It is an intermediary step between the render function being called and the
displaying of elements on the screen.
It is similar to a node tree which lists the elements, their attributes, and
content as objects and their properties. The render function creates a node
tree of the React components and then updates this node tree.
DOM is a document object model, created by converting HTML CSS and
JS Real DOM, which is an object which gets created whenever any React
application gets loaded on the screen for the first time.
Whenever React components get mounted on the screen for the first time.
Now when any user makes any changes on the screen like button click
because of which the state variable will get updated so in this case the
changes will not directly go to Real DOM , instead in react we have a
concept known as Virtual DOM.


### Q3. What is difference between class and functional component?

|Function-Based Components | Class-Based Components|
|------|------|
|Functional components is a plain JavaScript, you do not have a choice to set the state in functional component.| Class components we have a feature to set the set state in component|
|There is no render function we are using in functional components.| In class components, we have a render function which is use to return the react elements.|
|Function components only accept the props as an arguments.| In class componsnts, we have a render function which is use to return the react elements.|
|Functional components are somethimes called stateless components.| Class components are sometimes called stateful components.|


### H/W - Difference between Props and State?
|props | state|
|---- | ----|
|props can be accessed by child components|  state can not be accessed by child component|
|props are immutable| state are mutable|
|props are similar to function parameters| state is used for managing data that is specific to a component|


### Q4. What is package.json?
1.  package. json is used for defining more dependencies - like defining project properties, description, author & license
information, scripts, etc., it specifies the project's metadata and its dependencies.
   1. Name and Version:
   2. Dependencies:
   3. Scripts:
   4. DevDependencies:

### Q5. What is JSX and why do we use it instead of js?
- JSX, which stands for JavaScript XML, is a syntax extension for JavaScript that is commonly used in React applications. It allows you to write HTML-like code within your JavaScript code. JSX provides several benefits for building user interfaces, and here's why we use it instead of plain JavaScript:
    1. Declarative Syntax
    2. Readability
    3. Component Composition
    4. Performance Optimization
    5. Ecosystem Support

### Q. 6 What is the Difference between react and react native? Which one is library or framework?

|React JS | React-Native|
|---- | |----|
|JS Library | Mobile Framework|
|Use to build web application | use to build cross-plateform mobile application.|
|V-DOM render data on browser | Native API for mobile components rendering|
|create robust animation using CSS | Need to use API for create animation |

### H/W Q7. Difference b/w Stateful and stateless Component?

| Statfull| Stateless |
|----| |----- |
|statefull component are those components which have a state|   A state is an object inside the constructor method of a class which is a must in the stateful component|
|It stores information about thecomponent’s state change in memory|  It is used for internalcommunication inside a component|

|It may get changed depending upon the action of the component or child components|  It allows you to createcomponents that are interactive and reusable|

### Q8. What do you know about NPM?
-NPM, which stands for "Node Package Manager," is a widely used package manager for JavaScript and Node.js applications. It is the default package manager that comes with Node.js. NPM serves several important functions in the JavaScript ecosystem Here is an overview of what NPM is and what it's used for:
  1. Package Management
  2. Dependency Management
  3. Command-Line Interface (CLI)
  4. Scripts
  5. Security
  6. Open Source and Community


 ### Day - 2
   ##Q-1. what is an event in react?
   In React, an "event" refers to a specific action or occurrence that can be detected and handled within a React component. Events are typically interactions or behaviors triggered by the user, such as clicking a button, submitting a form, hovering over an element, or pressing a key on the keyboard.

  Events in React are similar to events in standard JavaScript and the DOM, but React provides a unified way to work with events and handle them in a consistent manner. React's event system is synthetic and abstracts away many cross-browser inconsistencies, making it easier to work with events in a React application.some example of it.
 1. Event Handing
 2.Event Blinding
 a.'onClick'
 b.'onSubmit'
 c.'onMouseOver'
 3.Event Object

Q2. What is the package name you are using for routing?
   Name of the packege is React Router DOM.
   install => npm install / i react-router-dom

Q3. What is lazy loading Effect in react?.
    Lazy loading in React refers to a technique used to load certain parts of a web application only when they are needed, rather than loading all components and assets upfront. This can significantly improve the initial loading time and performance of your application, especially when it contains large and complex components or routes.

  In React, you can implement lazy loading using dynamic imports and React's Suspense component. Here's how it works:

  Dynamic Imports: Instead of importing a component directly, you use dynamic imports to load the component when it's needed. Dynamic imports return a promise that resolves with the component once it's loaded. This is typically done using the import() function.

 Suspense: React's Suspense component allows you to wrap the dynamically imported component and specify a fallback UI to display while the component is loading. This ensures that your application remains responsive.

 ## Day - 3 
 ##Q-1. What is Props Drilling Concept ?What is State Uplifting ?

 In a React component hierarchy, props can be passed down from a parent component to its child component, and then to its child's child component, and so on. When a component deep down in the hierarchy needs to access data or functionality that is only available in a higher-level component, the data or functionality must be passed down through all the intermediate components via props. This process is known as "props drilling".
State uplifting - Often there will be a need to share state between different components. The common approach to share state between two components is to move the state to common parent of the two components. This approach is called as lifting state up in React.js

## Q-2 Difference between Axios and fetch?
|AXios| Fetch|
|Axios is 3rd part libaray | Builtin API|
|Faster| Littlebit Slower|
|Easier to handle the Error | Harder to handle the error| 
| Automatically transform Data omto JSON| Have to manually transform data |

## Q-3 Context Api?
The React Context API is a way for a React app to effectively produce
global variables that can be passed around. This is the alternative to "prop
drilling" or moving props from grandparent to child to parent, and so on.
Context API is a (kind of) new feature added in version 16.3 of React that
allows one to share state across the entire app (or part of it) lightly and with
ease.
1. Create a folder under your app root named contexts (not required.
just a convention)
2. Create a file named <your context name>Context.js, e.g.
userContext.js
## Q-4 What is useState hook?
It is a hook which we used in functional component and it is used for manage the state variable within the component.
usestate hooks allows us to track state in a functional component.
State generally refers to data or properties that need to be tracking in an application.
usestate can be used to toggle between 2 values, usually true and false.
need to import useState from 'react' package.
const [state variable, setter function] = useState(initial value of this state variable);
const [count, setCount] = useState(0);

##Q-5 What is useEffect?
useEffect is a hook in React that allows functional components to perform side effects during their lifecycle

It's a replacement for the lifecycle methods in class components.

The Effect Hook allows us to perform side effects (an action) in the function components. It does not use components lifecycle methods which are available in class components.

Mounting phase

updating phase ()

unmounting phase (cleanup function)

In other words, useEffects Hooks are equivalent to componentDidMount(), componentDidUpdate(), and componentWillUnmount() lifecycle methods.

useEffect allows you to run side effects after the component has rendered, and also provides a way to clean up any side effects when the component is unmounted or updated. Here is an example of how to use useEffect:

Side effects have common features which the most web applications need to perform, such as:

Updating the DOM, Fetching and consuming data from a server API, subscribing to events.

useEffect accepts 2 arguments (callback,[dependency])

## Q-6 Do you know about SEO ? Is it true that react js supports SEO support.
Yes, I'm familiar with SEO (Search Engine Optimization). SEO is the practice of optimizing a website or web content to improve its visibility in search engine results. The goal is to make your content more accessible and understandable for search engines, which in turn helps improve your website's ranking in search results.
Regarding React.js and SEO, it's true that React.js applications can face challenges when it comes to SEO. React.js is a popular JavaScript library for building dynamic and interactive user interfaces, often used to create single-page applications (SPAs). Traditional SPAs built with React.js can sometimes have SEO issues because search engines primarily index static HTML content, and SPAs often load content dynamically using JavaScript.

React.js does support SEO, but it requires implementing the right techniques to ensure that search engines can effectively crawl and index your content. Server-side rendering, static site generation, and proper meta tag usage are some of the strategies that can be employed to improve the SEO of React.js applications.

## Day- 4
 
 ** Q-1 Difference between callback and useCallback Hook ?
callback : A callback function in React is a function that you can pass as a prop to child components, allowing those child components to communicate back to the parent component. This is a general concept and not specific to hooks. Callback functions are often used to achieve component interaction and data flow in React applications. They can be used to handle events or pass data between components, especially when using props.
useCallback Hooks : useCallback is a hook provided by React that is used to optimize the performance of your functional components. It's specifically designed to address the issue of unnecessary re-rendering in cases where the dependencies of a function (usually event handlers) change, but you want to avoid recreating the function itself.
 

**Q-2 Why do we need keys in react less?
In the context of React, memory leaks can occur when components are not properly cleaned up after they are no longer needed. This can happen when references to components or data are not removed, preventing the JavaScript garbage collector from reclaiming the memory. Here are some common scenarios in React where memory leaks might occur and how to overcome them
Unsubscribing from Subscriptions and Event Listeners: If your component subscribes to external data sources or sets up event listeners (like subscriptions to APIs, WebSocket connections, or global event listeners), it's important to unsubscribe or remove these listeners when the component is no longer needed. Failing to do so can keep the component in memory even if it's not being displayed.

Solution: Use the appropriate lifecycle method or React hook to unsubscribe or remove event listeners when the component is unmounted. For class components, you can use componentWillUnmount. For functional components, you can use the useEffect hook with a cleanup function.
Clearing Timers and Intervals: If your component sets up timers or intervals using setTimeout or setInterval, it's crucial to clear them when the component is unmounted. Otherwise, these timers will continue to run and keep the component in memory.

Solution: Use clearTimeout and clearInterval to cancel timers and intervals in the component's cleanup process (usually in componentWillUnmount for class components or the cleanup function in useEffect for functional components).
Holding References to Unused Data: Storing references to data that is no longer needed can prevent the garbage collector from reclaiming memory.

Solution: Make sure to nullify or clear references to data that is no longer required, especially if it's a large object or array. This will allow the garbage collector to identify the memory as no longer in use.
Optimizing State Management: In React, excessive use of state can lead to memory leaks if not managed properly. Components that store large amounts of data in state might not release memory as expected.

Solution: Consider using libraries like Redux or React Context for centralized state management, especially for data that needs to be shared among multiple components. Also, make sure to clean up any unnecessary state when a component is unmounted.

**Q-3 What is UseMemo Hook ?

useMemo is a React hook that allows you to memoize the result of a function, and recompute the result only when the dependencies of the function have changed.
In simple terms, useMemo can be used to optimize the performance of your React components by avoiding unnecessary re-renders.
useMemo is a React hook that can be used to memoize the result of a function and optimize the performance of your components. By avoiding unnecessary re-renders, you can create faster and more efficient React applications.

** Q-4 What is UseRef Hook ?
useRef is a hook in React that provides a way to create a mutable reference to a DOM element or to persist values across renders without causing re-renders.
In React, the useRef hook is used to access and interact with DOM elements or to store mutable values that won't trigger a re-render when they change.
useRef is a React hook that allows you to create a mutable reference to an element or value, which persists across re-renders of your component.
It returns an object with a single property, current, which initially holds the value passed as argument (or undefined if no argument is provided). We can modify the current property without triggering a re-render of the component. This makes it useful for managing mutable values and for accessing the underlying DOM elements.

** Q-5  What is UseReducer Hook ?
It does very similiar to setState, It's a different way to manage state using Redux Pattern. Instead of updating the state directly, we dispatch actions, that go to a reducer function, and this function figure out, how to compute the next state.
Syntax
const [state, dispatch] = useReducer(reducer, initialstate)
state - Name of your state variable
dispatch - if i want to change the state variable, we need dispatch function. has one parameter action.
reducer - it is a function, that accept currect state and action we want to perform.
initialstate - The initial value of state

Q-6 Difference between useEffect and useContext ?
useEffect : useEffect is used to handle side effects in functional components. Side effects are actions that are not directly related to rendering the component, such as data fetching, subscribing to a WebSocket, manipulating the DOM, etc. This hook allows you to perform these side effects after the component has rendered or when certain dependencies have changed.
useContext : useContext is used to consume data from the React context API within functional components. Context provides a way to share data, like a global state, between components without passing props through each level of the component tree. The useContext hook allows you to access the value of a context directly within a component.
so useEffect is for managing side effects and performing actions after rendering. and useContext is for consuming data fron the context API and accessing global state within a component.
Day - 5
Q1. High Order Component in react js?
A Higher-Order Component is a function that takes a component and returns a new component with additional props and behavior. In other words, it's a way to wrap a component with some logic to enhance or modify its functionality.
Higher-order components (HOCs) are a powerful feature of React that allow you to reuse component logic across multiple components. A HOC is a function that takes a component as an argument and returns a new component that wraps the original component. The new component can add additional functionality to the original component without modifying its code.
Why use HOCs in React?
HOCs provide a way to reuse component logic and share code between different parts of your application. They help in abstracting complex logic and make components more focused on their main task.
Some common use cases for HOCs include:
Code Reuse: HOCs allow you to extract and reuse common code, such as data fetching or authentication logic, across multiple components.
Props Manipulation: You can add, modify, or filter props passed to a component.
State Management: HOCs can manage and pass down state to the wrapped components.
Conditional Rendering: You can control when and how a component renders based on certain conditions.
Q2. What are React Life cycles Explain each one with Example?
Mounting:

constructor()
The constructor is called when an instance of a component is being created and initialized.
It's used to set the initial state to the component.
Super()
The super() keyword in React is used to call the constructor of the parent class. This is required when you need to access some variables from the parent class. The reason why this cannot be allowed before super() is because this is uninitialized if super() is not called.
render()
The render method returns the JSX to be displayed on the screen.
It must be a pure function, meaning it should not have side effects.
componentDidMount()
This method is called after the component is rendered on the screen.
It's often used to perform tasks like making API requests or setting up subscriptions.
Updating

componentDidUpdate(prevProps, prevState)
This method is called after the component is updated.
It's useful for reacting to changes in props or state.
Be careful not to create infinite loops by updating state within this method.
Unmounting

componentWillUnmount()
This method is called just before the component is removed from the DOM.
It's used to clean up resources like subscriptions and timers.
this

The this keyword in React refers to the current instance of a component class. It allows you to access the component's props, state, and methods within its class definition.
Q3. What is memory leak and how to overcome?
A memory leak is a type of resource leak that occurs when a computer program incorrectly manages memory allocations in a way that memory that is no longer needed is not released. This can lead to performance issues, as the application's memory footprint continuously increases over time.

Causes of memory leaks in React

Event listeners: If you attach event listeners to elements within your React components, but fail to remove them when the component unmounts, it can lead to memory leaks. This is because the event listeners will continue to hold a reference to the component, preventing it from being garbage collected.
Subscription-based APIs: If you're using subscription-based APIs, such as WebSocket connections or observables, it's crucial to unsubscribe or close these subscriptions when they're no longer needed. Otherwise, the subscriptions will continue to hold a reference to the component, preventing it from being garbage collected.
Closures: Closures can also lead to memory leaks if they are not properly managed. For example, if you create a closure that contains a reference to a component, and then that closure is stored outside of the component's lifecycle, the component will not be able to be garbage collected.
How to overcome memory leaks in React

Always remove event listeners when components unmount: You can do this in the componentWillUnmount lifecycle method for class components, or in the cleanup function returned by the useEffect hook for function components.
Always unsubscribe from subscription-based APIs when they're no longer needed: You can do this by calling the unsubscribe() method on the subscription object.
Be careful with closures: Make sure that closures that contain references to components are only stored within the component's lifecycle.
some additional tips for preventing memory leaks in react.

Use the useEffect hook to manage cleanup logic.
Use React.createRef() to create refs to DOM elements and other objects.
Use the React.memo() function to memoize components, which can help to avoid re-rendering components that don't need to be re-rendered.
Use a memory profiling tool to identify and fix memory leaks.
Q4. Do you know about redux?
Redux is a state management library often used with React, although it can be used with other JavaScript frameworks or libraries as well. It helps you manage the state of your application in a predictable and centralized way. I'll provide you with detailed notes and runnable examples to help you understand Redux better.

Redux stores the state of your application in a single object tree. The state tree is immutable, meaning that it cannot be changed directly. Instead, changes to the state tree are made by dispatching actions. Actions are plain JavaScript objects that describe what happened in your application.

When an action is dispatched, a reducer function is called to calculate the new state of the application. Reducer functions are pure functions, meaning that they always return the same output for the same input. This ensures that the state tree is always consistent.

Redux Basics

Store: The store holds the current state of your application. You can think of it as a JavaScript object that contains all the data you need for your app.
Actions: Actions are plain JavaScript objects that describe the type of change you want to make to your state. For example, you might have an action like ADD_TODO to add a new to-do item.
Reducers: Reducers are pure functions that specify how the application's state changes in response to actions. They take the current state and an action as parameters and return the new state.
Dispatch: To update the state, you dispatch actions to the store using store.dispatch(action). This triggers a state change.