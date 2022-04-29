import './App.css';
import Header from './containers/header/Header';
import Home from './pages/home/Home';
import Contact from './pages/contact/Contact';

import {
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
