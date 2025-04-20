import React, { useEffect, useState } from 'react';

function ItemForm({ agregarTarjeta, editarTarjeta, tarjetaEditando, mostrarFormularioEnApp }) {
  const accion = tarjetaEditando ? "Editar" + " " + tarjetaEditando.titulo : "Agregar";
  const [formData, setFormData] = useState(() => ({
    posterUrl: tarjetaEditando?.posterUrl || '',
    titulo: tarjetaEditando?.titulo || '',
    director: tarjetaEditando?.director || '',
    anio: tarjetaEditando?.anio || '',
    genero: tarjetaEditando?.genero || 'Todos',
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
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: name === 'estadoDeVista' ? e.target.checked : value,
    });
  };

  const formDataVacio =
  {
    posterUrl: '',
    titulo: '',
    director: '',
    anio: '',
    genero: 'Todos',
    rating: '',
    tipo: 'Pelicula',
  };

  const setValoresVacios = () => {
    editarTarjeta(formDataVacio);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (tarjetaEditando) {
      editarTarjeta(formData);
    } else {
      agregarTarjeta(formData);
    }
    setFormData({
      posterUrl: '',
      titulo: '',
      director: '',
      anio: '',
      genero: 'Todos',
      rating: '',
      tipo: 'Pelicula',
      estadoDeVista: false
    });
  };

  return (
    <form onSubmit={(e) => {handleSubmit(e); mostrarFormularioEnApp();}}>
      <label>{accion}</label><br/>
      <input name="posterUrl" type="text" placeholder="Poster URL" value={formData.posterUrl} onChange={handleChange} required />
      <input name="titulo" type="text" placeholder="Titulo" value={formData.titulo} onChange={handleChange} required />
      <input name="director" type="text" placeholder="Director" value={formData.director} onChange={handleChange} required />
      <input name="anio" type="number" placeholder="Año" value={formData.anio} onChange={handleChange} required />


      <label htmlFor="genero">Genero: </label>
      <select name="genero" id="genero" value={formData.genero} onChange={handleChange}>
        <option value="Todos">Todos</option>
        <option value="Accion">Accion</option>
        <option value="Comedia">Comedia</option>
        <option value="Romance">Romance</option>
        <option value="Thriller">Suspenso</option>
        <option value="Terror">Terror</option>
      </select>


      <label htmlFor="tipo">Tipo: </label>
      <select name="tipo" id="tipo" value={formData.tipo} onChange={handleChange}>
        <option value="Pelicula">Pelicula</option>
        <option value="Serie">Serie</option>
      </select>

      <input name="rating" type="number" placeholder="Rating" value={formData.rating} onChange={handleChange} required />
      <label>
        Estado de Vista:
        <input name="estadoDeVista" type="checkbox" checked={formData.estadoDeVista} onChange={handleChange} />
      </label>
      <div>
        <button type="button" onClick={() => {mostrarFormularioEnApp(); setValoresVacios();}}>Cancelar</button>
        <button type="submit">Confirmar</button>
      </div>
    </form>
  );
}

export default ItemForm;