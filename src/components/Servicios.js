import React from 'react';
import './Servicios.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBroom, faTools, faFaucet, faSnowflake, faPaintRoller, faLeaf } from '@fortawesome/free-solid-svg-icons';

const Servicios = () => {
  return (
    <section className="servicios">
      <h2>Nuestros Servicios</h2>
      <div className="servicios-grid">
        <div className="servicio-item servicio-limpieza">
          <FontAwesomeIcon icon={faBroom} className="icono" />
          <h3>Servicios de Limpieza</h3>
          <p>Ofrecemos servicios de limpieza profunda para hogares y oficinas, asegurando un ambiente limpio y saludable.</p>
        </div>
        <div className="servicio-item servicio-reparaciones">
          <FontAwesomeIcon icon={faTools} className="icono" />
          <h3>Reparaciones en General</h3>
          <p>Realizamos todo tipo de reparaciones en el hogar, desde arreglos menores hasta renovaciones completas.</p>
        </div>
        <div className="servicio-item servicio-plomeria">
          <FontAwesomeIcon icon={faFaucet} className="icono" />
          <h3>Plomería</h3>
          <p>Servicios de plomería para reparar fugas, instalar tuberías nuevas y mantener tu sistema de agua en perfectas condiciones.</p>
        </div>
        <div className="servicio-item servicio-aire">
          <FontAwesomeIcon icon={faSnowflake} className="icono" />
          <h3>Instalación y Reparación de Aire Acondicionado</h3>
          <p>Instalamos y reparamos sistemas de aire acondicionado para asegurar un clima agradable en tu hogar o oficina.</p>
        </div>
        <div className="servicio-item servicio-pintura">
          <FontAwesomeIcon icon={faPaintRoller} className="icono" />
          <h3>Pintura</h3>
          <p>Servicios de pintura profesional para interiores y exteriores, con acabados de alta calidad.</p>
        </div>
        <div className="servicio-item servicio-jardineria">
          <FontAwesomeIcon icon={faLeaf} className="icono" />
          <h3>Jardinería</h3>
          <p>Servicios de jardinería para mantener y embellecer tus áreas verdes, incluyendo poda, plantación y mantenimiento.</p>
        </div>
      </div>
    </section>
  );
}

export default Servicios;
