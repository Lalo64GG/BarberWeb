import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App';
import Login from './components/Organims/Login';
import './index.css';
import { Barbers } from './components/Organims/Barbers';
import { Perfil } from './components/Organims/Perfil';
import { MyBarber } from './components/Organims/MyBarber';
import { Register } from './components/Organims/Register';
const root = document.getElementById('root');

const router = (
  <Router>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path='/register' element={ <Register/> } />
      <Route path='/home' element={ <Barbers/> } />
      <Route path='/perfil' element = { <Perfil/> }/>
      <Route path='/mi-barberia' element = {<MyBarber/> }/>
    </Routes>
  </Router>
);

ReactDOM.createRoot(root).render(router);
