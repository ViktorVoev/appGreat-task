import React from 'react';
import './App.css';
import Login from './Login/googleLogin';
import Card from './card';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Cards from './cards';
import Header from './Login/header';
import { logDOM } from '@testing-library/react';


class App extends React.Component{

  render(){
    return (
      <BrowserRouter>
      
      <div className="App">
        <Header />
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/cards' element={<Cards />} />
          <Route path='/card/:id' element={<Card />} />
        </Routes>
    </div>
    </BrowserRouter>
    )
  } 
  
}

export default App;
