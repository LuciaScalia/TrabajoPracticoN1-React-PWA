const Filtre = ({
    genero, setGenero,
    tipo, setTipo,
    orden, setOrden,
    ascdesc, setAscDesc

}) => {
    return (
        <div>
            <label htmlFor="seccionGenero">Genero: </label>
            <select id="seccionGenero" value={genero} onChange={(e)=>{setGenero(e.target.value);}}>
                <option value="Todos">Todos</option>
                <option value="Accion">Accion</option>
                <option value="Comedia">Comedia</option>
                <option value="Romance">Romance</option>
                <option value="Thriller">Suspenso</option>   
                <option value="Terror">Terror</option>   
            </select>
            
            <label htmlFor="seccionTipo">Tipo: </label>
            <select id="seccionTipo" value={tipo} onChange={(e)=>{console.log("Tipo seleccionado:", e.target.value); setTipo(e.target.value);}}>
                <option value="Todos">Todos</option>
                <option value="Pelicula">Pelicula</option>
                <option value="Serie">Serie</option>
            </select>
           
            <label htmlFor="seccionOrden">Ordenar por: </label>
            <select id="seccionOrden" value={orden} onChange={(e)=>{console.log("orden:", e.target.value); setOrden(e.target.value);}}>
                <option value="Anio">Anio</option>
                <option value="Rating">Rating</option>
            </select>

            <label htmlFor="seccionAscDesc"> </label>
            <select id="seccionAscDesc" value={ascdesc} onChange={(e)=>{console.log("Tipo seleccionado:", e.target.value); setAscDesc(e.target.value);}}>
                <option value="Ascendente">Ascendente</option>
                <option value="Descendente">Descendente</option>
            </select>
        </div>
    )
}
export default Filtre;