import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './pages/Home';

function App() {
  return (
    <div>
<BrowserRouter>
{/* header + navbar */}
<Routes>
<Route path="/" element={<Home />}/>
</Routes>
</BrowserRouter>
    </div>
  );
}

export default App;
