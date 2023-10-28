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
|props can be accessed by child components| | state can not be accessed by child component|
|props are immutable| |state are mutable|
|props are similar to function parameters| |state is used for managing data that is specific to a component|


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

## Q-7 




