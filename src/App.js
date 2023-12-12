import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './pages/Home';
import Shop from './pages/Shop';
import Contact from './pages/Contact';
import About from './pages/About';

function App() {
  return (
    <div>
<BrowserRouter>
{/* header + navbar */}
<Routes>
<Route path="/" element={<Home />}/>
<Route path="/shop" element={<Shop />}/>
<Route path="/contact" element={<Contact />}/>
<Route path="/about" element={<About />}/>
</Routes>
</BrowserRouter>
    </div>
  );
}

export default App;
