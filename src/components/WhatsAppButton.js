import React from 'react';
import './WhatsAppButton.css';

const WhatsAppButton = () => {
  return (
    <aside className="whatsapp-button">
      <a href="https://wa.me/595992608943" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-whatsapp"></i>
      </a>
    </aside>
  );
}

export default WhatsAppButton;
