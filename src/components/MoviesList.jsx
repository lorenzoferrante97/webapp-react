import { useEffect } from "react";
import { useGlobalContext } from "../contexts/GlobalContext";
import Card from "./Card";

export default function MoviesList() {
  const { movies, fetchMovies } = useGlobalContext();

  useEffect(() => fetchMovies());

  return (
    <>
      <section className='row-grid p-3u gap-y-12u rounded-lg bg-white md:max-w-[80%]'>
        {movies?.map(movie => {
          const { id } = movie;

          return (
            <div
              className='col-span-2 flex flex-col items-center md:col-span-4 xl:col-span-4'
              key={id}>
              {/* movie card */}
              <Card content={movie} />
            </div>
          );
        })}
      </section>
    </>
  );
}
