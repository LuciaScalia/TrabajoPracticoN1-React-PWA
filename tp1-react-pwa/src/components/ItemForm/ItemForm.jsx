import React, { useEffect, useState } from 'react';
import './ItemForm.module.css';

function ItemForm({ agregarTarjeta, editarTarjeta, tarjetaEditando, mostrarFormularioEnApp, esconderModalConfirmacion }) {
  const fecha = new Date();
  const accion = tarjetaEditando ? "Editar " + tarjetaEditando.titulo : "Agregar Tarjeta";
  const [formData, setFormData] = useState(() => ({
    posterUrl: tarjetaEditando?.posterUrl || '',
    titulo: tarjetaEditando?.titulo || '',
    director: tarjetaEditando?.director || '',
    anio: tarjetaEditando?.anio || '',
    genero: tarjetaEditando?.genero || 'Acción',
    rating: tarjetaEditando?.rating || '',
    tipo: tarjetaEditando?.tipo || 'Pelicula',
    estadoDeVista: tarjetaEditando?.estadoDeVista || false,
  }));

  //Pone los datos de tarjetaEditando
  useEffect(() => {
    if (tarjetaEditando) {
      setFormData(tarjetaEditando);
    }
  }, [tarjetaEditando]);

  const handleChange = (e) => {
    const { name, value, checked } = e.target;
    //console.log(name);
    //console.log(value);
    //console.log(checked);
    setFormData((prevFormData) => {
      //console.log(prevFormData)
        const formDataActualizada = {
            ...prevFormData,
            [name]: name === 'estadoDeVista' ? checked : value,
        };

        if (name === 'estadoDeVista' && !checked) {
            formDataActualizada.rating = "";
        }

        return formDataActualizada;
    });
  };

  const setValoresVacios = () => {
    editarTarjeta(null);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (tarjetaEditando) {
      editarTarjeta(formData);
    } else {
      agregarTarjeta(formData);
    }
    setFormData(null);
  };

  return (
    <div>
      <form onSubmit={(e) => {handleSubmit(e); mostrarFormularioEnApp();}}>
        <h4>{accion}</h4>
        <input name="posterUrl" type="text" placeholder="Poster URL" value={formData.posterUrl} onChange={handleChange} required />
        <input name="titulo" type="text" placeholder="Titulo" value={formData.titulo} onChange={handleChange} required />
        <input name="director" type="text" placeholder="Director" value={formData.director} onChange={handleChange} required />
        <input name="anio" type="number" placeholder="Año" min="1895" max={fecha.getFullYear()} value={formData.anio} onChange={handleChange} required />

        <label htmlFor="genero">Género:</label>
        <select name="genero" id="genero" value={formData.genero} onChange={handleChange}>
          <option value="Acción">Acción</option>
          <option value="Comedia">Comedia</option>
          <option value="Romance">Romance</option>
          <option value="Suspenso">Suspenso</option>
          <option value="Terror">Terror</option>
          <option value="Ciencia Ficción">Ciencia Ficción</option>
        </select>

        <label htmlFor="tipo">Tipo:</label>
        <select name="tipo" id="tipo" value={formData.tipo} onChange={handleChange}>
          <option value="Película">Película</option>
          <option value="Serie">Serie</option>
        </select>

        <label>Rating</label>
        <input name="rating" type="number" 
        placeholder={formData.estadoDeVista ? "Poner rating" : "Tiene que estar vista para poner rating"}
        disabled={!formData.estadoDeVista} 
        min="1" max="10" step="any" 
        value={formData.rating} 
        onChange={handleChange} 
        required />

        <label>Estado de Vista</label>
        <input name="estadoDeVista" type="checkbox" 
        checked={formData.estadoDeVista} 
        onChange={handleChange} />

        <div className="botonForm">
          <button type="button" onClick={() => {mostrarFormularioEnApp(); setValoresVacios(); esconderModalConfirmacion();}}>Cancelar</button>
          <button type="submit">Confirmar</button>
        </div>
      </form>
    </div>
  );
}

export default ItemForm;