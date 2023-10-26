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
|---- | ----|
|JS Library | Mobile Framework|
|Use to build web application | use to build cross-plateform mobile application.|
|V-DOM render data on browser | Native API for mobile components rendering|
|create robust animation using CSS | Need to use API for create animation |

### H/W Q7. Difference b/w Stateful and stateless Component?

| Statfull| Stateless |
|----| ----- |
|statefull component are those components which have a state|  | A state is an object inside the constructor method of a class which is a must in the stateful component|
|It stores information about thecomponent’s state change in memory|  |It is used for internalcommunication inside a component|

|It may get changed depending upon the action of the component or child components|  |It allows you to createcomponents that are interactive and reusable|

### Q8. What do you know about NPM?
-NPM, which stands for "Node Package Manager," is a widely used package manager for JavaScript and Node.js applications. It is the default package manager that comes with Node.js. NPM serves several important functions in the JavaScript ecosystem Here is an overview of what NPM is and what it's used for:
  1. Package Management
  2. Dependency Management
  3. Command-Line Interface (CLI)
  4. Scripts
  5. Security
  6. Open Source and Community