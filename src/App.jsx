// App.js or a layout component
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import "./index.css"

function App() {
  return (
    <div>
    <Routes>
      <Route path="/" Component={Home}/>
      <Route path="/about" Component={About}/>
    </Routes>
    </div>
  );
}

export default App;
