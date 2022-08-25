import React, { useEffect, useState } from "react";
import '../App.css'

const Formulario = () => {

    const [dato, setDato] = useState([]);
    const [ciudad, setCiudad] = useState('');

    const urlClima = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=2469af9391e9810af6cd6231eaab30e5`;

    useEffect(() => {
      consultarClima();
    },[])

    const consultarClima = async (e) => {
      const respuesta = await fetch(urlClima);
      const dato = await respuesta.json();
      console.log(dato);
      setCiudad('');
    }

    
  return (
    <div className="formulario">
      <div className="busqueda">
        <input
         value={ciudad}
         onChange={(e) => setCiudad(e.target.value)}
         placeholder="Ingresa una Ciudad"
         type="text" />
         <button className="boton" onClick={consultarClima}>Buscar</button>
      </div>
      <section className="container">
        <div className="top">
          <div className="ubicacion">
            <p>{dato.name}</p>
          </div>
          <div className="temperatura">
            <h1>25°C</h1>
          </div>
          <div className="descripcion">
            <p>Nublado</p>
          </div>
        </div>
        <div className="bottom">
          <div className="sensacionTermica">
            <p className="bold">25°C</p>
            <p>Sensación Térmica</p>
          </div>
          <div className="humedad">
            <p className="bold">20%</p>
            <p>Humedad</p>
          </div>
          <div className="vientos">
            <p className="bold">3 km/h</p>
            <p>Velocidad</p>
          </div>
        </div>

      </section>
      
    </div>
  );
};

export default Formulario;
