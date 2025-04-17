import Button from './components/Button/Button.jsx';
import Tarjeta from './components/Tarjeta/Tarjeta.jsx';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div> {/*div donde tienen que aparecer las pelis/series*/}
          <Tarjeta
          fotoUrl={"https://pics.filmaffinity.com/MaXXXine-184829301-large.jpg"}
          titulo={"MaXXXine"}
          director={"Lucia"}
          anio={2015}
          genero={"Terror"}
          rating={4}
          tipo={"Pelicula"}/>
        </div>
        <Button texto="Aceptar"/>
      </header>
    </div>
  );
}

export default App;
