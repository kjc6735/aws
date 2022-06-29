import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Problems from './pages/Problem';
import { QueryClient, QueryClientProvider } from 'react-query';
import MainPage from './pages/Main';


function App() {
  return (
    <Routes>
        <div>test</div>
        <Route path='/' element={<MainPage />} />
        <Route path='/problems' element={<MainPage />} />
        <Route path='/problems/:id' element={<Problems/>} />
      </Routes>
  );
}

export default App;
