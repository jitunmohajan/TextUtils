import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import Ab~out from './components/About';

function App() {
  return (
    <>
      <Navbar title="TextUtils" home="Home" about="About"/>
      <div className="container my-3">
        <TextForm heading="Enter the text"/>
        {/* <About/> */}

      </div>
    </>
  );
}

export default App;
