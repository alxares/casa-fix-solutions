// src/components/OfrecerServicio.js
import React from 'react';

const OfrecerServicio = () => {
  return (
    <div>
      <h2>Ofrecer Servicio</h2>
      <form>
        <label>
          Nombre:
          <input type="text" name="name" />
        </label>
        <br />
        <label>
          Tipo de servicio ofrecido:
          <input type="text" name="service" />
        </label>
        <br />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default OfrecerServicio;
