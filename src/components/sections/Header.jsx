import Nav from "../Nav";

export default function Header() {
  return (
    <>
      <header className='container-fluid mb-10u py-3u xl:px-10u sticky top-[40px] z-50 min-h-[72px] max-w-[96%] justify-center rounded-md bg-white/80 shadow shadow-md backdrop-blur-md'>
        <div className='flex h-full flex-row items-center justify-between'>
          {/* logo */}
          <div>
            <span className='font-h5'>BoolMovies</span>
          </div>
          {/* nav */}
          <Nav />
        </div>
      </header>
    </>
  );
}
