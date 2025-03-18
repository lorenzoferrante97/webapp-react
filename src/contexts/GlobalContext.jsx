import { createContext, useState, useContext } from "react";

const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);
  const [movie, setMovie] = useState({});

  // fetch movies
  const fetchMovies = () => {
    fetch("http://localhost:3000/movies")
      .then(response => response.json())
      .then(data => setMovies(data))
      .catch(error => {
        console.error(error);
      });
  };

  // fetch movie
  const fetchMovie = id => {
    fetch(`http://localhost:3000/movies/${id}`)
      .then(response => response.json())
      .then(data => setMovie(data))
      .catch(error => {
        console.error(error);
      });
  };

  const value = { movies, movie };

  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
};

const useGlobalContext = () => useContext(GlobalContext);

export { GlobalProvider, useGlobalContext };
