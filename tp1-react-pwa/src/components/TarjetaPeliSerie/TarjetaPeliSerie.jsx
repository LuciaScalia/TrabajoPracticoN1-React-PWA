import Button from '../button/button';
import './styles.css';

const TarjetaPeliSerie = ({ id, posterUrl, titulo, director, anio, genero, rating, tipo, estadoDeVista, eliminarTarjeta }) => {
  const eliminar = () => {
    eliminarTarjeta(id);
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
        <Button texto="Editar"/>
        <Button texto="Eliminar" onClick={eliminar}/>
      </div>
    </div>
  );
}

export default TarjetaPeliSerie;