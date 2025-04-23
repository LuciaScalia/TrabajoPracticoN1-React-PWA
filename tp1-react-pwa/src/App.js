import Home from './pages/Home/home.jsx';
import './App.css';

const peliculasIniciales = [
  {
    id: 1,
    posterUrl: "https://pics.filmaffinity.com/MaXXXine-184829301-large.jpg",
    titulo: "MaXXXine",
    director: "Ti West",
    anio: 2015,
    genero: "Terror",
    rating: 3,
    tipo: "Pelicula",
    estadoDeVista: true,
  },
  {
    id: 2,
    posterUrl: "https://m.media-amazon.com/images/M/MV5BNzZlN2VkOTItYzg1Ni00YmU3LWI1OTEtYzQzNTQ3ZTlhNzVkXkEyXkFqcGc@._V1_.jpg",
    titulo: "Monster",
    director: "Hirokazu Koreeda",
    anio: 2023,
    genero: "Suspenso",
    rating: 4,
    tipo: "Pelicula",
    estadoDeVista: false,
  },
  {
    id: 3,
    posterUrl: "https://m.media-amazon.com/images/I/61-gso3DzJL._AC_UF894,1000_QL80_.jpg",
    titulo: "Zootopia",
    director: "Rich Moore",
    anio: 2016,
    genero: "Comedia",
    rating: 5,
    tipo: "Pelicula",
    estadoDeVista: false,
  }
];

function App() {
  return <Home peliculasIniciales={peliculasIniciales}/>;
}

export default App;