import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { GlobalProvider, useGlobalContext } from "../contexts/GlobalContext";

export default function Movie() {
  const { id } = useParams();

  const { movie, fetchMovie } = useGlobalContext();

  useEffect(() => {
    fetchMovie(id);
  });

  console.log("movie: ", movie);
  const { title } = movie;

  return (
    <>
      <main className='container-fluid py-10u min-h-screen max-w-[92%] bg-white'>
        <h1 className='font-h1'>{title}</h1>
      </main>
    </>
  );
}
