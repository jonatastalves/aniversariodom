// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoadingVideo from './LoadingVideo';
import MusicPlayer from './MusicPlayer';
import Home from './home';
import Principal from './Pages/Principal';
import RedirectToExternal from './RedirectToExternal';  
import './App.css';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulação de um processo de carregamento
    setTimeout(() => {
      setLoading(false); // Após 8 segundos, define loading como false
    }, 8000);
  }, []);

  return (
    <Router>

    <div className="App">
      <MusicPlayer />
      {loading ? (
        <LoadingVideo />
      ) : (
        <div className="content">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/festa' element={<Principal  />} />
            <Route path='/local' element={<Principal  />} />
            <Route path='/presentes' element={<Principal  />} />
            <Route path='/confirmar' element={<RedirectToExternal url="https://forms.gle/emBpkXFQLa2AbfoH8" />} />

          </Routes>
        </div>
            
      )}
    </div>

    </Router>
  );
}

export default App;
