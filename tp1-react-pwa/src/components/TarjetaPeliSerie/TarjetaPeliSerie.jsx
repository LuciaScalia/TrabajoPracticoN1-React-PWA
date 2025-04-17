import Button from '../Button/Button.jsx';
import './styles.css';

const TarjetaPeliSerie = ({posterUrl, titulo, director, anio, genero, rating, tipo, estadoDeVista, eliminarTarjeta}) => {
    const eliminar = () =>  {
        //console.log(eliminarTarjeta);
        console.log(eliminarTarjeta(titulo, director));
    };

    return <div className='PeliSerie'>
        <img src={posterUrl} alt={titulo} className='poster'></img>
        <p>Titulo: {titulo}</p>
        <p>Director: {director}</p> 
        <p>Anio: {anio}</p> 
        <p>Genero: {genero}</p>
        <p>Rating: {rating}</p>
        <p>Tipo: {tipo}</p>
        <p>Estado: {estadoDeVista ? 'Vista' : "No vista"}</p>
        <div>
            <Button texto="Editar"/>
            <Button texto="Eliminar" onClick={eliminar}/>
        </div>
    </div>
}

export default TarjetaPeliSerie;
