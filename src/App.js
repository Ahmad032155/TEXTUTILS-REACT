//import logo from './logo.svg';
//import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, {useState} from 'react'
//import About from './components/About';
//import {
 // BrowserRouter as Router,
  //Routes,
  //Route,
  //Link
//} from "react-router-dom";
function App() {
  
  const [darkmode,setdarkmode] = useState("light")

  let togglemode = () => {
    if (darkmode==='light') {
      setdarkmode('dark')
      document.body.style.backgroundColor = '#042743'
    } else {
      setdarkmode('light')
      document.body.style.backgroundColor = 'white'
    }
  }

  return (
    <>
    {/*<Router>*/}
    <Navbar mode={darkmode} togglemode={togglemode}/>
    <div className="container">
    {/*<Routes>
          <Route path="/about" element={<About />}>
          </Route>
          <Route path="/" element={<TextForm mode={darkmode}/>}>
          </Route>
  </Routes>*/}
          {<TextForm mode={darkmode}/>}
    </div>
    {/*</Router>*/}
    </>
  );
}

export default App;
