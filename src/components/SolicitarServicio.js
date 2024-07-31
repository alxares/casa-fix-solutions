// src/components/SolicitarServicio.js
import React from 'react';

const SolicitarServicio = () => {
  return (
    <div>
      <h2>Solicitar Servicio</h2>
      <form>
        <label>
          Nombre:
          <input type="text" name="name" />
        </label>
        <br />
        <label>
          Servicio requerido:
          <input type="text" name="service" />
        </label>
        <br />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default SolicitarServicio;
