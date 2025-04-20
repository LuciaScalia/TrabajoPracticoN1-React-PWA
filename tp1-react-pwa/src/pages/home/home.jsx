import TarjetaPeliSerie from '../../components/TarjetaPeliSerie/TarjetaPeliSerie.jsx';
import ItemForm from '../../components/ItemForm/ItemForm.jsx';
import Filtre from '../../components/Filtre/Filtre.jsx';
import { useEffect, useState } from 'react';


function Home({ peliculasIniciales }) {
  const [tarjetas, setTarjetas] = useState(() => {
    const tarjetasLocal = localStorage.getItem("tarjetas");
    return tarjetasLocal ? JSON.parse(tarjetasLocal) || peliculasIniciales : peliculasIniciales;
  });

  const [tipo, setTipo] = useState("Todos");
  const [genero, setGenero] = useState("Todos");
  const [orden, setOrden] = useState("Anio");
  const [ascdesc, setAscDesc] = useState("Ascendente");
  const [busqueda, setBusqueda] = useState("");
  const [filtroVista, setFiltroVista] = useState(null);
  const [tarjetaEditando, setTarjetaEditando] = useState(null);
  const [mostrarFormulario, setMostrarFormulario] = useState(false);

  useEffect(() => {
    localStorage.setItem("tarjetas", JSON.stringify(tarjetas));
  }, [tarjetas]);

  const tarjetasFiltroOrden = tarjetas.filter((tarjeta) =>
    (tipo === "Todos" || tarjeta.tipo === tipo) &&
    (genero === "Todos" || tarjeta.genero === genero) &&
    (tarjeta.titulo.toLowerCase().includes(busqueda.toLowerCase()) || tarjeta.director.toLowerCase().includes(busqueda.toLowerCase())) &&
    (filtroVista === null || tarjeta.estadoDeVista === filtroVista)
  ).sort((a, b) =>
    orden === "Anio"
      ? (ascdesc === "Ascendente" ? a.anio - b.anio : b.anio - a.anio)
      : (ascdesc === "Ascendente" ? a.rating - b.rating : b.rating - a.rating)
  );

  const mostrarFormularioEnApp = () => { setMostrarFormulario(!mostrarFormulario); }
  const eliminarTarjeta = (id) => setTarjetas(tarjetas.filter((tarjeta) => tarjeta.id !== id));
  const agregarTarjeta = (nuevaTarjeta) => setTarjetas([...tarjetas, { ...nuevaTarjeta, id: tarjetas.length + 1 }]);

  const iniciarEdicionTarjeta = (tarjeta) => {
    setTarjetaEditando(tarjeta);
  };

  const editarTarjeta = (tarjetaEditada) => {
    setTarjetas(tarjetas.map((tarjeta) =>
      tarjeta.id === tarjetaEditada.id ? tarjetaEditada : tarjeta
    ));
    setTarjetaEditando(null);
  };

  return (
    <div className="Home">
      <header className="App-header">
        <Filtre {...{ tipo, setTipo, genero, setGenero, orden, setOrden, ascdesc, setAscDesc }} />
        <input type='text' placeholder='Busqueda' value={busqueda} onChange={(e) => setBusqueda(e.target.value)} />

        <div>
          <button onClick={() => setFiltroVista(true)}>Vistas</button>
          <button onClick={() => setFiltroVista(false)}>No vistas</button>
          <button onClick={() => setFiltroVista(null)}>Mostrar todas</button>
          <button onClick={() => setMostrarFormulario(!mostrarFormulario)}>Agregar</button>
        </div>

        <br/><label>{tarjetasFiltroOrden.length > 0 ? "- Resultados " + tarjetasFiltroOrden.length + " -" : ""}</label><br/>
       
        <div className="tarjetas-grid">
          {tarjetasFiltroOrden.length>0? ( tarjetasFiltroOrden.map((tarjeta) => (
            <TarjetaPeliSerie key={tarjeta.id} {...tarjeta} eliminarTarjeta={() => eliminarTarjeta(tarjeta.id)} 
            iniciarEdicionTarjeta={() => iniciarEdicionTarjeta(tarjeta)}
            mostrarFormularioEnApp={mostrarFormularioEnApp} />
          ))
        ):(<p>No se encontraron resultados.</p>
        )}
        </div>

        <div>
          {mostrarFormulario && 
          <ItemForm 
          agregarTarjeta={agregarTarjeta} 
          editarTarjeta={editarTarjeta} 
          tarjetaEditando={tarjetaEditando}
          mostrarFormularioEnApp={mostrarFormularioEnApp}
          />
        }
        </div>
      </header>
    </div>
  );
}

export default Home;