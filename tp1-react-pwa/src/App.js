//import Button from './components/Button/Button.jsx';
//useEffect
import TarjetaPeliSerie from './components/TarjetaPeliSerie/TarjetaPeliSerie.jsx';
import {useEffect, useState} from "react";
import Filtre from './components/Filtre/Filtre.jsx';
import './App.css';

const pelicula1 = {
  posterUrl:"https://pics.filmaffinity.com/MaXXXine-184829301-large.jpg",
  titulo:"MaXXXine",
  director:"Ti West",
  anio:2015,
  genero:"Terror",
  rating:3,
  tipo:"Pelicula",
  estadoDeVista:true
}
const pelicula2 = {
  posterUrl:"https://m.media-amazon.com/images/M/MV5BNzZlN2VkOTItYzg1Ni00YmU3LWI1OTEtYzQzNTQ3ZTlhNzVkXkEyXkFqcGc@._V1_.jpg",
  titulo:"Monster",
  director:"Hirokazu Koreeda",
  anio: 2023,
  genero:"Thriller",
  rating:4,
  tipo:"Serie",
  estadoDeVista:false
}
const pelicula3 = {
  posterUrl:"https://images.cdn1.buscalibre.com/fit-in/360x360/14/84/14848f6eaee7dc12d16486036f9e9ef4.jpg",
  titulo:"Zootopia",
  director:"Rich Moore",
  anio: 2016,
  genero:"Comedia",
  rating:5,
  tipo:"Pelicula",
  estadoDeVista:false
}

function App() {
  const [tarjetas, setTarjetas] = useState(() => {
    const tarjetasLocal = localStorage.getItem("tarjetas");
    return tarjetasLocal ? JSON.parse(tarjetasLocal) : [pelicula1,pelicula2,pelicula3];
  });
  
  const [tipo, setTipo] = useState ("Todos");
  const [genero, setGenero] = useState("Todos");
  const [orden, setOrden] = useState("Anio");
  const [ascdesc, setAscDesc] = useState("Ascendente");
  const [busqueda, setBusqueda] = useState("");

  useEffect(()=>{
    localStorage.setItem("tarjetas", JSON.stringify(tarjetas));
  },[tarjetas]);

  const tarjetasFiltroOrden = tarjetas.filter((tarjeta)=>
  (tipo === "Todos" || tarjeta.tipo === tipo)&&
  (genero ==="Todos" || tarjeta.genero === genero)&&
  (tarjeta.titulo.toLocaleLowerCase().includes(busqueda.toLocaleLowerCase()) || tarjeta.director.toLocaleLowerCase().includes(busqueda.toLocaleLowerCase()))
  ).sort((a, b)=>
    orden ==="Anio"
    ? (ascdesc === "Ascendente"? a.anio -b.anio : b.anio - a.anio)
    : (ascdesc === "Ascendente"? a.rating - b.rating : b.rating - a.rating)
  );

  const eliminarTarjeta = (titulo, director) => {
    setTarjetas(tarjetas.filter((tarjeta) => tarjeta.titulo !== titulo && tarjeta.director !== director));
  };

  return (
    <div className="App">
      <header className="App-header">
        <Filtre tipo={tipo} setTipo={setTipo} genero={genero} setGenero={setGenero} orden={orden} setOrden={setOrden} ascdesc={ascdesc} setAscDesc={setAscDesc}/>
        <input type='text' placeholder='busqueda' value={busqueda} onChange={(e) => setBusqueda(e.target.value)}></input>
        <div>
          {tarjetasFiltroOrden.map((tarjeta)=> ( 
            <TarjetaPeliSerie     key={tarjeta.titulo} 
                                    posterUrl={tarjeta.posterUrl}
                                     titulo={tarjeta.titulo}
                                     director={tarjeta.director}
                                     anio={tarjeta.anio}
                                     genero={tarjeta.genero}
                                     rating={tarjeta.rating}
                                     tipo={tarjeta.tipo}
                                     estadoDeVista={tarjeta.estadoDeVista}
                                     eliminarTarjeta={eliminarTarjeta}
            />
          ))}
        </div>
      </header>
    </div>
  );
}

export default App;
