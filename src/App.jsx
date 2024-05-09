import { useState } from "react";
import "./App.css";
import { API_KEY } from "./constantes";
import { Formulario } from "./components/Form";
import { Movies } from "./components/Movies";

function App() {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const handleClick = async (event) => {
    event.preventDefault();
    const newSearchValue = document.getElementById("peli").value;

    if (newSearchValue === searchValue) return;

    const newMovies = await fetch(`${API_KEY}s=${newSearchValue}`).then((res) =>
      res.json()
    );

    setSearchValue(newSearchValue);
    console.log(newMovies);
    setMovies(newMovies.Search);
  };

  return (
    <div className="page">
      <header>
        <h1 className="titulo">Buscador de peliculas</h1>
        <Formulario handleClick={handleClick} />
      </header>

      <main className="grid">{movies && <Movies movies={movies} />}</main>
    </div>
  );
}

export default App;
