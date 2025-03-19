import MoviesList from "../components/MoviesList";

export default function Home() {
  return (
    <>
      <main className='container-fluid gap-36u pb-12u z-0 items-center'>
        {/* hero */}
        <section className='perfect-center p-5u flex min-h-[28vh] w-full rounded-xl border-[12px] border-white bg-indigo-50'>
          <h1 className='font-h1'>
            Leggi le <span className='text-indigo-400'>recensioni</span> dei
            film
          </h1>
        </section>
        {/* movies list */}
        <MoviesList />
      </main>
    </>
  );
}
