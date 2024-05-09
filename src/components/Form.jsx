export const Formulario = ({ handleClick }) => {
  return (
    <form>
      <input
        id="peli"
        placeholder="Introduce el nombre de una pelicula"
        autoComplete="off"
        onChange={handleClick}
      />
      <button onClick={(event) => handleClick(event)}>Buscar</button>
    </form>
  );
};
