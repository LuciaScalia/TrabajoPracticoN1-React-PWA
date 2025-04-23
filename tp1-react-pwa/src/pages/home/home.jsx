import TarjetaPeliSerie from '../../components/TarjetaPeliSerie/TarjetaPeliSerie.jsx';
import ItemForm from '../../components/ItemForm/ItemForm.jsx';
import Filtre from '../../components/Filtre/Filtre.jsx';
import Title from '../../components/title/title.jsx';
import ConfirmModal from '../../components/ConfirmModal/ConfirmModal.jsx';
import { useEffect, useState } from 'react';
import './styles.css';


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
  const [modal, setModal] = useState({ visible: false, mensaje: '', onConfirmar: null });

  const esconderModalConfirmacion = () => {
    setModal({ visible: false, mensaje: '', onConfirmar: null });
    setTarjetaEditando(null);
  }

  useEffect(() => {
    localStorage.setItem("tarjetas", JSON.stringify(tarjetas));
  }, [tarjetas]);

  const pedirConfirmacion = (mensaje, callback) => {
    setModal({
      visible: true,
      mensaje,
      onConfirmar: () => {
        callback();
        setModal({ visible: false, mensaje: '', onConfirmar: null });
      }
    });
  };

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
  const agregarTarjeta = (nuevaTarjeta) => {
    pedirConfirmacion("¿Seguro que desea agregar este ítem?", () => {
      setTarjetas([...tarjetas, { ...nuevaTarjeta, id: tarjetas.length + 1 }]);
    });
  };

  const iniciarEdicionTarjeta = (tarjeta) => {
    setTarjetaEditando(tarjeta);
  };

  const editarTarjeta = (tarjetaEditada) => {
    pedirConfirmacion("¿Desea guardar los cambios?", () => {
      setTarjetas(tarjetas.map((tarjeta) =>
        tarjeta.id === tarjetaEditada.id ? tarjetaEditada : tarjeta
      ));
      setTarjetaEditando(null);
    });
  };

  return (
    <>
      <header className="App-header">
        <nav className="navbar">
          <div>🎬</div>
          <input className="navbar-search" type="text" placeholder="Buscar por título o director..." value={busqueda} onChange={(e) => setBusqueda(e.target.value)} />
        </nav>
      </header>
      <div className="Home">

        <Title titulo="Gestor de Peliculas y Series" />

        <div>
          <button onClick={() => setFiltroVista(true)}>Vistas</button>
          <button onClick={() => setFiltroVista(false)}>No vistas</button>
          <button onClick={() => setFiltroVista(null)}>Mostrar todas</button>
          <button className='Agregar' onClick={mostrarFormularioEnApp}>Agregar</button>
        </div><br />

        <label>{tarjetasFiltroOrden.length > 0 ? "- Resultados (" + tarjetasFiltroOrden.length + ") -" : ""}</label>
        <div className="contenido-principal">
          <div className="tarjetas-grid">
            {tarjetasFiltroOrden.length > 0 ? (
              tarjetasFiltroOrden.map((tarjeta) => (
                <TarjetaPeliSerie key={tarjeta.id} {...tarjeta}
                  eliminarTarjeta={() => pedirConfirmacion("¿Desea eliminar este ítem?", () => eliminarTarjeta(tarjeta.id))}
                  iniciarEdicionTarjeta={() => iniciarEdicionTarjeta(tarjeta)}
                  mostrarFormularioEnApp={mostrarFormularioEnApp} />
              ))
            ) : (<p id= "mensaje">No se encontraron resultados</p>
            )}
          </div>
          <div className="filtros-panel" >
            <Filtre {...{ tipo, setTipo, genero, setGenero, orden, setOrden, ascdesc, setAscDesc }} />
          </div>
        </div>

        {mostrarFormulario && (
          <div className="itemFormHome">
            <ItemForm
              agregarTarjeta={agregarTarjeta}
              editarTarjeta={editarTarjeta}
              tarjetaEditando={tarjetaEditando}
              mostrarFormularioEnApp={mostrarFormularioEnApp}
              esconderModalConfirmacion={esconderModalConfirmacion}
            />
          </div>
        )}

        {modal.visible && (
          <ConfirmModal
            mensaje={modal.mensaje}
            onConfirmar={modal.onConfirmar}
            onCancelar={() => setModal({ visible: false, mensaje: '', onConfirmar: null })}
          />
        )}
      </div>
    </>
  );
}

export default Home;