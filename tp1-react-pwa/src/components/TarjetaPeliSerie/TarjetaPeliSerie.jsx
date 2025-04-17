import Button from '../Button/Button.jsx';
import './styles.css';

const TarjetaPeliSerie = ({posterUrl, titulo, director, anio, genero, rating, tipo, estadoDeVista}) => {
    return <div className='tarjetaPeliSerie'>
        <div>
            <img src={posterUrl} alt={titulo} className='poster'></img>
        </div>
        <p>Titulo: {titulo}</p>
        <p>Director: {director}</p> 
        <p>Anio: {anio}</p> 
        <p>Genero: {genero}</p>
        <p>Rating: {rating}</p>
        <p>Tipo: {tipo}</p>
        <p>Estado: {estadoDeVista ? 'Vista' : "No vista"}</p>
        <div>
            <Button texto="Editar"/>
            <Button texto="Eliminar"/>
        </div>
    </div>
}

export default TarjetaPeliSerie;
