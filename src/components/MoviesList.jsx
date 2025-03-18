import { useEffect } from "react";
import { useGlobalContext } from "../contexts/GlobalContext";
import Card from "./Card";

export default function MoviesList() {
  const { movies, fetchMovies } = useGlobalContext();

  useEffect(() => fetchMovies());

  return (
    <>
      <section className='row-grid'>
        {movies.map(movie => {
          const { id } = movie;

          return (
            <div className='col-span-full md:col-span-4' key={id}>
              {/* movie card */}
              <Card content={movie} />
            </div>
          );
        })}
      </section>
    </>
  );
}
