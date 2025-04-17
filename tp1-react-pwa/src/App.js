//import Button from './components/Button/Button.jsx';
import TarjetaPeliSerie from './components/TarjetaPeliSerie/TarjetaPeliSerie.jsx';
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
  tipo:"Pelicula",
  estadoDeVista:false
}

const tarjetasPeliSerie = [pelicula1, pelicula2];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          {tarjetasPeliSerie.map((tarjeta)=> {
            return <TarjetaPeliSerie posterUrl={tarjeta.posterUrl}
                                     titulo={tarjeta.titulo}
                                     director={tarjeta.director}
                                     anio={tarjeta.anio}
                                     genero={tarjeta.genero}
                                     rating={tarjeta.rating}
                                     tipo={tarjeta.tipo}
                                     estadoDeVista={tarjeta.estadoDeVista}
            />
          })}
        </div>
      </header>
    </div>
  );
}

export default App;
