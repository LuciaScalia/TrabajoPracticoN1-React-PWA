import Button from '../Button/Button.jsx';
import './styles.css';

const TarjetaPeliSerie = ({ id, posterUrl, titulo, director, anio, genero, rating, tipo, estadoDeVista, eliminarTarjeta, iniciarEdicionTarjeta, mostrarFormularioEnApp }) => {
  const eliminar = () => {
    eliminarTarjeta(id);
  };

  const iniciarEdicion = () => {
    iniciarEdicionTarjeta({ id, posterUrl, titulo, director, anio, genero, rating, tipo, estadoDeVista });
  };

  return (
    <div className='PeliSerie'>
      <img src={posterUrl} alt={titulo} className='poster'></img>
      <p>Titulo: {titulo}</p>
      <p>Director: {director}</p>
      <p>Año: {anio}</p>
      <p>Genero: {genero}</p>
      <p>Rating: {rating}</p>
      <p>Tipo: {tipo}</p>
      <p>Estado: {estadoDeVista ? 'Vista' : 'No vista'}</p>
      <div>
        <Button texto="Editar" onClick={() => { iniciarEdicion(); mostrarFormularioEnApp(); }} />
        <Button texto="Eliminar" onClick={eliminar} />
      </div>
    </div>
  );
};

export default TarjetaPeliSerie;