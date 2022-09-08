import logo from './logo.svg';
import './App.css';
import Navbar from './COMPNENTS/Navbar';
import TextForm from './COMPNENTS/TextForm';
import About from './COMPNENTS/About';
import Alert from './COMPNENTS/Alert';
import React, { useState } from 'react'

import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const [alert, setAlert]=useState(null);

  const showAlert=(message,type)=> {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(()=>{
      setAlert(null);
    },2000);
  }
  return (
    <>
      <BrowserRouter>
      <Navbar title="textutils" about="about" />
      <Alert alert ={alert}/>
      <div className="container">
      <Routes>
        <Route path="/" element={ <TextForm showAlert={showAlert} heading="ENTER THE HEADING" />}  />
        <Route path="/About" element={<About/>} />
      </Routes>

      </div>
    </BrowserRouter>

      {/* <Navbar title="textutils" about="about" />
      <Alert alert ={alert}/> */}
      {/* <div className="container  my-3">
        <Routes>
          <Route path="/about">
            <about/>
          </Route>
          <Route path ="/">
            <TextForm showAlert={showAlert} heading="ENTER THE HEADING" />
          </Route> */}


        {/* </Routes> */}
        {/* <TextForm showAlert={showAlert} heading="ENTER THE HEADING" /> */}

        {/* <About/> */}
      {/* </div> */}
    </>
  );
}

export default App;