import './App.css';
import Home from './components/Home';
import Places from './components/Places';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/places' element={<Places/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
