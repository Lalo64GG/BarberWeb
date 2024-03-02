import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App';
import Login from './components/Organims/Login';
import './index.css';
import { Barbers } from './components/Organims/Barbers';
import { Perfil } from './components/Organims/Perfil';
const root = document.getElementById('root');

const router = (
  <Router>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path='/home' element={ <Barbers/> } />
      <Route path='/perfil' element = { <Perfil/> }/>
    </Routes>
  </Router>
);

ReactDOM.createRoot(root).render(router);
