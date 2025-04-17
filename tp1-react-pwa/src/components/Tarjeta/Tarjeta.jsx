const Tarjeta = ({fotoUrl, titulo, director, anio, genero, rating, tipo}) => {
    return <div>
        <img src={fotoUrl} alt={titulo}></img>
        <p>Titulo: {titulo}</p>
        <p>Director: {director}</p> 
        <p>Anio: {anio}</p> 
        <p>Genero: {genero}</p>
        <p>Rating: {rating}</p>
        <p>Tipo: {tipo}</p>
    </div>
}

export default Tarjeta;
