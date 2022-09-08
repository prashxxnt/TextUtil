import logo from './logo.svg';
import './App.css';
import Navbar from './COMPNENTS/Navbar';
import TextForm from './COMPNENTS/TextForm';
import About from './COMPNENTS/About';
import Alert from './COMPNENTS/Alert';
import React, { useState } from 'react'
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
      <Navbar title="textutils" about="about" />
      <Alert alert ={alert}/>
      <div className="container  my-3">
        <TextForm showAlert={showAlert} heading="ENTER THE HEADING" />

        {/* <About/> */}
      </div>

    </>
  );
}

export default App;