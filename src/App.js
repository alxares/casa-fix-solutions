import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import SolicitarServicio from './components/SolicitarServicio';
import OfrecerServicio from './components/OfrecerServicio';
import Footer from './components/footer';
import ImageCarousel from './components/ImageCarousel';
import Navbar from './components/Navbar';
import Servicios from './components/Servicios';
import WhatsAppButton from './components/WhatsAppButton';


function App() {
  return (
    <div className="App">
      <Navbar />
      <header className="App-header">
        <h1>Casa Fix Solutions</h1>
        <p>Servicios Integrales para el hogar</p>
       
      </header>
      <Servicios />
      <ImageCarousel /> {/* Agregamos el componente del carrusel de imágenes aquí */}
      <div className='button-container'>
          <button onClick={() => window.location.href = '/solicitar-servicio'}>Quiero solicitar un servicio</button>
          <button onClick={() => window.location.href = '/ofrecer-servicio'}>Quiero ofrecer mi servicio</button>
        </div>
      <Routes>
        <Route path="/solicitar-servicio" element={<SolicitarServicio />} />
        <Route path="/ofrecer-servicio" element={<OfrecerServicio />} />
      </Routes>
      <aside>
      <WhatsAppButton />
      </aside>
      <Footer />
      
    </div>
  );
}

export default App;
