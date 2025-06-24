import React from 'react';
import LoginPage from './LoginPage';
import Landing from './landing';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Routes>
            <Route path="/" element={<LoginPage/>}/>
            <Route path="/Landing" element={<Landing/>}/>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
    
  );  
}

export default App;
