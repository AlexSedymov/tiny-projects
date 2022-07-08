import React from 'react';
import './App.css';
import Navbar from './components/navbar';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import About from './routes/about';
import WoodApiData from './components/wood-api-data'
import WoodApiDetail from './components/wood-api-detail';
import ErrorPage from './components/error-page';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
          <BrowserRouter>
              <Navbar></Navbar>
              <Routes>
                  <Route path='/'/>
                  <Route path='/about' element={<About />}/>
                  <Route path='/wood-api' element={<WoodApiData />}/>
                  <Route path={'/wood-api/:id'} element={<WoodApiDetail/>}/>
                  <Route path={'*'} element={<ErrorPage/>}></Route>
              </Routes>
          </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
