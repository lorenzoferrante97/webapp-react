import { createContext, useState, useContext } from "react";

const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);
  const [movie, setMovie] = useState({});

  // fetch movies
  const fetchMovies = isLoading => {
    setIsLoading(isLoading);

    fetch("http://localhost:3000/movies")
      .then(response => response.json())
      .then(data => setMovies(data))
      .catch(error => {
        console.error(error);
      })
      .then(() => setIsLoading(false));
  };

  // fetch movie
  const fetchMovie = (id, isLoading) => {
    setIsLoading(true);

    fetch(`http://localhost:3000/movies/${id}`)
      .then(response => response.json())
      .then(data => setMovie(data))
      .catch(error => {
        console.error(error);
      })
      .then(() => setIsLoading(false));
  };

  // fetch create review
  const [formResult, setFormResult] = useState(null);

  const fetchCreateReview = (formData, id) => {
    const { name, vote, text } = formData;
    fetch(`http://localhost:3000/movies/${id}/reviews`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ name: name, vote: vote, text: text })
    })
      .then(response => response.json())
      .then(data => console.log(data))
      .then(() => setFormResult("Recensione Inserita."))
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

  // form submit
  const handleSubmit = (e, formData, movieId) => {
    e.preventDefault();

    setIsFormValid(() => validateForm(formData));

    fetchCreateReview(formData, movieId);
    fetchMovie(movieId);
  };

  // validation

  const [isFormValid, setIsFormValid] = useState({ isValid: true, error: "" });

  const validateForm = formData => {
    const { name, vote, text } = formData;

    if (!name || name === "") {
      return { isValid: false, error: "Il campo 'Il tuo nome' è obbligatorio" };
    }
    return { isValid: true, error: "" };
  };

  //loader
  const [isLoading, setIsLoading] = useState(true);

  const value = {
    movies,
    movie,
    formData,
    formResult,
    isFormValid,
    isLoading,
    fetchMovies,
    fetchMovie,
    handleMultiInput,
    handleSubmit
  };

  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
};

const useGlobalContext = () => useContext(GlobalContext);

export { GlobalProvider, useGlobalContext };
