import logo from './logo.svg';
import './App.css';
import Navbar from './COMPNENTS/Navbar';
import TextForm from './COMPNENTS/TextForm';
import About from './COMPNENTS/About';
function App() {
  return (
    <>
      <Navbar title="textutils" about="about" />
      <div className="container  my-3">
        <TextForm heading="ENTER THE HEADING" />
        {/* <About/> */}
      </div>

    </>
  );
}

export default App;