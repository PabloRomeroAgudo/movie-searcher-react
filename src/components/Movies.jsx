export const Movies = ({ movies }) => {
  return movies.map((movie) => {
    return (
      <section key={movie.imdbID} className="movie">
        <h1 className="titulo">{movie.Title}</h1>
        <p>{movie.Year}</p>
        <img
          className="poster"
          src={movie.Poster}
          alt={`Imagen de la pelicula ${movie.Title}`}
        />
      </section>
    );
  });
};
