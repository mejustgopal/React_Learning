import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  const [value, setvalue] = useState(0);
  return (
    <div className="App">
      <Navbar logoText = "Shriman narayan" />
      <div className='value'> {value}</div>
      <button onClick={() => { setvalue(value + 1) }}>CLick Me!</button>
      <Footer />
    </div>
  );
}

export default App;
