import React from 'react';
import './Footer.css';


const Footer = () => {
    const handleGmailClick = (event) => {
        event.preventDefault(); // Evita el comportamiento por defecto del enlace
    
        // Definir las dimensiones y posición de la ventana emergente
        const width = 600;
        const height = 700;
        const left = window.screenX + (window.outerWidth - width) / 2;
        const top = window.screenY + (window.outerHeight - height) / 2;
    
        // Abrir la ventana emergente con las dimensiones y posición especificadas
        window.open(
          'https://mail.google.com/mail/?view=cm&fs=1&to=scasafix@gmail.com',
          '_blank',
          `width=${width},height=${height},left=${left},top=${top},toolbar=no,scrollbars=no,resizable=no`
        );
      };
    
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <img src="/logo1.png" alt="Casa Fix Solutions Logo" />
        </div>
        <div className="footer-links">
          <h4>Enlaces de Interés</h4>
          <ul>
            <li><a href="#recomendaciones">Recomendaciones de seguridad</a></li>
            <li><a href="#privacidad">Política de privacidad</a></li>
            <li><a href="#cobranza">Bocas de cobranza</a></li>
            <li><a href="#" onClick={handleGmailClick}>Trabajá con nosotros</a></li>
          </ul>
          <button>Buzón de sugerencias</button>
        </div>
        <div className="footer-contact">
          <h4>Contactos</h4>
          <p>Teléfono: (0992) 608 943 (Llamadas y Whatsapp)</p>
          <p>Padre Palermo c/ Martín Rojas, San Lorenzo – Paraguay</p>
          <div className="footer-social">
            <a href="https://www.facebook.com/profile.php?id=61559116782166&mibextid=ZbWKwL" target='_blank' rel='noopener noreferrer'><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="https://wa.me/595992608943" target="_blank" rel="noopener noreferrer"><i className="fab fa-whatsapp"></i></a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        © COPYRIGHT 2024 – RESERVADOS TODOS LOS DERECHOS
      </div>
    </footer>
  );
};

export default Footer;
