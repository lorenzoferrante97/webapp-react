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

  // input -> onChange
  const [formData, setFormData] = useState({ name: "", vote: 0, text: "" });

  const handleMultiInput = e => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const value = { movies, movie, fetchMovies, fetchMovie, handleMultiInput };

  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
};

const useGlobalContext = () => useContext(GlobalContext);

export { GlobalProvider, useGlobalContext };
