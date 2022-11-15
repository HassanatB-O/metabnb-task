import './App.css';
import Home from './components/Home';
import Places from './components/Places';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/places' element={<Places/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
