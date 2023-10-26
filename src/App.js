
import React from 'react';
//import Counter from './Day-1/Counter';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import Home from './Day 2/Routes/Home';
import Student from './Day 2/Routes/Student';
import Contact from './Day 2/Routes/Contact';
import About from './Day 2/Routes/About';
//import ClassChildCompo from './Day 2/props/ClassChildCompo';
//import ClassParentCompo from './Day 2/props/ClassParentCompo';


function App() {
  return (
    <>
    {/* <Counter /> */}
    {/* <ClassChildCompo/> */}
    {/* <ClassParentCompo/> */}
    <BrowserRouter>
    <NavLink to="/">Home ||</NavLink>
    <NavLink to="/About">About</NavLink>
    <NavLink to="/Contact">Contact</NavLink>
    <NavLink to="/Student">Student</NavLink>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/Student" element={<Student/>}/>
      <Route path="/Contact" element={<Contact/>}/>
      <Route path="/About" element={<About/>}/>
    </Routes>
        </BrowserRouter>
    </>
//     <>
//     <BrowserRouter>
//         <nav>
//           <ul>
//             <li>
//               <Link to="/">Home</Link>
//             </li>
//             <li>
//               <Link to="/student/1">Student</Link>
//             </li>
//             <li>
//               <Link to="/contact">Contact</Link>
//             </li>
//             <li>
//               <Link to="/about">About</Link>
//             </li>
//           </ul>
//         </nav>
//       <Routes>
//       <Route path="/student/:id" component={Student} />
//       <Route path="/contact" component={Contact} />
//       <Route path="/about" component={About} />
//       <Route path="/" exact component={Home} />
//       </Routes>
//     </BrowserRouter>
//     <>
  );
}

export default App;
