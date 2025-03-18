import MoviesList from "../components/MoviesList";

export default function Home() {
  return (
    <>
      <main className='container-fluid gap-36u'>
        {/* hero */}
        <section className='perfect-center p-5u flex min-h-[28vh] rounded-xl border-[12px] border-white bg-indigo-50'>
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
