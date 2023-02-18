import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

import RouteTest from './components/RouteTest';

import Home from './pages/Home';
import Edit from './pages/Edit';
import Diary from './pages/Diary';
import New from './pages/New';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h2>dks</h2>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/new' element={<New />} />
          <Route path='/edit' element={<Edit />} />
          <Route path='/diary' element={<Diary />} />
        </Routes>
        <RouteTest />

      </div>
    </BrowserRouter>
  );
}

export default App;
