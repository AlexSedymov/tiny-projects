import React from 'react';
import './App.css';
import Navbar from "./components/navbar";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import About from "./routes/about";
// import Wood from "./routes/wood";
import WoodApi from "./routes/wood-api"

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <BrowserRouter>
              <Navbar></Navbar>
              <Routes>
                  <Route path="/about" element={<About />}>
                  </Route>
                  {/*<Route path="/hooks" element={<Wood />}>*/}
                  {/*</Route>*/}
                  <Route path="/wood-api" element={<WoodApi />}>
                  </Route>
              </Routes>
          </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
